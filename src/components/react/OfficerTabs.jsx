import React, { useState } from "react";
import OfficerCard from "./OfficerCard.jsx";
import { AnimatePresence } from "framer-motion";

const OfficerTabs = ({ officers }) => {
    const [selectedType, setSelectedType] = useState("All");

    const uniqueTypes = [
        "All",
        ...new Set(officers.flatMap((officer) => officer.type || [])),
    ];

    const filteredOfficers =
        selectedType === "All"
            ? officers
            : officers.filter((officer) =>
                  officer.type?.includes(selectedType)
              );

    return (
        <div>
            <div className="tabs flex justify-center items-center">
                {uniqueTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`px-5 py-1 border-b-2 ${
                            selectedType === type
                                ? "border-ieee"
                                : "hover:border-ieee"
                        }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div
                key={selectedType}
                className="officers flex-row flex flex-wrap items-center justify-center space-x-16 p-12"
            >
                {filteredOfficers.map((officer) => (
                    <OfficerCard key={officer.email} {...officer} />
                ))}
            </div>
        </div>
    );
};

export default OfficerTabs;
