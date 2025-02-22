import React from "react";
import { Settings, HelpCircle } from "lucide-react";
import "./GameMenu.css";
import { Link } from "react-router-dom";

export default function GameMenu() {
    return (
        <div className="game-menu">
            {/* Logo with Animation */}
            <div className="logo-container">
                <img src="/images/628.jpg" alt="Super Over Logo" className="logo-image" />
                <h1 className="logo-title">Super Over</h1>
            </div>

            {/* Game Modes Grid */}
            <div className="game-categories-container">
                <Link to="/country" className="game-category-link">
                    <div className="game-category-card arcade-card">
                        <div className="game-category-icon arcade-icon">
                            <img src="/images/Arcade.jpeg" alt="Arcade" className="icon-image" />
                        </div>
                        <h2 className="game-category-title">ARCADE</h2>
                        <p className="game-category-subtitle">Solo Challenge Mode</p>
                    </div>
                </Link>

                <Link to="/2player" className="game-category-link">
                    <div className="game-category-card two-player-card">
                        <div className="game-category-icon two-player-icon">
                            <img src="/images/2Player.jpeg" alt="2 Player" className="icon-image" />
                        </div>
                        <h2 className="game-category-title">2 PLAYER</h2>
                        <p className="game-category-subtitle">Head-to-Head Action</p>
                    </div>
                </Link>
            </div>

            {/* Settings & Help Buttons */}
            <div className="settings-container">
                <button className="settings-button">
                    <Settings className="w-8 h-8" />
                </button>
                <button className="help-button">
                    <HelpCircle className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
}