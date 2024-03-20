// src/components/Main.jsx
import React from "react";
import ReactDom from "react-dom";

class Bash extends React.Component {
    render() {
        const bashSlidesPath = "/bash/index.html";
        return (
            <iframe
                src={bashSlidesPath}
                style={{ width: "100%", height: "100vh" }}
            ></iframe>
        );
    }
}

export default Bash;
