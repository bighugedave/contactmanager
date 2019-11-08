import React, { Component } from "react";

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
}

export const Consumer = Context.Consumer;
