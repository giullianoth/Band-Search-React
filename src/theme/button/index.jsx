const Button = (props) => {

    const { children, className, icon, type } = props ?? "";

    return (
        <button type={type} className={className} onClick={props.onClick}>{icon} {children}</button>
    );
}

export default Button;