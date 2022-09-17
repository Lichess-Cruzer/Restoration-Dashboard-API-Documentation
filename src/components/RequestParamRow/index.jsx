import React from "react";
import ParamRow from "../ParamRow";
import CollapsibleRow from "../ParamRow";

const RequestParamRow = ({
    ...props
}) => {

    return (

        <ParamRow request {...props} />

    )

}

export default RequestParamRow;