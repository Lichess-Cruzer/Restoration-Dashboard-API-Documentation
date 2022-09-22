---
sidebar_position: 1
---

# POST /authenticate

Endpoint to retrieve an access token. View the [authentication guide](/docs/guides/authentication.md) for more information on authenticating to the REST API.

:::info
You must use `application/x-www-form-urlencoded` content-type for this endpoint.
:::

## Request

<BaseUrlPath method="POST" includeClientId={false}>authenticate</BaseUrlPath>

<RequestParamTable formdata>
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
parameter="grant_type"
dataType="string"
required
description='Set this parameter to "client_credentials".'
/>
</RequestParamTable>

## Response

<ResponseParamTable>
<ResponseParamRow
parameter="access_token"
description='Access token to be used in the "Authorization: Bearer ACCESS_TOKEN" header for subsequent API calls.'
/>
<ResponseParamRow
parameter="token_type"
description='Returns as "Bearer".'
/>
<ResponseParamRow
parameter="expires_in"
data_type="number"
description='The number of seconds until the access token expires.'
/>
</ResponseParamTable>