"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "./ArcadeMode.css"

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
    selectedScore: null,
    isAnimating: false,
  })

  const scoreOptions = [
    { value: 3, color: "orange" },
    { value: 1, color: "yellow" },
    { value: 4, color: "blue" },
    { value: 6, color: "emerald" },
    { value: "W", color: "red" },
    { value: ".", color: "gray" },
    { value: 2, color: "pink" },
  ]

  const speeds = ["FAST", "MEDIUM", "SLOW"]

  useEffect(() => {
    // Load selected country from localStorage
    const storedCountry = JSON.parse(localStorage.getItem("selectedCountry"));
    if (storedCountry) {
      setMyTeam(storedCountry);
      // Pick a random opponent excluding my team
      const availableOpponents = countries.filter(c => c.name !== storedCountry.name);
      const randomOpponent = availableOpponents[Math.floor(Math.random() * availableOpponents.length)];
      setOpponentTeam(randomOpponent);
    }
    initializeGame();
  }, [])

  const initializeGame = () => {
    const ballsRemaining = Math.floor(Math.random() * 9) + 1;
    const maxPossibleScore = ballsRemaining * 6;
    const targetScore = Math.floor(Math.random() * (maxPossibleScore - 5)) + 5;
  
    setGameState({
      ballsRemaining,
      targetScore,
      currentScore: 0,
      matchNumber: gameState.matchNumber,
      isGameOver: false,
      gameResult: "",
      ballSpeed: speeds[Math.floor(Math.random() * speeds.length)],
      selectedScore: null,
      isAnimating: false,
    });
  };

  const handleScoreSelection = (score) => {
    if (gameState.isGameOver || gameState.isAnimating) return

    setGameState((prev) => ({
      ...prev,
      isAnimating: true,
    }))

    setTimeout(() => {
      if (score === "W") {
        setGameState((prev) => ({
          ...prev,
          isGameOver: true,
          gameResult: "OUT! Game Over",
          isAnimating: false,
        }))
        return
      }

      const newScore = (prev) => ({
        ...prev,
        currentScore: prev.currentScore + (score === "." ? 0 : Number(score)),
        ballsRemaining: prev.ballsRemaining - 1,
        isAnimating: false,
        ballSpeed: speeds[Math.floor(Math.random() * speeds.length)],
      })

      setGameState((prev) => {
        const updated = newScore(prev)
        if (updated.currentScore >= updated.targetScore) {
          return { ...updated, isGameOver: true, gameResult: "Victory! Target Achieved!" }
        }
        if (updated.ballsRemaining === 0) {
          return { ...updated, isGameOver: true, gameResult: "Game Over! Target not reached" }
        }
        return updated
      })
    }, 1000)
  }

  return (
    <div className="arcade-container">
      {/* Matchup Heading */}
      <h1 style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", color: "#fff", marginBottom: "1rem" }}>
        {myTeam && opponentTeam ? `${myTeam.teamName} vs ${opponentTeam.teamName}` : "Loading Match..."}
      </h1>

      {/* Header */}
      <div className="header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "960px", marginBottom: "2rem" }}>
        <Link to="/">
          <button className="home-button" style={{ padding: "0.5rem", backgroundColor: "#ccc", borderRadius: "4px" }}>🏠 Home</button>
        </Link>
        <div className="match-number" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>MATCH #{gameState.matchNumber}</div>
        <div className="score-display" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#fff" }}>
          TEAM: {myTeam ? myTeam.teamName : "Unknown"} | SCORE: {gameState.currentScore}
        </div>
      </div>

      {/* Cricket Field */}
      <div className="cricket-field">
        <div className="pitch">
          {/* Batsman with my team's color */}
          <div className="batsman" style={{ backgroundColor: myTeam ? myTeam.color : "#000" }} />

          {gameState.isAnimating && (
            <div className="ball-container">
              <div className="ball" />
            </div>
          )}

          {/* Bowler with opponent team's color */}
          <div className="bowler" style={{ backgroundColor: opponentTeam ? opponentTeam.color : "#fff" }} />
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
            style={{ backgroundColor: option.color }}
          >
            {option.value}
          </button>
        ))}
      </div>

      {/* Game Over Modal */}
      {gameState.isGameOver && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">{gameState.gameResult}</h2>
            <button onClick={initializeGame} className="play-again-button">Play Again</button>
          </div>
        </div>
      )}
    </div>
  )
}