import React, { useEffect, useState, useRef } from "react";
import "./upgrade.css";
import balanceConfig from "../../config/balanceConfig";
import Perk from "./Perk";
import {shortenNumber} from "../../utlity/utilityFunctions";
interface UpgradeProps {
  upgrade: any;
  playerInfo: any;
  handleSetPlayerInfo: (info: any) => void;
  upgradeOpen: any;
  handleSetUpgradeOpen: (index: number, open: boolean) => void;
  index: number;
}
function Upgrade({ handleSetPlayerInfo, upgrade, playerInfo, index}: UpgradeProps) {
  const { name, description, perks, difficulty, mashPerSec } = upgrade;
  const [isPressed, setIsPressed] = useState(false);
  const [mps, setMps] = useState<any>(0);
  const [newCost, setNewCost] = useState(upgrade.cost); //getCost(playerInfo, upgrade)
  const [bought, setBought] = useState(getBought(playerInfo, upgrade));
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  function handleMouseDown() {
    setIsPressed(true);
  }

  function handleMouseUp() {
    setIsPressed(false);
  }

  const [numberOfPerks, setGetNumberOfOwnedPerks] = useState(
    getNumberOfOwnedPerks(playerInfo, upgrade)
  );

  useEffect(() => {
    setGetNumberOfOwnedPerks(getNumberOfOwnedPerks(playerInfo, upgrade));

    setBought(getBought(playerInfo, upgrade));
    setMps(shortenNumber(getMPS(mashPerSec, bought, playerInfo, upgrade), false));
    setNewCost(getCost(playerInfo, upgrade));
  }, [playerInfo]);

  

  function getMPS(mashPerSec: number, bought: number, playerInfo:any, upgrade:any) {
    const multiplier = getMultiplier(playerInfo, upgrade);
    return mashPerSec * bought * multiplier;
  }

  function getNumberOfOwnedPerks(playerInfo: any, upgrade: any) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    let num = 0;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        num = element.perks;
      }
    });
    return num;
  }

  function getMultiplier(playerInfo: any, upgrade: any) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    let multiplier = 0;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        multiplier = element.multiplier;
      
      }
    });
    return multiplier;
  }
  

  function isPerkOwned(playerInfo: any, upgrade: any, perkIndex: number) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    let perkOwned = false;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        perkOwned = element.perksOwned[perkIndex].owned;
      }
    });
    return perkOwned;
  }


  function getBought(playerInfo: any, upgrade: any) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    let bought = 0;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        bought = element.number;
      }
    });
    return bought;
  }

  function getCost(playerInfo: any, upgrade: any) {
    const upgradeName = upgrade.name;
    const upgradesOwnedArray = playerInfo.upgradesOwned;
    const numberOfOwned = playerInfo.upgradesOwned;
    let numberOfItems = 0;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        numberOfItems = element.number + 1;
      }
    });

    const newPrice = Math.ceil(upgrade.cost * (balanceConfig.upgradesMultiplier ** numberOfItems ));
    if(numberOfItems === 0)return upgrade.cost;
    
    return newPrice;
  }

  function handleBuy() {
    if (playerInfo.currentMashes >= newCost) {
      const updatedPlayerInfo = {
        ...playerInfo,
        currentMashes: Math.ceil(playerInfo.currentMashes - newCost),

        upgradesOwned: playerInfo.upgradesOwned.map((upgradeOwned: any) => {
          if (upgradeOwned.name === upgrade.name) {
            return {
              ...upgradeOwned,
              number: upgradeOwned.number + 1,
            };
          }
          return upgradeOwned;
        }),
      };
      getCost(playerInfo, upgrade);
      handleSetPlayerInfo(updatedPlayerInfo);
    }
  }
  const colorVariations = [
    '#8BC34A',
    '#8BC34A',
    '#FF4081',
    '#FF4081',
    '#03A9F4',
    '#03A9F4',
    '#8BC34A',
    '#FF4081',
    '#03A9F4',
    '#8BC34A',
  ];
  

  return (
    <div className="upgradesSection">
      <div
       title={description} 
       data-title={description} 
        className="upgrades-container crazy-box-shadow default-border"
        onClick={handleOpen}
      >
        <div className="upgrades-container-1">
          <div className="upgrades-container-2">
            {bought ? (
              <>
                <h3 className="upgrade-title">{name}</h3>
                <h4> {bought + " Days Practice"}</h4>
              </>
            ) : (
              <h3 className="upgrade-title">{name + "  "}</h3>
            )}

            {bought ? (
              <h4 className="upgrades-mashesPerSec">
                {"+ " + mps + " Mashes/s"}
              </h4>
            ) : null}
          </div>
          <div className="upgrades-container-3">
            {perks.map((perk: any, index: number) => {
              /*  let active = false;
              if (index + 1 <= numberOfPerks) {
                active = true;
              } */
              return (
                <div
                  key={name + index}
                  className={`upgrade-bought ${
                    isPerkOwned(playerInfo, upgrade, index)
                      ? "upgrade-bought-true"
                      : ""
                  } `}
                ></div>
              );
            })}
          </div>
        </div>
        <button
        
          className={`button-code crazy-box-shadow default-border ${
            playerInfo.currentMashes >= newCost
              ? "button-code-glow"
              : "cant-afford-upgrade"
          }  ${isPressed ? "pressed" : ""}  `}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={(event) => {
            event.stopPropagation(); // Prevent event propagation
            handleBuy();
          }}
        >
          <h3 className="">{"Code in " + name}</h3>
          <h4 className="">{"Cost " + shortenNumber(newCost, false) + " Mashes"}</h4>
          <h4 className="">{"+ " + shortenNumber(mashPerSec, false) + " Mashes/s"}</h4>
        </button>
      </div>
      <div className="perks-container">
        {perks.map((perk: any, index: number) => {
          return (
            <Perk
              handleSetPlayerInfo={handleSetPlayerInfo}
              key={perk.name + index}
              perk={perk}
              playerInfo={playerInfo}
              index={index}
              upgradeName={name}
              animate={open}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Upgrade;
