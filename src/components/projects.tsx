"use client";
import React, { useState } from "react";
import ProjectDialog from "./projectDialog";
import Image from "next/image";

interface ProjectData {
    image: string;
    links: Array<string>;
    title: string;
    techStack: string;
    about: any;
}

type Data = {
    [key: string]: ProjectData;
}

const projectsData: Data = {
    "OctoConta": {
        image: "/assets/octocontaLogo.png",
        links: ["https://github.com/rafabelts/octoconta"],
        title: "OctoConta",
        techStack: "Flutter and Firebase",
        about:
            <p className="text-textColor text-sm lg:text-xl text-justify">
                OctoConta was the first project I built, basically an accounting helper for accountants to calculate the interest of credit cards, loans, fees, income tax (in Mexico known as ISR), and sales tax (in Mexico known as IVA) using information from the SAT Regulations, the Mexican tax administration service. Additionally, there is an expenses tracker.
                <br /><br />
                For the development <b>I used Flutter</b> with the help of <b>Firebase</b> for the user authentication.
            </p>
    },
    "Tikvent": {
        image: "/assets/gradTicketLogo.png",
        links: [],
        title: "Tikvent (v 0.1)",
        techStack: "React Native and Firebase",
        about:
            <p className="text-textColor text-sm lg:text-xl text-justify">
                Tikvent was created to streamline ticket management for my high school graduation party, utilizing QR codes to assign guests to their designated tables instantly. This innovative approach expedited check-in, eliminated confusion, and allowed real-time monitoring of guest arrivals. With a customizable interface, Tikvent also added a personalized touch to the ticketing experience, making it a memorable keepsake for attendees.
                <br /> <br />
                For the development I used <b>React Native</b> with the help of <b>Firestore</b> to save the data of the tickets.
            </p>
    },
    "MealPal": {
        image: "/assets/mealpal.png",
        links: ["https://github.com/rafabelts/mealpal", "https://meal-pal-jhpq.vercel.app"],
        title: "Meal Pal",
        techStack: "React and express",
        about:
            <div className="text-textColor text-sm lg:text-xl text-justify">
                <p> This application acts as a meticulous wellness guide, requiring users to input basic personal details such as age, gender, height, weight, and level of physical activity. Utilizing this data, the application calculates the user&apos;s Body Mass Index (BMI), followed by a detailed analysis conducted by our sophisticated backend system, and depending on the BMI evaluation, the system crafts a personalized dietary plan.</p>
                <p className="my-4"> This was a hackathon project, a it helped me to connect and work with other people, I took on a multifaceted role in our project, firstly leading the development of the front-end interface. My efforts extended beyond simple coding, because I also carefully designed the user interface to ensure a simple and enjoyable user experience. Additionally, I played a key role in establishing effective communication between our front-end and back-end systems, allowing data and information necessary for the operation of our application to change seamlessly.</p>
                <p> For the development we used <b>React</b> and with <b>Node + Express</b> was built a backend to handle the calculus and api calls</p>
            </div>
    },
    "LibreroLis": {
        image: "/assets/libreroLogo.png",
        links: ["https://github.com/rafabelts/librero-lis"],
        title: "Librero LIS",
        techStack: "Flutter and supabase",
        about:
            <p className="text-textColor text-sm lg:text-xl text-justify">
                Librero LIS aims to modernize the control and management of books in my school lab, transitioning away from paper-based lending systems. By digitizing the process, it enhances efficiency, reduces paperwork, and provides a centralized platform for tracking book loans. With the loan tracking function, it streamlines the borrowing experience for students and staff, ultimately fostering a more organized and sustainable library system.
                <br /><br />
                <p> For the development I used <b>Flutter</b> with the help of <b>Supabase</b> for the user auth and database hosting.</p>
            </p>,
    },
};

const ProjectsInfo: React.FC<ProjectData> = ({ image, links, title, techStack, about }) => {

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <li id="schoolTitle" className="relative hover:!opacity-100 group-hover/list:opacity-15 mb-12 cursor-pointer" onClick={() => setIsOpen(true)}>
                <center>
                    <Image src={image} className="rounded-xl opacity-90 w-[60%]" alt={image} width={700} height={700} />
                    <div className="absolute top-[40%] lg:top-[40%] lg:w-[40%] text-left lg:p-2 bg-container">
                        <h2 className="text-xl lg:text-4xl font-semibold"> {title} </h2>
                        <p className="text-greenPerry text-sm lg:text-base"> {techStack} </p>
                    </div>
                </center>
            </li>
            <ProjectDialog
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={title}
                about={about}
                links={links}
                techStack={techStack}
            />
        </>
    );
}



class Projects extends React.Component {
    render() {
        return (
            <div id="projectList" className="flex flex-col gap-5">
                <h2 className="text-[25px] lg:text-[40px] font-bold text-textColor mb-2"> Things I&apos;ve built </h2>
                <ul id="projects" className="group/list">
                    {
                        Object.keys(projectsData).map((key) => (
                            <ProjectsInfo
                                key={key}
                                image={projectsData[key]["image"]}
                                links={projectsData[key]["links"]}
                                title={projectsData[key]["title"]}
                                techStack={projectsData[key]["techStack"]}
                                about={projectsData[key]["about"]}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}


export default Projects;
