import React, { useState } from "react";
import OfficerCard from "./OfficerCard.jsx";
import { AnimatePresence } from "framer-motion";

const OfficerTabs = ({ officers }) => {
    const [selectedType, setSelectedType] = useState("All");
    const [mustahsinClickCount, setMustahsinClickCount] = useState(0);
    const [useMustahsinImage, setUseMustahsinImage] = useState(false);

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

    const handleMustahsinClicked = () => {
        const newCount = mustahsinClickCount + 1;
        setMustahsinClickCount(newCount);

        if (newCount >= 5) {
            setUseMustahsinImage(true);
        }
    };

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
                className="officers flex-row flex flex-wrap flex-none items-center justify-center p-12"
            >
                {filteredOfficers.map((officer) => (
                    <OfficerCard
                        key={officer.email}
                        {...officer}
                        picture={
                            useMustahsinImage
                                ? "/officers/mustahsin.jpg"
                                : officer.picture
                        }
                        onMustahsinClicked={handleMustahsinClicked}
                    />
                ))}
            </div>
        </div>
    );
};

export default OfficerTabs;
