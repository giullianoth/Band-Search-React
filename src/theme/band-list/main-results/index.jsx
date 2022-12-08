import Video from "../video";

const MainResults = (props) => {

    let data = props.data ?? null;

    return (
        <div className="bs_main_content_results_list" style={{ height: `${props.height}px` }}>
            {data.map((item, index) =>
                <Video data={item} key={index + 1} />
            )}
        </div>
    );
}

export default MainResults;