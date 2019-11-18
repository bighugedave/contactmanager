import React from "react";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import NotFound from "./components/pages/NotFound";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";
import Test from "./components/test/Test";
import "materialize-css/dist/css/materialize.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
    faPlus,
    faQuestion,
    faTimes,
    faPlusCircle,
    faHome,
    faPencilAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(
    fab,
    faPlus,
    faTimes,
    faPlusCircle,
    faQuestion,
    faHome,
    faPencilAlt
);

function App() {
    return (
        <Provider>
            <Router>
                <div>
                    <Header branding="Contact Manager" />
                    <Switch>
                        <Route exact path="/" component={Contacts} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/test" component={Test} />
                        <Route
                            exact
                            path="/contact/add"
                            component={AddContact}
                        />
                        <Route
                            exact
                            path="/contact/edit/:id"
                            component={EditContact}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
