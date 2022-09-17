import React, { useState } from "react";
import "./ParamRow.scss";

const ParamRow = ({
    collapsible,
    level,
    row,
    request,
    response,
    parameter = '',
    dataType = '',
    required = false,
    description = '',
    ...props
}) => {

    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => {
        if (collapsible) setExpanded(!expanded);
    }

    return (<>

        <tr
            className={`param-row ${level ? `level--${level}` : ''} ${collapsible ? `collapsible ${expanded ? 'expanded' : ''}` : ''}`}
            onClick={toggleExpanded}
        >

            <td>

                <div className="param-container">

                    <div className="parameter">

                        {collapsible ? <i className={`bi bi-chevron-${expanded ? 'down' : 'right'}`} /> : <></>}

                        <span>{parameter}</span>

                    </div>

                    <span className="data-type">
                        <code>{dataType}</code>
                    </span>

                </div>

            </td>

            {request ? (
                <td className={required ? 'required' : ''}>{required ? 'true' : 'false'}</td>
            ) : <></>}

            <td>{description}</td>

        </tr>

        {expanded ? props.children : <></>}

    </>)

}

export default ParamRow;