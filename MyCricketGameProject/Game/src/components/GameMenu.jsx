import React from "react";
import { Settings, HelpCircle } from "lucide-react";
import "./GameMenu.css";
import "./TwoPlayerMode";
import "./ArcadeMode";
import "./ChooseCountry";
import { Link } from "react-router-dom";


export default function GameMenu() {
    return (
        <div className="game-menu">
            
            {/* Logo */}
            <div className="logo-container">
                <img src="/images/628.jpg" alt="Super Over Logo" className="logo-image" />
                Super Over
            </div>


            {/* Game Modes Grid */}
            <div class="game-categories-container">


                <Link to="/country" className="game-category-link">
                    <div className="game-category-card arcade-card">
                        <div className="game-category-icon arcade-icon">
                            <img src="/images/Arcade.jpeg" alt="Arcade" width={32} height={32} />
                        </div>
                        <h2 className="game-category-title">ARCADE</h2>
                    </div>
                </Link>

                <Link to="/2player" className="game-category-link">
                    <div className="game-category-card two-player-card">
                        <div className="game-category-icon two-player-icon">
                            <img src="/images/2Player.jpeg" alt="2 Player" width={32} height={32} />
                        </div>
                        <h2 className="game-category-title">2 PLAYER</h2>
                    </div>
                </Link>

            </div>

            <div class="settings-container">
                <button class="settings-button">
                    <Settings className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
