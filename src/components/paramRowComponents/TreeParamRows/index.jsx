import React, { useMemo } from "react";
import ResponseParamRow from "../../ResponseParamRow";
import SiteParamRows from "../SiteParamRows";
import TreeTypeParamRows from "../TreeTypeParamRows";

const TreeItems = [
    {
        parameter: '_id',
        description: "The reference ID for this tree.",
    },
    {
        parameter: 'status',
        dataType: 'number',
        description: 'The status of this tree. 100 means the tree is in escrow, 200 means the tree is released from escrow, and 300 means the tree has been planted.'
    },
]

const TreeParamRows = ({
    level = 0,
    populateRefs = false,
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

            {populateRefs ? (<>

                <ResponseParamRow
                    parameter="site"
                    description="The details for the restoration site where the tree is located."
                    collapsible
                    level={level}
                >

                    <SiteParamRows
                        level={level + 1}
                    />

                </ResponseParamRow>

                <ResponseParamRow
                    parameter="treeType"
                    description="The tree type details for this tree."
                    collapsible
                    level={level}
                >

                    <TreeTypeParamRows
                        level={level + 1}
                    />

                </ResponseParamRow>

            </>) : (<>

                <ResponseParamRow
                    parameter="site"
                    description="The reference ID for the restoration site that this tree is located at."
                />

                <ResponseParamRow
                    parameter="treeType"
                    description="The reference ID for the tree type details of this tree."
                />

            </>)}

        </>

    )

}

export default TreeParamRows;