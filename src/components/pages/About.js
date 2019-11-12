import React from "react";

export default function About() {
    return (
        <div style={{ paddingLeft: "20px" }}>
            <h3>About Contact Manager</h3>
            <div style={{ maxWidth: "300px" }}>
                <div className="card-panel blue lighten-4">
                    <span>Simple app to hold contacts.</span>
                </div>
                <div className="card-panel">
                    <span className="blue-text text-darken-2">
                        Version 1.0.0
                    </span>
                </div>
            </div>
        </div>
    );
}
