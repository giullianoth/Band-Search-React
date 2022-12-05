const Input = () => {
    return (
        <div className="label_area">
            <input type="text" name="band" id="band" required />
            <label htmlFor="band">Clique e digite o nome da banda aqui</label>
            <i className="bottom_bar"></i>
        </div>
    );
}

export default Input;