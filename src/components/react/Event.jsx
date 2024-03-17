// Event.jsx
import React from "react";
function stripHtml(html) {
    return html.replace(/<\/?[^>]+(>|$)/g, "");
}
const Event = ({
    index,
    name,
    description,
    location,
    start,
    end,
    month,
    day,
    year,
}) => {
    return (
        <div class="flex flex-col md:relative md:before:absolute md:before:top-2 md:before:w-4 md:before:h-4 md:before:rounded-full md:before:left-[-35px] md:before:z-[1] before:bg-ieee">
            <h3 class="text-xl font-semibold tracking-wide">{name}</h3>
            <time class="text-xs tracking-wide  text-gray-400">
                <div>
                    {start} to {end}
                </div>
                <div>Location: {location ? location : "N/A"} </div>
            </time>
            <div className="event-description mt-2 text-gray-600">
                {description
                    ? stripHtml(description)
                    : "No description provided."}
            </div>
        </div>
    );
};

export default Event;
