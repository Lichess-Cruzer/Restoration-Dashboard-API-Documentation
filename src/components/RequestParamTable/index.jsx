import React from "react";

const RequestParamTable = ({
    json = false,
    formdata = false,
    ...props
}) => {

    return (<>

        <h4>Request Parameters Format: {formdata ? 'Form Data' : json ? 'JSON' : 'URL Query Parameters'}</h4>

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

    </>)

}

export default RequestParamTable;