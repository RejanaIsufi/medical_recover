import React, { useEffect, useRef, useState } from "react";
import "./statItem.css";

const StatItem = ({ value, label, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    animateCount();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, );

    const animateCount = () => {
        let start = 0;
        const duration = 1500;
        const increment = value / (duration / 16);

        const counter = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(counter);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
    };

    return (
        <div className="stat-item" ref={ref}>
            <h3>
                {count}
                {suffix}
            </h3>
            <p>{label}</p>
        </div>
    );
};

export default StatItem;
