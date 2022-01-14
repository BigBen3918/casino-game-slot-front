import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import MainGame from "./MainGame";
// import "../assets/custom.css";

function Routings() {
    const dispatch = useDispatch();

    useEffect(() => {
        window.onmessage = (e) => {
            // poolAddress: poolAddress,
            // name: "iframe_message",
            // token: localStorage.jwtToken,
            if (e.data.name === "iframe_message") {
                console.log("MyTOken:::::", e.data);
                dispatch({
                    type: "SET_BALANCE",
                    payload: e.data.allowanceAmount,
                });
                dispatch({
                    type: "SET_TOKEN",
                    payload: e.data.token,
                });
                dispatch({
                    type: "SET_POOLADDRESS",
                    payload: e.data.poolAddress,
                });
            }
        };

        window.parent.postMessage({ name: "iframe_message" }, "*");
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainGame />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routings;
