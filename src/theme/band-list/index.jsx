import { useState } from "react";
import { listHeightViewportValue } from "../../app/set-viewport";
import MainHeader from "./main-header";
import MainResults from "./main-results";

const BandList = (props) => {

    const [listHeightDifference, setListHeightDifference] = useState(0);
    listHeightViewportValue().then((height) => {
        setListHeightDifference(height);
    });

    window.onload = () => {
        listHeightViewportValue().then((height) => {
            setListHeightDifference(height);
        });
    };

    window.onresize = () => {
        listHeightViewportValue().then((height) => {
            setListHeightDifference(height);
        });
    };

    const { mainTitle, socialInfo, listItems } = props.data;

    let socialNetworks = socialInfo ? Object.keys(socialInfo) : [];
    let socialLinks = socialInfo ? Object.values(socialInfo).map((item) => item[0].url) : [];

    return (
        <section className="bs_main_content_results">
            <MainHeader data={{ socialNetworks, socialLinks }} title={mainTitle} />
            <MainResults data={listItems} height={listHeightDifference} />
        </section>
    );
}

export default BandList;