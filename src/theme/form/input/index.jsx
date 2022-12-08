const Input = (props) => {
    return (
        <div className="label_area">
            <input type="text" name="search" id="search" value={props.value || ""} required onChange={(event) => props.setValue(event)} />
            <label htmlFor="search">Clique e digite o nome da banda aqui</label>
            <i className="bottom_bar"></i>
        </div>
    );
}

export default Input;