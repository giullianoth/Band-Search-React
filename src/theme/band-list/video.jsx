const Video = (props) => {

    let { thumbnails, title, description } = props.data.snippet;

    return (
        <article className="bs_main_content_results_list_item">
            <div className="bs_main_content_results_list_item_thumbnail">
                <div className="img" style={{ backgroundImage: `url(${thumbnails.medium.url})` }}></div>
            </div>
            <div className="bs_main_content_results_list_item_info">
                <header className="bs_main_content_results_list_item_info_title">
                    <h2>{title}</h2>
                </header>
                <p className="bs_main_content_results_list_item_info_desc">{description}</p>
            </div>
        </article>
    )
}

export default Video;