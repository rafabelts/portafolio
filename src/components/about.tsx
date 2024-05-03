"use client";

import React from "react";

class About extends React.Component {
    render() {
        return (
            <div id="about" className="flex flex-col gap-y-6 text-textColor">
                <span>I&apos;m an <b>organized and self-taught fullstack dev</b> and I love building web and mobile apps.</span>
                <span>My interest in tech borned in 2019 when my dad bought me a python book, with it I discover my passion to develop new things with the help of awesome technologies, then I realized I like to create the front end and back end of apps so I became a full stack dev. In these days my main focus is to create well crafted software products that can help people with its daily tasks or goals.</span>
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
