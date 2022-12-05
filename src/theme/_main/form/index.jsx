import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Input from "./input";
import Button from "../../button";

const Form = (props) => {
    return (
        <aside className={`bs_main_content_form${props.className}`}>
            <form action="" onSubmit={(event) => {
                event.preventDefault();
                props.onSubmit();
            }}>
                <Input />
                <Button type="submit" className="className" icon={<FontAwesomeIcon icon={solid("magnifying-glass")} />}>Pesquisar</Button>
                {/* <button type="submit"><FontAwesomeIcon icon={solid("magnifying-glass")} /> Pesquisar</button> */}
            </form>
        </aside>
    );
}

export default Form;