# APIConnect (Partner API 2026) - Event Notifications

Version: 1.0 Last Updated: 2026-01-29


---

## Overview

Webhooks allow you to receive real-time notifications when booking events occur. We'll send HTTP POST requests to your endpoint when booking states change.

### When to Use Webhooks

Use webhooks when you want to be notified about booking status changes, particularly for pending bookings that need confirmation.

**Note:** If you use our hosted confirmation page or the confirmation endpoint (which handles status automatically), you may not need webhooks. See the [API Endpoint Navigation Guide](api-endpoint-navigation-guide.md#stage-4-create-booking) for alternatives.


---

## Configuration

### Step 1: Create Your Endpoint

Your webhook endpoint must:

* Accept HTTP POST requests
* Be publicly accessible via HTTPS (valid SSL certificate required)
* Respond with HTTP 200 within 10 seconds
* Verify the signature we send (security requirement)


### Step 2: Speak With Your Partnerships Manager

Let your partnerships manager know your endpoint and they will configure it within the Holiday Extras APIConnect platform

**Important:** Store your webhook secret securely (environment variable or vault).


---

## Event Payload Structure

All webhook events follow this structure:

```json
{
  "collection_id": "550e8400-e29b-41d4-a716-446655440000",
  "event_type": "booking.confirmed",
  "timestamp": "2026-01-29T10:30:45.123Z",
  "correlation_id": "c7f8e3d2-a1b4-4c5d-9e8f-7a6b5c4d3e2f",
  "trace_id": "trace_abc123xyz789",
  "source": "APIConnect",
  "data": {
    "booking_reference": "HX123456",
    "partner_reference": "ORDER-12345"
  }
}
```

### Envelope Fields

| Field | Purpose | How to Use |
|-------|---------|------------|
| `collection_id` | Unique event identifier | Use for deduplication - store this to prevent processing the same event twice |
| `event_type` | Type of event | Describes what has occurred |
| `timestamp` | When event occurred | For ordering events and auditing |
| `correlation_id` | Groups related events | For tracking the entire booking lifecycle |
| `trace_id` | Debug identifier | Include in support requests |
| `source` | Who sent this webhook | Verification purposes |
| `data.booking_reference` | Our booking reference | Use to fetch full booking details via API |
| `data.partner_reference` | Your reference | Match to your internal order/transaction |

### Why Thin Payloads?

The webhook contains **only identifiers**, not full booking details. This is intentional:

* You always get fresh data by calling the API
* No risk of processing stale information
* Consistent data structure across all events

**After receiving a webhook, call:** `GET /api/v1/bookings/{booking_reference}` to fetch full booking details.


---

## Event Types

| Event Type | When Sent | Typical Action |
|------------|-----------|----------------|
| `booking.confirmed` | Supplier confirms | Fetch booking details, update database, send confirmation email |
| `booking.failed` | Supplier rejects | Fetch failure reason, process refund, notify customer |


## Security: Signature Verification

Every webhook includes an HMAC-SHA256 signature in the `X-HX-Signature` header. You **must** verify this signature to ensure the webhook came from us.

### Request Headers

```http
POST /webhooks/apiconnect HTTP/1.1
Host: api.yourcompany.com
Content-Type: application/json
X-HX-Signature: sha256=a1b2c3d4e5f6...
X-HX-Timestamp: 1738152645
X-HX-Collection-Id: 550e8400-e29b-41d4-a716-446655440000
{...webhook payload...}
```


---

## Handling Duplicates

Webhooks use **at-least-once delivery**, meaning the same event may be delivered multiple times.

---
