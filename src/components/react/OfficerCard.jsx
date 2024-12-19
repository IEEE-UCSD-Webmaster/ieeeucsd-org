import React from "react";

const OfficerCard = ({
    picture,
    name,
    position,
    email,
    onMustahsinClicked,
}) => {
    const [imageSrc, setImageSrc] = React.useState(
        "https://placehold.co/500?text=IEEE%20@%20UCSD"
    );

    const handleImageClick = () => {
        if (name === "Mustahsin Zarif") {
            onMustahsinClicked();
        }
    };

    React.useEffect(() => {
        if (picture) {
            const img = new Image();
            img.onload = () => {
                setImageSrc(picture);
            };
            img.src = picture;
        }
    }, [picture]);

    return (
        <div
            className={`flex flex-col justify-center content-center mx-12 items-center w-64 rounded-lg`}
        >
            <img
                className="w-26 h-auto sm:h-64 object-cover rounded-3xl cursor-pointer"
                src={imageSrc}
                alt={`Picture of ${name}`}
                onClick={handleImageClick}
                loading="eager"
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
};

export default OfficerCard;
