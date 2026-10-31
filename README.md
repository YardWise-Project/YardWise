# YardWise

YardWise is a landscaping and gardening app that helps homeowners and renters plan, organize, and maintain outdoor projects.

## Project Overview

**Current Status:** Initial project setup / Development skeleton

The frontend, backend, and Supabase configuration have been initialized. Application features will be developed collaboratively by the team.

## Technology Stack

| Component | Technology |
|---|---|
| Web Frontend | React, JavaScript, Vite |
| Backend | Node.js, Express.js, JavaScript |
| Database | Supabase PostgreSQL |
| Authentication | Supabase Auth (planned) |
| File Storage | Supabase Storage (planned) |
| Version Control | Git and GitHub |


## Getting Started

### Prerequisites

Install the following before starting:

- Node.js 22
- npm
- Git
- Supabase

### 1. Clone the Repository

```bash
git clone https://github.com/YardWise-Project/YardWise.git
cd YardWise
```

### 2. Set Up the Frontend

Navigate to the `web` directory:

```bash
cd web
npm ci
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
npm ci
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
| JavaScript configuration | Complete |
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

Open a second terminal at the YardWise repository root. Keep the frontend running in the first terminal.
These checks help verify that the initial project setup and future changes compile successfully.

## Continuous Integration and Testing

YardWise uses GitHub Actions to automatically check code changes whenever a pull request is opened or updated against `main`, and whenever changes are pushed to `main`.

The CI workflow is located at `.github/workflows/ci.yml`.

### Automated Checks

The workflow performs the following checks:

- **Backend:** Install dependencies, check TypeScript, run the automated API health test, and run the backend build if configured.
- **Frontend:** Install dependencies, check TypeScript, run ESLint if configured, and build the React application.

Both CI jobs must pass before a pull request can be merged into `main`. Pull requests also require approval from at least one teammate other than the author.

### Run Backend Tests Locally

Start the backend in one terminal:

```bash
cd backend
npm ci
npm run dev
```

Open a second terminal at the repository root:

```bash
cd backend
npx vitest run
```

The API health test checks that `GET /api/health` responds successfully with a status of `ok`.

The backend must be running on port `8000` for this test to work.

### Run Frontend Checks Locally

From the repository root:

```bash
cd web
npm ci
npm run lint
npm run build
```

### CI Failure Verification

The CI workflow has been tested by deliberately changing the backend health endpoint to return an incorrect status. The backend test failed as expected, demonstrating that CI detects broken application behavior.

After restoring the correct response, the automated checks passed again.

### Pull Request Requirements

Before merging into `main`:

1. Backend CI must pass.
2. Frontend CI must pass.
3. At least one teammate other than the author must approve the pull request.

Do not merge code with failing required checks.

## Staging and Rollback Plan

### Staging / Testing Environment

Before changes reach production, the team will test frontend and backend changes in the local development environment.

GitHub Actions will run automated tests and build checks on pull requests. Changes involving database schemas, authentication, migrations, or deployment will require teammate review before merging into `main`.

**Target date:** 2026-10-31

### Rollback Strategy

If a change introduces a bug or breaks existing functionality, the team will revert the commit through a reviewed pull request.

After reverting the change, automated CI checks will be rerun to verify that the application works correctly.

If a deployed version fails, the team will restore the last known working version. Database changes will require a separate recovery procedure to prevent data loss.

**Target date:** 2026-10-31

## Repository

https://github.com/YardWise-Project/YardWise

---
For detailed branching, pull request approval, testing, and contribution requirements, see [CONTRIBUTING.md](CONTRIBUTING.md).
