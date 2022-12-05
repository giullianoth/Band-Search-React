import { useState } from "react";
import logoDark from "../../../assets/images/logo_dark.png";
import logoLight from "../../../assets/images/logo_light.png";
import CantSee from "../../../assets/images/cant-see.gif";
import MyEyes from "../../../assets/images/my-eyes.gif";
import Card from "./card";

const SwitchTheme = () => {

    const bodyElement = document.body;

    const titleSwitch = {
        dark: "Muito escuro? Mude para o tema claro.",
        light: "Muito claro? Mude para o tema escuro."
    }

    const [card, setCard] = useState({
        img: bodyElement.classList.contains("dark_theme") ? CantSee : MyEyes,
        title: bodyElement.classList.contains("dark_theme") ? titleSwitch.dark : titleSwitch.light
    });

    const changeTheme = () => {
        const logoElement = document.querySelector(".bs_header_content_logo img");

        bodyElement.classList.toggle("dark_theme");
        logoElement.src = bodyElement.classList.contains("dark_theme") ? logoLight : logoDark;

        setCard({
            img: bodyElement.classList.contains("dark_theme") ? CantSee : MyEyes,
            title: bodyElement.classList.contains("dark_theme") ? titleSwitch.dark : titleSwitch.light
        });
    }

    return (
        <div className="bs_header_content_switch_theme">
            <div className="switch" onClick={changeTheme} title={card.title}></div>
            <Card image={card.img} />
        </div>
    );
}

export default SwitchTheme;