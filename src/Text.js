import './Text.css';

const Text = (props) => {

    return (
        <div className="Text-container">
            <h2 className="Text">{props.personObject.job}</h2>
            <h3 className="Text">{props.personObject.years}</h3>
            <p className="Text">{props.personObject.description}</p>
        </div>
    );
};

export default Text;