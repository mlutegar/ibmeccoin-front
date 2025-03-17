import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";

const Base = (props) => {
    return (
        <div className="container">
            <Header/>
            {props.children}
        </div>
    );
};

export default Base;
