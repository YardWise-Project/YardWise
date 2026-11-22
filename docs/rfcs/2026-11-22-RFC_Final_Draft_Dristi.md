<!-- docs/rfcs/2026-11-22-RFC_Final_Draft_Dristi.md -->

# RFC: Beginning with a Web-First, Progressive Web App, or Cross-Platform Approach

<!-- Decision record header. Leave Status as "Proposed" until your team decides,
     before or after the reviews. Then fill in the outcome and the decision date.
     The document stays where it is; this header is what makes it a record. -->

| Field | Value |
| --- | --- |
| Author | Dristi Patel|
| Date | 2026-11-22 |
| Status | Proposed |
| Decision Date | January 8, 2027 (Week 1 of Winter Term)|
| Deciders | The YardWise team and team mentor|
| Superseded By | N/A |

## Problem and Context
YardWise is an application designed to help users plan and manage outdoor improvement projects, such as gardens and landscaping. Users should be able to create projects, organize tasks, track project progress, access plant information, and manage estimated expenses and materials. As development continues, the team needs to decide which frontend architecture will best support these features while remaining manageable within the project's development timeline.
The main decision is whether YardWise should continue as a standard web application, become a Progressive Web App (PWA), or move toward a cross-platform mobile application. This decision matters because the frontend architecture affects how the team builds and maintains its interface, supports different devices, and potentially adds mobile-specific features in the future.
A standard web application would allow users to access YardWise through a browser. A progressive web app could extend that approach with features such as home-screen installation and selected offline functionality. A cross-platform application built with React Native and Expo could provide a more direct path to native mobile capabilities.
Potential mobile-related features include taking pictures of plants, accessing project information outdoors without an internet connection, and receiving watering or task reminders. This can allow for a most personalized experience and are features that the team may end toward the end of the project.
This decision should be made while the project is still developing its core functionality. Changing the frontend architecture after more pages and features have been implemented could require additional development and testing. On the other hand, choosing a more complicated approach too early could take time away from implementing YardWise's primary features.

### Option A:  Create a React Web Application from the Beginning 

Create YardWise as a React web application using web-based tools and UI components specifically designed for browser environments. This approach would prioritize developing a browser-based application rather than creating a separate mobile application.
This option supports the team's current plan to focus on web development. It allows the team to create responsive layouts that support different screen sizes, maintain browser compatibility, and implement the application's core functionality without having to manage mobile builds or publish the application through an app store. Users would be able to access YardWise directly through a website without needing to download or install an application.
However, if the team decides to develop a React Native application in the future, adapting the existing React web application would require changes to interface components and navigation. Components, styling, and functionality designed specifically for a browser may not work directly with React Native because it uses native interface components rather than standard web elements. Overall, this is a good option if the team's main priority is developing a functional web application and the need for a dedicated mobile application has not yet been established.
### Option B: Develop a React Progressive Web App (PWA) 
Develop YardWise as a React web application while adding PWA capabilities. A PWA can provide an application-like experience through supported browsers, including installation on a device's home screen and access to selected resources offline through service workers and caching.
This option would allow the team to continue using its existing React application while improving accessibility for mobile users. For example, users could install YardWise rather than navigating to the website each time. Previously loaded plant information or other selected resources could also be available without an internet connection.
However, PWA functionality requires additional development and testing. Installation and offline capabilities vary across browsers and operating systems. The team would also need to determine which resources can safely be cached and how the application handles actions that require an internet connection. A PWA improves the web experience but does not guarantee all the capabilities of a native mobile application.
### Option C: Use React Native with Expo
Develop YardWise using React Native and Expo to support mobile applications for Android and iOS, with the possibility of supporting web as well. React Native uses native interface components, while Expo provides tools for developing, testing, and building applications across platforms.
This approach would be useful if the team determines that mobile functionality is essential. It could provide more direct access to device features such as cameras and location services through platform-specific APIs and Expo libraries. Expo also supports web development, potentially allowing the team to target multiple platforms.
The main disadvantage is that adopting this approach would require changes to the team's current frontend direction. Existing React web components, styling, and navigation would not necessarily transfer directly to React Native. The team would need to learn and configure additional tools, develop platform-specific interfaces where necessary, and manage mobile testing and builds. This introduces more complexity than continuing with the existing web application.
### Option D: Do Nothing and Defer the Decision
The team could postpone selecting a frontend architecture and continue discussing the available approaches before making a commitment. This would avoid making a decision before mobile requirements are fully understood.
However, delaying the decision could make development less consistent. The team might continue building browser-specific components without considering how those decisions affect future mobile development. If the team later decides that native mobile support is necessary, parts of the frontend could require redesign or replacement. Deferring the decision also leaves the team without a clear direction for selecting tools and implementing upcoming features.
## Analysis

