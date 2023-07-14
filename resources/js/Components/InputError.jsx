import React from "react";

function InputError({ errors, fieldName }) {
    return errors[fieldName] ? (
        <span className="text-xs text-red-600">{errors[fieldName]}</span>
    ) : (
        ""
    );
}

export default InputError;
