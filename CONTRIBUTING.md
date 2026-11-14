# Contributing to YardWise

This guide explains how the YardWise team sets up the project, contributes changes, and tests work so contributions meet our Definition of Done.

## Code of Conduct

Team members are expected to communicate respectfully and courteously.

- Discuss potential concerns with team members.
- Be respectful of different opinions and approaches.
- Address disagreements professionally.
- If the group is not addressing disagreements or concerns properly, follow the syllabus instructions.

## Getting Started

### Prerequisites

Before contributing to YardWise, install or obtain access to:

- Git and GitHub
- Node.js and npm
- React, JavaScript (JSX), Vite, and Tailwind CSS v4 (frontend)
- Node.js and Express (backend)
- PostgreSQL / Supabase (database and authentication)

### Clone and Set Up the Repository

Clone the repository:

```bash
git clone https://github.com/YardWise-Project/YardWise.git
cd YardWise
```

Install shared dependencies from the repository root:

```bash
npm ci
```

The frontend and backend share the root `package.json` and `package-lock.json`.

### Environment Variables

Create the required environment files using the variable names documented in the project's `.env.example` files, where available.

Frontend environment variables belong in:

```text
web/.env.local
```

Backend environment variables belong in:

```text
.env
```

The backend uses `dotenv/config` and reads the repository root `.env` file when started using the root npm scripts.

Team members must obtain the Supabase project URL and publishable key through the team's approved sharing method.

Never commit environment files containing credentials or private keys.

### Running YardWise

YardWise uses `concurrently` to run the React frontend and Express backend with one command.

From the repository root, run:

```bash
npm run dev
```

This starts both development servers.

| Service | Local URL |
|---|---|
| React frontend | http://localhost:5173 |
| Express backend | http://localhost:8000 |
| Backend health check | http://localhost:8000/api/health |

Vite may use another available port, such as `5174`, if port `5173` is unavailable.

Press `Ctrl + C` to stop both servers.

### Verifying YardWise

From the repository root, run:

```bash
npm run check
```

This command runs frontend linting and the Vite build, then starts Express, waits for the backend health endpoint, runs the backend tests, and stops the backend automatically.

You do not need to start the backend separately for this command. Stop any existing development server using port `8000` before running the check.

## Branch and Workflow

The default branch is `main`. Development should take place on a separate branch.

Branch naming best practices:

- Use lowercase letters and hyphens.
- Avoid spaces and uppercase letters.
- Keep descriptions short and meaningful.

Example branch names:

```text
feature/description
fix/description
docs/description
```

### Workflow

1. Start from the latest `main` branch.
2. Create a new branch for your work.
3. Make and test your changes.
4. Commit and push your branch.
5. Open a Pull Request into `main`.
6. Resolve any merge conflicts.
7. Complete the Definition of Done.
8. Merge the Pull Request after approval.
9. Update the related Jira task to reflect the completed work.

## Issues and Planning

Use Jira to plan sprints, organize tasks, assign responsibilities, and track progress.

Tasks should include:

- A clear title and description
- Assigned team member or members
- Acceptance criteria describing when the task is complete
- The related sprint or milestone

Divide large features into smaller tasks that can reasonably be completed during a sprint.

## Commit Messages

Use short, descriptive commit messages.

Examples:

```text
feat: add search
fix: correct login validation
docs: update README
test: add project API tests
```

Reference related Jira tasks when applicable:

```text
feat: add search functionality (YAR-14)
```

## Code Style, Linting & Formatting

YardWise uses JavaScript and JSX for its React frontend and JavaScript for its Express backend.

### Frontend

- Use React functional components.
- Use JSX for page and component structure.
- Use Tailwind CSS v4 for styling.
- Keep reusable components in the appropriate component directories.
- Use descriptive component and variable names.
- Follow the existing import and export conventions.
- Avoid unnecessary duplicate components or styles.

### Backend

- Use JavaScript ES modules (`import` and `export`).
- Follow existing Express routing conventions.
- Keep API routes organized by feature.
- Use environment variables for configuration.
- Add input validation and error handling when implementing functionality.
- Do not expose private credentials or sensitive user information.

### Linting and Formatting

From the repository root, run the combined verification command:

```bash
npm run check
```

This includes the configured frontend lint checks, frontend build, and backend tests.

The lint configuration and its coverage should be verified as development continues.

Frontend and backend formatting conventions should remain consistent with the existing codebase.

Automated linting and formatting checks will be expanded as the project progresses.

Dristi will document the frontend linting commands, and Savhanna will document the testing commands by Sprint 3.

## Testing

Testing will include, where applicable:

- React frontend tests
- Express backend API tests
- Database and Supabase integration tests
- Manual feature testing

### Running Tests

From the repository root, run:

```bash
npm run check
```

The command runs linting, builds the frontend, and automatically starts Express for the Vitest tests in `server/tests/`. It waits for the health endpoint before testing and stops the backend afterward.

Existing tests and test configuration should be verified before relying on the results.

As additional features are implemented, contributors should add or update relevant tests.

### Manual Testing

Until automated test coverage is expanded, contributors should manually verify applicable functionality.

Examples include:

- Confirming the frontend loads successfully
- Checking that navigation routes display the expected pages
- Verifying backend API endpoints return expected responses
- Testing forms and user interactions
- Checking authentication and database operations once implemented

