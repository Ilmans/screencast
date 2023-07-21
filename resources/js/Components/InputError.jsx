import React, { useEffect } from "react";

function InputError({ errors, fieldName }) {

    useEffect(() => {
        errors[fieldName] = "";
    }, [fieldName]);
    return errors[fieldName] ? (
        <span className="text-xs text-red-600">{errors[fieldName]}</span>
    ) : (
        ""
    );
}

export default InputError;
