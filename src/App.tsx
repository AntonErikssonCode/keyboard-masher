import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  // Config Consts
  const expirationTimeInDays = 1;
  const defaultPlayer = {
    currentMashes: 1000000000,
    totalMashes: 1000000000,
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
    } else {
      // Cookie doesn't exist, so set it with the initial playerInfo object
      const jsonString = JSON.stringify(playerInfo);
      Cookies.set("playerInfo", jsonString, { expires: expirationTimeInDays }); // Set expiration to 1 day
      setPlayerInfoLoaded(true);
    }
  }, []);

  // INCREMENT TOTAL MASHES AND UPDATE COOKIE
  const handleMashClick = () => {
    const updatedPlayerInfo = {
      ...playerInfo,
      totalMashes: playerInfo.totalMashes + 1,
      currentMashes: playerInfo.currentMashes + 1,
    };
    setPlayerInfo(updatedPlayerInfo);
  };

  useEffect(() => {
    if (playerInfoLoaded) {
      const jsonString = JSON.stringify(playerInfo);
      Cookies.set("playerInfo", jsonString, { expires: expirationTimeInDays });
    }
  }, [playerInfoLoaded, playerInfo]);

  // RESETS COOKIE AND PLAYER STATE
  const resetPlayerCookie = () => {
    setPlayerInfo(defaultPlayer);
    const jsonString = JSON.stringify(defaultPlayer);
    Cookies.set("playerInfo", jsonString, { expires: expirationTimeInDays }); // Set expiration to 1 day
  };

  function handleSetPlayerInfo(info:any){
    setPlayerInfo(info)
  }

  return (
    <div className="App">
      {playerInfoLoaded ? (
        <>
          <Layout handleMashClick={handleMashClick} playerInfo={playerInfo} handleSetPlayerInfo={handleSetPlayerInfo}/>
          <button onClick={resetPlayerCookie}>Reset Player</button>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;
