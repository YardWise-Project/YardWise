# Risks

**Objective:** Maintain high code quality, stability, auditability, and team trust through disciplined peer review before code reaches the main branch.  
**Rank Scale:** Likelihood and Impact (High, Medium, Low) with a brief reason. Act on the top 3–5.

---

## Active Risks

*   **R-1 technical, H/H** (unreviewed code; gates system stability).  
    *   **Statement:** Direct pushes to the main branch bypass automated checks and peer review; if a broken or malicious commit lands, production goes down and users lose access.  
    *   **Owner:**   
    *   **Response:** Mitigate: Enable branch protection rules on main to strictly require pull requests and passing CI checks.  
    *   **Trigger:** A commit is pushed directly to main without an associated PR.
*   **R-2 team, H/H** (loss of shared knowledge; silent regressions).  
    *   **Statement:** Code is written in silos without architectural oversight; if the original author is unavailable, nobody else understands the changes or knows how to fix a regression.  
    *   **Owner:**   
    *   **Response:** Mitigate: Require at least one approving code review from a domain expert before merging any changes.  
    *   **Trigger:** A complex feature or bug fix is merged with zero peer comments or reviews.
*   **R-3 business, M/H** (broken compliance or audit trail).  
    *   **Statement:** There is no documented decision trail or accountability for why specific changes were made; if an audit or security incident occurs, the team cannot trace who approved a vulnerable change.  
    *   **Owner:**   
    *   **Response:** Mitigate: Enforce PR linkage to issues/tickets and require status checks to pass.  
    *   **Trigger:** A change lands in production that lacks a linked issue, rationale, or review history.
*   **R-4 technical, M/M** (untested edge cases reaching production).  
    *   **Statement:** Developers can push code without running local test suites or waiting for CI pipelines; if incomplete code lands, it causes downstream build failures for the rest of the team.  
    *   **Owner:**   
    *   **Response:** Mitigate: Require passing CI status checks as a mandatory prerequisite for merging code.  
    *   **Trigger:** A failed build or broken test suite occurs on the main branch.
*   **R-5 team, L/M** (friction and lowered code standards).  
    *   **Statement:** Team culture shifts toward cowboy coding and speed over correctness; without a standard review process, code style degrades and technical debt accumulates rapidly.  
    *   **Owner:**   
    *   **Response:** Accept. *Why:* For minor typos or documentation fixes in a personal or solo sandbox project, the overhead of a PR is unnecessary. *Contingency:* Revert the commit immediately if it introduces unintended side effects.  
    *   **Trigger:** Code style or bug frequency degrades noticeably over two consecutive sprints.

---

## Closed

*   **R-6** Unrestricted push permissions to the main branch: restricted and migrated to branch-protected pull requests.
