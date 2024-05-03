"use client";

import React from "react";
import OctoContaImage from "../../public/octocontaLogo.png"
import Image from "next/image";
import { abort } from "process";

interface ProjectData {
    image: string;
    title: string;
    techStack: string;
    about: string;
}


class ProjectsInfo extends React.Component<ProjectData> {
    render() {
        const { image, title, techStack, about } = this.props;

        return (
            <div id="schoolTitle" className="relative rounded-lg mb-12">
                <center>
                    <Image src={image} className="rounded-xl opacity-70 h-[20%] w-[60%]" alt={image} width={450} height={450} />
                    <div className="absolute top-[40%] w-[40%] text-left p-2 bg-container">
                        <h2 className="text-4xl font-semibold"> {title} </h2>
                        <p className="text-greenPerry text-base"> {techStack} </p>
                    </div>
                </center>
            </div>

        );
    }

}
type Data = {
    [key: string]: any;
}
const projectsData: Data = {
    "OctoConta": {
        image: "/assets/octocontaLogo.png",
        title: "OctoConta",
        techStack: "Flutter and Firebase",
        about: "",
    },
    "Graduation": {
        image: "/assets/gradTicketLogo.png",
        title: "Graduation ticket",
        techStack: "React Native and Firebase",
        about: "",
    },
    "MealPal": {
        image: "/assets/mealpal.png",
        title: "Meal Pal",
        techStack: "React and express",
        about: "",
    },
    "LibreroLis": {
        image: "/assets/libreroLogo.png",
        title: "Librero LIS",
        techStack: "Flutter and supabase",
        about: "",
    },
    "Conbus": {
        image: "/assets/conbusLogo.png",
        title: "Conbus",
        techStack: "Figma",
        about: "",
    },
};

class Projects extends React.Component {
    render() {
        return (
            <div id="education" className="flex flex-col gap-5">
                <h2 className="text-3xl text-textColor font-bold"> Things I&apos;ve built </h2>
                {
                    Object.keys(projectsData).map((key, i) => (
                        <ProjectsInfo
                            key={key}
                            image={projectsData[key]["image"]}
                            title={projectsData[key]["title"]}
                            techStack={projectsData[key]["techStack"]}
                            about={projectsData[key]["about"]}
                        />
                    ))
                }
            </div>
        );
    }
}


export default Projects;
