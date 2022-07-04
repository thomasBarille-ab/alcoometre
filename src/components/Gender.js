import React from "react";

class Gender extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Votre parfum favori est : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Vous êtes un/une:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="male">Homme</option>
                        <option value="female">Femme</option>
                    </select>
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}

export default Gender;