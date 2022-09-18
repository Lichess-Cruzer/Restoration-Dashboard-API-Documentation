import React, { useMemo } from "react";
import ResponseParamRow from "../../ResponseParamRow";
import TreeParamRows from "../TreeParamRows";

const OrderItems = [
    {
        parameter: "_id",
        description: "The system ID to reference the request document. Can be used to retrieve an order by ID.",
    },
    {
        parameter: "date",
        description: "An ISO string representing the date the order was entered into the system.",
    },
    {
        parameter: "orderId",
        description: "(external) The unique identifier (if provided) to identify the order with the client system.",
    },
    {
        parameter: "groupId",
        description: "(external) Set by client application.",
    },
    {
        parameter: "customerId",
        description: "(external) Set by client application.",
    },
    {
        parameter: "invoiceId",
        description: "(external) Set by client application.",
    },
    {
        parameter: "sku",
        description: "(external) Set by client application.",
    },
    {
        parameter: "metadata",
        dataType: "object",
        description: "Object with keys and values set by the client application.",
    },
    {
        parameter: "treesRequired",
        dataType: "number",
        description: "The number of trees to be paired with this order.",
    },
    {
        parameter: "filled",
        dataType: "boolean",
        description: "A boolean marked true if the order has been matched to the number of trees required to fill this order.",
    },
]

const OrderParamRows = ({
    level = 0,
    populateTrees = false,
    ...props
}) => {

    const [
        treesDataType,
        treesDescription,
        treesIDataType,
        treesIDescription,
    ] = useMemo(() => {
        switch (populateTrees) {
            case true:
                return [
                    "array: object",
                    "Array of tree objects, representing the trees matched to this order.",
                    "object",
                    "A tree item."
                ]
            default:
                return [
                    "array: string",
                    "Array of tree IDs, which are references to the trees matched to this order.",
                    "string",
                    "A tree reference ID."
                ]
        }
    }, [populateTrees]);

    return (

        <>

            {OrderItems.map(orderItem => {
                return <ResponseParamRow
                    key={orderItem.parameter}
                    {...orderItem}
                    level={level}
                />
            })}

            <ResponseParamRow
                parameter="trees"
                dataType={treesDataType}
                description={treesDescription}
                collapsible
                level={level}
            >

                <ResponseParamRow
                    parameter="trees[i]"
                    dataType={treesIDataType}
                    description={treesIDescription}
                    collapsible={populateTrees}
                    level={level + 1}
                >

                    {populateTrees ? <>

                        <TreeParamRows
                            level={level + 2}
                        />

                    </> : <></>}

                </ResponseParamRow>

            </ResponseParamRow>



        </>

    )

}

export default OrderParamRows;