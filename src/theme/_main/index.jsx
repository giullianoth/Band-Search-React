import { useState } from "react";
import Form from "./form";
import Loading from "../loading";

const mainViewportDifference = () => {
    let headerHeight = document.querySelector(".bs_header").offsetHeight;
    let footerHeight = document.querySelector(".bs_footer").offsetHeight;
    return headerHeight + footerHeight;
}

const Main = () => {

    const [mainHeightDifference, setMainHeightDifference] = useState(0);
    window.onload = () => setMainHeightDifference(mainViewportDifference());
    window.onresize = () => setMainHeightDifference(mainViewportDifference());

    const [formClass, setFormClass] = useState("");
    const [loading, setLoading] = useState(null);

    const setList = () => {
        setFormClass(" list");
        setLoading(<Loading />);
    }

    return (
        <main className="bs_main" style={{ height: `calc(100vh - ${mainHeightDifference}px)` }}>
            <div className="bs_main_content">
                <Form onSubmit={setList} formClass={formClass} />
            </div>
            {loading}
        </main>
    );
}

export default Main;