### Performance

A React web application should provide sufficient performance for YardWise's current features, including displaying projects, tasks, plant information, and budget details. Performance will depend on implementation choices such as data retrieval and component rendering. A PWA can improve access to previously cached resources, although it does not automatically make every feature available offline [1]. React Native may provide a more native mobile experience, but the team has not identified a performance requirement that makes native development necessary.

### Complexity 

Option A introduces the least additional complexity because the team can continue using React and Vite. Option B builds on the same foundation but requires additional configuration for service workers, caching, and offline behavior [1]. Option C introduces a different component model and additional development and testing requirements [2]. Although Expo supports multiple platforms, existing browser-based code may not transfer directly [3]. Option D postpones the decision but could increase future complexity if the team continues implementing features without an agreed direction.

### Maintainability
Option A allows the team to maintain one browser-based frontend and continue using its current backend API. However, future native development could require significant frontend changes [4]. Option B provides additional mobile functionality without replacing the web architecture, although caching and offline behavior introduce more maintenance [1]. Option C could support multiple platforms but may require platform-specific code. Regardless of the selected option, keeping core application logic and data handling in the backend would make future changes easier.

### Security

All options must protect user accounts, project information, and other stored data. The backend should enforce authorization rather than relying on frontend restrictions. Option A requires standard web security practices, including secure communication and appropriate authentication handling [5]. Option B introduces additional considerations because service workers and browser caches may store information on devices [1]. Sensitive data should not be cached unnecessarily. Option C introduces mobile-specific considerations, including secure local storage and permissions for camera and location access.

### Cost 
Option A has the lowest immediate development cost because it builds on the team's existing work and does not require separate mobile builds. Option B introduces moderate additional development and testing costs but reuses the existing frontend. Option C has the highest initial transition cost because the team would need to learn and configure a new environment and adapt its interface [4]. Option D has little immediate implementation cost but could result in rework if the team later discovers that its architecture does not support required features.

## Recommendation and Verification Plan
Based on the options above, I choose Option A: Create a React Web Application from the Beginning. I think this option is the best choice because it focuses on ensuring the backend logic is working first and then considering the frontend. It also allows us to ensure that the main features of the application are working properly before considering a mobile application as a requirement.
We will know that this approach is working during implementation by testing the main features of the project. This can include testing requests to the backend to ensure features like creating projects or updating information works correctly. We can test that the responsive styling of the interface works on mobile devices and different screen sizes. For example, test at 375px, 768px, and 1440px and verify that the main pages have no horizontal scrolling or overlapping content. We will also ensure that the core application functionality is handled by the backend rather than being tightly connected to the frontend, in case we decide to transition from a web application to a mobile application in the future.
Additionally, we will ask our project mentor to review this decision and discuss whether a mobile application is likely to be necessary based on potential features such as camera access, location services, or offline functionality. If mobile development becomes a realistic requirement, we can create a small React Native with Expo prototype to evaluate how much of our existing frontend would need to be changed and whether our backend can still be used.
If the mentor determines that native mobile features are necessary or the prototype shows that transitioning later would create significant difficulties, we will reconsider our approach. Otherwise, we will continue with Option A. Overall, this approach allows us to meet the current project requirements while leaving room for future changes.

