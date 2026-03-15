import React, { useMemo, useState } from "react";

const NIYOT_DATA = [
    {
        id: 1,
        titleEn: "Intention for Fasting/Sehri",
        titleBn: "রোজার নিয়ত/সেহরির দুআ",
        ar: "نَوَيْتُ أَنْ أَصُومَ غَدًا مِنْ شَهْرِ رَمَضَانَ",
        bn: "আমি আল্লাহর সন্তুষ্টির জন্য আগামীকাল রমজানের রোজা রাখার নিয়ত করলাম।",
        en: "I intend to keep the fast of Ramadan tomorrow for the sake of Allah.",
        tags: ["niyot", "roza", "ramadan", "fasting"],
    },
    {
        id: 2,
        titleEn: "Dua for Iftar",
        titleBn: "ইফতারের দোয়া",
        ar: "اَللّهُمَّ اِنِّى لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
        bn: "হে আল্লাহ! আমি তোমার জন্য রোজা রেখেছি, তোমার ওপর ঈমান এনেছি, তোমার ওপর ভরসা করেছি এবং তোমারই দেওয়া রিজিক দিয়ে ইফতার করলাম।",
        en: "O Allah! I fasted for You, I believe in You, I rely on You, and with Your provision I break my fast.",
        tags: ["iftar", "dua", "break fast"],
    },
    {
        id: 3,
        titleEn: "Dua for Iftar",
        titleBn: "ইফতারের দোয়া",
        ar: "اَللّهُمَّ اِنِّى لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ",
        bn: "হে আল্লাহ! আমি তোমার জন্য রোজা রেখেছি, তোমার ওপর ঈমান এনেছি, তোমার ওপর ভরসা করেছি এবং তোমারই দেওয়া রিজিক দিয়ে ইফতার করলাম।",
        en: "O Allah! I fasted for You, I believe in You, I rely on You, and with Your provision I break my fast.",
        tags: ["iftar", "dua", "break fast"],
    },

];

export default function Niyot({ lang }) {
    const [q, setQ] = useState("");

    const filtered = useMemo(() => {
        const s = q.trim().toLowerCase();
        if (!s) return NIYOT_DATA;

        return NIYOT_DATA.filter((x) => {
            const pool = [
                x.titleEn,
                x.titleBn,
                x.ar,
                x.bn,
                x.en,
                ...(x.tags || []),
            ]
                .join(" ")
                .toLowerCase();

            return pool.includes(s);
        });
    }, [q]);

    return (
        <div className="wrap">
            <div className="card pageCard">
                <div className="pageTitle">{lang === "bn" ? "নিয়ত ও দোয়া" : "Niyot & Dua"}</div>

                {/* Search */}
                <div className="controlsRow">
                    <div className="searchBox">
                        <span className="searchIcon">⌕</span>
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder={lang === "bn" ? "খুঁজুন: নিয়ত / ইফতার / দোয়া..." : "Search: niyot / iftar / dua..."}
                        />
                    </div>

                    <button className="btnSoft" onClick={() => setQ("")} type="button">
                        Reset
                    </button>
                </div>

                <div className="resultInfo">
                    Showing <b>{filtered.length}</b> of <b>{NIYOT_DATA.length}</b>
                </div>

                {/* Cards */}
                <div className="niyotGrid">
                    {filtered.map((x) => (
                        <div key={x.id} className="card niyotCard">
                            <div className="niyotLabel">{lang === "bn" ? x.titleBn : x.titleEn}</div>

                            <div className="niyotAr">{x.ar}</div>
                            <div className="niyotBn">{x.bn}</div>
                            <div className="niyotEn">{x.en}</div>
                        </div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="niyotEmpty">
                        {lang === "bn" ? "কিছু পাওয়া যায়নি 😅 অন্য শব্দ দিয়ে চেষ্টা করুন।" : "No match found 😅 Try another keyword."}
                    </div>
                )}
            </div>
        </div>
    );
}
