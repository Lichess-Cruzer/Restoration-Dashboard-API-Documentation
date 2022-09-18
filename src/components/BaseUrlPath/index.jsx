import React from "react";
import HttpMethod from "../HttpMethod";

const BaseUrlPath = ({
    method = 'GET',
    includeClientId = true,
    ...props
}) => {

    return (

        <p>

            <HttpMethod method={method} />

            <code>
                {`/${
                    includeClientId ?
                    'accounts/:CLIENT_ID/' :
                    ''
                }${props.children}`}
            </code>

        </p>

    )

}

export default BaseUrlPath;