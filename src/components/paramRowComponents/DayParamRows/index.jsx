import React, { useMemo } from "react";
import ResponseParamRow from "../../ResponseParamRow";

const DayItems = [
    // {
    //     parameter: '_id',
    //     description: 'The reference ID for the day.',
    // },
    {
        parameter: 'day',
        description: 'The day of data, formatted as "YYYY-MM-DD".',
    },
    {
        parameter: 'data',
        description: 'The aggregated order/tree data for the day.',
    },
]

export const DayDataItems = [
    {
        parameter: 'orderCount',
        dataType: 'number',
        description: 'The number of orders in the system from the start to the end of this day.'
    },
    {
        parameter: 'treesCommitted',
        dataType: 'number',
        description: 'The number of trees that have been committed to be planted for all of the orders received on this day.',
    },
    {
        parameter: 'treesMatched',
        dataType: 'number',
        description: 'The number of trees that have been matched to orders received on this day.',
    },
    {
        parameter: 'treesInEscrow',
        dataType: 'number',
        description: 'The number of trees matched to orders received on this day that are in escrow.',
    },
    {
        parameter: 'treesReleasedFromEscrow',
        dataType: 'number',
        description: 'The number of trees matched to orders received on this day that have been released from escrow.',
    },
    {
        parameter: 'treesPlanted',
        dataType: 'number',
        description: 'The number of trees matched to orders received on this day that have been planted.',
    },
    {
        parameter: 'workHoursCreated',
        dataType: 'number',
        description: 'The number of work hours created on restoration sites as a result of the orders received on this day.',
    },
    {
        parameter: 'workersEmployed',
        dataType: 'number',
        description: 'The number of workers employed as a result of the orders received on this day..',
    },
]

export const AdditionalSummaryDataItems = [
    {
        parameter: 'lbsCarbonToBeSequestered',
        dataType: 'number',
        description: 'The total amount of carbon (in US Customary "pounds") that will be sequestered over the life of the trees matched to orders on this account.'
    }
]

const DayParamRows = ({
    level = 0,
    accountAggregate = false,
    ...props
}) => {

    const Items = useMemo(() => {
        if (accountAggregate) {
            return DayDataItems.concat(AdditionalSummaryDataItems)
        }
        return DayDataItems;
    }, [accountAggregate])

    return (

        <>

            {!accountAggregate && <ResponseParamRow
                parameter="day"
                description='The day of data, formatted as "YYYY-MM-DD".'
                level={level}
            />}

            <ResponseParamRow
                parameter="lastUpdatedAt"
                dataType="datestring"
                description="The timestamp of the last time this data was updated."
            />

            <ResponseParamRow
                parameter="data"
                description="The aggregated order/tree data."
                collapsible
                level={level}
            >

                {Items.map(dayDataItem => {
                    return <ResponseParamRow
                        key={dayDataItem.parameter}
                        {...dayDataItem}
                        level={level + 1}
                    />
                })}

            </ResponseParamRow>

        </>

    )

}

export default DayParamRows;