import React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    Link
} from "react-router-dom";
import Chats from "./Chats";
import { NoChat } from "./NoChat";

export default function Router() {
    return (
        <BrowserRouter>
            <header>
                <ul>
                    <li>
                        <Link to="/profile">profile</Link>
                    </li>
                    <li>
                        <Link to="/chats">chats</Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </header>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route
                    exact
                    path="/chats/:chatId?"
                >
                    <Chats />
                </Route>
                <Route>
                    <h3>Error 404: Page not found</h3>
                </Route>
                <Route path="/nochat">
                    <NoChat />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

function Home() {
    return <h2>Home</h2>;
}

function Profile() {
    return <h2>Profile</h2>;
}