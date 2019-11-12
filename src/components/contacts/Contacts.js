import React, { Component, Fragment } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <Fragment>
                            <h4 style={{ marginLeft: "10px" }}>Contact List</h4>
                            {contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} />
                            ))}
                        </Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default Contacts;
