import React, { useMemo } from "react";

function clamp(n, a, b) {
    return Math.max(a, Math.min(b, n));
}

function fmtHMS(ms) {
    const safe = Math.max(0, ms);
    const totalSec = Math.floor(safe / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function CountdownRing({ title, leftMs, cycleMs }) {
    // progress % (0 at start, 100 at end)
    const pct = useMemo(() => {
        if (!cycleMs || cycleMs <= 0) return 0;
        const p = 1 - leftMs / cycleMs;
        return clamp(p * 100, 0, 100);
    }, [leftMs, cycleMs]);

    // urgency: based on how much time is LEFT (not progress)
    const urgencyClass = useMemo(() => {
        if (!cycleMs || cycleMs <= 0) return "ringOk";
        const leftRatio = clamp(leftMs / cycleMs, 0, 1); // 1 -> lots of time, 0 -> no time
        if (leftRatio <= 0.15) return "ringDanger"; // last 15%
        if (leftRatio <= 0.35) return "ringWarn";   // last 35%
        return "ringOk";
    }, [leftMs, cycleMs]);

    // SVG ring math
    const r = 36;
    const c = 2 * Math.PI * r;
    const dash = (pct / 100) * c;

    return (
        <div className="ringCard">
            <div className="ringTitle">{title}</div>

            <div className="ringWrap">
                <svg className={"ringSvg " + urgencyClass} viewBox="0 0 100 100">
                    <circle className="ringBg" cx="50" cy="50" r={r} />
                    <circle
                        className="ringFg"
                        cx="50"
                        cy="50"
                        r={r}
                        strokeDasharray={`${dash} ${c - dash}`}
                    />
                </svg>

                <div className="ringText">
                    <div className="ringTime">{fmtHMS(leftMs)}</div>
                    <div className="ringPct">{Math.round(pct)}%</div>
                </div>
            </div>
        </div>
    );
}
