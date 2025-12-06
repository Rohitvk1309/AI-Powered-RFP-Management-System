# AI-Powered RFP Management System (starter)

## What this project is
A minimal single-user RFP management web app demonstrating:
- Create RFP from natural language (LLM)
- Vendor management
- Send RFP via email (SMTP)
- Receive vendor replies via IMAP, parse them with LLM into structured proposals
- Compare proposals using LLM and recommend a vendor

## Tech stack
- Frontend: React (Vite)
- Backend: Node.js + Express
- DB: MongoDB (mongoose)
- AI: OpenAI (or compatible LLM)
- Email: nodemailer (SMTP) + imap-simple for inbound polling

## Quick start
1. `git clone <repo>`
2. Setup backend:
   - `cd backend`
   - `npm install`
   - copy `.env.example` → `.env` and fill variables (MONGODB_URI, OPENAI_API_KEY, SMTP_*, IMAP_* if using)
   - `npm run dev`
3. Setup frontend:
   - `cd frontend`
   - `npm install`
   - set `VITE_API_URL=http://localhost:4000/api`
   - `npm run dev`
4. Use the UI to create vendors, create RFPs, send RFPs, and test vendor replies.

## API endpoints
(see list: /api/rfps, /api/vendors, /api/proposals)

## Assumptions & limitations
- Single-user flow only (no auth)
- Email reply parsing may fail on complex attachments (would need attachment OCR/parse)
- Inbound email watcher is a basic poller — in production use inbound email webhooks

## What I'd improve next
- Add authentication + roles
- Use webhooks for inbound email or a transactional provider (Mailgun, SendGrid)
- Better attachments parsing (extract tables in PDFs with OCR)
- Improve schema validation and unit tests

## Demo
(Record a 5–10 minute Loom showing: create RFP, send to vendor, reply and automatic parsing, comparison)
