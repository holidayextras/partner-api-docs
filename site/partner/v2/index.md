# Partner API 2026 (APIConnect)

Partner API 2026 (APIConnect) is the next step for our platform. It brings UK and EU integrations together in one place, with OAuth 2.0 authentication and standardised contracts defined using an OpenAPI schema. The platform is built to scale as we expand into more markets.

This documentation is subject to change. Further features, including a booking list capability to support reconciliation and recovery flows, as well as wider product coverage, will be introduced in later phases.

## Environments

| | Production | Staging |
|---|---|---|
| **API** | `https://api.holidayextras.com` | `https://api-sandbox.holidayextras.com` |
| **Auth** | `https://auth.holidayextras.com` | `https://auth-staging.holidayextras.com` |
| **OpenAPI Schema** | `https://api.holidayextras.com/partner-api/v2/schema.json` | `https://api-sandbox.holidayextras.com/partner-api/v2/schema.json` |

Use staging for development and testing. Authenticate against the matching auth environment -- staging credentials will not work against production and vice versa.

View the schema in [Swagger Editor](https://editor.swagger.io/) or import into [Postman](https://www.postman.com/).

## Documentation

* [Authentication](./authentication.md) - OAuth 2.0 client credentials flow
* [Understanding the OpenAPI Documentation](./api-endpoint-navigation-guide.md) - Endpoint workflows and integration guide
* [Event Notifications](./webhook-integration-guide.md) - Webhook integration for booking status updates
* [Error Responses](./problems/) - HTTP error codes and resolution guidance
