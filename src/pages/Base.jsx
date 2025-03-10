import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Base = (props) => {
    return (
        <div className="container">
            {props.children}
        </div>
    );
};

export default Base;
