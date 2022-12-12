import { useState } from "react";
import thumbnail from "../../assets/images/samples/hqdefault.webp";
import MainHeader from "./main-header";
import MainResults from "./main-results";

const listViewportDifference = () => {

    let mainHeight = null;
    let formHeight = null;
    let listHeaderHeight = null;
    let paddingDiff = 40;

    return new Promise((resolve) => {

        let getList = setInterval(() => {

            mainHeight = document.querySelector(".bs_main")?.offsetHeight;
            formHeight = document.querySelector(".bs_main_content_form")?.offsetHeight;
            listHeaderHeight = document.querySelector(".bs_main_content_results_header")?.offsetHeight;

            if (mainHeight && formHeight && listHeaderHeight) {

                paddingDiff = window.innerWidth < 1024 ? 40 : 80;
                listHeaderHeight = window.innerWidth < 1024 ? listHeaderHeight : 0;

                resolve(mainHeight - formHeight - listHeaderHeight - paddingDiff);
                clearInterval(getList);
            }
        }, 100);
    })
}

const BandList = (props) => {

    const [listHeightDifference, setListHeightDifference] = useState(0);

    listViewportDifference().then((data) => {
        setListHeightDifference(data);
    })

    window.onload = () => {
        listViewportDifference().then((data) => {
            setListHeightDifference(data);
        })
    };

    window.onresize = () => {
        listViewportDifference().then((data) => {
            setListHeightDifference(data);
        })
    };

    const {mainTitle, socialInfo, listItems} = props.data;

    let socialNetworks = Object.keys(socialInfo) ?? null;
    let socialLinks = Object.values(socialInfo).map((item) => item[0].url) ?? null;

    return (
        <section className="bs_main_content_results">
            <MainHeader data={{ socialNetworks, socialLinks }} title={mainTitle} />
            <MainResults data={listItems} height={listHeightDifference} />
        </section>
    );
}

export default BandList;