import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Input from "./input";
import Button from "../button";
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

    const [mainHeightValue, setMainHeightValue] = useState(0);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(search);
    }

    return (
        <aside className={`bs_main_content_form`} style={{maxHeight: `${mainHeightValue}px`}}>
            <form action="" onSubmit={handleSubmit}>
                <Input setValue={(event) => setSearch(event.target.value)} value={search} />
                <Button type="submit" icon={<FontAwesomeIcon icon={solid("magnifying-glass")} />}>Pesquisar</Button>
            </form>
        </aside>
    );
}

export default Form;