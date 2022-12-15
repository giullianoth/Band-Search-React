const VideoModal = (props) => {
    return (
        <div className="bs_modal_content">
            <div className="bs_modal_content_embedded">
                <iframe id="ytplayer" type="text/html" width="640" height="360" autoPlay="1"
                    src={`https://www.youtube.com/embed/${props.url}?autoplay=1`} frameBorder="0" allowFullScreen />
            </div>
            <header className="bs_modal_content_title">
                <h2>{props.title}</h2>
            </header>
        </div>
    );
}

export default VideoModal;