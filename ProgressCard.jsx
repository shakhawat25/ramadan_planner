import React from "react";

export default function ProgressCard({ title, done, total }) {
    const pct = total ? Math.round((done / total) * 100) : 0;

    return (
        <div className="card progressCard">
            <h3>{title}</h3>
            <div className="bar">
                <div className="barFill" style={{ width: `${pct}%` }} />
            </div>
            <div className="progressText">
                {done} / {total} TASKS ({pct}%)
            </div>
        </div>
    );
}
