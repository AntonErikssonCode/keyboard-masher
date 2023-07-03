import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "./App.css";
import Layout from "./components/Layout";

function App() {
  // Config Consts
  const expirationTimeInDays = 1;
  const defaultPlayer = {
    currentMashes: 0,
    totalMashes: 0,
    mashPerSec: 0,
    upgradesOwned: [
      { name: "HTML", number: 14, upgrades: 2 },
      { name: "CSS", number: 2, upgrades: 1 },
    ],
  };
  // DEFAULT PLAYER INFO FOR NEW GAME
  const [playerInfo, setPlayerInfo] = useState(defaultPlayer);

  // LOAD INITIAL GAME DATA
  useEffect(() => {
    const cookieValue = Cookies.get("playerInfo");
    if (cookieValue) {
      // Cookie already exists, so parse the JSON string back into an object
      const savedPlayerInfo = JSON.parse(cookieValue);
      setPlayerInfo(savedPlayerInfo);
    } else {
      // Cookie doesn't exist, so set it with the initial playerInfo object
      const jsonString = JSON.stringify(playerInfo);
      Cookies.set("playerInfo", jsonString, { expires: expirationTimeInDays }); // Set expiration to 1 day
    }
  }, []);

  // INCREMENT TOTAL MASHES AND UPDATE COOKIE
  const handleMashClick = () => {
    const updatedPlayerInfo = {
      ...playerInfo,
      totalMashes: playerInfo.totalMashes + 1,
      currentMashes: playerInfo.totalMashes + 1,
    };
    setPlayerInfo(updatedPlayerInfo);
    const jsonString = JSON.stringify(updatedPlayerInfo);
    Cookies.set("playerInfo", jsonString, { expires: expirationTimeInDays }); // Set expiration to 1 day
  };

  // RESETS COOKIE AND PLAYER STATE
  const resetPlayerCookie = () => {
 
    setPlayerInfo(defaultPlayer);
    const jsonString = JSON.stringify(defaultPlayer);
    Cookies.set("playerInfo", jsonString, { expires: expirationTimeInDays }); // Set expiration to 1 day
  };

  return (
    <div className="App">
      <Layout handleMashClick={handleMashClick} playerInfo={playerInfo}/>
  {/* 
      <button onClick={resetPlayerCookie}>Reset Player</button> */}
    </div>
  );
}

export default App;
