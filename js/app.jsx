import React from "react";
import App from "./components/app";


if (typeof window !== "undefined") {
    window.onload = function() {
        React.render(<App />, document.getElementById("container"));
    };
}
