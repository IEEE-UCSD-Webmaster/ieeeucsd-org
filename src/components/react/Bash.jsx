// src/components/Main.jsx
import React from "react";
import ReactDom from "react-dom";

class Main extends React.Component {
    render() {
        const bashSlidesPath = "/bash_slides/index.html";
        return (
            <iframe
                src={bashSlidesPath}
                style={{ width: "100%", height: "100vh" }}
            ></iframe>
        );
    }
}

export default Main;
