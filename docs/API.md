# FinFlow API Documentation

## Overview

FinFlow provides RESTful APIs for authentication, transactions, groups, and financial management.

## Health Check

### Check API Status

**GET** `/health`

Example:

```text
GET http://localhost:5000/api/health
``

Response:

```json
{
  "status": "ok",
  "message": "FinFlow API Running"
}
``

