"use client";

import React from "react";

class About extends React.Component {
    render() {
        return (
            <div id="about" className="flex flex-col gap-y-6">
                <span>I&apos;m an <b>organized and self-taught</b> software engineer student at Universidad Veracruzana, I&apos;m a <b>fullstack dev</b> and I love building web and mobile apps.</span>
                <span>Here are some technologies I have worked with: </span>

                <div id="techs" className="grid grid-cols-2">
                    <p>Javascript</p>
                    <p>React.js</p>
                    <p>Node.js</p>
                    <p>Git</p>
                    <p>HTML / CSS</p>
                    <p>Tailwind</p>
                    <p>Python</p> 
                    <p>Flutter</p>
                </div>

            </div>
        );
    }
}

export default About;
