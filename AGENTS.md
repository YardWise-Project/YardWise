# AGENTS.md

## Project Overview

YardWise is a team software development project using React Native/Expo, TypeScript, Python/FastAPI, PostgreSQL/Supabase, and Docker.

This file provides guidelines for AI tools working in our repository.

## Project Guidelines

AI tools should follow:

- `README.md` — Project overview and setup
- `CONTRIBUTING.md` — Coding conventions, contribution requirements, testing, reviews, and Definition of Done
- `docs/WORKFLOW.md` — Accepted contributions and team progress

Each team member must complete at least one accepted contribution per sprint. AI-assisted work must follow the same requirements.

## Development Commands

Mobile (`mobile/`):
- `npm install`
- `npx expo start`

Backend (`backend/`):
- `pip install -r requirements.txt`

Mobile development uses TypeScript, ESLint, and Prettier. Follow existing coding conventions and avoid unnecessary changes.

## AI and Confidentiality

Our team primarily uses AI for troubleshooting and may consider an optional AI assistant within YardWise.

- Never submit private user information to any AI model.
- Do not share passwords, API keys, `.env` files, or confidential partner information with AI tools.
- Use AI for troubleshooting only with non-confidential or approved project information.
- AI must not make decisions on behalf of users without their consent.
- If an AI assistant is implemented, users must have the option to disable it.
- Review AI-generated suggestions before incorporating them into the project.
- Follow the team's confidentiality agreement and obtain approval when unsure whether information can be shared.

## Contributions and Reviews

- Use separate branches and Pull Requests.
- Follow the Definition of Done in `CONTRIBUTING.md`.
- Check AI-generated changes for correctness, security, and confidentiality.
- Formal teammate approval is not required for every PR.
- Record accepted work in GitHub or `docs/WORKFLOW.md`.
- Significant technical decisions require team discussion and should be recorded in Architecture Decision Records (ADRs).

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

Owners will update the relevant documentation as features and configurations are implemented. The team must assign owners to the remaining items.

AI tools should not assume unfinished features or configurations already exist.
