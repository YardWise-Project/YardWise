# AGENTS.md

## Project Overview

YardWise uses React, Vite, and TypeScript for the web frontend; Node.js, Express, and TypeScript for the backend; and PostgreSQL/Supabase for the database.

This file provides guidelines for AI tools working in our repository.

## Approved AI Tools

ChatGPT
Claude
Gemini

## Project Guidelines

AI tools should follow:

- `README.md` — Project overview and setup
- `CONTRIBUTING.md` — Coding conventions, contribution requirements, testing, reviews, and Definition of Done
- `docs/WORKFLOW.md` — Accepted contributions and team progress

Follow existing TypeScript conventions, keep changes focused, and avoid introducing unnecessary features or dependencies.

## Development Commands

For frontend and backend installation, environment setup, and startup commands, see `README.md` and `CONTRIBUTING.md`.


## AI and Confidentiality

Our team primarily uses AI for troubleshooting and may consider an optional AI assistant within YardWise.

- Never submit private user information to any AI model.
- Do not share passwords, API keys, `.env` files, or confidential partner information with AI tools.
- Use AI for troubleshooting only with non-confidential or approved project information.
- AI must not make decisions on behalf of users without their consent.
- If an AI assistant is implemented, users must have the option to disable it.
- Review AI-generated suggestions before incorporating them into the project.
- Follow the team's confidentiality agreement and obtain approval when unsure whether information can be shared.
- Do not share confidential meeting notes without permission.
- Do not share private repository code with external AI tools unless the team approves.
- AI tools may be used for troubleshooting with public, non-confidential information. No AI tool is approved to receive private repository  code, partner information, meeting content, or user data unless the team explicitly authorizes that tool and the specific information being shared.

## Contributions and Reviews

- Use separate branches and Pull Requests.
- Follow the Definition of Done in `CONTRIBUTING.md`.
- Check AI-generated changes for correctness, security, and confidentiality.
- Pull Requests must receive approval from at least one teammate other than the author before merging into main.
- Record accepted work in GitHub or `docs/WORKFLOW.md`.
- Significant technical decisions require team discussion and should be recorded in Architecture Decision Records (ADRs).
- The team will follow up on Pull Requests that remain unreviewed for more than 48 hours.

## Future Updates

The following will be documented as development progresses:

| Item | Owner | Timeline |
|---|---|---|
| Web frontend linting commands | Dristi | Sprint 3 |
| Testing commands | Savhanna | Sprint 3 |
| CI/build commands | Anthony | Sprint 3 |
| Security scanning | James | Sprint 4 |
| Backend linting conventions | James | When configured |
| Architecture and API details | Savhanna | As code develops |

Owners will update the relevant documentation as features and configurations are implemented.

AI tools should not assume unfinished features or configurations already exist.