## Constraints

The team must ensure that any frameworks, libraries, and dependencies added to YardWise have licenses that allow them to be used and distributed as part of the project. This applies to the existing React and Vite setup as well as any additional tools introduced by the selected approach, such as PWA-related libraries or React Native and Expo. Before adding new dependencies or using certain APIs, the team should review their licenses and terms of use to make sure they are compatible with the project.
The team must also consider how user and project data is stored and accessed. Since YardWise may store information about users' properties, projects, plants, and expenses, this information should only be accessed by authorized users. If the team chooses to add offline functionality through a PWA or mobile application, it must also consider whether storing project information locally on a device introduces additional privacy or security concerns.
The team's existing project code and contributions must remain within the project's ownership and collaboration requirements. Choosing a different frontend architecture should not require using code or resources that the team does not have permission to use. These constraints do not currently rule out any of the proposed options, but they require the team to review the licenses of new dependencies and consider how user data is handled before implementing additional features.

## Delegation and Validation

- **What you handed to AI tools** on this decision, whether that was the analysis, the prototype, the tests, or the writing.

AI was used to compare the options, the tradeoffs sections as well as the verification criteria section. It was used to better word portions of the hard decision the team is facing, taking in some notes that were taken during our team meeting with our mentor. The tool was used to give possible options, with using my judgement for what I actually wrote in the document. 

- **What checks made that reasonable**: tests, CI, review gates, a staging environment, a rollback path. Name the ones that actually exist in your repo, not the ones you intend to build.

In terms of using AI for this draft, I ensured that the information presented was in line with existing information that I research online as well as with what my team has already discussed. I also ensured that it stays in line with the project’s requirements of what features we plan to implement and are realistic to the timeline of the course, which was also verified with our mentor who has experience with working with other capstone teams. Future decisions will also be made this way if AI were to be used as a tool rather than making the final judgement. 

- **Where you stopped and validated the result yourself, and why those points.** If this decision is hard to reverse, say what you personally checked before committing to it.

I validated the results of the output several times when using the tool. Some encounters of this was when the options were given for the draft. I ensure they were in line with what my team and mentor have already discussed with the possible options we had for our project. When discussing the possible considerations with the options, I compared them to resources on React and React Native I researched as well as with the knowledge I already know about the languages. At times where I needed context to our situation, I discussed with the team as we know our project better than anyone, rather than relying on AI as its output doesn’t know all the requirements for our project. When it came to portions of the draft that asked for my own opinion, I provided my own thoughts on the matter rather than consulting with AI. 


## Decision

This decision has been proposed on November 22, 2026 and aims to have its decision date be January 8, 2027. This decision will be chaired by the team and our mentor. 

## Work Cited

[1] “Caching - Progressive Web Apps | MDN.” MDN Web Docs, 12 June 2025, https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Caching.

[2]Francisco, Carlo. “Unit Testing React Native Components: A Firsthand Guide.” Medium, 8 Aug. 2016, 
https://medium.com/@jcfrancisco/unit-testing-react-native-components-a-firsthand-guide-cea561df242b.

[3] “Additional Platform Support.” Expo Documentation, 1 Oct. 2026, https://docs.expo.dev/modules/additional-platform-support/.

[4] Fateh, David. "React vs. React Native: The Difference, and Which Is Best for You." Contentful, 2 Oct. 2024, www.contentful.com/blog/react-vs-react-native/.

[5] OWASP Secure Coding Practices - Quick Reference Guide | Secure Coding Practices | OWASP Foundation. https://owasp.org/www-project-secure-coding-practices-quick-reference-guide/stable-en/02-checklist/05-checklist.html. Accessed 22 Nov. 2026.
