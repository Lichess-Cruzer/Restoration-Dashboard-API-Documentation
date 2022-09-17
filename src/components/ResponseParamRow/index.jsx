import React, { useMemo, useState } from "react";
import ParamRow from "../ParamRow";

const ResponseParamRow = ({
    ...props
}) => {

    const [collapsed, setCollapsed] = useState(true);

    return (

        <ParamRow response {...props} />

    )

}

export default ResponseParamRow;