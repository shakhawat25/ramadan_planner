import React from "react";

export default function Navbar({ tab, setTab, t, lang, onToggleLang, theme, onToggleTheme }) {
    const link = (key, label) => (
        <button
            className={"navLink " + (tab === key ? "navLinkActive" : "")}
            onClick={() => setTab(key)}
            type="button"
        >
            {label}
        </button>
    );

    return (
        <div className="navWrap">
            <div className="navPills">
                {link("home", t.home)}
                {link("times", t.times)}
                {link("salah", t.salah)}
                {link("niyot", t.niyot)}
                {link("quran", t.quran)}
                {link("dua", t.dua)}
                {link("names", t.names)}

            </div>

            <div className="navRight">
                <button className="langBtn" onClick={onToggleLang} type="button">
                    {lang === "en" ? "EN / বাংলা" : "বাংলা / EN"}
                </button>

                <button className="themeBtn" onClick={onToggleTheme} type="button">
                    {theme === "dark" ? "☀ Light" : "🌙 Dark"}
                </button>
            </div>
        </div>
    );
}
