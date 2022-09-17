import React from "react";

const ResponseParamTable = ({
    ...props
}) => {

    return (

        <table>

            <thead>
                <tr>
                    <th>Parameter</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                {props.children}
            </tbody>

        </table>

    )

}

export default ResponseParamTable;