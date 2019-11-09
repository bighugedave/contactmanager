import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import { Provider } from "./context";
import "materialize-css/dist/css/materialize.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPlusSquare, faTimes, faPlusCircle } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPlusSquare, faTimes, faPlusCircle);

function App() {
    return (
        <Provider>
            <div>
                <Header branding="Contact Manager" />
                <AddContact />
                <Contacts />
            </div>
        </Provider>
    );
}

export default App;
