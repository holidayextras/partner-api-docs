# Partner API 2026 (APIConnect)

Partner API 2026 (APIConnect) is the next step for our platform. It brings UK and EU integrations together in one place, with OAuth 2.0 authentication and standardised contracts defined using an OpenAPI schema. The platform is built to scale as we expand into more markets.

This documentation is subject to change. Further features, including a booking list capability to support reconciliation and recovery flows, as well as wider product coverage, will be introduced in later phases.

## OpenAPI Schema

The OpenAPI specification is available at:

| Environment | Schema URL |
|-------------|-----------|
| Production  | `https://api.holidayextras.com/partner-api/v2/schema.json` |
| Staging     | `https://api-sandbox.holidayextras.com/partner-api/v2/schema.json` |

View in [Swagger Editor](https://editor.swagger.io/) or import into [Postman](https://www.postman.com/).

## Documentation

* [Authentication](./authentication.md) - OAuth 2.0 client credentials flow
* [Understanding the OpenAPI Documentation](./api-endpoint-navigation-guide.md) - Endpoint workflows and integration guide
* [Event Notifications](./webhook-integration-guide.md) - Webhook integration for booking status updates
* [Error Responses](./problems/) - HTTP error codes and resolution guidance
