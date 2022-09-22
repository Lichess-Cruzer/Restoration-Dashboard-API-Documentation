import React from "react";
import ResponseParamRow from "../../ResponseParamRow";

const TreeTypeItems = [
    {
        parameter: '_id',
        description: 'The reference ID for this tree type.',
    },
    {
        parameter: 'name',
        description: 'The name of this tree type.',
    },
    {
        parameter: 'species',
        description: 'The species of this tree type',
    },
    {
        parameter: 'lbsCarbonPerYear',
        dataType: 'number',
        description: 'The pounds of carbon this tree type sequesters per year.',
    },
    {
        parameter: 'yearsOfLife',
        dataType: 'number',
        description: 'The average number of years that carbon sequestering is measured for this tree type, from the date it is first planted.'
    }
]

const TreeTypeParamRows = ({
    level = 0,
    ...props
}) => {

    return (

        <>

            {TreeTypeItems.map(treeTypeItem => {
                return <ResponseParamRow
                    key={treeTypeItem.parameter}
                    {...treeTypeItem}
                    level={level}
                />
            })}

        </>

    )

}

export default TreeTypeParamRows;