---
sidebar_position: 1
---

# Getting Started

Welcome to the documentation for the Restoration Dashboard!

## API Environments

There are two separate API environments: **staging** and **production**.

It is recommended to get started with the **staging** environment to ensure proper API connectivity before integrating with the **production** environment.

REST API Base URL's:
- **staging**: https://staging-api-xlxcoeos5q-uc.a.run.app
- **production**: https://api.restorationdashboard.com

## REST Content-Types

When POST'ing data to the REST API, use JSON (`application/json`) content-type for all endpoints. The [authenticate](./api-reference/authenticate.md) endpoint is the only exception to this rule, which uses the form data content-type(`application/x-www-form-urlencoded`) in accordance with the [OAuth2.0 standards](https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/).

## Next Steps

This API uses the Oauth2.0 Client Credentials authorization flow to authenticate to the REST HTTP API. Start with the [authentication](./guides/authentication) guide to get connected, and check out the [API Reference](./api-reference) for specific data endpoints.

