import { useState } from "react";
import Form from "./form";
import Loading from "../loading";
import BandList from "../band-list";

const mainViewportDifference = () => {

    let headerHeight = null;
    let footerHeight = null;

    return new Promise((resolve) => {

        let getHeader = setInterval(() => {
            headerHeight = document.querySelector(".bs_header")?.offsetHeight;
            footerHeight = document.querySelector(".bs_footer")?.offsetHeight;

            if (headerHeight && footerHeight) {
                resolve((headerHeight ?? 0) + (footerHeight ?? 0));
                clearInterval(getHeader);
            }
        }, 100);
    })
}

const Main = () => {
    const [mainHeightDifference, setMainHeightDifference] = useState(0);
    const [formClass, setFormClass] = useState(" list");
    const [loading, setLoading] = useState(null);

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


    const loadData = () => {
        setFormClass(" list");
        setLoading(<Loading />);
    }

    return (
        <main className="bs_main" style={{ height: `calc(100vh - ${mainHeightDifference}px)` }}>
            <div className="bs_main_content">
                <Form onSubmit={loadData} className={formClass} />
                <BandList />
            </div>
            {/* {loading} */}
        </main>
    );
}

export default Main;