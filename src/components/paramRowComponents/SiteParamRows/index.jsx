import React from "react";
import ResponseParamRow from "../../ResponseParamRow";

const SiteItems = [
    {
        parameter: '_id',
        description: 'The reference ID for this restoration site.'
    },
    {
        parameter: 'name',
        description: 'The name of the restoration site.',
    },
    {
        parameter: 'description',
        description: 'A description of the restoration site.',
    },
]

const SiteParamRows = ({
    level = 0,
    ...props
}) => {

    return (

        <>

            {SiteItems.map(siteItem => {
                return <ResponseParamRow
                    key={siteItem.parameter}
                    {...siteItem}
                    level={level}
                />
            })}

            <ResponseParamRow
                parameter="mapImg"
                description="If present, may contain a url to a top-down map view of the site."
                level={level}
                dataType="object"
                collapsible
            >

                <ResponseParamRow
                    parameter="publicUrl"
                    description="URL to retrieve the map image."
                    level={level + 1}
                />

            </ResponseParamRow>

        </>

    )

}

export default SiteParamRows;