import { useState } from "react";
import Loading from "../loading";
import Content from "./form/content";

const mainViewportDifference = () => {

    let headerHeight = null;
    let footerHeight = null;

    return new Promise((resolve) => {

        let getHeader = setInterval(() => {
            headerHeight = document.querySelector(".bs_header")?.offsetHeight;
            footerHeight = document.querySelector(".bs_footer")?.offsetHeight;

            if (headerHeight && footerHeight) {
                resolve(headerHeight + footerHeight);
                clearInterval(getHeader);
            }
        }, 100);
    })
}

const Main = () => {
    const [mainHeightDifference, setMainHeightDifference] = useState(0);
    const [isLoading, setLoading] = useState(false);
    const [bandList, setBandList] = useState(false);

    mainViewportDifference().then((data) => {
        setMainHeightDifference(data);
    })

    window.onload = () => {
        mainViewportDifference().then((data) => {
            setMainHeightDifference(data);
        })
    };

    window.onresize = () => {
        mainViewportDifference().then((data) => {
            setMainHeightDifference(data);
        })
    };

    const loadList = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setBandList(true);
        }, 2000);
    }

    const back = () => {
        setBandList(false);
    }

    return (
        <main className="bs_main" style={{ height: `calc(100vh - ${mainHeightDifference}px)` }}>
            <Content onSubmit={loadList} onBack={back} isListVisible={bandList} />
            {isLoading && <Loading />}
        </main>
    );
}

export default Main;