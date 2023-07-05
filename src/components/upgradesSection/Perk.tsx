import React, { useEffect, useState } from "react";
import "./perk.css";

interface Perk {
  playerInfo: any;
  perk: any;
  index: number;
  upgradeName: string;
  handleSetPlayerInfo: (info: any) => void;
}
function Perk({
  handleSetPlayerInfo,
  playerInfo,
  perk,
  index,
  upgradeName,
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
  useEffect(() => {
    setIsBought(isPerkBought());
  }, [playerInfo]);

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
  }

  return (
    <div className="perk default-border crazy-box-shadow">
      <div className="perk-info">
        <h4>{perk.name}</h4>
        <h5>{perk.bonus}</h5>
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
