import Social from "./social";

const MainSocialResults = (props) => {

    let data = props.data ?? null;

    return (
        <ul className="bs_main_content_results_header_desc">
            {data.socialNetworks.map((item, index) =>
                <Social network={item} href={data.socialLinks[index]} key={index + 1} />
            )}
        </ul>
    );
}

export default MainSocialResults;