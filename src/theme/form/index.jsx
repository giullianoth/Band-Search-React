import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import Input from "./input";
import Button from "../button";
import { useState } from "react";
import { mainHeightViewportValue } from "../../app/set-viewport";

const Form = (props) => {

    const [mainHeightValue, setMainHeightValue] = useState(0);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [formClass, setFormClass] = useState("bs_main_content_form");

    mainHeightViewportValue().then((height) => {
        setMainHeightValue(height);
    })

    window.onload = () => {
        mainHeightViewportValue().then((height) => {
            setMainHeightValue(height);
        })
    };

    window.onresize = () => {
        mainHeightViewportValue().then((height) => {
            setMainHeightValue(height);
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setLoading(true);
        props.isLoading(true);

        setFormClass(formClass.includes("list") ? formClass : `${formClass} list`);
        props.search(search);
    }

    return (
        <aside className={formClass} style={{ maxHeight: `${mainHeightValue}px` }}>
            <form action="" onSubmit={handleSubmit}>
                <Input setValue={(event) => setSearch(event.target.value)} value={search} />
                <Button type="submit" icon={<FontAwesomeIcon icon={solid("magnifying-glass")} />}>Pesquisar</Button>
            </form>
        </aside>
    );
}

export default Form;