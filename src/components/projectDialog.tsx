import { Modal, ModalClose, ModalDialog } from "@mui/joy";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import React from "react";

interface ProjectData {
    isOpen: any;
    onClose: any;
    title: string;
    links: Array<String>;
    about: any;
    techStack: string;
}


class ProjectDialog extends React.Component<ProjectData> {
    render() {
        const { isOpen, onClose, title, links, about, techStack } = this.props;
        return (
            <Modal open={isOpen} onClose={onClose}>
                <ModalDialog sx={{ background: "#202032", color: "#FFFFFF" }} variant="plain">
                    <div id="projectContent" className="lg:py-24 lg:px-10">
                        <div className="flex flex-col lg:flex-row items-start justify-between">
                            <h1 className="lg:text-5xl text-4xl text-textColor font-bold mb-2"> {title} </h1>
                            {
                                links.length > 1 ?
                                    <div className="flex flex-row items-center gap-10">
                                        <a href={`${links[0]}`}> 
                                            <img src={"https://skillicons.dev/icons?i=github"} alt="Github Icon" className="w-[40px]"/>
                                        </a>
                                        <a href={`${links[1]}`}>
                                            <FaExternalLinkSquareAlt className="text-[40px]" />
                                        </a>
                                    </div> : links.length === 1 ? <a href={`${links[0]}`}>
                                        <img src={"https://skillicons.dev/icons?i=github"} alt="Github Icon" width={50}/>
                                    </a> : <></>

                            }
                        </div>
                        <h2 className="text-xl lg:text-2xl text-greenPerryLight mt-2 mb-6">{techStack}</h2>
                        {about}
                    </div>
                </ModalDialog>
            </Modal>
        );
    }
}

export default ProjectDialog;

