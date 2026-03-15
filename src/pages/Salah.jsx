import React, { useMemo, useState } from "react";
import { RAMADAN_BY_DISTRICT } from "../data/ramadanTimes";
import { loadJSON, saveJSON } from "../components/Storage";

const PRAYERS = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];

// ✅ converts "05:13" -> "05:13 AM", "17:56" -> "05:56 PM"
// If already "05:12 AM" it returns same.
function toAmPm(timeStr) {
    if (!timeStr) return "--";
    if (timeStr.includes("AM") || timeStr.includes("PM")) return timeStr;

    const [hh, mm] = timeStr.split(":").map(Number);
    const ap = hh >= 12 ? "PM" : "AM";
    let h = hh % 12;
    if (h === 0) h = 12;
    return `${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")} ${ap}`;
}

export default function Salah() {
    const [state, setState] = useState(() => loadJSON("salah_checks", {}));

    // ✅ same logic as Times/Home
    const district = localStorage.getItem("district") || "Dhaka";

    const districtData = useMemo(() => {
        return RAMADAN_BY_DISTRICT[district] || RAMADAN_BY_DISTRICT.Dhaka;
    }, [district]);

    const rows = useMemo(() => {
        return districtData.map((d) => ({
            day: d.day,

            // ✅ take real salah times from dataset (24h -> AM/PM)
            fajr: toAmPm(d.fajr),
            dhuhr: toAmPm(d.dhuhr),
            asr: toAmPm(d.asr),

            // ✅ Maghrib = iftar time
            maghrib: toAmPm(d.iftar),

            isha: toAmPm(d.isha),
        }));
    }, [districtData]);

    function toggle(day, p) {
        const key = `${district}_${day}_${p}`; // ✅ district-based keys (so Dhaka checks don’t mix with Sylhet)
        const next = { ...state, [key]: !state[key] };
        setState(next);
        saveJSON("salah_checks", next);
    }

    return (
        <div className="wrap">
            <div className="card pageCard">
                <div className="pageTitle">Salah - {district}</div>

                <table className="table checkTable">
                    <thead>
                        <tr>
                            <th>DAY</th>
                            {PRAYERS.map((p) => (
                                <th key={p}>{p.toUpperCase()}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {rows.map((r) => (
                            <tr key={r.day}>
                                <td style={{ fontWeight: 900, color: "#7aa286" }}>{r.day}</td>

                                {PRAYERS.map((p) => {
                                    const k = `${district}_${r.day}_${p}`;
                                    const on = !!state[k];

                                    const time =
                                        p === "Fajr"
                                            ? r.fajr
                                            : p === "Dhuhr"
                                                ? r.dhuhr
                                                : p === "Asr"
                                                    ? r.asr
                                                    : p === "Maghrib"
                                                        ? r.maghrib
                                                        : r.isha;

                                    return (
                                        <td key={p}>
                                            <div
                                                className={`check ${on ? "on" : ""}`}
                                                onClick={() => toggle(r.day, p)}
                                                title="Click to toggle"
                                            >
                                                {on ? "✓" : ""}
                                            </div>

                                            <div
                                                style={{
                                                    marginTop: 6,
                                                    fontSize: 11,
                                                    color: "#7aa286",
                                                    fontWeight: 800,
                                                }}
                                            >
                                                {time}
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
