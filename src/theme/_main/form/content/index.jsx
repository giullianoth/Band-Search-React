import Form from "..";
import BandList from "../../../band-list";

const Content = (props) => {

    return (
        <div className="bs_main_content">
            <Form onSubmit={props.onSubmit} isListVisible={props.isListVisible} />
            {props.isListVisible && <BandList onBack={props.onBack} />}
        </div>
    );
}

export default Content;