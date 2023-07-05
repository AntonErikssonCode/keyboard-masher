import React, { useEffect, useState } from "react";
import "./upgrade.css";
import balanceConfig from "../../config/balanceConfig";

interface UpgradeProps {
  upgrade: any;
  playerInfo: any;
  handleSetPlayerInfo: (info: any) => void;
}
function Upgrade({ handleSetPlayerInfo, upgrade, playerInfo }: UpgradeProps) {
  const { name, description, perks, difficulty } = upgrade;
  const [isPressed, setIsPressed] = useState(false);
  const [newCost, setNewCost] = useState(getCost(playerInfo, upgrade));
  const [bought, setBought] = useState(getBought(playerInfo, upgrade));
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
    setNewCost(getCost(playerInfo, upgrade));
    setBought(getBought(playerInfo, upgrade));
  }, [playerInfo]);

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
    let mutiplier = 1;
    upgradesOwnedArray.forEach((element: any) => {
      if (element.name === upgradeName) {
        mutiplier = element.number + 1;
      }
    });

    const newPrice = Math.ceil(
      mutiplier === 0 ? upgrade.cost : upgrade.cost * Math.pow(mutiplier, balanceConfig.upgradesMutiplier)
    );
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

      handleSetPlayerInfo(updatedPlayerInfo);
    }
  }
  return (
    <div className="upgrades-container crazy-box-shadow default-border">
      <div className="upgrades-container-1">
        <div className="upgrades-container-2">
          {bought ? <h3>{name + " (" + bought + "Days)"}</h3> : <h3>{name}</h3>}

          <h4>{description}</h4>
        </div>
        <div className="upgrades-container-3">
          {perks.map((perk: any, index: number) => {
            let active = false;
            if (index + 1 <= numberOfPerks) {
              active = true;
            }
            return (
              <div
                key={name + index}
                className={`upgrade-bought ${
                  active ? "upgrade-bought-true" : ""
                } `}
              ></div>
            );
          })}
        </div>
      </div>
      <button
        className={`button-code crazy-box-shadow default-border ${
          isPressed ? "pressed" : ""
        }  `}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={handleBuy}
      >
        <h3 className="text-color-black">{"Code in " + name}</h3>
        <h4 className="text-color-black">{"Cost " + newCost + " Mashes"}</h4>
      </button>
    </div>
  );
}

export default Upgrade;
