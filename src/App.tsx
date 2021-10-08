import Nav from "./components/Nav";
import Router from "./components/Router";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Router />
            </BrowserRouter>
        </div>
    );
}
