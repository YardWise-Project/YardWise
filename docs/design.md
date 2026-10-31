# Design

## Overview

YardWise is a gardening and landscaping application designed to help users manage their yards, organize landscaping projects, track materials and expenses, receive plant recommendations, and schedule routine maintenance.

The system will consist of a React front end, a Node.js API, and a PostgreSQL database. Users will be able to create accounts, register properties, plan landscaping projects, manage tasks, upload photos, and monitor yard maintenance activities.

## Architecture

- **Web App (React):** Provides the user interface for managing properties, landscaping projects, task checklists, materials, plant recommendations, photos, and maintenance reminders.
- **API (Node.js, Express):** Handles user authentication, property management, project operations, task tracking, cost calculations, plant recommendations, and maintenance reminder logic.
- **Database (PostgreSQL):** Stores user accounts, properties, projects, project tasks, materials, plants, plant recommendations, photos, and maintenance reminders.
- **Image Storage:** Stores uploaded yard and landscaping project images. The database maintains references to these images through URLs.
- **Notification Service:** Supports scheduled maintenance reminders and future notification functionality.

The React application communicates with the Node.js API, which processes requests, and interacts with the PostgreSQL database.

## Interfaces

- REST API using JSON for communication between the React front end and Node.js back end.
- API endpoints will support user management, property registration, landscaping projects, tasks, materials, plant recommendations, photos, and maintenance reminders.
- Users can create, retrieve, update, and delete their properties and landscaping projects.
- Project tasks can be updated to track progress and completion dates.
- Material records allow users to estimate landscaping expenses and track purchased supplies.
- Plant recommendations use property characteristics, including hardiness zone, sunlight level, and soil type, alongside plant information.
- Photo upload functionality stores image references associated with users, properties, or projects.
- Maintenance reminders allow users to track recurring gardening activities.

The API will validate incoming requests and enforce user access permissions to prevent unauthorized changes to another user's data.

## Data

PostgreSQL will serve as the primary relational database. The YardWise ERD defines nine core entities:

- **Users:** Stores user account information, including unique identifiers, email addresses, and full names.
- **Properties:** Stores yard information, including location, hardiness zone, yard size, sunlight exposure, and soil type. Each property belongs to a user.
- **Projects:** Stores landscaping project details, including title, description, project type, status, budget, estimated cost, priority, and project dates. Each project belongs to a property and references its creator.
- **Project_tasks:** Stores project checklists and milestones, including task descriptions, statuses, due dates, and completion timestamps. Each task belongs to a project.
- **Materials:** Stores landscaping supplies, quantities, units, estimated costs, and purchase status. Each material belongs to a project.
- **Plants:** Stores reusable plant information, including common and scientific names, hardiness zones, sunlight and water requirements, maintenance levels, and environmental characteristics.
- **Plant_recommendations:** Connects recommended plants to properties and optionally to specific landscaping projects. Each recommendation can include an explanation of why the plant is suitable.
- **Photos:** Stores image URLs, captions, and photo types associated with users, properties, or projects.
- **Maintenance_reminders:** Stores recurring gardening and landscaping maintenance schedules, including reminder type, frequency, due dates, completion dates, and active status.

Relationships are enforced through primary keys and foreign keys.

All core entities use UUID primary keys. User email addresses must be unique, and required fields such as project titles, task titles, material names, photo URLs, and reminder titles cannot be null.

Two additional tables are identified for possible future development:

- **Weather_logs:** Stores property-specific weather information, including forecast dates, temperatures, and precipitation data.
- **Notifications:** Stores notification information associated with users and optionally maintenance reminders.

These future tables are not required for the initial implementation.

## Deployment

- The React front end will be deployed through a web hosting service.
- The Node.js and Express API will run on a server or cloud hosting platform.
- PostgreSQL will provide persistent storage for application data.
- Uploaded photos will be stored through an image or object storage service, with their URLs saved in PostgreSQL.
- Environment variables will manage database credentials, authentication secrets, and external service configurations.
- Development, testing, and production environments will be separated to support reliable updates.
- Database migrations will manage changes to the YardWise data structure.
- Deployment procedures will include backups and rollback options to reduce the risk of data loss or application downtime.

## Open Questions

- Which authentication method should YardWise use for user registration and login?
- Which hosting platform should be selected for the React front end, Node.js API, and PostgreSQL database?
- Which image storage provider should handle uploaded property and project photos?
- Should plant recommendations initially use rule-based matching with hardiness zones and sunlight requirements, or incorporate an external plant information API?
- Should maintenance reminders initially appear only inside the application, or should email notifications also be supported?
- How will plant information be populated and maintained in the Plants table?
- Should weather information be integrated into the initial application or added in a later release?

## Deferred Decisions

- **Weather integration:** Weather forecasting and historical weather records will be considered in a future release using the optional Weather_logs table.
- **Notification history:** A dedicated Notifications table may be implemented when the application requires stored notification records and delivery tracking.
- **Advanced plant recommendations:** Initial recommendations can use stored plant characteristics and property conditions. More advanced recommendation algorithms may be introduced later.
- **Automated maintenance scheduling:** Basic recurring reminders will be supported initially, with more advanced scheduling and notification automation considered as the application grows.
- **Additional landscaping features:** Features such as interactive yard design, advanced cost analytics, and third-party landscaping service integrations may be evaluated for future development.
