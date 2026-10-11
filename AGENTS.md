# AGENTS.md

## Project Overview

YardWise is a team software development project using React Native/Expo, TypeScript, Python/FastAPI, PostgreSQL/Supabase, and Docker.

This file provides instructions for AI coding tools working in the repository.

## Project Guidelines

AI tools should follow:

- `README.md` — Project overview and setup
- `CONTRIBUTING.md` — Coding conventions, contribution norm, Pull Requests, review expectations, testing, and Definition of Done
- `docs/WORKFLOW.md` — Accepted work and team contributions

All team members must complete at least one accepted contribution per sprint. AI-generated work must follow the same contribution and review requirements.

## Development Commands

Mobile (`mobile/`):
- `npm install`
- `npx expo start`

Backend (`backend/`):
- `pip install -r requirements.txt`

Follow existing coding conventions. Mobile uses TypeScript, ESLint, and Prettier. Do not modify unrelated files or add unnecessary dependencies.

## AI and Confidentiality

AI tools may assist with  debugging, testing, and documentation using approved project information.

- Follow the partner confidentiality agreement.
- Never share passwords, API keys, `.env` files, personal information, or confidential partner data with AI tools.
- Only share project code with AI tools approved to process that code.
- Do not upload private partner documents or proprietary code without authorization.
- If unsure whether information can be shared, ask the team first.
- Review AI-generated work for correctness, security, and confidentiality before merging.

## Contributions and Reviews

- Work on separate branches and submit Pull Requests.
- Follow the Definition of Done in `CONTRIBUTING.md`.
- Verify applicable tests, linting, documentation, and security checks.
- Formal teammate approval is not required for every PR, but changes must be checked for correctness before merging.
- Record accepted contributions in GitHub or `docs/WORKFLOW.md`.

## Future Updates

The following will be documented as development progresses:

| Item | Owner | Timeline |
|---|---|---|
| Mobile linting commands | Dristi | Sprint 3 |
| Testing commands | Savhanna | Sprint 3 |
| CI/build commands | Anthony | Sprint 3 |
| Security scanning | James | Sprint 4 |
| Backend linting conventions | TBD | When configured |
| Architecture and API details | TBD | As code develops |

Owners are responsible for updating the relevant documentation and this file when needed. The team will assign owners to the remaining items.

AI agents should not assume unfinished features, commands, or configurations already exist.
