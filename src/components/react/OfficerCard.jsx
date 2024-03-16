import React from "react";

const OfficerCard = ({ picture, name, position, email }) => (
    <div className={`flex flex-col items-center w-64 rounded-lg  `}>
        <img
            className="w-26 h-auto sm:h-64 object-cover rounded-3xl"
            src={picture}
            alt={`Picture of ${name}`}
        />
        <div className="p-4">
            <h3 className="text-lg font-bold text-center">{name}</h3>
            <p className="text-center text-sm text-gray-600">{position}</p>
            <a
                href={`mailto:${email}`}
                className="block text-center mt-2 text-sm text-blue-500 hover:underline"
            >
                {email}
            </a>
        </div>
    </div>
);

export default OfficerCard;
