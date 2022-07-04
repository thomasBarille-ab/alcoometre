import React from "react";

class Weight extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 0 };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Le poids a été soumis : ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nom :
                    <input type="int" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Envoyer" />
            </form>
        );
    }
}

export default Weight;