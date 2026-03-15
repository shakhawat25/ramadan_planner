import React, { useMemo } from "react";
import { RAMADAN_BY_DISTRICT } from "../data/ramadanTimes";

export default function Times() {
    // Get district from localStorage (same as Home.jsx)
    const district = localStorage.getItem("district") || "Dhaka";

    // Get the district-specific data
    const districtData = useMemo(() => {
        return RAMADAN_BY_DISTRICT[district] || RAMADAN_BY_DISTRICT.Dhaka;
    }, [district]);


    return (
        <div className="wrap">
            <div className="card pageCard">
                <div className="pageTitle">Times - {district}</div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>DAY</th>
                            <th>DATE</th>
                            <th>SEHRI ENDS</th>
                            <th>IFTAR TIME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {districtData.map((r) => (
                            <tr key={r.day}>
                                <td>{r.day}</td>
                                <td>{r.date}</td>
                                <td>{r.sehriEnd}</td>
                                <td className="if">{r.iftar}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <p style={{ marginTop: 14, color: "#6a7b70", fontWeight: 700 }}>
                    Showing times for {district} district
                </p>
            </div>
        </div>
    );
}
