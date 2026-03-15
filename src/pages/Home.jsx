import React, { useEffect, useMemo, useState } from "react";
import { RAMADAN_BY_DISTRICT, DISTRICTS, toYMD } from "../data/ramadanTimes";
import { loadJSON } from "../components/Storage";
import CountdownRing from "../components/CountdownRing";


function parseTimeToDate(ymd, timeStr) {
    const [hm, ap] = timeStr.split(" ");
    let [h, m] = hm.split(":").map(Number);

    if (ap === "PM" && h !== 12) h += 12;
    if (ap === "AM" && h === 12) h = 0;

    const d = new Date(`${ymd}T00:00:00`);
    d.setHours(h, m, 0, 0);
    return d;
}

function fmtNow(d) {
    return d.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
}
function fmtDuration(ms) {
    if (ms <= 0) return "00h 00m 00s";
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    return `${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
}

function daysBetween(a, b) {
    const one = new Date(a.getFullYear(), a.getMonth(), a.getDate());
    const two = new Date(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.round((one - two) / (1000 * 60 * 60 * 24));
}

function DistrictPopup({ onPick }) {
    return (
        <div className="pickerOverlay">
            <div className="pickerCard">
                <div className="pickerTop">
                    <div>
                        <div className="pickerTitle">Select your District</div>
                        <div className="pickerSub">
                            Times + countdown will be based on your selected district.
                        </div>
                    </div>

                    <div className="pickerBadge">Ramadan 2026</div>
                </div>

                <div className="pickerGrid">
                    {DISTRICTS.map((d) => (
                        <button key={d} className="pickerBtn" onClick={() => onPick(d)}>
                            {d}
                        </button>
                    ))}
                </div>

                <div className="pickerFooter">
                    <div className="pickerHint">
                        <span className="pickerDot" />
                        Pick once — you can change anytime.
                    </div>
                    <div>Saved automatically</div>
                </div>
            </div>
        </div>
    );
}

function format12(d) {
    return d.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
}



export default function Home({ t }) {
    const [now, setNow] = useState(() => new Date());
    const [animWidth, setAnimWidth] = useState(0);

    // ✅ district selection
    const [district, setDistrict] = useState(() => {
        return localStorage.getItem("district") || "";
    });

    // ✅ keep this (time updates)
    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const todayYMD = useMemo(() => toYMD(now), [now]);

    // ✅ current district dataset
    const districtData = useMemo(() => {
        return RAMADAN_BY_DISTRICT[district] || RAMADAN_BY_DISTRICT.Dhaka;
    }, [district]);


    // ✅ start/end from district dataset
    const ramadanStart = useMemo(
        () => new Date(`${districtData[0].ymd}T00:00:00`),
        [districtData]
    );

    const ramadanEnd = useMemo(
        () => new Date(`${districtData[districtData.length - 1].ymd}T23:59:59`),
        [districtData]
    );

    const isBefore = now < ramadanStart;
    const isAfter = now > ramadanEnd;

    const ramadanToday =
        districtData.find((d) => d.ymd === todayYMD) || districtData[0];

    /* ===============================
       TASK PROGRESS
    =============================== */
    const totalTasks = 30 * 5 + 114 + 30;

    const done = useMemo(() => {
        const salah = loadJSON("salah_checks", {});
        const quran = loadJSON("quran_checks", {});
        const dua = loadJSON("dua_checks", {});
        return (
            Object.values(salah).filter(Boolean).length +
            Object.values(quran).filter(Boolean).length +
            Object.values(dua).filter(Boolean).length
        );
    }, []);

    const total = totalTasks;
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;

    useEffect(() => {
        setAnimWidth(0);
        const id = setTimeout(() => setAnimWidth(percent), 120);
        return () => clearTimeout(id);
    }, [percent]);

    /* ===============================
       COUNTDOWN LOGIC
    =============================== */
    const dayStart = useMemo(
        () => new Date(`${ramadanToday.ymd}T00:00:00`),
        [ramadanToday]
    );

    const sehriDate = useMemo(
        () => parseTimeToDate(ramadanToday.ymd, ramadanToday.sehriEnd),
        [ramadanToday]
    );

    const iftarDate = useMemo(
        () => parseTimeToDate(ramadanToday.ymd, ramadanToday.iftar),
        [ramadanToday]
    );

    const nextSehri = useMemo(() => {
        const d = new Date(sehriDate);
        if (now > d) d.setDate(d.getDate() + 1);
        return d;
    }, [sehriDate, now]);

    const nextIftar = useMemo(() => {
        const d = new Date(iftarDate);
        if (now > d) d.setDate(d.getDate() + 1);
        return d;
    }, [iftarDate, now]);

    const leftSehri = nextSehri - now;
    const leftIftar = nextIftar - now;

    const msToStart = ramadanStart - now;
    const daysToStart = daysBetween(ramadanStart, now);
    const daysAfter = daysBetween(now, ramadanEnd);

    return (
        <div className="wrap">
            {/* ✅ popup if district not selected */}
            {!district && (
                <DistrictPopup
                    onPick={(d) => {
                        setDistrict(d);
                        localStorage.setItem("district", d);
                    }}
                />
            )}

            <div className="centerHead">
                <h1>{t.greet}</h1>
                <p>{t.subtitle}</p>
                <div className="miniHint" style={{ marginTop: 6 }}>
                    District: <b>{district || "Not selected"}</b>{" "}
                    {district && (
                        <button
                            style={{ marginLeft: 10 }}
                            className="pickerBtn"
                            onClick={() => {
                                setDistrict("");
                                localStorage.removeItem("district");
                            }}
                        >
                            Change
                        </button>
                    )}
                </div>
            </div>

            {/* BEFORE RAMADAN */}
            {isBefore && (
                <div className="card noticeCard">
                    <div className="noticeTitle">Ramadan hasn’t started yet</div>
                    <div className="noticeText">
                        Starts on <b>{districtData[0].date}</b> ({districtData[0].ymd}). That’s in{" "}
                        <b>{daysToStart}</b> day(s).
                    </div>
                    <div className="noticeTimer">{fmtDuration(msToStart)}</div>
                </div>
            )}

            {/* AFTER RAMADAN */}
            {isAfter && (
                <div className="card noticeCard">
                    <div className="noticeTitle">Ramadan has ended</div>
                    <div className="noticeText">
                        Ramadan ended on{" "}
                        <b>{districtData[districtData.length - 1].date}</b> (
                        {districtData[districtData.length - 1].ymd}).{" "}
                        <b>{Math.max(0, daysAfter)}</b> day(s) ago.
                    </div>
                </div>
            )}

            <div className="grid2">
                {/* TODAY CARD */}
                <div className="card todayCard">
                    <div className="todayTitle">{t.today}</div>

                    <div className="todayRow">
                        <div>
                            <div className="smallLabel">{t.sehri}</div>
                            <div className="bigTime">{ramadanToday.sehriEnd}</div>
                            {/* <div className="miniHint">Sehri Ends: {ramadanToday.sehriEndTime}</div> */}
                        </div>

                        <div style={{ textAlign: "right" }}>
                            <div className="smallLabel">{t.iftar}</div>
                            <div className="bigTime">{ramadanToday.iftar}</div>
                            {/* <div className="miniHint">Iftar Ends: {ramadanToday.iftarEndTime}</div> */}
                        </div>
                    </div>

                    <div className="hr" />

                    <div className="dayLine">
                        Day {ramadanToday.day} — {ramadanToday.date} ({ramadanToday.dow})
                    </div>

                    <div className="miniHint" style={{ marginTop: 0 }}>
                        {/* Dhuhr: <b>{ramadanToday.dhuhr || "--"}</b> • Asr: <b>{ramadanToday.asr || "--"}</b> • Isha:{" "} */}
                        {/* <b>{ramadanToday.isha || "--"}</b> */}
                    </div>
                </div>

                {/* OVERALL COMPLETION */}
                <div className="card progressBox">
                    <div className="progressTitle">{t.overall}</div>

                    <div className="progressBar">
                        <div className="progressFill" style={{ width: `${animWidth}%` }} />
                    </div>

                    <div className="progressMeta">
                        <strong>{done}</strong> / {total} {t.tasks} ({percent}%)
                    </div>

                    {percent === 100 && (
                        <div className="completeBadge">✅ 100% Completed — Ramadan Mubarak!</div>
                    )}
                </div>

                {/* KPI Row */}
                <div className="homeKpiRow">
                    <div className="card kpiCard">
                        <div className="kpiTitle">Present TIME</div>
                        <div className="kpiValue">{fmtNow(now)}</div>
                        <div className="kpiHint">System time (live)</div>
                    </div>

                    <div className="card kpiCard">
                        <div className="kpiTitle">TIME LEFT</div>

                        {!isBefore && !isAfter ? (
                            <>
                                <div className="ringGrid">
                                    <CountdownRing title="Until Iftar" leftMs={leftIftar} cycleMs={nextIftar - dayStart} />
                                    <CountdownRing title="Until Sehri Ends" leftMs={leftSehri} cycleMs={nextSehri - dayStart} />
                                </div>


                                <div className="kpiHint">
                                    Next Iftar: {format12(nextIftar)} • Next Sehri: {format12(nextSehri)}
                                </div>

                            </>
                        ) : (
                            <div className="kpiHint" style={{ marginTop: 12 }}>
                                Countdown is available during Ramadan dates only.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
