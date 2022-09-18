import React from "react";
import ResponseParamRow from "../../ResponseParamRow";

const TreeItems = [
    {
        parameter: '_id',
        description: "The reference ID for this tree.",
    },
    {
        parameter: 'site',
        description: 'The reference ID for the site that this tree is located at.',
    },
    {
        parameter: 'treeType',
        description: 'The reference ID for the tree type details of this tree.',
    },
    {
        parameter: 'status',
        dataType: 'number',
        description: 'The status of this tree. 100 means the tree is in escrow, 200 means the tree is released from escrow, and 300 means the tree has been planted.'
    },
]

const TreeParamRows = ({
    level = 0,
    ...props
}) => {

    return (

        <>

            {TreeItems.map(treeItem => {
                return <ResponseParamRow
                    key={treeItem.parameter}
                    {...treeItem}
                    level={level}
                />
            })}

        </>

    )

}

export default TreeParamRows;