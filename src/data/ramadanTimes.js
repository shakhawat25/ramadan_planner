// src/data/ramadanTimes.js

// Base calendar (same dates/days for all districts)
const BASE_DAYS = [
    { day: 1, ymd: "2026-02-19", date: "Feb 19", dow: "Thursday" },
    { day: 2, ymd: "2026-02-20", date: "Feb 20", dow: "Friday" },
    { day: 3, ymd: "2026-02-21", date: "Feb 21", dow: "Saturday" },
    { day: 4, ymd: "2026-02-22", date: "Feb 22", dow: "Sunday" },
    { day: 5, ymd: "2026-02-23", date: "Feb 23", dow: "Monday" },
    { day: 6, ymd: "2026-02-24", date: "Feb 24", dow: "Tuesday" },
    { day: 7, ymd: "2026-02-25", date: "Feb 25", dow: "Wednesday" },
    { day: 8, ymd: "2026-02-26", date: "Feb 26", dow: "Thursday" },
    { day: 9, ymd: "2026-02-27", date: "Feb 27", dow: "Friday" },
    { day: 10, ymd: "2026-02-28", date: "Feb 28", dow: "Saturday" },

    { day: 11, ymd: "2026-03-01", date: "Mar 1", dow: "Sunday" },
    { day: 12, ymd: "2026-03-02", date: "Mar 2", dow: "Monday" },
    { day: 13, ymd: "2026-03-03", date: "Mar 3", dow: "Tuesday" },
    { day: 14, ymd: "2026-03-04", date: "Mar 4", dow: "Wednesday" },
    { day: 15, ymd: "2026-03-05", date: "Mar 5", dow: "Thursday" },
    { day: 16, ymd: "2026-03-06", date: "Mar 6", dow: "Friday" },
    { day: 17, ymd: "2026-03-07", date: "Mar 7", dow: "Saturday" },
    { day: 18, ymd: "2026-03-08", date: "Mar 8", dow: "Sunday" },
    { day: 19, ymd: "2026-03-09", date: "Mar 9", dow: "Monday" },
    { day: 20, ymd: "2026-03-10", date: "Mar 10", dow: "Tuesday" },

    { day: 21, ymd: "2026-03-11", date: "Mar 11", dow: "Wednesday" },
    { day: 22, ymd: "2026-03-12", date: "Mar 12", dow: "Thursday" },
    { day: 23, ymd: "2026-03-13", date: "Mar 13", dow: "Friday" },
    { day: 24, ymd: "2026-03-14", date: "Mar 14", dow: "Saturday" },
    { day: 25, ymd: "2026-03-15", date: "Mar 15", dow: "Sunday" },
    { day: 26, ymd: "2026-03-16", date: "Mar 16", dow: "Monday" },
    { day: 27, ymd: "2026-03-17", date: "Mar 17", dow: "Tuesday" },
    { day: 28, ymd: "2026-03-18", date: "Mar 18", dow: "Wednesday" },
    { day: 29, ymd: "2026-03-19", date: "Mar 19", dow: "Thursday" },
    { day: 30, ymd: "2026-03-20", date: "Mar 20", dow: "Friday" },
];

// helper to build a district array from time rows
function buildDistrict(rows) {
    return BASE_DAYS.map((b, i) => {
        const r = rows[i];
        return {
            ...b,

            // Ramadan times
            sehriEnd: r.sehriEnd,
            iftar: r.iftar,

            // Salah timings (24h or AM/PM whatever you store)
            fajr: r.fajr || r.sehriEnd || "",
            dhuhr: r.dhuhr || "",
            asr: r.asr || "",
            isha: r.isha || "",
        };
    });
}

export const DISTRICTS = [
    "Dhaka",
    "Rajshahi",
    "Chattogram",
    "Khulna",
    "Mymensingh",
    "Sylhet",
    "Barishal",
    "Rangpur",
];

