import Button from "../../button";
import Header from "../header";
import MainSocialResults from "../main-social-results";

const MainHeader = (props) => {

    return (
        <div className="bs_main_content_results_header">
            <Header><h1>{props.title}</h1></Header>
            <MainSocialResults data={props.data ?? null} />
            <Button className="back" onClick={props.onBack}>Voltar</Button>
        </div>
    );
}

export default MainHeader;