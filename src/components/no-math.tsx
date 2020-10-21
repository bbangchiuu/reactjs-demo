import React from "react";
import {
    useLocation
} from "react-router-dom";

export default function () {
    let location = useLocation();

    return (
        <div>
            <h1>404</h1>
            <h3>
                No match for <code>{location.pathname}</code>
            </h3>
        </div>
    );
}