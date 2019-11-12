import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../layout/TextInputGroup";

import uuid from "uuid";

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onFormSubmit = (dispatch, e) => {
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

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({ type: "Add_Contact", payload: newContact });

        this.setState({
            name: "",
            email: "",
            phone: "",
            errors: {}
        });
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
                                            Add Contact
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
                                                Submit
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

export default AddContact;
