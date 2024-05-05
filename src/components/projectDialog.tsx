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
                <ModalDialog sx={{ background: "#202032", color: "#FFFFFF" }} variant="plain" color="neutral">
                    <ModalClose />
                    <div id="projectContent" className="py-24 px-10">
                        <div className="flex flex-row items-center justify-between">
                            <h1 className="text-5xl text-textColor font-bold"> {title} </h1>
                            {
                                links.length > 1 ?
                                    <div className="flex flex-row items-center gap-10">
                                        <a href={`${links[0]}`}>
                                            <img src={"https://skillicons.dev/icons?i=github"} alt="Github Icon" width={50} height={50} />
                                        </a>
                                        <a href={`${links[1]}`}>
                                            <FaExternalLinkSquareAlt className="text-[40px]" />
                                        </a>
                                    </div> : links.length === 1 ? <a href={`${links[0]}`}>
                                        <img src={"https://skillicons.dev/icons?i=github"} alt="Github Icon" width={50} height={50} />
                                    </a> : <></>

                            }
                        </div>
                        <h2 className="text-2xl text-greenPerryLight mt-2 mb-6">{techStack}</h2>
                        {about}
                    </div>
                </ModalDialog>
            </Modal>
        );
    }
}

export default ProjectDialog;