// All times dataset (district -> array of 30 objects)
const RAMADAN_2026_BY_DISTRICT = {
    // Dhaka (only Sehri/Iftar provided)
    Dhaka: buildDistrict([
        { sehriEnd: "05:12 AM", iftar: "05:58 PM", fajr: "05:13", dhuhr: "12:13", asr: "15:30", isha: "19:12" },
        { sehriEnd: "05:11 AM", iftar: "05:58 PM", fajr: "05:12", dhuhr: "12:13", asr: "15:30", isha: "19:12" },
        { sehriEnd: "05:11 AM", iftar: "05:59 PM", fajr: "05:12", dhuhr: "12:13", asr: "15:30", isha: "19:13" },
        { sehriEnd: "05:10 AM", iftar: "05:59 PM", fajr: "05:11", dhuhr: "12:13", asr: "15:31", isha: "19:13" },
        { sehriEnd: "05:09 AM", iftar: "06:00 PM", fajr: "05:10", dhuhr: "12:13", asr: "15:31", isha: "19:14" },
        { sehriEnd: "05:08 AM", iftar: "06:00 PM", fajr: "05:09", dhuhr: "12:13", asr: "15:31", isha: "19:14" },
        { sehriEnd: "05:08 AM", iftar: "06:01 PM", fajr: "05:09", dhuhr: "12:12", asr: "15:31", isha: "19:15" },
        { sehriEnd: "05:07 AM", iftar: "06:01 PM", fajr: "05:08", dhuhr: "12:12", asr: "15:31", isha: "19:15" },
        { sehriEnd: "05:06 AM", iftar: "06:02 PM", fajr: "05:07", dhuhr: "12:12", asr: "15:32", isha: "19:16" },
        { sehriEnd: "05:05 AM", iftar: "06:02 PM", fajr: "05:06", dhuhr: "12:12", asr: "15:32", isha: "19:16" },

        { sehriEnd: "05:05 AM", iftar: "06:03 PM", fajr: "05:05", dhuhr: "12:12", asr: "15:32", isha: "19:16" },
        { sehriEnd: "05:04 AM", iftar: "06:03 PM", fajr: "05:05", dhuhr: "12:12", asr: "15:32", isha: "19:17" },
        { sehriEnd: "05:03 AM", iftar: "06:04 PM", fajr: "05:04", dhuhr: "12:11", asr: "15:32", isha: "19:17" },
        { sehriEnd: "05:02 AM", iftar: "06:04 PM", fajr: "05:03", dhuhr: "12:11", asr: "15:32", isha: "19:18" },
        { sehriEnd: "05:01 AM", iftar: "06:05 PM", fajr: "05:02", dhuhr: "12:11", asr: "15:32", isha: "19:18" },
        { sehriEnd: "05:00 AM", iftar: "06:05 PM", fajr: "05:01", dhuhr: "12:11", asr: "15:32", isha: "19:19" },
        { sehriEnd: "04:59 AM", iftar: "06:06 PM", fajr: "05:00", dhuhr: "12:10", asr: "15:32", isha: "19:19" },
        { sehriEnd: "04:58 AM", iftar: "06:06 PM", fajr: "04:59", dhuhr: "12:10", asr: "15:32", isha: "19:19" },
        { sehriEnd: "04:57 AM", iftar: "06:07 PM", fajr: "04:58", dhuhr: "12:10", asr: "15:32", isha: "19:20" },
        { sehriEnd: "04:57 AM", iftar: "06:07 PM", fajr: "04:57", dhuhr: "12:10", asr: "15:32", isha: "19:20" },

        { sehriEnd: "04:56 AM", iftar: "06:07 PM", fajr: "04:57", dhuhr: "12:09", asr: "15:32", isha: "19:21" },
        { sehriEnd: "04:55 AM", iftar: "06:08 PM", fajr: "04:56", dhuhr: "12:09", asr: "15:32", isha: "19:21" },
        { sehriEnd: "04:54 AM", iftar: "06:08 PM", fajr: "04:55", dhuhr: "12:09", asr: "15:32", isha: "19:22" },
        { sehriEnd: "04:53 AM", iftar: "06:09 PM", fajr: "04:54", dhuhr: "12:09", asr: "15:32", isha: "19:22" },
        { sehriEnd: "04:52 AM", iftar: "06:09 PM", fajr: "04:53", dhuhr: "12:08", asr: "15:32", isha: "19:22" },
        { sehriEnd: "04:51 AM", iftar: "06:10 PM", fajr: "04:52", dhuhr: "12:08", asr: "15:32", isha: "19:23" },
        { sehriEnd: "04:50 AM", iftar: "06:10 PM", fajr: "04:51", dhuhr: "12:08", asr: "15:32", isha: "19:23" },
        { sehriEnd: "04:49 AM", iftar: "06:10 PM", fajr: "04:50", dhuhr: "12:07", asr: "15:32", isha: "19:24" },
        { sehriEnd: "04:48 AM", iftar: "06:11 PM", fajr: "04:49", dhuhr: "12:07", asr: "15:32", isha: "19:24" },
        { sehriEnd: "04:47 AM", iftar: "06:11 PM", fajr: "04:48", dhuhr: "12:07", asr: "15:32", isha: "19:25" },
    ]),
    // Rajshahi
    Rajshahi: buildDistrict([
        { sehriEnd: "05:20 AM", dhuhr: "12:20 PM", asr: "03:37 PM", iftar: "06:03 PM", isha: "07:19 PM" },
        { sehriEnd: "05:20 AM", dhuhr: "12:20 PM", asr: "03:37 PM", iftar: "06:03 PM", isha: "07:19 PM" },
        { sehriEnd: "05:19 AM", dhuhr: "12:20 PM", asr: "03:37 PM", iftar: "06:04 PM", isha: "07:20 PM" },
        { sehriEnd: "05:18 AM", dhuhr: "12:20 PM", asr: "03:37 PM", iftar: "06:04 PM", isha: "07:20 PM" },
        { sehriEnd: "05:17 AM", dhuhr: "12:20 PM", asr: "03:38 PM", iftar: "06:05 PM", isha: "07:21 PM" },
        { sehriEnd: "05:17 AM", dhuhr: "12:20 PM", asr: "03:38 PM", iftar: "06:05 PM", isha: "07:21 PM" },
        { sehriEnd: "05:16 AM", dhuhr: "12:20 PM", asr: "03:38 PM", iftar: "06:06 PM", isha: "07:22 PM" },
        { sehriEnd: "05:15 AM", dhuhr: "12:19 PM", asr: "03:38 PM", iftar: "06:06 PM", isha: "07:22 PM" },
        { sehriEnd: "05:14 AM", dhuhr: "12:19 PM", asr: "03:39 PM", iftar: "06:07 PM", isha: "07:23 PM" },
        { sehriEnd: "05:14 AM", dhuhr: "12:19 PM", asr: "03:39 PM", iftar: "06:07 PM", isha: "07:23 PM" },

        { sehriEnd: "05:13 AM", dhuhr: "12:19 PM", asr: "03:39 PM", iftar: "06:08 PM", isha: "07:24 PM" },
        { sehriEnd: "05:12 AM", dhuhr: "12:19 PM", asr: "03:39 PM", iftar: "06:08 PM", isha: "07:24 PM" },
        { sehriEnd: "05:11 AM", dhuhr: "12:19 PM", asr: "03:39 PM", iftar: "06:09 PM", isha: "07:25 PM" },
        { sehriEnd: "05:10 AM", dhuhr: "12:18 PM", asr: "03:39 PM", iftar: "06:09 PM", isha: "07:25 PM" },
        { sehriEnd: "05:09 AM", dhuhr: "12:18 PM", asr: "03:39 PM", iftar: "06:10 PM", isha: "07:25 PM" },
        { sehriEnd: "05:08 AM", dhuhr: "12:18 PM", asr: "03:39 PM", iftar: "06:10 PM", isha: "07:26 PM" },
        { sehriEnd: "05:07 AM", dhuhr: "12:18 PM", asr: "03:40 PM", iftar: "06:11 PM", isha: "07:26 PM" },
        { sehriEnd: "05:06 AM", dhuhr: "12:17 PM", asr: "03:40 PM", iftar: "06:11 PM", isha: "07:27 PM" },
        { sehriEnd: "05:05 AM", dhuhr: "12:17 PM", asr: "03:40 PM", iftar: "06:12 PM", isha: "07:27 PM" },
        { sehriEnd: "05:05 AM", dhuhr: "12:17 PM", asr: "03:40 PM", iftar: "06:12 PM", isha: "07:28 PM" },

        { sehriEnd: "05:04 AM", dhuhr: "12:17 PM", asr: "03:40 PM", iftar: "06:13 PM", isha: "07:28 PM" },
        { sehriEnd: "05:03 AM", dhuhr: "12:16 PM", asr: "03:40 PM", iftar: "06:13 PM", isha: "07:29 PM" },
        { sehriEnd: "05:02 AM", dhuhr: "12:16 PM", asr: "03:40 PM", iftar: "06:14 PM", isha: "07:29 PM" },
        { sehriEnd: "05:01 AM", dhuhr: "12:16 PM", asr: "03:40 PM", iftar: "06:14 PM", isha: "07:30 PM" },
        { sehriEnd: "05:00 AM", dhuhr: "12:16 PM", asr: "03:40 PM", iftar: "06:15 PM", isha: "07:30 PM" },
        { sehriEnd: "04:59 AM", dhuhr: "12:15 PM", asr: "03:40 PM", iftar: "06:15 PM", isha: "07:30 PM" },
        { sehriEnd: "04:58 AM", dhuhr: "12:15 PM", asr: "03:40 PM", iftar: "06:15 PM", isha: "07:31 PM" },
        { sehriEnd: "04:56 AM", dhuhr: "12:15 PM", asr: "03:40 PM", iftar: "06:16 PM", isha: "07:31 PM" },
        { sehriEnd: "04:55 AM", dhuhr: "12:14 PM", asr: "03:39 PM", iftar: "06:16 PM", isha: "07:32 PM" },
        { sehriEnd: "04:54 AM", dhuhr: "12:14 PM", asr: "03:39 PM", iftar: "06:17 PM", isha: "07:32 PM" },
    ]),

    // Chattogram
    Chattogram: buildDistrict([
        { sehriEnd: "05:07 AM", dhuhr: "12:07 PM", asr: "03:25 PM", iftar: "05:52 PM", isha: "07:07 PM" },
        { sehriEnd: "05:06 AM", dhuhr: "12:07 PM", asr: "03:25 PM", iftar: "05:52 PM", isha: "07:07 PM" },
        { sehriEnd: "05:05 AM", dhuhr: "12:07 PM", asr: "03:25 PM", iftar: "05:53 PM", isha: "07:07 PM" },
        { sehriEnd: "05:05 AM", dhuhr: "12:07 PM", asr: "03:25 PM", iftar: "05:53 PM", isha: "07:08 PM" },
        { sehriEnd: "05:04 AM", dhuhr: "12:07 PM", asr: "03:26 PM", iftar: "05:54 PM", isha: "07:08 PM" },
        { sehriEnd: "05:03 AM", dhuhr: "12:07 PM", asr: "03:26 PM", iftar: "05:54 PM", isha: "07:09 PM" },
        { sehriEnd: "05:03 AM", dhuhr: "12:07 PM", asr: "03:26 PM", iftar: "05:54 PM", isha: "07:09 PM" },
        { sehriEnd: "05:02 AM", dhuhr: "12:07 PM", asr: "03:26 PM", iftar: "05:55 PM", isha: "07:10 PM" },
        { sehriEnd: "05:01 AM", dhuhr: "12:06 PM", asr: "03:26 PM", iftar: "05:55 PM", isha: "07:10 PM" },
        { sehriEnd: "05:00 AM", dhuhr: "12:06 PM", asr: "03:26 PM", iftar: "05:56 PM", isha: "07:10 PM" },

        { sehriEnd: "05:00 AM", dhuhr: "12:06 PM", asr: "03:26 PM", iftar: "05:56 PM", isha: "07:11 PM" },
        { sehriEnd: "04:59 AM", dhuhr: "12:06 PM", asr: "03:27 PM", iftar: "05:57 PM", isha: "07:11 PM" },
        { sehriEnd: "04:58 AM", dhuhr: "12:06 PM", asr: "03:27 PM", iftar: "05:57 PM", isha: "07:12 PM" },
        { sehriEnd: "04:57 AM", dhuhr: "12:05 PM", asr: "03:27 PM", iftar: "05:58 PM", isha: "07:12 PM" },
        { sehriEnd: "04:56 AM", dhuhr: "12:05 PM", asr: "03:27 PM", iftar: "05:58 PM", isha: "07:12 PM" },
        { sehriEnd: "04:56 AM", dhuhr: "12:05 PM", asr: "03:27 PM", iftar: "05:58 PM", isha: "07:13 PM" },
        { sehriEnd: "04:55 AM", dhuhr: "12:05 PM", asr: "03:27 PM", iftar: "05:59 PM", isha: "07:13 PM" },
        { sehriEnd: "04:54 AM", dhuhr: "12:04 PM", asr: "03:27 PM", iftar: "05:59 PM", isha: "07:14 PM" },
        { sehriEnd: "04:53 AM", dhuhr: "12:04 PM", asr: "03:27 PM", iftar: "06:00 PM", isha: "07:14 PM" },
        { sehriEnd: "04:52 AM", dhuhr: "12:04 PM", asr: "03:27 PM", iftar: "06:00 PM", isha: "07:14 PM" },

        { sehriEnd: "04:51 AM", dhuhr: "12:04 PM", asr: "03:27 PM", iftar: "06:00 PM", isha: "07:15 PM" },
        { sehriEnd: "04:50 AM", dhuhr: "12:03 PM", asr: "03:27 PM", iftar: "06:01 PM", isha: "07:15 PM" },
        { sehriEnd: "04:49 AM", dhuhr: "12:03 PM", asr: "03:27 PM", iftar: "06:01 PM", isha: "07:15 PM" },
        { sehriEnd: "04:48 AM", dhuhr: "12:03 PM", asr: "03:26 PM", iftar: "06:01 PM", isha: "07:16 PM" },
        { sehriEnd: "04:47 AM", dhuhr: "12:03 PM", asr: "03:26 PM", iftar: "06:02 PM", isha: "07:16 PM" },
        { sehriEnd: "04:47 AM", dhuhr: "12:02 PM", asr: "03:26 PM", iftar: "06:02 PM", isha: "07:17 PM" },
        { sehriEnd: "04:46 AM", dhuhr: "12:02 PM", asr: "03:26 PM", iftar: "06:03 PM", isha: "07:17 PM" },
        { sehriEnd: "04:45 AM", dhuhr: "12:02 PM", asr: "03:26 PM", iftar: "06:03 PM", isha: "07:17 PM" },
        { sehriEnd: "04:44 AM", dhuhr: "12:01 PM", asr: "03:26 PM", iftar: "06:03 PM", isha: "07:18 PM" },
        { sehriEnd: "04:43 AM", dhuhr: "12:01 PM", asr: "03:26 PM", iftar: "06:04 PM", isha: "07:18 PM" },
    ]),

    // Khulna
    Khulna: buildDistrict([
        { sehriEnd: "05:16 AM", dhuhr: "12:17 PM", asr: "03:34 PM", iftar: "06:00 PM", isha: "07:16 PM" },
        { sehriEnd: "05:15 AM", dhuhr: "12:17 PM", asr: "03:34 PM", iftar: "06:01 PM", isha: "07:16 PM" },
        { sehriEnd: "05:15 AM", dhuhr: "12:16 PM", asr: "03:34 PM", iftar: "06:01 PM", isha: "07:16 PM" },
        { sehriEnd: "05:14 AM", dhuhr: "12:16 PM", asr: "03:34 PM", iftar: "06:02 PM", isha: "07:17 PM" },
        { sehriEnd: "05:13 AM", dhuhr: "12:16 PM", asr: "03:35 PM", iftar: "06:02 PM", isha: "07:17 PM" },
        { sehriEnd: "05:13 AM", dhuhr: "12:16 PM", asr: "03:35 PM", iftar: "06:03 PM", isha: "07:18 PM" },
        { sehriEnd: "05:12 AM", dhuhr: "12:16 PM", asr: "03:35 PM", iftar: "06:03 PM", isha: "07:18 PM" },
        { sehriEnd: "05:11 AM", dhuhr: "12:16 PM", asr: "03:35 PM", iftar: "06:04 PM", isha: "07:19 PM" },
        { sehriEnd: "05:10 AM", dhuhr: "12:16 PM", asr: "03:35 PM", iftar: "06:04 PM", isha: "07:19 PM" },
        { sehriEnd: "05:10 AM", dhuhr: "12:15 PM", asr: "03:35 PM", iftar: "06:05 PM", isha: "07:19 PM" },

        { sehriEnd: "05:09 AM", dhuhr: "12:15 PM", asr: "03:35 PM", iftar: "06:05 PM", isha: "07:20 PM" },
        { sehriEnd: "05:08 AM", dhuhr: "12:15 PM", asr: "03:36 PM", iftar: "06:06 PM", isha: "07:20 PM" },
        { sehriEnd: "05:07 AM", dhuhr: "12:15 PM", asr: "03:36 PM", iftar: "06:06 PM", isha: "07:21 PM" },
        { sehriEnd: "05:06 AM", dhuhr: "12:15 PM", asr: "03:36 PM", iftar: "06:06 PM", isha: "07:21 PM" },
        { sehriEnd: "05:06 AM", dhuhr: "12:14 PM", asr: "03:36 PM", iftar: "06:07 PM", isha: "07:22 PM" },
        { sehriEnd: "05:05 AM", dhuhr: "12:14 PM", asr: "03:36 PM", iftar: "06:07 PM", isha: "07:22 PM" },
        { sehriEnd: "05:04 AM", dhuhr: "12:14 PM", asr: "03:36 PM", iftar: "06:08 PM", isha: "07:22 PM" },
        { sehriEnd: "05:03 AM", dhuhr: "12:14 PM", asr: "03:36 PM", iftar: "06:08 PM", isha: "07:23 PM" },
        { sehriEnd: "05:02 AM", dhuhr: "12:13 PM", asr: "03:36 PM", iftar: "06:09 PM", isha: "07:23 PM" },
        { sehriEnd: "05:01 AM", dhuhr: "12:13 PM", asr: "03:36 PM", iftar: "06:09 PM", isha: "07:24 PM" },

        { sehriEnd: "05:00 AM", dhuhr: "12:13 PM", asr: "03:36 PM", iftar: "06:09 PM", isha: "07:24 PM" },
        { sehriEnd: "04:59 AM", dhuhr: "12:13 PM", asr: "03:36 PM", iftar: "06:10 PM", isha: "07:24 PM" },
        { sehriEnd: "04:58 AM", dhuhr: "12:12 PM", asr: "03:36 PM", iftar: "06:10 PM", isha: "07:25 PM" },
        { sehriEnd: "04:57 AM", dhuhr: "12:12 PM", asr: "03:36 PM", iftar: "06:11 PM", isha: "07:25 PM" },
        { sehriEnd: "04:56 AM", dhuhr: "12:12 PM", asr: "03:36 PM", iftar: "06:11 PM", isha: "07:26 PM" },
        { sehriEnd: "04:55 AM", dhuhr: "12:11 PM", asr: "03:35 PM", iftar: "06:11 PM", isha: "07:26 PM" },
        { sehriEnd: "04:54 AM", dhuhr: "12:11 PM", asr: "03:35 PM", iftar: "06:12 PM", isha: "07:26 PM" },
        { sehriEnd: "04:54 AM", dhuhr: "12:11 PM", asr: "03:35 PM", iftar: "06:12 PM", isha: "07:27 PM" },
        { sehriEnd: "04:53 AM", dhuhr: "12:11 PM", asr: "03:35 PM", iftar: "06:12 PM", isha: "07:27 PM" },
        { sehriEnd: "04:52 AM", dhuhr: "12:10 PM", asr: "03:35 PM", iftar: "06:13 PM", isha: "07:28 PM" },
    ]),

    // Mymensingh
    Mymensingh: buildDistrict([
        { sehriEnd: "05:13 AM", dhuhr: "12:13 PM", asr: "03:29 PM", iftar: "05:55 PM", isha: "07:12 PM" },
        { sehriEnd: "05:13 AM", dhuhr: "12:13 PM", asr: "03:29 PM", iftar: "05:56 PM", isha: "07:12 PM" },
        { sehriEnd: "05:12 AM", dhuhr: "12:13 PM", asr: "03:30 PM", iftar: "05:56 PM", isha: "07:13 PM" },
        { sehriEnd: "05:11 AM", dhuhr: "12:13 PM", asr: "03:30 PM", iftar: "05:57 PM", isha: "07:13 PM" },
        { sehriEnd: "05:10 AM", dhuhr: "12:13 PM", asr: "03:30 PM", iftar: "05:57 PM", isha: "07:14 PM" },
        { sehriEnd: "05:10 AM", dhuhr: "12:13 PM", asr: "03:30 PM", iftar: "05:58 PM", isha: "07:14 PM" },
        { sehriEnd: "05:09 AM", dhuhr: "12:12 PM", asr: "03:31 PM", iftar: "05:58 PM", isha: "07:14 PM" },
        { sehriEnd: "05:08 AM", dhuhr: "12:12 PM", asr: "03:31 PM", iftar: "05:59 PM", isha: "07:15 PM" },
        { sehriEnd: "05:07 AM", dhuhr: "12:12 PM", asr: "03:31 PM", iftar: "05:59 PM", isha: "07:15 PM" },
        { sehriEnd: "05:06 AM", dhuhr: "12:12 PM", asr: "03:31 PM", iftar: "06:00 PM", isha: "07:16 PM" },

        { sehriEnd: "05:05 AM", dhuhr: "12:12 PM", asr: "03:32 PM", iftar: "06:01 PM", isha: "07:16 PM" },
        { sehriEnd: "05:05 AM", dhuhr: "12:12 PM", asr: "03:32 PM", iftar: "06:01 PM", isha: "07:17 PM" },
        { sehriEnd: "05:04 AM", dhuhr: "12:11 PM", asr: "03:32 PM", iftar: "06:02 PM", isha: "07:17 PM" },
        { sehriEnd: "05:03 AM", dhuhr: "12:11 PM", asr: "03:32 PM", iftar: "06:02 PM", isha: "07:18 PM" },
        { sehriEnd: "05:02 AM", dhuhr: "12:11 PM", asr: "03:32 PM", iftar: "06:03 PM", isha: "07:18 PM" },
        { sehriEnd: "05:01 AM", dhuhr: "12:11 PM", asr: "03:32 PM", iftar: "06:03 PM", isha: "07:19 PM" },
        { sehriEnd: "05:00 AM", dhuhr: "12:10 PM", asr: "03:32 PM", iftar: "06:04 PM", isha: "07:19 PM" },
        { sehriEnd: "04:59 AM", dhuhr: "12:10 PM", asr: "03:32 PM", iftar: "06:04 PM", isha: "07:20 PM" },
        { sehriEnd: "04:58 AM", dhuhr: "12:10 PM", asr: "03:32 PM", iftar: "06:04 PM", isha: "07:20 PM" },
        { sehriEnd: "04:57 AM", dhuhr: "12:10 PM", asr: "03:32 PM", iftar: "06:05 PM", isha: "07:21 PM" },

        { sehriEnd: "04:56 AM", dhuhr: "12:09 PM", asr: "03:33 PM", iftar: "06:05 PM", isha: "07:21 PM" },
        { sehriEnd: "04:55 AM", dhuhr: "12:09 PM", asr: "03:33 PM", iftar: "06:06 PM", isha: "07:22 PM" },
        { sehriEnd: "04:54 AM", dhuhr: "12:09 PM", asr: "03:33 PM", iftar: "06:06 PM", isha: "07:22 PM" },
        { sehriEnd: "04:53 AM", dhuhr: "12:09 PM", asr: "03:33 PM", iftar: "06:07 PM", isha: "07:23 PM" },
        { sehriEnd: "04:52 AM", dhuhr: "12:08 PM", asr: "03:33 PM", iftar: "06:07 PM", isha: "07:23 PM" },
        { sehriEnd: "04:51 AM", dhuhr: "12:08 PM", asr: "03:33 PM", iftar: "06:08 PM", isha: "07:23 PM" },
        { sehriEnd: "04:50 AM", dhuhr: "12:08 PM", asr: "03:32 PM", iftar: "06:08 PM", isha: "07:24 PM" },
        { sehriEnd: "04:49 AM", dhuhr: "12:08 PM", asr: "03:32 PM", iftar: "06:09 PM", isha: "07:24 PM" },
        { sehriEnd: "04:48 AM", dhuhr: "12:07 PM", asr: "03:32 PM", iftar: "06:09 PM", isha: "07:25 PM" },
        { sehriEnd: "04:47 AM", dhuhr: "12:07 PM", asr: "03:32 PM", iftar: "06:09 PM", isha: "07:25 PM" },
    ]),

    // Sylhet
    Sylhet: buildDistrict([
        { sehriEnd: "05:07 AM", dhuhr: "12:07 PM", asr: "03:23 PM", iftar: "05:49 PM", isha: "07:06 PM" },
        { sehriEnd: "05:07 AM", dhuhr: "12:07 PM", asr: "03:23 PM", iftar: "05:50 PM", isha: "07:06 PM" },
        { sehriEnd: "05:06 AM", dhuhr: "12:07 PM", asr: "03:24 PM", iftar: "05:50 PM", isha: "07:07 PM" },
        { sehriEnd: "05:05 AM", dhuhr: "12:07 PM", asr: "03:24 PM", iftar: "05:51 PM", isha: "07:07 PM" },
        { sehriEnd: "05:05 AM", dhuhr: "12:07 PM", asr: "03:24 PM", iftar: "05:51 PM", isha: "07:08 PM" },
        { sehriEnd: "05:04 AM", dhuhr: "12:07 PM", asr: "03:25 PM", iftar: "05:52 PM", isha: "07:08 PM" },
        { sehriEnd: "05:03 AM", dhuhr: "12:07 PM", asr: "03:25 PM", iftar: "05:52 PM", isha: "07:09 PM" },
        { sehriEnd: "05:02 AM", dhuhr: "12:06 PM", asr: "03:25 PM", iftar: "05:53 PM", isha: "07:09 PM" },
        { sehriEnd: "05:01 AM", dhuhr: "12:06 PM", asr: "03:25 PM", iftar: "05:54 PM", isha: "07:10 PM" },
        { sehriEnd: "05:00 AM", dhuhr: "12:06 PM", asr: "03:25 PM", iftar: "05:54 PM", isha: "07:10 PM" },

        { sehriEnd: "05:00 AM", dhuhr: "12:06 PM", asr: "03:26 PM", iftar: "05:55 PM", isha: "07:11 PM" },
        { sehriEnd: "04:59 AM", dhuhr: "12:06 PM", asr: "03:26 PM", iftar: "05:55 PM", isha: "07:11 PM" },
        { sehriEnd: "04:58 AM", dhuhr: "12:05 PM", asr: "03:26 PM", iftar: "05:56 PM", isha: "07:12 PM" },
        { sehriEnd: "04:57 AM", dhuhr: "12:05 PM", asr: "03:26 PM", iftar: "05:56 PM", isha: "07:12 PM" },
        { sehriEnd: "04:56 AM", dhuhr: "12:05 PM", asr: "03:26 PM", iftar: "05:57 PM", isha: "07:12 PM" },
        { sehriEnd: "04:55 AM", dhuhr: "12:05 PM", asr: "03:26 PM", iftar: "05:57 PM", isha: "07:13 PM" },
        { sehriEnd: "04:54 AM", dhuhr: "12:05 PM", asr: "03:26 PM", iftar: "05:58 PM", isha: "07:13 PM" },
        { sehriEnd: "04:53 AM", dhuhr: "12:04 PM", asr: "03:26 PM", iftar: "05:58 PM", isha: "07:14 PM" },
        { sehriEnd: "04:52 AM", dhuhr: "12:04 PM", asr: "03:27 PM", iftar: "05:59 PM", isha: "07:14 PM" },
        { sehriEnd: "04:51 AM", dhuhr: "12:04 PM", asr: "03:27 PM", iftar: "05:59 PM", isha: "07:15 PM" },

        { sehriEnd: "04:50 AM", dhuhr: "12:04 PM", asr: "03:27 PM", iftar: "06:00 PM", isha: "07:15 PM" },
        { sehriEnd: "04:49 AM", dhuhr: "12:03 PM", asr: "03:27 PM", iftar: "06:00 PM", isha: "07:16 PM" },
        { sehriEnd: "04:48 AM", dhuhr: "12:03 PM", asr: "03:27 PM", iftar: "06:00 PM", isha: "07:16 PM" },
        { sehriEnd: "04:47 AM", dhuhr: "12:03 PM", asr: "03:27 PM", iftar: "06:01 PM", isha: "07:17 PM" },
        { sehriEnd: "04:46 AM", dhuhr: "12:03 PM", asr: "03:27 PM", iftar: "06:01 PM", isha: "07:17 PM" },
        { sehriEnd: "04:45 AM", dhuhr: "12:02 PM", asr: "03:27 PM", iftar: "06:02 PM", isha: "07:18 PM" },
        { sehriEnd: "04:44 AM", dhuhr: "12:02 PM", asr: "03:27 PM", iftar: "06:02 PM", isha: "07:18 PM" },
        { sehriEnd: "04:43 AM", dhuhr: "12:02 PM", asr: "03:27 PM", iftar: "06:03 PM", isha: "07:19 PM" },
        { sehriEnd: "04:42 AM", dhuhr: "12:01 PM", asr: "03:27 PM", iftar: "06:03 PM", isha: "07:19 PM" },
        { sehriEnd: "04:41 AM", dhuhr: "12:01 PM", asr: "03:27 PM", iftar: "06:04 PM", isha: "07:20 PM" },
    ]),

    // Barishal
    Barishal: buildDistrict([
        { sehriEnd: "05:13 AM", dhuhr: "12:13 PM", asr: "03:30 PM", iftar: "05:57 PM", isha: "07:12 PM" },
        { sehriEnd: "05:12 AM", dhuhr: "12:13 PM", asr: "03:31 PM", iftar: "05:58 PM", isha: "07:13 PM" },
        { sehriEnd: "05:11 AM", dhuhr: "12:13 PM", asr: "03:31 PM", iftar: "05:58 PM", isha: "07:13 PM" },
        { sehriEnd: "05:11 AM", dhuhr: "12:13 PM", asr: "03:31 PM", iftar: "05:59 PM", isha: "07:14 PM" },
        { sehriEnd: "05:10 AM", dhuhr: "12:13 PM", asr: "03:31 PM", iftar: "05:59 PM", isha: "07:14 PM" },
        { sehriEnd: "05:09 AM", dhuhr: "12:13 PM", asr: "03:32 PM", iftar: "06:00 PM", isha: "07:15 PM" },
        { sehriEnd: "05:09 AM", dhuhr: "12:13 PM", asr: "03:32 PM", iftar: "06:00 PM", isha: "07:15 PM" },
        { sehriEnd: "05:08 AM", dhuhr: "12:12 PM", asr: "03:32 PM", iftar: "06:01 PM", isha: "07:15 PM" },
        { sehriEnd: "05:07 AM", dhuhr: "12:12 PM", asr: "03:32 PM", iftar: "06:01 PM", isha: "07:16 PM" },
        { sehriEnd: "05:06 AM", dhuhr: "12:12 PM", asr: "03:32 PM", iftar: "06:01 PM", isha: "07:16 PM" },

        { sehriEnd: "05:06 AM", dhuhr: "12:12 PM", asr: "03:32 PM", iftar: "06:02 PM", isha: "07:17 PM" },
        { sehriEnd: "05:05 AM", dhuhr: "12:12 PM", asr: "03:32 PM", iftar: "06:02 PM", isha: "07:17 PM" },
        { sehriEnd: "05:04 AM", dhuhr: "12:11 PM", asr: "03:32 PM", iftar: "06:03 PM", isha: "07:17 PM" },
        { sehriEnd: "05:03 AM", dhuhr: "12:11 PM", asr: "03:32 PM", iftar: "06:03 PM", isha: "07:18 PM" },
        { sehriEnd: "05:02 AM", dhuhr: "12:11 PM", asr: "03:33 PM", iftar: "06:04 PM", isha: "07:18 PM" },
        { sehriEnd: "05:01 AM", dhuhr: "12:11 PM", asr: "03:33 PM", iftar: "06:04 PM", isha: "07:19 PM" },
        { sehriEnd: "05:01 AM", dhuhr: "12:11 PM", asr: "03:33 PM", iftar: "06:04 PM", isha: "07:19 PM" },
        { sehriEnd: "05:00 AM", dhuhr: "12:10 PM", asr: "03:33 PM", iftar: "06:05 PM", isha: "07:19 PM" },
        { sehriEnd: "04:59 AM", dhuhr: "12:10 PM", asr: "03:33 PM", iftar: "06:05 PM", isha: "07:20 PM" },
        { sehriEnd: "04:58 AM", dhuhr: "12:10 PM", asr: "03:33 PM", iftar: "06:06 PM", isha: "07:20 PM" },

        { sehriEnd: "04:57 AM", dhuhr: "12:10 PM", asr: "03:33 PM", iftar: "06:06 PM", isha: "07:21 PM" },
        { sehriEnd: "04:56 AM", dhuhr: "12:09 PM", asr: "03:33 PM", iftar: "06:07 PM", isha: "07:21 PM" },
        { sehriEnd: "04:55 AM", dhuhr: "12:09 PM", asr: "03:32 PM", iftar: "06:07 PM", isha: "07:21 PM" },
        { sehriEnd: "04:54 AM", dhuhr: "12:09 PM", asr: "03:32 PM", iftar: "06:07 PM", isha: "07:22 PM" },
        { sehriEnd: "04:53 AM", dhuhr: "12:09 PM", asr: "03:32 PM", iftar: "06:08 PM", isha: "07:22 PM" },
        { sehriEnd: "04:52 AM", dhuhr: "12:08 PM", asr: "03:32 PM", iftar: "06:08 PM", isha: "07:23 PM" },
        { sehriEnd: "04:51 AM", dhuhr: "12:08 PM", asr: "03:32 PM", iftar: "06:08 PM", isha: "07:23 PM" },
        { sehriEnd: "04:50 AM", dhuhr: "12:08 PM", asr: "03:32 PM", iftar: "06:09 PM", isha: "07:23 PM" },
        { sehriEnd: "04:49 AM", dhuhr: "12:07 PM", asr: "03:32 PM", iftar: "06:09 PM", isha: "07:24 PM" },
        { sehriEnd: "04:48 AM", dhuhr: "12:07 PM", asr: "03:32 PM", iftar: "06:10 PM", isha: "07:24 PM" },
    ]),

    // Rangpur
    Rangpur: buildDistrict([
        { sehriEnd: "05:18 AM", dhuhr: "12:18 PM", asr: "03:33 PM", iftar: "05:59 PM", isha: "07:16 PM" },
        { sehriEnd: "05:18 AM", dhuhr: "12:18 PM", asr: "03:33 PM", iftar: "05:59 PM", isha: "07:16 PM" },
        { sehriEnd: "05:17 AM", dhuhr: "12:18 PM", asr: "03:34 PM", iftar: "06:00 PM", isha: "07:17 PM" },
        { sehriEnd: "05:16 AM", dhuhr: "12:18 PM", asr: "03:34 PM", iftar: "06:01 PM", isha: "07:17 PM" },
        { sehriEnd: "05:15 AM", dhuhr: "12:17 PM", asr: "03:34 PM", iftar: "06:01 PM", isha: "07:18 PM" },
        { sehriEnd: "05:14 AM", dhuhr: "12:17 PM", asr: "03:35 PM", iftar: "06:02 PM", isha: "07:18 PM" },
        { sehriEnd: "05:14 AM", dhuhr: "12:17 PM", asr: "03:35 PM", iftar: "06:02 PM", isha: "07:19 PM" },
        { sehriEnd: "05:13 AM", dhuhr: "12:17 PM", asr: "03:35 PM", iftar: "06:03 PM", isha: "07:20 PM" },
        { sehriEnd: "05:12 AM", dhuhr: "12:17 PM", asr: "03:35 PM", iftar: "06:03 PM", isha: "07:20 PM" },
        { sehriEnd: "05:11 AM", dhuhr: "12:17 PM", asr: "03:36 PM", iftar: "06:04 PM", isha: "07:21 PM" },

        { sehriEnd: "05:10 AM", dhuhr: "12:16 PM", asr: "03:36 PM", iftar: "06:05 PM", isha: "07:21 PM" },
        { sehriEnd: "05:09 AM", dhuhr: "12:16 PM", asr: "03:36 PM", iftar: "06:05 PM", isha: "07:22 PM" },
        { sehriEnd: "05:08 AM", dhuhr: "12:16 PM", asr: "03:36 PM", iftar: "06:06 PM", isha: "07:22 PM" },
        { sehriEnd: "05:07 AM", dhuhr: "12:16 PM", asr: "03:36 PM", iftar: "06:06 PM", isha: "07:23 PM" },
        { sehriEnd: "05:06 AM", dhuhr: "12:16 PM", asr: "03:36 PM", iftar: "06:07 PM", isha: "07:23 PM" },
        { sehriEnd: "05:05 AM", dhuhr: "12:15 PM", asr: "03:37 PM", iftar: "06:07 PM", isha: "07:24 PM" },
        { sehriEnd: "05:05 AM", dhuhr: "12:15 PM", asr: "03:37 PM", iftar: "06:08 PM", isha: "07:24 PM" },
        { sehriEnd: "05:04 AM", dhuhr: "12:15 PM", asr: "03:37 PM", iftar: "06:08 PM", isha: "07:25 PM" },
        { sehriEnd: "05:03 AM", dhuhr: "12:15 PM", asr: "03:37 PM", iftar: "06:09 PM", isha: "07:25 PM" },
        { sehriEnd: "05:02 AM", dhuhr: "12:14 PM", asr: "03:37 PM", iftar: "06:09 PM", isha: "07:26 PM" },

        { sehriEnd: "05:01 AM", dhuhr: "12:14 PM", asr: "03:37 PM", iftar: "06:10 PM", isha: "07:26 PM" },
        { sehriEnd: "04:59 AM", dhuhr: "12:14 PM", asr: "03:37 PM", iftar: "06:10 PM", isha: "07:27 PM" },
        { sehriEnd: "04:58 AM", dhuhr: "12:14 PM", asr: "03:37 PM", iftar: "06:11 PM", isha: "07:27 PM" },
        { sehriEnd: "04:57 AM", dhuhr: "12:13 PM", asr: "03:37 PM", iftar: "06:11 PM", isha: "07:28 PM" },
        { sehriEnd: "04:56 AM", dhuhr: "12:13 PM", asr: "03:37 PM", iftar: "06:12 PM", isha: "07:28 PM" },
        { sehriEnd: "04:55 AM", dhuhr: "12:13 PM", asr: "03:37 PM", iftar: "06:12 PM", isha: "07:29 PM" },
        { sehriEnd: "04:54 AM", dhuhr: "12:12 PM", asr: "03:37 PM", iftar: "06:13 PM", isha: "07:29 PM" },
        { sehriEnd: "04:53 AM", dhuhr: "12:12 PM", asr: "03:37 PM", iftar: "06:13 PM", isha: "07:30 PM" },
        { sehriEnd: "04:52 AM", dhuhr: "12:12 PM", asr: "03:37 PM", iftar: "06:14 PM", isha: "07:30 PM" },
        { sehriEnd: "04:51 AM", dhuhr: "12:12 PM", asr: "03:37 PM", iftar: "06:14 PM", isha: "07:31 PM" },
    ]),
};

// ✅ export the object (district -> array)
export const RAMADAN_BY_DISTRICT = RAMADAN_2026_BY_DISTRICT;
// ✅ export the array (backward compatible for Salah / old pages)
export const RAMADAN_2026 = RAMADAN_2026_BY_DISTRICT.Dhaka;

// helper: format local date to YYYY-MM-DD
export function toYMD(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}
