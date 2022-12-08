import { useState } from "react";
import Content from "../form";

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

    return (
        <main className="bs_main" style={{ height: `calc(100vh - ${mainHeightDifference}px)` }}>
            <Content />
        </main>
    );
}

export default Main;