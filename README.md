# YardWise

YardWise is a landscaping and gardening app that helps homeowners and renters plan, organize, and maintain outdoor projects.

## Project Overview

**Current Status:** Initial project setup / Development skeleton

The frontend, backend, and Supabase configuration have been initialized. Application features will be developed collaboratively by the team.

## Technology Stack

| Component | Technology |
|---|---|
| Web Frontend | React, JavaScript (JSX), Vite, Tailwind CSS v4 |
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
- Supabase project access

### 1. Clone the Repository

```bash
git clone https://github.com/YardWise-Project/YardWise.git
cd YardWise
```

### 2. Install Dependencies

From the repository root:

```bash
npm ci
```

The frontend and backend share the root `package.json` and `package-lock.json`.

### 3. Configure Environment Variables

Create a file named `.env.local` inside `web/`:

```dotenv
VITE_SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
VITE_API_BASE_URL=http://localhost:8000
```

Create a `.env` file at the repository root:

```dotenv
SUPABASE_URL=https://YOUR_PROJECT_ID.supabase.co
SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
PORT=8000
```

Replace the placeholder values with the team's Supabase project configuration.

The backend uses `dotenv/config`, which reads the root `.env` file when started from the repository root.

### 4. Start YardWise

From the repository root:

```bash
npm run dev
```

This automatically starts both the React frontend and Express backend using `concurrently`.

| Service | Local URL |
|---|---|
| React frontend | http://localhost:5173 |
| Express backend | http://localhost:8000 |
| Backend health check | http://localhost:8000/api/health |

Vite may use another available port, such as `5174`, if port `5173` is occupied.

Press `Ctrl + C` to stop both servers.

### 5. Verify YardWise

From the repository root:

```bash
npm run check
```

This command automatically:

1. Runs frontend lint checks.
2. Builds the React frontend.
3. Starts the Express backend.
4. Waits for the backend health endpoint.
5. Runs backend tests.
6. Stops the backend after testing.

You do not need to start the backend manually before running this command.

Make sure another development server is not already using port `8000`.

### 6. Supabase Setup

YardWise uses Supabase for its managed PostgreSQL database and planned authentication and storage functionality.

The database schema is still in progress and needs team review.

Supabase credentials and environment configuration must be set up locally.

**Security:** Do not commit `.env` or `.env.local` files, secret keys, or service-role credentials to GitHub. Frontend code must never contain privileged Supabase keys.

## Development Status

| Feature | Status |
|---|---|
| React frontend initialization | Complete |
| Express backend initialization | Complete |
| JavaScript configuration | Complete |
| Tailwind CSS v4 configuration | Complete |
| Supabase client configuration | Complete |
| Initial database setup | Complete |
| Backend API route skeletons | Complete |
| Authentication | Placeholder |
| Dashboard | Not implemented |
| Property management | Not implemented |
| Garden management | Not implemented |
| Plant information | Not implemented |
| Landscaping projects | Not implemented |
| Budget tracking | Not implemented |
| Maintenance reminders | Not implemented |

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

## Build and Testing

Run the following command from the repository root:

```bash
npm run check
```

This single command runs the configured frontend lint checks, frontend build, and backend tests.

The backend starts automatically for testing and stops when the tests finish.

## Continuous Integration and Testing

YardWise uses GitHub Actions to automatically check code changes whenever a pull request is opened or updated against `main`. The workflow can also be started manually.

The CI workflow is located at `.github/workflows/ci.yml`.

### Automated Checks

The workflow performs the following checks:

- **Backend:** Install shared root dependencies, run lint checks, start the Express server, wait for the health endpoint, and run backend tests.
- **Frontend:** Install shared root dependencies, run ESLint, and build the React application.

Both CI jobs must pass before a pull request can be merged into `main`. Pull requests also require approval from at least one teammate other than the author.

### Run Checks Locally

From the repository root:

```bash
npm run check
```

The command runs linting, building, and backend testing automatically.

The API health test checks that `GET /api/health` responds successfully with a status of `ok`.

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


### Rollback Strategy

If a change introduces a bug or breaks existing functionality, the team will revert the commit through a reviewed pull request.

After reverting the change, automated CI checks will be rerun to verify that the application works correctly.

If a deployed version fails, the team will restore the last known working version. Database changes will require a separate recovery procedure to prevent data loss.


## Repository

https://github.com/YardWise-Project/YardWise

---

For detailed branching, pull request approval, testing, and contribution requirements, see [CONTRIBUTING.md](CONTRIBUTING.md).