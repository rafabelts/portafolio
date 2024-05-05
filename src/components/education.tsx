"use client";

import React from "react";

interface SchoolInfo {
    title: string;
    school: string;
    graduation: string;
    info: string;
}

class SchoolAndTitle extends React.Component<SchoolInfo> {
    render() {
        const { title, school, graduation, info } = this.props;
        return (
            <li id="schoolTitle" className="bg-container rounded-lg p-6 hover:!opacity-100 group-hover/list:opacity-15 hover:bg-[#2A2A41]">
                <div className="flex flex-col mb-4 text-greenPerryLight">
                    <p className="text-2xl font-bold"> {title} </p>
                    <p className="text-base"> {school} | {graduation}</p>
                </div>
                <p className="text-lg text-textColor text-justify"> {info} </p>
            </li>
        );
    }

}


class Education extends React.Component {
    render() {
        return (
            <div id="education" className="flex flex-col gap-2 mb-10">
                <h2 className="text-[40px] font-bold text-textColor mb-2"> My education (so far...) </h2>
                <ul id="schools" className="flex flex-col group/list gap-6">
                    <SchoolAndTitle
                        title="Software Engineer"
                        school="At Universidad Veracruzana"
                        graduation="Expected to graduate in December 2027"
                        info="Currently I&apos;m studying the beautiful art of software craftsmanship and his life cycle, here I developed MealPal a meal planner web app and an mobile app for the bookcase of my classroom"
                    />
                    <SchoolAndTitle
                        title="Mechatronics Technician"
                        school="At CBTis No. 85"
                        graduation="Graduated in July 2023"
                        info="Here I had a really good time with electronics, but since that time I knew that developing software was for me. In my final year, I developed to mobile apps, Octoconta and Tikvent (v 0.1)"
                    />
                </ul>
            </div>
        );
    }
}

export default Education;
