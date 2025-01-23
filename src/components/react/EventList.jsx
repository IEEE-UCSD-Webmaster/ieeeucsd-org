import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Event from "./Event";

const EventList = ({ CALENDAR_API_KEY }) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = CALENDAR_API_KEY;
        const calendarId =
            "c_2bips5sphnrpa8ui4ike6k4b1s@group.calendar.google.com";
        const userTimeZone = "America/Los_Angeles";

        const loadGapiAndListEvents = () => {
            return new Promise((resolve, reject) => {
                if (typeof window.gapi === "undefined") {
                    const script = document.createElement("script");
                    script.src = "https://apis.google.com/js/api.js";
                    document.body.appendChild(script);
                    script.onload = () => {
                        window.gapi.load("client", resolve);
                    };
                    script.onerror = (error) => {
                        reject(
                            new Error("Failed to load the Google API script.")
                        );
                    };
                } else {
                    window.gapi.load("client", resolve);
                }
            })
                .then(() => {
                    return gapi.client.init({
                        apiKey: apiKey,
                        discoveryDocs: [
                            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
                        ],
                    });
                })
                .then(() => {
                    return gapi.client.calendar.events.list({
                        calendarId: calendarId,
                        timeZone: userTimeZone,
                        singleEvents: true,
                        timeMin: new Date().toISOString(),
                        maxResults: 10,
                        orderBy: "startTime",
                    });
                })
                .then((response) => {
                    if (
                        response.result.items &&
                        response.result.items.length > 0
                    ) {
                        setEvents(response.result.items);
                    } else {
                        setError("No upcoming events found.");
                    }
                })
                .catch((error) => {
                    console.error("Error: ", error.message);
                    setError(error.message);
                });
        };

        setLoading(true);
        loadGapiAndListEvents().finally(() => {
            setLoading(false);
        });
    }, []);
    if (events.length === 0) {
        return (
            <div class="m-8">
                <div class="container max-w-5xl px-4 py-12 mx-auto">
                    <div class="grid gap-4 mx-4 md:grid-cols-12">
                        <div class="col-span-12 md:col-span-3">
                            <div class="text-center md:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto md:before:mx-0 before:bg-ieee">
                                <h3 class="text-3xl font-semibold">
                                    Upcoming Events
                                </h3>
                                <span class="text-sm font-bold tracking-wider uppercase text-gray-400">
                                    Scroll down to see the upcoming events for
                                    IEEE!
                                </span>
                            </div>
                        </div>

                        <div class="relative col-span-12 px-4 space-y-6 md:col-span-9">
                            <div class="col-span-12 space-y-12 relative px-4 md:col-span-8 md:space-y-8 md:before:absolute md:before:top-2 md:before:bottom-0 md:before:w-0.5 md:before:-left-3 before:bg-gray-700">
                                <div class="flex flex-col md:relative md:before:absolute md:before:top-2 md:before:w-4 md:before:h-4 md:before:rounded-full md:before:left-[-35px] md:before:z-[1] before:bg-ieee">
                                    <h3 class="text-xl font-semibold tracking-wide">
                                        No Upcoming Events!
                                    </h3>
                                    <time class="text-xs tracking-wide  text-gray-400">
                                        <div>¯\_(ツ)_/¯ </div>
                                    </time>
                                    <div className="event-description mt-2 text-gray-600">
                                        <div>
                                            There are no upcoming events! Check
                                            back again soon :)
                                        </div>
                                        <div>
                                            ...or just wait for the entire page
                                            to load. This is here by default LOL
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div class="m-8">
            <div class="container max-w-5xl px-4 py-12 mx-auto">
                <div class="grid gap-4 mx-4 md:grid-cols-12">
                    <div class="col-span-12 md:col-span-3">
                        <div class="text-center md:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto md:before:mx-0 before:bg-ieee">
                            <h3 class="text-3xl font-semibold">
                                Upcoming Events
                            </h3>
                            <span class="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                                Scroll down to see the upcoming events for IEEE!
                            </span>
                        </div>
                    </div>

                    <div class="relative col-span-12 px-4 space-y-6 md:col-span-9">
                        <div class="col-span-12 space-y-12 relative px-4 md:col-span-8 md:space-y-8 md:before:absolute md:before:top-2 md:before:bottom-0 md:before:w-0.5 md:before:-left-3 before:dark:bg-gray-700">
                            {events.map((event, index) => {
                                const startDate = moment(event.start.dateTime);
                                const month = startDate.format("MMMM");
                                const day = startDate.format("D");
                                const year = startDate.format("YYYY");

                                const startsAt =
                                    startDate.format("L") +
                                    " " +
                                    startDate.format("LT");
                                const endsAt = moment(
                                    event.end.dateTime
                                ).format("LT");

                                return (
                                    <Event
                                        key={index}
                                        name={event.summary}
                                        description={
                                            event.description ||
                                            "No description provided."
                                        }
                                        location={
                                            event.location ||
                                            "No location provided."
                                        }
                                        start={startsAt}
                                        end={endsAt}
                                        month={month}
                                        day={day}
                                        year={year}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventList;
