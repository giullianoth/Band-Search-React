import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Input from "./input";
import Button from "../../button";

const formValue = () => document.querySelector(".bs_main_content_form input").value;

const validate = (event) => {
    event.preventDefault();
    console.log(formValue());
}

const Form = (props) => {
    return (
        <aside className={`bs_main_content_form${props.className}`}>
            <form action="" onSubmit={(event) => {
                props.onSubmit();
                validate(event);
            }}>
                <Input />
                <Button type="submit" className="className" icon={<FontAwesomeIcon icon={solid("magnifying-glass")} />}>Pesquisar</Button>
            </form>
        </aside>
    );
}

export default Form;