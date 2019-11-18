import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "Delete_Contact":
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        case "Add_Contact":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case "Update_Contact":
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id
                        ? (contact = action.payload)
                        : contact
                )
            };
        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "John Doe",
                email: "johndoe@gmail.com",
                phone: "248-333-3333"
            },
            {
                id: 2,
                name: "David Ayres",
                email: "davidayres@gmail.com",
                phone: "248-587-9090"
            },
            {
                id: 3,
                name: "Jennifer Smith",
                email: "jennifersmith@gmail.com",
                phone: "248-283-8272"
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }

    async componentDidMount() {
        const res = await axios.get(
            "https://jsonplaceholder.typicode.com/users/"
        );
        this.setState({ contacts: res.data });
    }
}

export const Consumer = Context.Consumer;
