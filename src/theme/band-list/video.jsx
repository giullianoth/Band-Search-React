const Video = (props) => {

    let { thumbnails, title, description } = props.data.snippet;

    return (
        <article className="bs_main_content_results_list_item">
            <div className="bs_main_content_results_list_item_thumbnail">
                <div className="img" style={{ backgroundImage: `url(${thumbnails.medium.url})` }} data-link={props.data.id.videoId}></div>
            </div>
            <div className="bs_main_content_results_list_item_info">
                <header className="bs_main_content_results_list_item_info_title">
                    <h2 data-link={props.data.id.videoId}>{title}</h2>
                </header>
                <p className="bs_main_content_results_list_item_info_desc" data-link={props.data.id.videoId}>{description}</p>
            </div>
        </article>
    )
}

export default Video;