import Form from "..";
import BandList from "../../../band-list";

const Content = (props) => {
    return (
        <div className="bs_main_content">
            <Form onSubmit={props.onSubmit} className={props.className} />
            <BandList />
        </div>
    );
}

export default Content;