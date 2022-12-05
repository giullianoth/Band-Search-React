const Button = (props) => {

    const { children, className, icon, type, onClick } = props ?? "";

    return (
        <button type={type} className={className} onClick={onclick}>{icon} {children}</button>
    );
}

export default Button;