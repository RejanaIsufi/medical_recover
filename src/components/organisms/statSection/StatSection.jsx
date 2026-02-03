import React from "react";
import StatItem from "../../molecules/statItem/StatItem";
import "./statsSection.css";

const StatsSection = () => {
    return (
        <section className="stats-section">
            <StatItem value={15} suffix="K" label="Happy Customers" />
            <StatItem value={150} suffix="K" label="Monthly Visitors" />
            <StatItem value={15} label="Countries Worldwide" />
            <StatItem value={100} suffix="+" label="Top Partners" />
        </section>
    );
};

export default StatsSection;
