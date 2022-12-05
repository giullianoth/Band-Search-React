import Button from "../button";
import Header from "./header";
import MainSocialResults from "./main-social-results";

const MainHeader = (props) => {

    const back = () => {
        let form = document.querySelector(".bs_main_content_form");
        form.classList.remove("list");
    }

    return (
        <div className="bs_main_content_results_header">
            <Header><h1>{props.title}</h1></Header>
            <MainSocialResults data={props.data ?? null} />
            <Button className="back" onClick={back}>Voltar</Button>
        </div>
    );
}

export default MainHeader;