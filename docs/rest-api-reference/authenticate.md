---
sidebar_position: 1
---

# POST /authenticate

Endpoint to retrieve an access token. View the [authentication guide](/docs/guides/authentication.md) for more information on authenticating to the REST API.

:::caution
You must use `application/x-www-form-urlencoded` content-type for this endpoint.
:::

## Request

<BaseUrlPath method="POST" includeClientId={false}>authenticate</BaseUrlPath>

<RequestParamTable>
<RequestParamRow
parameter="client_id"
dataType="string"
required
description="Your account's client ID."
/>
<RequestParamRow
parameter="client_secret"
dataType="string"
required
description="Your account's client secret."
/>
<RequestParamRow
collapsible
parameter="grant_type"
dataType="string"
required
description='Set this parameter to "client_credentials".'
/>
</RequestParamTable>

## Response

