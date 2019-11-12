import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import "materialize-css/dist/css/materialize.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faPlus,
    faTimes,
    faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faPlus, faTimes, faPlusCircle);

function App() {
    return (
        <Provider>
            <Router>
                <div>
                    <Header branding="Contact Manager" />
                    <Switch>
                        <Route exact path="/" component={Contacts} />
                        <Route exact path="/about" component={About} />
                        <Route
                            exact
                            path="/contact/add"
                            component={AddContact}
                        />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
