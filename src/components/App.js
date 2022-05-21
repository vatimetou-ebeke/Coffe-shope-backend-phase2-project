
import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ItemForm from "./ItemForm";
import MenuList from "./MenuList";

function App() {
    const [page, setPage] = useState("/")
    
    return (
        <div>
            <NavBar onChangePage={setPage} />
            
                <Route path="/about">
                    <ItemForm/>
                </Route>
                <Route path="/projects">
                    <MenuList />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>404 not found</h1>
                </Route>
            
        </div>
    );
}

export default App;