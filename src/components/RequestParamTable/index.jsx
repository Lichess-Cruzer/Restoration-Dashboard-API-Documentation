import React from "react";

const RequestParamTable = ({
    ...props
}) => {

    return (

        <table>

            <thead>
                <tr>
                    <th>Parameter</th>
                    <th>Required?</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                {props.children}
            </tbody>

        </table>

    )

}

export default RequestParamTable;