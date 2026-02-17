import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Times from "./pages/Times";
import Salah from "./pages/Salah";
import Quran from "./pages/Quran";
import Dua from "./pages/Dua";
import Names from "./pages/Names";
import Niyot from "./pages/Niyot";


const TEXT = {
  en: {
    greet: "Assalamu Alaikum",
    subtitle: "RAMADAN MUBARAK 2026",
    home: "Home",
    times: "Times",
    salah: "Salah",
    quran: "Qur'an",
    dua: "Dua",
    names: "99 Names",
    today: "TODAY'S SCHEDULE",
    sehri: "SEHRI ENDS",
    iftar: "IFTAR TIME",
    overall: "OVERALL COMPLETION",
    tasks: "TASKS",
    niyot: "Niyot",
  },
  bn: {
    greet: "আসসালামু আলাইকুম",
    subtitle: "রমজান মোবারক ২০২৬",
    home: "হোম",
    times: "সময়সূচি",
    salah: "সালাত",
    quran: "কুরআন",
    dua: "দোয়া",
    names: "৯৯ নাম",
    today: "আজকের সময়সূচি",
    sehri: "সেহরির শেষ",
    iftar: "ইফতার",
    overall: "মোট অগ্রগতি",
    tasks: "কাজ",
    niyot: "নিয়ত",
  },
};

export default function App() {
  const [tab, setTab] = useState("home");
  const [lang, setLang] = useState("en");

  // ✅ NEW: theme state (saved in localStorage)
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  const t = useMemo(() => TEXT[lang], [lang]);

  const toggleLang = () => setLang((p) => (p === "en" ? "bn" : "en"));

  // ✅ NEW: theme toggle
  const toggleTheme = () => {
    setTheme((p) => {
      const next = p === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      return next;
    });
  };

  return (
    <div className={theme === "dark" ? "themeDark" : "themeLight"}>
      <Navbar
        tab={tab}
        setTab={setTab}
        t={t}
        lang={lang}
        onToggleLang={toggleLang}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {tab === "home" && <Home t={t} lang={lang} />}
      {tab === "times" && <Times t={t} lang={lang} />}
      {tab === "salah" && <Salah t={t} lang={lang} />}
      {tab === "quran" && <Quran t={t} lang={lang} />}
      {tab === "dua" && <Dua t={t} lang={lang} />}
      {tab === "names" && <Names t={t} lang={lang} />}
      {tab === "niyot" && <Niyot t={t} lang={lang} />}
    </div>
  );
}
