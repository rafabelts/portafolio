"use client";
import React from "react";
import { MdEmail } from "react-icons/md";

class SocialMediaButton extends React.Component<{ icon: string; link: string }> {
    render() {
        const { icon, link } = this.props;
        return (
            <li>
                <a href={`${link}`}>
                    <img src={`https://skillicons.dev/icons?i=${icon}`} alt={`${icon}_icon`} width={60} height={60} />
                </a>
            </li>

        );
    }
}

class Presentation extends React.Component {
    render() {
        return (
            <header id="presentation" className="fixed w-1/2 text-left py-24 top-0 min-h-screen flex flex-col justify-between">
                <div id="about">
                    <h1 className="text-7xl mb-5">Hi, <span className="text-greenPerry font-bold">Rafa</span> here!</h1>
                    <h2 className="text-2xl">Full Stack Dev</h2>
                </div>
                <a href="mailto:rafabeltrans17@gmail.com" className="flex flex-row justify-start items-center gap-5 bg-container px-4 py-4 w-fit rounded-2xl hover:shadow-sm hover:shadow-white ">
                    <MdEmail className="text-4xl" />
                    <p className="text-5xl"> Lets talk! </p>
                </a>

                <ul id="socialMedia" className="flex flex-row justify-between w-40">
                    <SocialMediaButton
                        icon="github"
                        link="http://github.com/rafabelts"
                    />
                    <SocialMediaButton
                        icon="linkedin"
                        link="https://www.linkedin.com/in/rafael-alejandro-beltran-santos-a587b2261/"
                    />
                </ul>

            </header >
        );
    }
}

export default Presentation;
