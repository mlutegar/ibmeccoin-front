import Header from "../components/Secoes/Header/Header";

const Base = (props) => {
    return (
        <div className="container">
            <Header/>
            {props.children}
        </div>
    );
};

export default Base;
