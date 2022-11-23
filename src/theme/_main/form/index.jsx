const Form = (props) => {
    return (
        <aside className={`bs_main_content_form${props.formClass}`}>
            <form action="" onSubmit={(event) => {
                event.preventDefault();
                props.onSubmit();
            }}>
                <div className="label_area">
                    <input type="text" name="band" id="band" required />
                    <label htmlFor="band">Clique e digite o nome da banda aqui</label>
                    <i className="bottom_bar"></i>
                </div>
                <button type="submit">Pesquisar</button>
            </form>
        </aside>
    );
}

export default Form;