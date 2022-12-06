import { useState } from "react";
import Modal from "../modal";
import VideoModal from "./video-modal";

const Video = (props) => {

    let { thumbnails, title, description } = props.data.snippet;

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <article className="bs_main_content_results_list_item">
                <div className="bs_main_content_results_list_item_thumbnail">
                    <div className="img" style={{ backgroundImage: `url(${thumbnails.medium.url})` }} onClick={() => setModalOpen(true)}></div>
                </div>
                <div className="bs_main_content_results_list_item_info">
                    <header className="bs_main_content_results_list_item_info_title">
                        <h2 onClick={() => setModalOpen(true)}>{title}</h2>
                    </header>
                    <p className="bs_main_content_results_list_item_info_desc" onClick={() => setModalOpen(true)}>{description}</p>
                </div>
            </article>
            {
                isModalOpen ?
                    <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                        <VideoModal url={props.data.id.videoId} title={title} />
                    </Modal>
                    : null
            }
        </>
    )
}

export default Video;