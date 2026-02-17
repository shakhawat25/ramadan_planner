import React from "react";

export default function ToggleLang({ lang, setLang }) {
    return (
        <button
            className="btnPrimary"
            onClick={() => setLang(lang === "en" ? "bn" : "en")}
            title="Toggle language"
        >
            EN / বাংলা
        </button>
    );
}