The backend health check can be verified at:

http://localhost:8000/api/health

### Build Verification

The frontend build is included in the combined verification command:

```bash
npm run check
```

The build step verifies that Vite can produce the frontend build output.

### Future Testing Improvements

The team plans to expand automated testing and document verified development commands by Sprint 3.

Until all planned CI checks are implemented, contributors must manually run `npm run check` and document any known failures or limitations.

## Definition of Done

Before merging into `main`, all applicable checks must pass.

| Check | Enforcement | Planned Sprint | Owner |
|---|---|---|---|
| Tests pass | GitHub Actions test job | 2–3 | Savhanna |
| Code reviewed for correctness | PR checklist | 1 | James |
| Documentation updated | PR checklist | 1 | Anthony |
| Lint checks pass | GitHub Actions lint job | 2–3 | Dristi |
| No secrets or critical security issues | Security scanning CI job | 4 | James |
| Build succeeds | GitHub Actions build job | 3 | Anthony |
| Teammate PR approval | GitHub PR review; branch protection planned | 1 | Dristi |
| Sprint tasks tracked and assigned | Jira project board | 1 | Dristi |
| Repository structure and setup documented | Manual repository and documentation review | 1 | Savhanna |

Every Pull Request must receive approval from at least one teammate other than the author before merging into `main`.

All team members share responsibility for meeting the Definition of Done.

## Contribution Norm

Every team member must complete at least one piece of accepted work per sprint.

Accepted work must meet the task requirements and the team's Definition of Done. Code contributions are verified through merged GitHub Pull Requests, while Jira tracks the related tasks and sprint progress.

Each member's accepted work will also be recorded in the course sprint notes using the required contribution lines.

### Where Work Is Recorded

Team work is recorded through:

- **GitHub Repository** — code, tests, configuration, and documentation
- **GitHub Pull Requests** — code reviews, approvals, and merged contributions
- **Jira** — project planning, sprint management, task assignments, and progress tracking
- **Partner systems** — when work must happen outside GitHub or Jira

### What Counts as Accepted Work

For repository work, a contribution is accepted when:

1. The work is complete.
2. Its acceptance criteria are met.
3. Applicable Definition of Done checks pass.
4. The work is merged into `main`.

For work such as research, design, documentation, or testing, a contribution is accepted when the agreed deliverable is completed and reviewed by the task owner or team. The related Jira task should reflect its completion.

### Making the Norm Workable

The team will:

- Break large work into sprint tasks.
- Assign tasks to owners.
- Pair on difficult work when useful.
- Record each person's contribution.
- Aim to review Pull Requests within 48 hours or notify the team if delayed.
- Communicate any issues that arise.

## Pull Requests and Review

Pull Requests should include:

- A clear title
- A short summary of the changes
- The related Jira task when applicable
- Testing information relevant to the changes

Every Pull Request must receive approval from at least one teammate other than the author before merging into `main`.

All applicable Definition of Done checks must pass before merging.

Team members should review Pull Requests within 48 hours or notify the team if additional time is needed.

The team will follow up on Pull Requests that remain unreviewed for more than 48 hours.

## CI/CD

GitHub Actions is used for continuous integration, with additional checks planned.

CI workflows are stored in:

```text
.github/workflows/
```

Existing and planned checks include:

- JavaScript and JSX linting
- Automated frontend and backend tests
- Frontend build verification
- Configuration validation
- Security and dependency checks

Required CI checks must pass before merging once configured as required.

Until all planned CI checks are in place, contributors can use `npm run check` to verify applicable tests, linting, and builds locally.

## Security and Secrets

Never commit:

- Passwords
- Private API keys
- Access tokens
- Database credentials
- Supabase service-role or secret keys
- Private keys
- `.env` files containing credentials

Use `.env.example` files to document required environment variable names without storing real secret values. Never commit `.env.local` files containing credentials.

Supabase publishable keys may be used in frontend applications when configured with appropriate security policies. Private credentials must never be exposed in frontend code.

Backend routes that access user data must implement authentication and authorization before being used in production.

Report potential security problems directly to the team.

## Documentation Expectations

Update documentation when changes affect:

- Project setup instructions
- Development commands
- API endpoints
- Environment variables
- Testing procedures
- Major team member contributions

Relevant documentation includes:

- `README.md`
- `CONTRIBUTING.md`
- `AGENTS.md`
- Project documentation in `docs/`

## Release Process

YardWise will use semantic version numbers such as `v1.0.0` (major.minor.patch).

- **Major:** Breaking API changes
- **Minor:** Backward-compatible functionality
- **Patch:** Backward-compatible bug fixes

Before publishing a release:

1. Confirm applicable tests, linting, and required checks pass.
2. Verify the frontend build succeeds.
3. Create a Git tag for the release (example: `v1.2.0`).
4. Record changes in `CHANGELOG.md`.
5. Build and verify the web application for release.
6. Publish the release through GitHub Releases.

If a release fails, return to the last working version and document the issue.

Release procedures will be updated as the application and deployment process are developed.

## Support & Contact

Use the team's agreed communication channels, such as Discord or text messaging, for general development questions.

Use Jira for project planning, sprint management, task assignments, and progress tracking.

Use GitHub Pull Requests for code review, proposed changes, and implementation discussions.