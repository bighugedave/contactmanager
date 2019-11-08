import React from "react";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import { Provider } from "./context";
import "materialize-css/dist/css/materialize.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faPlusSquare, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPlusSquare, faTimes);

function App() {
    return (
        <Provider>
            <div>
                <Header branding="Contact Manager" />
                <Contacts />
            </div>
        </Provider>
    );
}

export default App;
