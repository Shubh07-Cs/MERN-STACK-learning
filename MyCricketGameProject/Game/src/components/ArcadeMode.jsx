"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import "./ArcadeMode.css"

export default function ArcadeGame() {
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
    initializeGame()
  }, [])

  const initializeGame = () => {
    const ballsRemaining = Math.floor(Math.random() * 9) + 1; // 1 to 9 balls
    const maxPossibleScore = ballsRemaining * 6; // Maximum possible score
    const targetScore = Math.floor(Math.random() * (maxPossibleScore - 5)) + 5; // Ensure it's < maxPossibleScore
  
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
      {/* Header */}
      <div className="header">
        <Link href="/">
          <button className="home-button">Home</button>
        </Link>
        <div className="match-number">MATCH #{gameState.matchNumber}</div>
        <div className="score-display">SCORE: {gameState.currentScore}</div>
      </div>

      {/* Cricket Field */}
      <div className="cricket-field">
        <div className="pitch">
          {/* Batsman */}
          <div className="batsman" />

          {/* Ball Animation */}
          {gameState.isAnimating && (
            <div className="ball-container">
              <div className="ball" />
            </div>
          )}

          {/* Bowler */}
          <div className="bowler" />
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






// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./ArcadeMode.css";

// export default function ArcadeGame() {
//   const [country, setCountry] = useState("Unknown");

//   useEffect(() => {
//     const storedCountry = localStorage.getItem("selectedCountry");
//     if (storedCountry) setCountry(storedCountry);
//   }, []);

//   const [gameState, setGameState] = useState({
//     targetScore: 0,
//     currentScore: 0,
//     ballsRemaining: 0,
//     matchNumber: 1,
//     isGameOver: false,
//     gameResult: "",
//     ballSpeed: "MEDIUM",
//     selectedScore: null,
//     isAnimating: false,
//   });

//   const scoreOptions = [
//     { value: 3, color: "bg-orange-500" },
//     { value: 1, color: "bg-yellow-500" },
//     { value: 4, color: "bg-blue-500" },
//     { value: 6, color: "bg-emerald-500" },
//     { value: "W", color: "bg-red-500" },
//     { value: ".", color: "bg-gray-500" },
//     { value: 2, color: "bg-pink-500" },
//   ];

//   const speeds = ["FAST", "MEDIUM", "SLOW"];

//   useEffect(() => {
//     initializeGame();
//   }, []);

//   const initializeGame = () => {
//     setGameState({
//       targetScore: Math.floor(Math.random() * 21) + 10, // 10-30
//       currentScore: 0,
//       ballsRemaining: Math.floor(Math.random() * 9) + 1, // 1-9
//       matchNumber: gameState.matchNumber,
//       isGameOver: false,
//       gameResult: "",
//       ballSpeed: speeds[Math.floor(Math.random() * speeds.length)],
//       selectedScore: null,
//       isAnimating: false,
//     });
//   };

//   const handleScoreSelection = (score) => {
//     if (gameState.isGameOver || gameState.isAnimating) return;

//     setGameState((prev) => ({ ...prev, isAnimating: true }));

//     setTimeout(() => {
//       if (score === "W") {
//         setGameState((prev) => ({
//           ...prev,
//           isGameOver: true,
//           gameResult: "OUT! Game Over",
//           isAnimating: false,
//         }));
//         return;
//       }

//       setGameState((prev) => {
//         const newScore = prev.currentScore + (score === "." ? 0 : Number(score));
//         const ballsLeft = prev.ballsRemaining - 1;
//         let isGameOver = false;
//         let gameResult = "";

//         if (newScore >= prev.targetScore) {
//           isGameOver = true;
//           gameResult = "Victory! Target Achieved!";
//         } else if (ballsLeft === 0) {
//           isGameOver = true;
//           gameResult = "Game Over! Target not reached";
//         }

//         return {
//           ...prev,
//           currentScore: newScore,
//           ballsRemaining: ballsLeft,
//           isGameOver,
//           gameResult,
//           isAnimating: false,
//           ballSpeed: speeds[Math.floor(Math.random() * speeds.length)],
//         };
//       });
//     }, 1000);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-green-500 to-green-600 flex flex-col items-center p-4">
//       {/* Header */}
//       <div className="w-full max-w-4xl flex justify-between items-center mb-8">
//         <Link to="/">
//           <button className="p-2 bg-gray-300 rounded">🏠 Home</button>
//         </Link>
//         <div className="text-2xl font-bold text-white">MATCH #{gameState.matchNumber}</div>
//         <div className="text-2xl font-bold text-white">TEAM: {country}</div> {/* Show selected country */}
//       </div>

//       {/* Cricket Field */}
//       <div className="relative w-full max-w-md h-[400px] bg-[#d4b996] mb-8 flex flex-col justify-between items-center p-4">
//         {/* Batsman */}
//         <div className="w-8 h-12 bg-blue-500 rounded-md" />

//         {/* Ball Animation */}
//         {gameState.isAnimating && (
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce" />
//           </div>
//         )}

//         {/* Bowler */}
//         <div className="w-8 h-12 bg-white rounded-md" />
//       </div>

//       {/* Game Info */}
//       <div className="flex justify-between w-full max-w-md mb-8">
//         <div className="text-xl font-bold text-white">
//           NEED: {Math.max(0, gameState.targetScore - gameState.currentScore)}
//         </div>
//         <div className="text-xl font-bold text-white">FROM: {gameState.ballsRemaining}</div>
//       </div>

//       {/* Speed Indicator */}
//       <div className="bg-orange-500 text-white px-6 py-2 rounded-t-xl mb-4">{gameState.ballSpeed}</div>

//       {/* Score Options */}
//       <div className="grid grid-cols-7 gap-1 w-full max-w-md">
//         {scoreOptions.map((option, index) => (
//           <button
//             key={index}
//             onClick={() => handleScoreSelection(option.value)}
//             disabled={gameState.isGameOver || gameState.isAnimating}
//             className={`${option.color} h-24 text-white text-2xl font-bold rounded-md transition-transform hover:scale-105 disabled:opacity-50`}
//           >
//             {option.value}
//           </button>
//         ))}
//       </div>

//       {/* Game Over Modal */}
//       {gameState.isGameOver && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
//           <div className="bg-white p-8 rounded-xl text-center">
//             <h2 className="text-2xl font-bold mb-4">{gameState.gameResult}</h2>
//             <button onClick={initializeGame} className="p-2 bg-gray-300 rounded flex items-center">
//               🔄 Play Again
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
