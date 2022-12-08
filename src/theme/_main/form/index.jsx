import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Input from "./input";
import Button from "../../button";
import { useState } from "react";

const formValue = () => document.querySelector(".bs_main_content_form input").value;

const mainHeight = () => {
    let mainHeightValue = null;

    return new Promise((resolve) => {

        let getHeight = setInterval(() => {
            mainHeightValue = document.querySelector(".bs_main")?.offsetHeight;

            if (mainHeightValue) {
                resolve(mainHeightValue);
                clearInterval(getHeight);
            }
        }, 100);
    })
}

const Form = (props) => {

    const[formListClass, setFormListClass] = useState("");
    const [mainHeightValue, setMainHeightValue] = useState(0);

    mainHeight().then((height) => {
        setMainHeightValue(height);
    })

    window.onload = () => {
        mainHeight().then((height) => {
            setMainHeightValue(height);
        })
    };

    window.onresize = () => {
        mainHeight().then((height) => {
            setMainHeightValue(height);
        })
    };

    const validate = (event) => {
        event.preventDefault();
        
        let searchValue = formValue().trim();
        
        if (searchValue.length !== 0) {
            setFormListClass(" list");
            props.onSubmit();
        }
    }

    return (
        <aside className={`bs_main_content_form${props.isListVisible ? " list" : ""}`} style={{maxHeight: `${mainHeightValue}px`}}>
            <form action="" onSubmit={(event) => { validate(event) }}>
                <Input />
                <Button type="submit" className="className" icon={<FontAwesomeIcon icon={solid("magnifying-glass")} />}>Pesquisar</Button>
            </form>
        </aside>
    );
}

export default Form;