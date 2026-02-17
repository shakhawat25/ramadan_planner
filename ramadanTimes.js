export const RAMADAN_2026 = [
    { day: 1, ymd: "2026-02-19", date: "Feb 19", dow: "Thursday", sehriEnd: "05:12 AM", iftar: "05:58 PM" },
    { day: 2, ymd: "2026-02-20", date: "Feb 20", dow: "Friday", sehriEnd: "05:11 AM", iftar: "05:58 PM" },
    { day: 3, ymd: "2026-02-21", date: "Feb 21", dow: "Saturday", sehriEnd: "05:11 AM", iftar: "05:59 PM" },
    { day: 4, ymd: "2026-02-22", date: "Feb 22", dow: "Sunday", sehriEnd: "05:10 AM", iftar: "05:59 PM" },
    { day: 5, ymd: "2026-02-23", date: "Feb 23", dow: "Monday", sehriEnd: "05:09 AM", iftar: "06:00 PM" },
    { day: 6, ymd: "2026-02-24", date: "Feb 24", dow: "Tuesday", sehriEnd: "05:08 AM", iftar: "06:00 PM" },
    { day: 7, ymd: "2026-02-25", date: "Feb 25", dow: "Wednesday", sehriEnd: "05:08 AM", iftar: "06:01 PM" },
    { day: 8, ymd: "2026-02-26", date: "Feb 26", dow: "Thursday", sehriEnd: "05:07 AM", iftar: "06:01 PM" },
    { day: 9, ymd: "2026-02-27", date: "Feb 27", dow: "Friday", sehriEnd: "05:06 AM", iftar: "06:02 PM" },
    { day: 10, ymd: "2026-02-28", date: "Feb 28", dow: "Saturday", sehriEnd: "05:05 AM", iftar: "06:02 PM" },

    { day: 11, ymd: "2026-03-01", date: "Mar 1", dow: "Sunday", sehriEnd: "05:05 AM", iftar: "06:03 PM" },
    { day: 12, ymd: "2026-03-02", date: "Mar 2", dow: "Monday", sehriEnd: "05:04 AM", iftar: "06:03 PM" },
    { day: 13, ymd: "2026-03-03", date: "Mar 3", dow: "Tuesday", sehriEnd: "05:03 AM", iftar: "06:04 PM" },
    { day: 14, ymd: "2026-03-04", date: "Mar 4", dow: "Wednesday", sehriEnd: "05:02 AM", iftar: "06:04 PM" },
    { day: 15, ymd: "2026-03-05", date: "Mar 5", dow: "Thursday", sehriEnd: "05:01 AM", iftar: "06:05 PM" },
    { day: 16, ymd: "2026-03-06", date: "Mar 6", dow: "Friday", sehriEnd: "05:00 AM", iftar: "06:05 PM" },
    { day: 17, ymd: "2026-03-07", date: "Mar 7", dow: "Saturday", sehriEnd: "04:59 AM", iftar: "06:06 PM" },
    { day: 18, ymd: "2026-03-08", date: "Mar 8", dow: "Sunday", sehriEnd: "04:58 AM", iftar: "06:06 PM" },
    { day: 19, ymd: "2026-03-09", date: "Mar 9", dow: "Monday", sehriEnd: "04:57 AM", iftar: "06:07 PM" },
    { day: 20, ymd: "2026-03-10", date: "Mar 10", dow: "Tuesday", sehriEnd: "04:57 AM", iftar: "06:07 PM" },

    { day: 21, ymd: "2026-03-11", date: "Mar 11", dow: "Wednesday", sehriEnd: "04:56 AM", iftar: "06:07 PM" },
    { day: 22, ymd: "2026-03-12", date: "Mar 12", dow: "Thursday", sehriEnd: "04:55 AM", iftar: "06:08 PM" },
    { day: 23, ymd: "2026-03-13", date: "Mar 13", dow: "Friday", sehriEnd: "04:54 AM", iftar: "06:08 PM" },
    { day: 24, ymd: "2026-03-14", date: "Mar 14", dow: "Saturday", sehriEnd: "04:53 AM", iftar: "06:09 PM" },
    { day: 25, ymd: "2026-03-15", date: "Mar 15", dow: "Sunday", sehriEnd: "04:52 AM", iftar: "06:09 PM" },
    { day: 26, ymd: "2026-03-16", date: "Mar 16", dow: "Monday", sehriEnd: "04:51 AM", iftar: "06:10 PM" },
    { day: 27, ymd: "2026-03-17", date: "Mar 17", dow: "Tuesday", sehriEnd: "04:50 AM", iftar: "06:10 PM" },
    { day: 28, ymd: "2026-03-18", date: "Mar 18", dow: "Wednesday", sehriEnd: "04:49 AM", iftar: "06:10 PM" },
    { day: 29, ymd: "2026-03-19", date: "Mar 19", dow: "Thursday", sehriEnd: "04:48 AM", iftar: "06:11 PM" },
    { day: 30, ymd: "2026-03-20", date: "Mar 20", dow: "Friday", sehriEnd: "04:47 AM", iftar: "06:11 PM" }, // inferred
];

// helper: format local date to YYYY-MM-DD
export function toYMD(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}
