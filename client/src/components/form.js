import React, { Component } from "react";
import { connect } from "react-redux";
import { addState } from "../action/index";

function mapDispatchToProps(dispatch) {
    return {
        addState: data => dispatch(addState(data))
    };
}

class ConnectedForm extends Component {

    constructor(props) {

        super(props);

        this.state = {
            title: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {

        if(event) {
            event.preventDefault();
        }

        const {
            title
        } = this.state;

        /** Deported logic into a reusable middleware (Redux best practice) */
        // const forbiddenWords = ['spam', 'money'];
        // const foundedWord = forbiddenWords.filter(word => title.includes(word));
        //
        // if(foundedWord) {
        //     return this.props.titleForbidden()
        //  }

        this.props.addState({ title });
        this.setState({
            title: ""
        });
    }

    render() {

        const {
            title
        } = this.state;

        return (

            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={this.handleChange} />
                </div>
                <button type="submit">SAVE</button>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm); // The first argument for connect must be null when mapStateToProps is absent like here
export default Form;