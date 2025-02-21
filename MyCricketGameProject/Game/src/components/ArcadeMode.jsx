"use client"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ArcadeMode.css";

const countries = [
  { name: "India", color: "blue", teamName: "India" },
  { name: "Pakistan", color: "green", teamName: "Pakistan" },
  { name: "Australia", color: "yellow", teamName: "Australia" },
  { name: "England", color: "skyblue", teamName: "England" },
  { name: "New Zealand", color: "black", teamName: "New Zealand" },
  { name: "West Indies", color: "maroon", teamName: "West Indies" },
  { name: "South Africa", color: "darkgreen", teamName: "South Africa" },
  { name: "Sri Lanka", color: "royalblue", teamName: "Sri Lanka" },
];

const scoreOptions = [
  { value: 3, color: "orange" },
  { value: 1, color: "yellow" },
  { value: 4, color: "blue" },
  { value: 6, color: "emerald" },
  { value: "W", color: "red" },
  { value: ".", color: "gray" },
  { value: 2, color: "pink" },
];

const speeds = ["FAST", "MEDIUM", "SLOW"];

export default function ArcadeGame() {
  const [myTeam, setMyTeam] = useState(null);
  const [opponentTeam, setOpponentTeam] = useState(null);
  const [gameState, setGameState] = useState({
    targetScore: 0,
    currentScore: 0,
    ballsRemaining: 0,
    matchNumber: 1,
    isGameOver: false,
    gameResult: "",
    ballSpeed: "MEDIUM",
    isAnimating: false,
  });

  useEffect(() => {
    const storedCountry = JSON.parse(localStorage.getItem("selectedCountry"));
    if (storedCountry) {
      setMyTeam(storedCountry);
      const availableOpponents = countries.filter(c => c.name !== storedCountry.name);
      setOpponentTeam(availableOpponents[Math.floor(Math.random() * availableOpponents.length)]);
    }
    initializeGame();
  }, []);

  const initializeGame = () => {
    const ballsRemaining = Math.floor(Math.random() * 9) + 1;
    const targetScore = Math.floor(Math.random() * (ballsRemaining * 6 - 5)) + 5;

    setGameState(prev => ({
      ...prev,
      targetScore,
      ballsRemaining,
      currentScore: 0,
      isGameOver: false,
      gameResult: "",
      ballSpeed: speeds[Math.floor(Math.random() * speeds.length)],
      isAnimating: false,
    }));
  };

  const handleScoreSelection = (score) => {
    if (gameState.isGameOver || gameState.isAnimating) return;

    setGameState(prev => ({ ...prev, isAnimating: true }));

    setTimeout(() => {
      if (score === "W") {
        setGameState(prev => ({
          ...prev,
          isGameOver: true,
          gameResult: "OUT! Game Over",
          isAnimating: false,
        }));
        return;
      }

      setGameState(prev => {
        const newScore = prev.currentScore + (score === "." ? 0 : Number(score));
        const ballsLeft = prev.ballsRemaining - 1;

        let result = "";
        let gameOver = false;

        if (newScore >= prev.targetScore) {
          result = "Victory! You won!!!";
          gameOver = true;
        } else if (ballsLeft === 0) {
          result = "Game Over! Target not reached";
          gameOver = true;
        }

        return {
          ...prev,
          currentScore: newScore,
          ballsRemaining: ballsLeft,
          isGameOver: gameOver,
          gameResult: result,
          isAnimating: false,
          ballSpeed: speeds[Math.floor(Math.random() * speeds.length)],
        };
      });
    }, 1000);
  };

  return (
    <div className="arcade-container">
      {/* Matchup Heading */}
      <h1 className="match-heading">
        {myTeam && opponentTeam ? `${myTeam.teamName} vs ${opponentTeam.teamName}` : "Loading Match..."}
      </h1>

      {/* Header */}
      <div className="header">
        <Link to="/">
          <button className="home-button">🏠 Home</button>
        </Link>
        <div className="match-number">MATCH #{gameState.matchNumber}</div>
        <div className="score-display">
          TEAM: {myTeam ? myTeam.teamName : "Unknown"} | SCORE: {gameState.currentScore}
        </div>
      </div>

      {/* Cricket Field */}
      <div className="cricket-field">
        <div className="pitch">
          <div className="batsman" style={{ backgroundColor: myTeam ? myTeam.color : "#000" }} />
          {gameState.isAnimating && <div className="ball-container"><div className="ball" /></div>}
          <div className="bowler" style={{ backgroundColor: opponentTeam ? opponentTeam.color : "#fff" }} />

          {/* Display Game Message Inside Pitch */}
          {gameState.isGameOver && <div className="game-message">{gameState.gameResult}</div>}
        </div>
      </div>

      {/* Game Info */}
      <div className="game-info">
        <div className="target-info">NEED: {Math.max(0, gameState.targetScore - gameState.currentScore)}</div>
        <div className="balls-info">FROM: {gameState.ballsRemaining}</div>
      </div>

      {/* Speed Indicator */}
      <div className="speed-indicator">{gameState.ballSpeed}</div>

      {/* Score Options */}
      <div className="score-options">
        {scoreOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => handleScoreSelection(option.value)}
            disabled={gameState.isGameOver || gameState.isAnimating}
            className={`score-button ${option.color}`}
          >
            {option.value}
          </button>
        ))}
      </div>

      {/* Play Again Button inside Pitch */}
      {gameState.isGameOver && (
        <div className="play-again-container">
          <button onClick={initializeGame} className="play-again-button">Play Again</button>
        </div>
      )}
    </div>
  );
}
