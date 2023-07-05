import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./App.css";
import Layout from "./components/Layout";
import upgradesConfig from "./config/upgradesConfig";

function App() {
  // CONFIG CONSTS
  const expirationTimeInDays = 1;
  const defaultPlayer = {
    currentMashes: 10000,
    totalMashes: 0,
    mashPerSec: 0,
    mashBonus: 1,
    upgradesOwned: [
      {
        name: "HTML",
        number: 0,
        perks: 0,
        bought: true,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
      },
      {
        name: "CSS",
        number: 0,
        perks: 0,
        bought: true,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
      },
      {
        name: "JavaScript",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
      },
      {
        name: "Python",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
      },
      {
        name: "Java",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
      },
    ],
  };

  // STATES
  const [playerInfoLoaded, setPlayerInfoLoaded] = useState(false);
  const [playerInfo, setPlayerInfo] = useState(defaultPlayer);
  const [upgradeOpen, setUpgradeOpen] = useState({ index: 0, open: false });

  // USEEFFECT
  // LOAD INITIAL GAME DATA
  useEffect(() => {
    const cookieValue = Cookies.get("playerInfo");
    if (cookieValue) {
      // Cookie already exists, so parse the JSON string back into an object
      const savedPlayerInfo = JSON.parse(cookieValue);
      setPlayerInfo(savedPlayerInfo);
      setPlayerInfoLoaded(true);
      console.dir("Cookie Existed");
    } else {
      // Cookie doesn't exist, so set it with the initial playerInfo object
      Cookies.set("playerInfo", JSON.stringify(defaultPlayer), {
        expires: expirationTimeInDays,
      });
      setPlayerInfoLoaded(true);
      console.dir("No Cookie");
    }
  }, []);

  // SAVE playerInfo cookie TO COOKIE WHEN IT CHANGES
  useEffect(() => {
    if (playerInfoLoaded) {
      const jsonString = JSON.stringify(playerInfo);
      Cookies.set("playerInfo", jsonString, { expires: expirationTimeInDays });
      console.dir("Set Cookie");
    }
  }, [playerInfoLoaded, playerInfo]);

  // UPDATE mashPerSec WHEN  upgradesOwned CHANGES
  useEffect(() => {
    if (playerInfoLoaded) {
      const updatedPlayerInfo = {
        ...playerInfo,
        mashPerSec: calculateMashPerSec(),
      };
      setPlayerInfo(updatedPlayerInfo);
    }
  }, [playerInfo.upgradesOwned]);

  // INCREMENT totalMashes AND currentMashes EVERY SECOND BASED ON mashPerSec
  useEffect(() => {
    if (playerInfoLoaded) {
      const interval = setInterval(() => {
        setPlayerInfo((prevPlayerInfo) => ({
          ...prevPlayerInfo,
          totalMashes: prevPlayerInfo.totalMashes + playerInfo.mashPerSec,
          currentMashes: prevPlayerInfo.currentMashes + playerInfo.mashPerSec,
        }));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [playerInfo.mashPerSec]);

  // FUNCTIONS
  // RESETS cookie AND playerInfo
  const resetPlayerCookie = () => {
    setPlayerInfo(defaultPlayer);
    Cookies.set("playerInfo", JSON.stringify(defaultPlayer), {
      expires: expirationTimeInDays,
    }); // Set expiration to 1 day
  };

  // RETURNS mashPerSecond BASED ON upgradesOwned
  function calculateMashPerSec() {
    const { upgradesOwned } = playerInfo;
    let mashPerSec = 0;

    upgradesOwned.forEach((upgrade) => {
      const upgradeData = upgradesConfig.find(
        (config) => config.name === upgrade.name
      );
      if (upgradeData) {
        mashPerSec += upgradeData.mashPerSec * upgrade.number;
      }
    });
    return mashPerSec;
  }

  // HANDLES
  // INCREMENT totalMashes AND currentMashes
  const handleMashClick = () => {
    setPlayerInfo((prevPlayerInfo) => ({
      ...prevPlayerInfo,
      totalMashes: prevPlayerInfo.totalMashes + playerInfo.mashBonus,
      currentMashes: prevPlayerInfo.currentMashes + playerInfo.mashBonus,
    }));
  };
  const handleSetUpgradeOpen = (index: number, open: boolean) => {
    setUpgradeOpen({ index: index, open: open });
  };
  // RETURN APP
  return (
    <div className="App">
      {playerInfoLoaded ? (
        <>
          <Layout
            handleMashClick={handleMashClick}
            playerInfo={playerInfo}
            handleSetPlayerInfo={setPlayerInfo}
            upgradeOpen={upgradeOpen}
            handleSetUpgradeOpen={handleSetUpgradeOpen}
          />
          <button onClick={resetPlayerCookie}>Reset Player</button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
