import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShowClick = () => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    };

    onDeleteClick = (id, dispatch) => {
        dispatch({ type: "Delete_Contact", payload: id });
    };

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div className="row">
                            <div className="col s12 m7 l3">
                                <div className="card blue darken-4">
                                    <div className="card-content white-text">
                                        <span className="card-title">
                                            {name}
                                            &nbsp;&nbsp;
                                            <FontAwesomeIcon
                                                onClick={this.onShowClick}
                                                icon="plus-square"
                                                style={{
                                                    cursor: "pointer",
                                                    color: "lightgray"
                                                }}
                                            />
                                            <FontAwesomeIcon
                                                icon="times"
                                                style={{
                                                    cursor: "pointer",
                                                    color: "lightgray",
                                                    float: "right"
                                                }}
                                                onClick={this.onDeleteClick.bind(
                                                    this,
                                                    id,
                                                    dispatch
                                                )}
                                            />
                                        </span>
                                        {showContactInfo ? (
                                            <ul>
                                                <li>Email: {email}</li>
                                                <li>Phone: {phone}</li>
                                            </ul>
                                        ) : null}
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

Contact.propTypes = {
    contact: PropTypes.object.isRequired
};

export default Contact;
