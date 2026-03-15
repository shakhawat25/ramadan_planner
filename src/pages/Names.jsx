import React, { useMemo, useState } from "react";
import { NAMES_99 } from "../data/names99";

export default function Names() {
    const [q, setQ] = useState("");
    const [sortBy, setSortBy] = useState("no-asc");
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [toast, setToast] = useState("");

    const filtered = useMemo(() => {
        const query = q.trim().toLowerCase();

        let list = NAMES_99.filter((n) => {
            if (!query) return true;
            const a = (n.ar || "").toLowerCase();
            const t = (n.tr || "").toLowerCase();
            const e = (n.en || "").toLowerCase();
            const num = String(n.no || "");
            return a.includes(query) || t.includes(query) || e.includes(query) || num.includes(query);
        });

        const cmpText = (a, b) => a.localeCompare(b, undefined, { sensitivity: "base" });

        list.sort((A, B) => {
            if (sortBy === "no-asc") return (A.no || 0) - (B.no || 0);
            if (sortBy === "no-desc") return (B.no || 0) - (A.no || 0);

            if (sortBy === "tr-asc") return cmpText(A.tr || "", B.tr || "");
            if (sortBy === "tr-desc") return cmpText(B.tr || "", A.tr || "");

            if (sortBy === "en-asc") return cmpText(A.en || "", B.en || "");
            if (sortBy === "en-desc") return cmpText(B.en || "", A.en || "");

            return 0;
        });

        return list;
    }, [q, sortBy]);

    function clearAll() {
        setQ("");
        setSortBy("no-asc");
    }

    function openModal(n) {
        setSelected(n);
        setOpen(true);
    }

    function closeModal() {
        setOpen(false);
        setSelected(null);
    }

    function showToast(msg) {
        setToast(msg);
        window.clearTimeout(showToast._t);
        showToast._t = window.setTimeout(() => setToast(""), 1300);
    }

    async function copyText(label, text) {
        try {
            await navigator.clipboard.writeText(text);
            showToast(`${label} copied ✓`);
        } catch {
            // fallback
            const ta = document.createElement("textarea");
            ta.value = text;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand("copy");
            document.body.removeChild(ta);
            showToast(`${label} copied ✓`);
        }
    }

    // close modal on ESC
    React.useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") closeModal();
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <div className="wrap">
            <div className="card pageCard">
                <div className="pageTitle">99 Names</div>

                {/* Controls */}
                <div className="controlsRow">
                    <div className="searchBox">
                        <span className="searchIcon">⌕</span>
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search: Arabic / Transliteration / Meaning / Number..."
                        />
                    </div>

                    <div className="selectBox">
                        <label>Sort</label>
                        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                            <option value="no-asc">Number (1 → 99)</option>
                            <option value="no-desc">Number (99 → 1)</option>
                            <option value="tr-asc">Transliteration (A → Z)</option>
                            <option value="tr-desc">Transliteration (Z → A)</option>
                            <option value="en-asc">Meaning (A → Z)</option>
                            <option value="en-desc">Meaning (Z → A)</option>
                        </select>
                    </div>

                    <button className="btnSoft" onClick={clearAll}>
                        Reset
                    </button>
                </div>

                <div className="resultInfo">
                    Showing <b>{filtered.length}</b> of <b>{NAMES_99.length}</b>
                </div>

                {/* Grid */}
                <div className="namesGrid">
                    {filtered.map((n) => (
                        <div
                            key={n.no}
                            className="card nameCard nameCardClickable"
                            onClick={() => openModal(n)}
                            title="Click for details"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && openModal(n)}
                        >
                            <div className="nameEn">{n.no}. {(n.tr || "").toUpperCase()}</div>
                            <div className="nameAr">{n.ar}</div>
                            <div className="nameMean">{n.en}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Toast */}
            {toast ? <div className="toast">{toast}</div> : null}

            {/* Modal */}
            {open && selected ? (
                <div className="modalOverlay" onClick={closeModal}>
                    <div className="modalCard" onClick={(e) => e.stopPropagation()}>
                        <div className="modalTop">
                            <div className="modalTitle">
                                <span className="badge">{selected.no}</span>
                                <span>{selected.tr}</span>
                            </div>

                            <button className="modalClose" onClick={closeModal} aria-label="Close">
                                ✕
                            </button>
                        </div>

                        <div className="modalArabic">{selected.ar}</div>
                        <div className="modalMeaning">{selected.en}</div>

                        <div className="modalBtns">
                            <button
                                className="btnPrimary"
                                onClick={() => copyText("Arabic", selected.ar)}
                            >
                                Copy Arabic
                            </button>

                            <button
                                className="btnPrimary"
                                onClick={() => copyText("Transliteration", selected.tr)}
                            >
                                Copy Transliteration
                            </button>

                            <button
                                className="btnPrimary"
                                onClick={() => copyText("Meaning", selected.en)}
                            >
                                Copy Meaning
                            </button>
                        </div>

                        <p className="modalHint">Tip: Press ESC to close.</p>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
