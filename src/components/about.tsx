"use client";

import React from "react";

interface TechComponent {
    icon: string,
    tech: string,
}

interface Tech {
    [key: string]: TechComponent;
}

const tech: Tech = {
    javascript: {
        icon: "javascript",
        tech: "Javascript",
    },
    react: {
        icon: "react",
        tech: "React",
    },
    node: {
        icon: "nodejs",
        tech: "Node.js",
    },
    git: {
        icon: "git",
        tech: "Git",
    },
    html: {
        icon: "html",
        tech: "HTML",
    },
    css: {
        icon: "css",
        tech: "CSS",
    },
    tailwind: {
        icon: "tailwind",
        tech: "Tailwind",
    },
    python: {
        icon: "python",
        tech: "Python",
    },
    flutter: {
        icon: "flutter",
        tech: "Flutter",
    }
};


class RowOfTech extends React.Component<TechComponent> {
    render() {
        const { icon, tech } = this.props;
        return (
            <li className='flex flex-row items-center hover:!opacity-100 group-hover/list:opacity-15 py-2 px-2'>
                <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} />
                <p className="ml-2">{tech}</p>
            </li>
        );
    }
}

class About extends React.Component {
    render() {

        return (
            <div id="about" className="flex flex-col gap-y-6 text-textColor text-justify text-base lg:text-lg">
                <span>I&apos;m an <b>organized and self-taught fullstack dev</b> and I love building web and mobile apps.</span>
                <span>My interest in tech borned in 2019 when my dad bought me a python book, with it I discover my passion to develop new things with the help of awesome technologies, then I realized I like to create the front end and back end of apps so I became a full stack dev. In these days my main focus is to create well crafted software products that can help people with their daily tasks or goals.</span>
                <span>Here are some technologies I have worked with: </span>

                <ul id="techs" className="group/list grid grid-cols-2 lg:grid-cols-3 gap-6 mb-5 lg:mb-10">
                    {Object.keys(tech).map((key, _) => (
                        <RowOfTech
                            key={key}
                            icon={tech[key]["icon"]}
                            tech={tech[key]["tech"]}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}
export default About;
