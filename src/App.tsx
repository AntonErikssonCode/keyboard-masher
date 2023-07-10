import React, { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import "./App.css";
import Layout from "./components/Layout";
import upgradesConfig from "./config/upgradesConfig";
import balanceConfig from "./config/balanceConfig";
import CircleCanvas from "./components/CircleAnimation";
import { getRandomInt, getRandomIntNotFloor } from "./utlity/utilityFunctions";
import achievmentConfig from "./config/achievementConfig";
interface Circle {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  radius: number;
}
function App() {
  // CONFIG CONSTS
  const expirationTimeInDays = 1;
  const defaultPlayer = {
    currentMashes:0,
    totalMashes: 0,
    totalClicks: 0,
    mashPerSec: 0,
    mashBonus: 1,
    achievement: [],
    upgradesOwned: [
      {
        name: "HTML",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
        multiplier: 1,
      },
      {
        name: "CSS",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
        multiplier: 1,
      },
      {
        name: "JavaScript",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
        multiplier: 1,
      },
      {
        name: "Python",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
        multiplier: 1,
      },
      {
        name: "Java",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
        multiplier: 1,
      },
      {
        name: "Ruby",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
        multiplier: 1,
      },
      {
        name: "C++",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
        multiplier: 1,
      },
      {
        name: "Swift",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
        multiplier: 1,
      },
      {
        name: "Go",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
        multiplier: 1,
      },
      {
        name: "Rust",
        number: 0,
        perks: 0,
        bought: false,
        perksOwned: [{ owned: false }, { owned: false }, { owned: false }],
        multiplier: 1,
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
  const updateTime = balanceConfig.timeUpdateModfier;
  useEffect(() => {
    if (playerInfoLoaded) {
      const interval = setInterval(() => {
        setPlayerInfo((prevPlayerInfo) => ({
          ...prevPlayerInfo,
          totalMashes:
            prevPlayerInfo.totalMashes + playerInfo.mashPerSec / updateTime,
          currentMashes:
            prevPlayerInfo.currentMashes + playerInfo.mashPerSec / updateTime,
        }));
      }, 1000 / updateTime);

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
        const upgradeModifer = upgrade.multiplier * upgrade.number;

        mashPerSec += upgradeData.mashPerSec * upgradeModifer;
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
      totalClicks:prevPlayerInfo.totalClicks +1,
    }));
  };
  const handleSetUpgradeOpen = (index: number, open: boolean) => {
    setUpgradeOpen({ index: index, open: open });
  };

  
  useEffect(()=>{
   /*  console.log(playerInfo) */

  },[playerInfo])

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circlesRef = useRef<Circle[]>([]);

  useEffect(() => {
    const vibrantColors = [
      "#03A9F466",
      "#FF525266",
      "#FF408166",
      "#E040FB66",
      "#7C4DFF66",
      "#536DFE66",
      "#448AFF66",
      "#40C4FF66",
      "#18FFFF66",
      "#64FFDA66",
      "#69F0AE66",
      "#B2FF5966",
      "#EEFF4166",
      "#FFFF0066",
      "#FFD74066",
      "#FFAB4066",
      "#FF6E4066",
    ];
    const canvas = canvasRef.current;
    const context = canvas!.getContext("2d")!;

    let animationFrameId: number;
    
    const amountOfOwnedUpgrades = playerInfo.upgradesOwned.length;
    const colorIndex = getRandomInt(0, amountOfOwnedUpgrades)

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (canvas) context.clearRect(0, 0, canvas.width, canvas.height);

      circlesRef.current.forEach((circle) => {
        circle.x += circle.speedX;
        circle.y += circle.speedY;
        if (canvas)
          if (
            circle.x + circle.radius < 0 ||
            circle.x - circle.radius > canvas.width ||
            circle.y + circle.radius < 0 ||
            circle.y - circle.radius > canvas.height
          ) {
            // Remove circle if it goes off-screen
            circlesRef.current = circlesRef.current.filter((c) => c !== circle);
          } else {
            context.beginPath();
            context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
            context.fillStyle = "#18FFFF66"//vibrantColors[colorIndex]// "#03A9F466";
            context.fill();
          }
      });
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const addCirclesToCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas!.getContext("2d")!;

    const numCircles = getRandomInt(5, 15); // Random number between 10 and 20

    for (let i = 0; i < numCircles; i++) {
      const circle: Circle = {
        x: canvas!.width / 2,
        y: canvas!.height / 2,
        speedX: getRandomSpeed(),
        speedY: getRandomSpeed(),
        radius: getRandomRadius(),
      };

      circlesRef.current.push(circle);

      context.beginPath();
      context.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
      context.fillStyle = "#fff";
      context.fill();
    }
  };

  const getRandomSpeed = () => {
    let randomNum = getRandomIntNotFloor(-1, 1) * 3;
   
    return randomNum;

  };

  const getRandomRadius = () => {
    return getRandomIntNotFloor(5, 30);
  };

  useEffect(() => {
    addCirclesToCanvas();
  }, [playerInfo.upgradesOwned]);



  // Achievments
  useEffect(() => {
    if (playerInfoLoaded) {
      checkAchievements();
    }
  }, [playerInfo.totalMashes, playerInfo.totalClicks]);
  
  function checkAchievements() {
    const { mash, total } = achievmentConfig;
  
    // Check mash achievements
    mash.forEach((achievement:any) => {
      if (playerInfo.totalClicks >= achievement.amount && !hasAchievement(achievement)) {
        addAchievement(achievement);
      }
    });
  
    // Check total achievements
    total.forEach((achievement:any) => {
      if (playerInfo.totalMashes >= achievement.amount && !hasAchievement(achievement)) {
        addAchievement(achievement);
      }
    });
  }
  function hasAchievement(achievement: any) {
    return playerInfo.achievement.some((a: any) => a.name === achievement.name);
  }
  
  function addAchievement(achievement: any) {
    setPlayerInfo((prevPlayerInfo: any) => ({
      ...prevPlayerInfo,
      achievement: [...prevPlayerInfo.achievement, achievement],
    }));
  }
  
  
  // RETURN APP
  return (
    <div className="App">
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        className="CanvasBackground"
      />
      <div className="ContentWrapper">
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
    </div>
  );
}

export default App;
