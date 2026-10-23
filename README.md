# YardWise

YardWise is a landscaping and gardening app that helps homeowners and renters plan, organize, and maintain outdoor projects.

## Project Overview

**Current Status:** Initial project setup / Development skeleton

The frontend, backend, and Supabase configuration have been initialized. Application features will be developed collaboratively by the team.

## Technology Stack

| Component | Technology |
|---|---|
| Web Frontend | React, TypeScript, Vite |
| Backend | Node.js, Express.js, TypeScript |
| Database | Supabase PostgreSQL |
| Authentication | Supabase Auth (planned) |
| File Storage | Supabase Storage (planned) |
| Mobile Application | React Native, Expo (planned) |
| Version Control | Git and GitHub |

## Project Structure

```text
YardWise/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── supabase.ts
│   │   └── server.ts
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
│
├── database/
│   └── schema.sql
│
├── docs/
│
├── mobile/
│
├── web/
│   ├── src/
│   │   ├── components/
│   │   │   └── Auth.tsx
│   │   ├── lib/
│   │   │   └── supabase.ts
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.tsx
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.ts
│
├── .env.example
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

Install the following before starting:

- Node.js and npm
- Git
- Visual Studio Code or another code editor
- Access to the Supabase project

### 1. Clone the Repository

```bash
git clone https://github.com/YardWise-Project/YardWise.git
cd YardWise
```

### 2. Set Up the Frontend

Navigate to the `web` directory:

```bash
cd web
npm install
```

Create a file named `.env.local` inside `web/`:

```dotenv
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
VITE_API_BASE_URL=http://localhost:8000
```

Replace the placeholder values with the team's Supabase project configuration.

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal, typically `http://localhost:5173` or `http://localhost:5174`.

### 3. Set Up the Backend

Open another terminal from the repository root:

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```dotenv
SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
PORT=8000
```

Start the Express development server:

```bash
npm run dev
```

The backend should be available at:

`http://localhost:8000`

Health-check endpoint:

`http://localhost:8000/api/health`

### 4. Supabase Setup

YardWise uses Supabase for its managed PostgreSQL database and planned authentication and storage functionality.

The initial database setup includes:

- `profiles` table
- `properties` table
- Initial Row Level Security policies

The database schema is still in progress and needs team review.

Supabase credentials and environment configuration must be set up locally.

**Security:** Do not commit `.env` or `.env.local` files, secret keys, or service-role credentials to GitHub. Frontend code must never contain privileged Supabase keys.

## Development Status

| Feature | Status |
|---|---|
| React frontend initialization | Complete |
| Express backend initialization | Complete |
| TypeScript configuration | Complete |
| Supabase client configuration | Complete |
| Initial database setup | Complete |
| Authentication | Placeholder |
| Dashboard | Not implemented |
| Property management | Not implemented |
| Garden management | Not implemented |
| Plant information | Not implemented |
| Landscaping projects | Not implemented |
| Budget tracking | Not implemented |
| Maintenance reminders | Not implemented |
| Mobile application | Not implemented |

## Planned Features

Future features may include:

- User registration and login
- Property and yard profiles
- Garden and plant management
- Plant recommendations
- Landscaping project planning
- Budget and expense tracking
- Maintenance schedules and reminders
- Garden photo uploads
- Weather information

## Team Development Workflow

1. Pull the latest changes before starting work.
2. Create a separate branch for each feature.
3. Implement and test the assigned feature.
4. Commit changes with descriptive messages.
5. Push the feature branch to GitHub.
6. Open a pull request and obtain approval from at least one teammate other than the author before merging into `main`.

Example:

```bash
git pull
git checkout -b feature/authentication
```

## Build and Type Checking

Frontend:

```bash
cd web
npm run build
```

Backend:

```bash
cd backend
npx tsc --noEmit
```

These checks help verify that the initial project setup and future changes compile successfully.

## Repository

https://github.com/YardWise-Project/YardWise

---
For detailed branching, pull request approval, testing, and contribution requirements, see [CONTRIBUTING.md](CONTRIBUTING.md).
