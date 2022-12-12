const Error = (props) => {
    return (
        <section className="bs_main_content_error">
            <p>{props.children}</p>
        </section>
    );
}

export default Error;