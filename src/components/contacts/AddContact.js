import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: ''
    }

    render() {

        const { name, email, phone } = this.state;

        return (
            <div className="row">
                <div className="col s12 m6 l4">
                    <div className="card blue darken-2">
                        <div className="card-content">
                            <span className="card-title white-text">Add Contact</span>
                            <p className="white-text">Add Contact</p>
                            <form className="container">
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="name" type="text" placeholder="Name" className="validate white-text" value={name} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="email" type="email" placeholder="Email" className="validate white-text" value={email} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="phone" type="text" placeholder="Phone" className="validate white-text" value={phone} />
                                    </div>
                                </div>
                                <FontAwesomeIcon
                                    icon="plus-circle"
                                    style={{
                                        cursor: "pointer",
                                        fontSize: "25px",
                                        color: "white"
                                    }}
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddContact;