import Social from "./social";

const MainSocialResults = (props) => {

    let data = props.data ?? null;

    return (
        <ul className="bs_main_content_results_header_desc">
            {data.map((item, index) =>
                <Social network={item} href={data[index]} key={index + 1} />
            )}
        </ul>
    );
}

export default MainSocialResults;