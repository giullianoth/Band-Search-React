import { useState } from "react";
import Form from "..";
import BandList from "../../../band-list";

const Content = (props) => {

    const [bandListElement, setBandListElement] = useState(null);

    const setList = () => {
        setTimeout(() => {
            document.querySelector(".bs_main_content_loading").remove();
            setBandListElement(<BandList />);
        }, 1000);
    }

    return (
        <div className="bs_main_content">
            <Form onSubmit={() => {
                props.onSubmit();
                setList();
            }} className={props.className} />
            {bandListElement}
        </div>
    );
}

export default Content;