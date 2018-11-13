import React from "react";
import PropTypes from "prop-types";

//Functional component that receives props and just renders an input
const AddMessage = props => {
    let input;

    return (
        <section id="new-message">
            <input
                onKeyPress={e => {
                    if (e.key === "Enter") {
                        props.dispatch(input.value, "Tranquility");
                        input.value = "";
                    }
                }}
                type="text"
                ref={node => {
                    input = node;
                }}
            />
        </section>
    );
};

//Prop types for some basic type checking
AddMessage.propTypes = {
    dispatch: PropTypes.func.isReqired
};

export default AddMessage;
