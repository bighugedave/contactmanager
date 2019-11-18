import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";
import { Consumer } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShowClick = () => {
        this.setState({ showContactInfo: !this.state.showContactInfo });
    };

    onDeleteClick = async (id, dispatch) => {
        console.log(`Deleting user ${id}`);
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
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
                            <div className="col s12 m7 l4">
                                <div className="card blue darken-2">
                                    <div className="card-content white-text">
                                        <span className="card-title">
                                            {name}
                                            &nbsp;&nbsp;
                                            <FontAwesomeIcon
                                                className="fa-xs"
                                                onClick={this.onShowClick}
                                                icon="plus"
                                                style={{
                                                    cursor: "pointer",
                                                    color: "white"
                                                }}
                                            />
                                            <FontAwesomeIcon
                                                icon="times"
                                                className="fa-sm"
                                                style={{
                                                    cursor: "pointer",
                                                    color: "white",
                                                    float: "right",
                                                    marginTop: "10px"
                                                }}
                                                onClick={this.onDeleteClick.bind(
                                                    this,
                                                    id,
                                                    dispatch
                                                )}
                                            />
                                            <Link to={`contact/edit/${id}`}>
                                                <FontAwesomeIcon
                                                    icon="pencil-alt"
                                                    className="fa-sm"
                                                    style={{
                                                        cursor: "pointer",
                                                        color: "white",
                                                        float: "right",
                                                        marginTop: "10px",
                                                        marginRight: "12px"
                                                    }}
                                                />
                                            </Link>
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
