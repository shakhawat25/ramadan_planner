// src/services/prayerTimes.js
export async function getPrayerTimesByCoords(lat, lon) {
  // method=2 is a common default. You can change later.
  const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch prayer times");

  const json = await res.json();

  // AlAdhan returns timings like: { Fajr: "05:10", Maghrib: "18:02", ... }
  const t = json?.data?.timings;
  if (!t) throw new Error("Prayer times missing in API response");

  return {
    fajr: cleanTime(t.Fajr),
    imsak: cleanTime(t.Imsak),
    maghrib: cleanTime(t.Maghrib),
    timezone: json?.data?.meta?.timezone || null,
  };
}

// removes suffix like "05:10 (+06)" if present
function cleanTime(s) {
  if (!s) return "";
  return String(s).split(" ")[0].trim(); // keep HH:MM
}
