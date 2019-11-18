import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";
import { withRouter } from "react-router-dom";

class EditContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        });
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onFormSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        if (name === "") {
            this.setState({ errors: { name: "Name is required" } });
            return;
        }

        if (email === "") {
            this.setState({ errors: { email: "Email is required" } });
            return;
        }

        if (phone === "") {
            this.setState({ errors: { phone: "Phone is required" } });
            return;
        }

        const updContact = {
            name,
            email,
            phone
        };
        const { id } = this.props.match.params;
        const res = await axios.put(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            updContact
        );

        dispatch({ type: "Update_Contact", payload: res.data });

        // clear state
        this.setState({
            name: "",
            email: "",
            phone: "",
            errors: {}
        });

        this.props.history.push("/");
    };

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="row">
                            <div className="col s12 m6 l4">
                                <div className="card blue darken-2">
                                    <div className="card-content">
                                        <span className="card-title white-text">
                                            Edit Contact
                                        </span>
                                        <form
                                            className="container"
                                            onSubmit={this.onFormSubmit.bind(
                                                this,
                                                dispatch
                                            )}
                                            style={{ margin: "0px" }}>
                                            <TextInputGroup
                                                name="name"
                                                placeHolder="Name"
                                                value={name}
                                                onChange={this.onChange}
                                                error={errors.name}
                                            />
                                            <TextInputGroup
                                                name="email"
                                                type="email"
                                                placeHolder="Email"
                                                value={email}
                                                onChange={this.onChange}
                                                error={errors.email}
                                            />
                                            <TextInputGroup
                                                name="phone"
                                                placeHolder="Phone"
                                                value={phone}
                                                onChange={this.onChange}
                                                error={errors.phone}
                                            />
                                            <button
                                                className="btn waves-effect blue darken-4"
                                                type="submit"
                                                name="action">
                                                Update Contact
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default EditContact;
