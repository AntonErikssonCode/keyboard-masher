import React, { useEffect, useState } from "react";
import "./perk.css";
import upgradesConfig from "../../config/upgradesConfig";

interface Perk {
  playerInfo: any;
  perk: any;
  index: number;
  upgradeName: string;
  handleSetPlayerInfo: (info: any) => void;
  animate: boolean;
}
function Perk({
  handleSetPlayerInfo,
  playerInfo,
  perk,
  index,
  upgradeName,
  animate,
}: Perk) {
  const [isPressed, setIsPressed] = useState(false);
  const [isBought, setIsBought] = useState(isPerkBought());

  function handleMouseDown() {
    setIsPressed(true);
  }

  function handleMouseUp() {
    setIsPressed(false);
  }

  function isPerkBought() {
    /* setIsBought(true) */
    const oldData = playerInfo;
    const slectedUpgrade = playerInfo.upgradesOwned.find(
      (upgrade: { name: string }) => upgrade.name === upgradeName
    );
    const slectedUpgradeName = slectedUpgrade.name;
    const slectedPerk = slectedUpgrade.perksOwned[index].owned;
    return slectedPerk;
  }

  /*   function addPerkBonus(perk: any) {
    const upgradeName = perk.parent;
    perk.bonus.forEach((bonus: any, index: number) => {
      const type = bonus.type;
      switch (type) {
        case "mash":
          const addMash = bonus.mash;
          const updatedPlayerInfo = {
            ...playerInfo,
            mashBonus: playerInfo.mashBonus + addMash,
          };
          handleSetPlayerInfo(updatedPlayerInfo)
          break;
        case "mutiply":
          break;

        case "secret":
          break;

        default:
          break;
      }
    });
  } */
  /* function addPerkBonus(upgradeName: string, perkIndex: number) {
    const selectedUpgrade = upgradesConfig.find(
      (upgrade) => upgrade.name === upgradeName
    );

    if (selectedUpgrade) {
      const selectedPerk = selectedUpgrade.perks[perkIndex];

      if (selectedPerk) {
        selectedPerk.bonus.forEach((bonus) => {
          switch (bonus.type) {
            case "mash":
              const addMash = bonus.mash;
              console.log(addMash);
              console.log(playerInfo);

              handleSetPlayerInfo((prevPlayerInfo: any) => ({
                ...prevPlayerInfo,
                mashBonus:  prevPlayerInfo.mashBonus + addMash,
              }));

              break;
            case "multiply":
              console.log(bonus);
              break;
            case "secret":
              console.log(bonus);
              break;
            default:
              break;
          }
        });
      }
    }
  }


  function handleBuyPerk() {
    setIsBought(true);
    let nameFunction = "";
    let indexFunction = 0;
    let perkFound = false;
    handleSetPlayerInfo((prevPlayerInfo: any) => {
      const updatedUpgradesOwned = prevPlayerInfo.upgradesOwned.map(
        (upgrade: any) => {
          if (upgrade.name === upgradeName) {
            nameFunction = upgradeName;
            const updatedPerksOwned = upgrade.perksOwned.map(
              (perkOwned: any, perkIndex: number) => {
                if (perkIndex === index) {
                  indexFunction=index;
                  perkFound = true;
                  return { owned: true };
                }
                return perkOwned;
              }
            );

            return {
              ...upgrade,
              perksOwned: updatedPerksOwned,
            };
          }

          return upgrade;
        }
      );

      return {
        ...prevPlayerInfo,
        upgradesOwned: updatedUpgradesOwned,
      };
    });
    if(perkFound){
      addPerkBonus(nameFunction, indexFunction);
    }
   
  } */
  function handleBuyPerk() {
    setIsBought(true);
    handleSetPlayerInfo((prevPlayerInfo: any) => {
      const updatedUpgradesOwned = prevPlayerInfo.upgradesOwned.map(
        (upgrade: any) => {
          if (upgrade.name === upgradeName) {
            const updatedPerksOwned = upgrade.perksOwned.map(
              (perkOwned: any, perkIndex: number) => {
                if (perkIndex === index) {
                  return { owned: true };
                }
                return perkOwned;
              }
            );
  
            return {
              ...upgrade,
              perksOwned: updatedPerksOwned,
            };
          }
  
          return upgrade;
        }
      );
  
      return {
        ...prevPlayerInfo,
        upgradesOwned: updatedUpgradesOwned,
      };
    });
  
    addPerkBonus(upgradeName, index);
  }
  
  function addPerkBonus(upgradeName: string, perkIndex: number) {
    const selectedUpgrade = upgradesConfig.find(
      (upgrade) => upgrade.name === upgradeName
    );
  
    if (selectedUpgrade) {
      const selectedPerk = selectedUpgrade.perks[perkIndex];
  
      if (selectedPerk) {
        selectedPerk.bonus.forEach((bonus) => {
          switch (bonus.type) {
            case "mash":
              const addMash = bonus.mash;
              handleSetPlayerInfo((prevPlayerInfo: any) => ({
                ...prevPlayerInfo,
                mashBonus: prevPlayerInfo.mashBonus + addMash,
              }));
              break;
            case "multiply":
              console.log(bonus);
              break;
            case "secret":
              console.log(bonus);
              break;
            default:
              break;
          }
        });
      }
    }
  }
  
  return (
    <div
      className={`perk default-border crazy-box-shadow ${
        animate ? "perks-animate" : ""
      } ${"perk" + index}`}
    >
      <div className="perk-info">
        <h4>{perk.name}</h4>
        {perk.bonus.map((bonus: any, index: number) => {
          return <h5 key={"perk-info" + index}>{bonus.bonusText}</h5>;
        })}
      </div>

      {!isBought ? (
        <button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={handleBuyPerk}
          className={`perk-button crazy-box-shadow default-border ${
            isPressed ? "pressed" : ""
          } ${isBought ? "pressed" : ""} ${
            playerInfo.currentMashes >= perk.cost ? "" : "cant-afford-upgrade"
          }  `}
        >
          Build <br></br>
        </button>
      ) : null}
    </div>
  );
}

export default Perk;
