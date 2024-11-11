import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Power Analytics Dashboard</h1>

            <div className="cards">
                <div className="card">
                    <p>Fans</p>
                    <h2>27</h2>
                    <p>Power Consumption</p>
                    <h2> 270</h2>
                </div>

                <div className="card">
                    <p>Light</p>
                    <h2>65</h2>
                    <p>Power Consumption</p>
                    <h2> 876</h2>
                </div>

                <div className="card">
                    <p>Refrigerator</p>
                    <h2>4</h2>
                    <p>Power Consumption</p>
                    <h2> 0</h2>
                </div>

                <div className="card">
                    <p>Air Condition</p>
                    <h2>852</h2>
                    <p>Power Consumption</p>
                    <h2> 65</h2>
                </div>

            </div>

            <div className="info-section">

                <div className="info-card">
                    <h3>Current Power Consumption (kWh)</h3>
                    <p className="current-value">1635.00</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
