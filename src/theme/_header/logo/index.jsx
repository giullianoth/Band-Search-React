import logo from "../../../assets/images/logo_dark.png";

const Logo = () => {
    return (
        <div className="bs_header_content_logo">
            <a href="#">
                <h1>Band Search</h1>
                <img src={logo} alt="Band Search" />
            </a>
        </div>
    );
}

export default Logo;