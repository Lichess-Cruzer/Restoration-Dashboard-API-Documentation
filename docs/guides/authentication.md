---
sidebar_position: 1
---

# Authentication

Authentication to the REST API follows the [OAuth2.0 client credentials](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/) authorization flow.

## Obtaining Client Credentials

To obtain your client credentials, log in to the restoration dashboard for either the [staging](https://restoration-dashboard-staging.herokuapp.com) or [production](google.com) environment, depending on which credentials you are trying to obtain.

In the top right corner of the screen, click the settings <i className="bi bi-gear"></i> icon, and click on "Client Credentials".

In the modal popup, click "View Secret" to view the client secret. If the client secret is not available, contact our team to have client credentials generated for your account.

:::danger
Make sure you keep your client secret safe!
:::

:::caution
If you suspect for any reason that your credentials have been compromised, contact our team to have new client credentials generated. Note: this will render the old client credentials invalid, so only make this request when necessary.
:::

## Get an Access Token

To obtain an access token, make a POST request to:

`{BASE_URL}/authenticate`

with the following body parameters:

- `client_id` - CLIENT_ID
- `client_secret` - CLIENT_SECRET
- `grant_type` - `client_credentials`

An example curl request would look like the following, replacing BASE_URL, CLIENT_ID, and CLIENT_SECRET with the [environment base url](/docs/getting-started#api-environments), your client ID, and your client secret respectively:

```bash
curl -v '{BASE_URL}/authenticate'
    -X 'POST'
    -H 'Content-Type: application/x-www-form-urlencoded'
    -d '
        client_id=CLIENT_ID&
        client_secret=CLIENT_SECRET&
        grant_type=client_credentials
    '
```

A successful response will include a JSON body that looks like:

```json
{
    "access_token": "ACCESS_TOKEN",
    "token_type": "Bearer",
    "expires_in": 3600, // Seconds until token expiration
}
```

## Endpoint Authentication

To successfully authenticate to the additional endpoints described in the [REST API Reference](/docs/category/rest-api-reference), add the following header to your HTTP requests:

`Authorization: Bearer ACCESS_TOKEN`

substituting the access token received above for the ACCESS_TOKEN placeholder.

Example:

```bash
curl -v '{BASE_URL}/accounts/{CLIENT_ID}/orders'
    -X 'GET'
    -H 'Authorization: Bearer ACCESS_TOKEN'
```