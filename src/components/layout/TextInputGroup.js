import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
    name,
    value,
    placeHolder,
    type,
    onChange,
    error
}) => {
    return (
        <div className="row">
            <div className="input-field col s12">
                <input
                    id={name}
                    name={name}
                    type={type}
                    placeholder={placeHolder}
                    className={classnames("validate", "white-text", {
                        invalid: error
                    })}
                    value={value}
                    onChange={onChange}
                />
                {error && <div className="invalid">{error}</div>}
            </div>
        </div>
    );
};

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeHolder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string
};

TextInputGroup.defaultProps = {
    type: "text"
};

export default TextInputGroup;
