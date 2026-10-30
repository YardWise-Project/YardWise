# Requirements

## Problem statement
Gardeners often struggle to keep track of their plants and watering schedules, especially when managing multiple gardens. Yardwise is a web app that centralizes garden information and helps users stay on top of plant care.

## Functional requirements
Priority labels use MoSCoW: product necessity, not build order.

- **FR-1 (Must):** Users can create, edit, and delete gardens. Acceptance: gardens persist after refreshing or reopening the web app.
- **FR-2 (Must):** Users can search for and add plants using an existing third-party plant API. Acceptance: plant information and watering recommendations are retrieved from the API when a plant is added.
- **FR-3 (Must):** Retrieved plant information is stored in Yardwise's cloud database. Acceptance: saved plants can be accessed without requesting their information from the third-party API again.
- **FR-4 (Must):** Users can edit and remove plants within their gardens. Acceptance: changes are saved and displayed in the correct garden.
- **FR-5 (Must):** Users can track watering schedules based on retrieved plant recommendations. Acceptance: the next watering date is calculated correctly.
- **FR-6 (Must):** Users can mark plants as watered. Acceptance: the last watered date is recorded and the next watering date updates.
- **FR-7 (Must):** The web app communicates with Yardwise's backend API to manage user data. Acceptance: create, read, update, and delete requests successfully persist data in the cloud database.
- **FR-8 (Should):** Users can view upcoming and overdue watering tasks. Acceptance: plants are correctly categorized based on their watering schedules.

## Non-functional requirements
- **NFR-1 (Must):** Garden, plant, and watering data is stored in a cloud-hosted database and persists across sessions.
- **NFR-2 (Must):** Users can only access and modify their own garden data.
- **NFR-3 (Should):** Common API requests complete within 2 seconds under normal operating conditions.
- **NFR-4 (Must):** Frontend-to-backend communication uses HTTPS.

## Constraints
- **C-1:** Yardwise is a web application with a separate backend API.
- **C-2:** The backend manages all database operations; the frontend does not connect directly to the database.
- **C-3:** Plant information and watering recommendations originate from an existing third-party API.
- **C-4:** Retrieved plant data is stored in Yardwise's cloud database when a user adds a plant.

## Success metrics
- All Must acceptance criteria pass before MVP release.
- Plant information is successfully retrieved and stored when a plant is added.
- Watering schedules calculate the correct next watering date in all defined test cases.
- User data persists after refreshing and signing back into the app.
- Users cannot access another user's garden data in authorization tests.

## Non-goals
- Weather-based watering recommendations.
- AI plant identification.
- Automatic irrigation systems.
- Social or shared garden features.

## Open questions
- Which third-party plant API will be used?
- Which backend framework and cloud database will be used?
- What authentication method will users use?
- Should users be able to override recommended watering intervals?
- How should the app handle unavailable or incomplete third-party API data?

---

*This document evolves with Yardwise. Git history serves as the change log.*
