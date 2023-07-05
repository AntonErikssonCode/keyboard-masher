import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./App.css";
import Layout from "./components/Layout";
import upgradesConfig from "./config/upgradesConfig";

function App() {
  // Config Consts
  const expirationTimeInDays = 1;
  const defaultPlayer = {
    currentMashes: 0,
    totalMashes: 0,
    mashPerSec: 0,
    upgradesOwned: [
      { name: "HTML", number: 0, perks: 0, bought: true },
      { name: "CSS", number: 0, perks: 0, bought: true },
      { name: "JavaScript", number: 0, perks: 0, bought: false },
      { name: "Python", number: 0, perks: 0, bought: false },
      { name: "Java", number: 0, perks: 0, bought: false },
    ],
  };
  const [playerInfoLoaded, setPlayerInfoLoaded] = useState(false);
  const [playerInfo, setPlayerInfo] = useState(defaultPlayer);

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

  // INCREMENT totalMashes AND currentMashes
  const handleMashClick = () => {
    setPlayerInfo((prevPlayerInfo) => ({
      ...prevPlayerInfo,
      totalMashes: prevPlayerInfo.totalMashes + 1,
      currentMashes: prevPlayerInfo.currentMashes + 1,
    }));
  };

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

  // RESETS cookie AND playerInfo
  const resetPlayerCookie = () => {
    setPlayerInfo(defaultPlayer);
    Cookies.set("playerInfo", JSON.stringify(defaultPlayer), {
      expires: expirationTimeInDays,
    }); // Set expiration to 1 day
  };

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

  return (
    <div className="App">
      {playerInfoLoaded ? (
        <>
          <Layout
            handleMashClick={handleMashClick}
            playerInfo={playerInfo}
            handleSetPlayerInfo={setPlayerInfo}
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
