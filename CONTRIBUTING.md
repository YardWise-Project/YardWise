# Contributing to YardWise

This guide explains how the YardWise team sets up the project, contributes changes, and tests work so contributions meet our Definition of Done.

## Code of Conduct

Expectations and the reporting process are as follows:

Discuss any potential concerns with team members. 
Be respectful and courteous. 
If the group isn't addressing disagreements or concerns properly, follow the syllabus instructions. 

## Getting Started

### Prerequisites

YardWise uses:

- Git and GitHub
- Node.js
- React Native / Expo
- TypeScript
- Python / FastAPI
- PostgreSQL / Supabase
- Docker

### Environment Setup

Clone the repository

Use `.env.example` as the reference for environment variables.

Create your own local `.env` file for development. Do not commit `.env`, passwords, API keys, tokens, or secrets.

### Running Locally

Mobile (inside `mobile/`):
- `npm install` — install dependencies
- `npx expo start` — start the mobile app

Backend (inside `backend/`):
- `pip install -r requirements.txt` — install dependencies

## Branch and Workflow

The default branch is `main`. Development should be on a separate branch.

Best practices: 
Use lowercase letters and hyphens (avoid spaces and uppercase letters), 
Keep the description short

Example branch names:

```text
feature/description
fix/description
docs/description
```

Workflow:

1. Start from the latest `main`.
2. Create a branch.
3. Make and test your changes.
4. Commit and push your branch.
5. Open a Pull Request into `main`.
6. Resolve any merge conflicts.
7. Complete the Definition of Done.
8. Merge the Pull Request.
9. Record accepted work in `docs/WORKFLOW.md`.

## Issues and Planning

Use issues to track features, bugs, and tasks.

Issues should include:

- A title and description
- Team members' names
- Acceptance criteria describing when the task is complete.
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

How to reference issues:

```text
feat: add search functionality (#14)
```

## Code Style, Linting & Formatting

Mobile code will use TypeScript with ESLint and Prettier.

Backend formatting and linting tools will be selected when the FastAPI environment is configured.

Local linting and testing commands will be added once environments are configured. 
The team plans to document and verify these commands by Sprint 3.

## Testing

Testing will include, where applicable:

- Mobile tests
- Backend API tests
- Database and integration tests
- Manual feature testing

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

CI jobs are planned. They will be added to `.github/workflows/`. Once created, this document will identify their actual filenames and job names.

Until then, contributors will manually verify applicable checks. Teammate approval is not required, but the PR author must check correctness before merging.
All team members share responsibility for meeting the Definition of Done.

## Contribution Norm

 Every team member must complete at least one piece of accepted work per sprint. Accepted work must meet the task requirements and be recorded in GitHub or the team's workflow log.

### Where Work Is Recorded

Team work is recorded through:

- **GitHub Repository** — code, tests, configuration, and documentation
- **GitHub Issues** — tasks, features, bugs, assignments
- **GitHub Pull Requests** — proposed and accepted repository changes
- **`docs/WORKFLOW.md`** — each member's merged work
- **Partner systems** — when work must happen outside GitHub

### What Counts as Accepted Work

For repository work, a contribution is accepted when:

1. The work is complete.
2. Its checks are met.
3. Definition of Done checks pass.
4. The work is merged into `main`.

For work such as research, design, documentation, or testing, a contribution is accepted when the agreed
deliverable is completed, reviewed by the task owner or team, and recorded in a completed GitHub Issue or `docs/WORKFLOW.md`.

### Making the Norm Workable

The team will:

- Break large work into sprint tasks.
- Give tasks to owners.
- Pair on difficult work when useful.
- Record each person's contribution.
- Aim to respond to review requests within three working days, or notify the team if delayed.
- Communicate any issues that arise.

Accepted work should be listed in `docs/WORKFLOW.md` with the sprint, task or Issue, Pull Request, contribution, and status.

## Pull Requests and Review

Pull Requests should include:

- A clear title
- A short summary of the change
- The related issue when applicable

Formal teammate approval is not required for every Pull Request. However, changes must meet the Definition of Done before merging.

Team members should respond to requested reviews or feedback within three working days or notify the team if needed.

## CI/CD

GitHub Actions will be used for continuous integration

CI workflows will be stored in:

```text
.github/workflows/
```

Planned checks include linting, automated tests, validation, and security/dependency checks.

Required CI checks must pass once implemented.

## Security and Secrets

Never commit:

- Passwords
- API keys
- Access tokens
- Database credentials
- Private keys
- `.env` files

Use `.env.example` to document required environment variable names without storing real secret values.

Report potential security problems directly to the team.

## Documentation Expectations

Update documentation when a change affects project setup, APIs, and each member's contributions in WORKFLOW.md.

Relevant documentation includes:

- `README.md`
- `CONTRIBUTING.md`
- `docs/WORKFLOW.md`
- `AGENTS.md`
- Project documentation in `docs/`

## Release Process

YardWise will use version numbers such as v1.0.0 (major.minor.patch).
(major: breaking API changes, minor: backward-compatible functionality, patch: backward-compatible bug fixes)
- Confirm tests, linting, and required checks pass
- Create a Git tag for the release (example: v1.2.0)
- Record changes in `CHANGELOG.md`
- Build and package the mobile app using Expo when ready
- Publish the release through GitHub Releases. App store publishing will be added if needed
- If a release fails, return to the last working version and document the issue.

Release procedures will be updated as the application and deployment process are developed.

## Support & Contact

Use the team's agreed communication channel for general development questions (Discord/ Text).

Use GitHub Issues for trackable bugs and tasks, and Pull Requests for questions.
