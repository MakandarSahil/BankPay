import { useState } from "react";
import Navbar from "./components/Navbar";
import Signup from "./components/SignUp";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Signup />
        </>
    );
}

export default App;