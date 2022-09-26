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
    {
        parameter: 'workHoursCreated',
        dataType: 'number',
        description: 'The number of work hours created on this restoration site.',
    },
    {
        parameter: 'workersEmployed',
        dataType: 'number',
        description: 'The number of workers employed on this restoration site.',
    },
]

const SiteMetadataItems = [
    {
        parameter: 'region',
        description: 'The region the restoration site is located in.'
    },
    {
        parameter: 'province',
        description: 'The province the restoration site is located in.'
    },
    {
        parameter: 'city',
        description: 'The city the restoration site is located in.',
    },
    {
        parameter: 'partnerName',
        description: 'The name of the partner that runs the restoration site.',
    },
    {
        parameter: 'siteType',
        description: 'The type of the restoration site.'
    },
    {
        parameter: 'acreage',
        description: 'How many acres the restoration site covers.',
    },
    {
        parameter: 'hectaresToRestore',
        description: 'The number of hectares to be restored.',
    },
    {
        parameter: 'totalPlantQuantity',
        description: 'The total number of plants being planted at the restoration site.',
    },
    {
        parameter: 'season',
        description: 'Season of planting for the restoration site.',
    },
    {
        parameter: 'restorationTypes',
        description: 'The types of restoration taking place at the site.',
    },
    {
        parameter: 'siteStatus',
        description: 'The planting status of the site.',
    },
    {
        parameter: 'acresRestored',
        description: 'The number of acres that have been restored by efforts at the site.',
    },
    {
        parameter: 'treesPlantedPerDay',
        description: 'Approximate number of trees planted per day at the site.',
    }
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

            <ResponseParamRow
                parameter="metadata"
                description="Additional site metadata (some fields may not be present)."
                level={level}
                dataType="object"
                collapsible
            >

                {SiteMetadataItems.map(siteMetadataItem => {
                    return <ResponseParamRow
                        key={siteMetadataItem.parameter}
                        {...siteMetadataItem}
                        level={level + 1}
                    />
                })}

            </ResponseParamRow>

        </>

    )

}

export default SiteParamRows;