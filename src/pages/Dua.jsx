import React, { useState } from "react";
import { DUAS_30 } from "../data/duas";
import { loadJSON, saveJSON } from "../components/Storage";

export default function Dua() {
    const [state, setState] = useState(() => loadJSON("dua_checks", {}));

    function toggle(day) {
        const next = { ...state, [day]: !state[day] };
        setState(next);
        saveJSON("dua_checks", next);
    }

    return (
        <div className="wrap">
            <div className="card pageCard">
                <div className="pageTitle">30 Days of Dua</div>

                <div className="duaGrid">
                    {DUAS_30.map((d) => {
                        const on = !!state[d.day];
                        return (
                            <div key={d.day} className="card duaCard">
                                <div className="duaTag">
                                    DAY {d.day}: {d.title.toUpperCase()}
                                </div>

                                <div className="ar">{d.ar}</div>
                                <div className="tr">{d.tr}</div>
                                <p className="mean">{d.en}</p>

                                <div style={{ marginTop: 14 }}>
                                    <button
                                        className="langBtn"
                                        style={{ background: on ? "#7aa286" : "#2f5b3f" }}
                                        onClick={() => toggle(d.day)}
                                    >
                                        {on ? "Marked Done ✓" : "Mark Done"}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <p style={{ marginTop: 14, color: "#6a7b70", fontWeight: 700 }}>
                </p>
            </div>
        </div>
    );
}
