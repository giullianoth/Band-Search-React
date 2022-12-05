import Logo from "./logo";
import SwitchTheme from "./switch_theme";

const Header = () => {

    return (
        <header className="bs_header">
            <div className="bs_header_content">
                <Logo />
                <SwitchTheme />
            </div>
        </header>
    );
}

export default Header;