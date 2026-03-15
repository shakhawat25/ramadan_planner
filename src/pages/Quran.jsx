import React, { useState } from "react";
import { SURAHS } from "../data/surahs";
import { loadJSON, saveJSON } from "../components/Storage";

export default function Quran() {
    const [state, setState] = useState(() => loadJSON("quran_checks", {}));

    function toggle(name) {
        const next = { ...state, [name]: !state[name] };
        setState(next);
        saveJSON("quran_checks", next);
    }

    return (
        <div className="wrap">
            <div className="card pageCard">
                <div className="pageTitle">Qur'an</div>

                <div className="chipsGrid">
                    {SURAHS.map((s) => {
                        const on = !!state[s];
                        return (
                            <div key={s} className="chip" onClick={() => toggle(s)}>
                                <div className="left">
                                    <div className={`check ${on ? "on" : ""}`}>{on ? "✓" : ""}</div>
                                    <b>{s.toUpperCase()}</b>
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
