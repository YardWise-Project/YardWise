<!-- docs/rfcs/2026-10-26-yardwise-initial-development-platform.md -->

# RFC: Choosing YardWise Initial Development Platform

| Field | Value |
| --- | --- |
| Author | James Beene (beenej@oregonstate.edu), Project 64: YardWise |
| Date | 2026-10-26 |
| Status | Proposed |
| Decision Date | TBD (when decided) |
| Deciders | TBD by team |
| Superseded By | N/A |
| Reviewers | TBD by peer assignments |

## Problem and Context

Our team is developing YardWise, a landscaping/gardening management application designed to support gardens of varying sizes, ranging from individual apartment balcony gardens to multiple garden sites across a college campus.

The application will help users organize garden locations, manage watering schedules, record plant-specific needs, and plan seasonal maintenance.

Before proceeding with development, the team must determine which platform to prioritize: a web application, a mobile application, or postponing the decision until more requirements are established. This decision affects development effort, accessibility, user experience, and the ability to expand the application in the future.

The decision will not affect, nor be affected by, the underlying cloud backend we are planning to implement.

## Options

### Option A: Web Application First

Develop a responsive web application that supports desktop and mobile browsers.

**Benefits:**
- Accessible across multiple device types.
- One primary application codebase.
- Suitable for managing multiple garden sites.
- No app store installation required.

**Costs and tradeoffs:**
- Some mobile capabilities depend on browser support.
- Offline access may require additional engineering.
- Mobile notifications require compatibility testing.

**When this is the right choice:** When broad device access and a shared client codebase matter more for the initial release than native mobile integrations.

### Option B: Mobile Application First

Prioritize development for mobile devices using either native or cross-platform technologies.

**Benefits:**
- Convenient access while working in gardens.
- Integration with device features.
- Potentially stronger support for mobile workflows.

**Costs and tradeoffs:**
- Additional platform testing requirements.
- Desktop access may require separate development.
- Deployment and maintenance may be more complex.

**When this is the right choice:** When garden-side mobile workflows or device capabilities prove essential and outweigh the cost of desktop access and deployment.

### Option C: Defer the Decision (Do Nothing)

Continue development without committing to either a web or mobile application. The team would focus on gathering requirements and planning features while postponing platform-specific implementation.

**Benefits:**
- More time to evaluate user requirements.
- Avoids premature platform commitments.
- Provides flexibility as project requirements evolve.

**Costs and tradeoffs:**
- May delay implementation of core application features.
- Important technical decisions remain unresolved.
- Could create additional work if early designs are incompatible with the eventual platform.

**When this is the right choice:** When unresolved user requirements are consequential enough that selecting a platform now would create greater rework than the delay.

## Analysis

The team will evaluate the options based on development complexity, cross-device accessibility and likely user platforms, and notification and offline capabilities.

### Comparison

| Criterion | Web | Mobile | Defer |
| --- | --- | --- | --- |
| Device access | Broad browser access | Mobile-focused | Undetermined |
| Development | Single web client | Framework-dependent | Delayed |
| Offline support | Requires planning | Framework-dependent | Undetermined |
| Deployment | Web hosting | App distribution | Delayed |

### Development Complexity

Development complexity is an important consideration when choosing the initial platform for our application. A web-first approach requires testing across different browsers, devices, and screen sizes to ensure compatibility [1].

A mobile-first approach would require the team to consider mobile operating systems, device compatibility, and application deployment. Deferring the decision would avoid immediate platform-specific development but could delay implementation and create additional work later.

### Cross-Device Accessibility and User Platform Likelihood

An important consideration is which platform our target users are most likely to use. StatCounter provides data comparing mobile, desktop, and tablet web usage [2]. While these statistics provide insight into general device usage, they do not necessarily represent the preferences of our target users.

### Notification and Offline Capabilities

Notification and offline capabilities are important for our application because users may need watering reminders and access to garden information while working in areas with limited internet connectivity.

A web-first approach could use Progressive Web App (PWA) technologies to provide offline functionality and push notifications. According to MDN, service workers can support offline access through caching and enable notifications even when the application is not open [3]. However, these features are subject to browser restrictions and user permissions.

A mobile-first approach could use operating system notification services and local storage to support these features. Deferring the decision would postpone implementation and testing of notification and offline capabilities.

**Uncertainty:** No YardWise-specific user research, application prototypes, performance benchmarks, or implementation tests have been completed. The comparison is qualitative rather than experimentally validated.

## Recommendation and Verification Plan

### Proposed Recommendation

The preliminary recommendation is to develop YardWise as a responsive web application first. This approach would allow users to access the application from computers, tablets, and phones without requiring a separate application for each device type.

Because YardWise is intended to support gardens of varying sizes, accessibility across different devices is particularly important. An individual managing a balcony garden may prefer accessing watering schedules from a phone, while someone managing multiple garden sites across a college campus may benefit from using a larger screen to organize locations and maintenance tasks.

A web-first approach would allow the team to focus on developing the application's core features before considering a dedicated mobile application. Since the team is planning to use a cloud-based backend, a future mobile application would reuse the same backend services, reducing the need to rebuild the entire system.

Although mobile-first development could provide advantages for notifications and offline access, these capabilities can also be explored through Progressive Web App technologies. Their reliability and compatibility would need to be verified before relying on them for essential reminders.

For these reasons, web-first development appears to offer the most flexibility for YardWise's initial development. However, this recommendation remains open to team review and validation.

### Verification Plan

The web-first approach will be considered successful if users can create and manage garden sites on both desktop and mobile browsers, complete core gardening tasks without interface errors, and receive watering reminders on supported devices. The team will test these features across selected browsers and document any limitations before committing to further development.

**Planned checks (not yet completed):**
- Test creating and managing garden sites in selected desktop and mobile browsers.
- Test core gardening workflows for interface errors.
- Test watering reminders on supported devices, recording browser and permission limitations.
- Document results and limitations before the team makes a final platform commitment.

## Constraints

Licensing and development costs may influence which frameworks the team can adopt. Because YardWise will store user-created garden information, the team must also consider data privacy and appropriate access controls. The selected platform should support these requirements without introducing unnecessary maintenance costs.

**Still to determine:** Specific licensing obligations, intellectual-property constraints, and partner confidentiality requirements have not been established in this RFC and must be confirmed with the team.

## Delegation and Validation

AI tools, specifically ChatGPT, were used to assist with organizing this RFC, formatting the original document in LaTeX, and identifying technical considerations for web-first and mobile-first development. AI assistance was also used to identify potential research sources and draft preliminary comparisons between the proposed development approaches. This Markdown adaptation was also prepared with ChatGPT assistance.

Because the project is still in the planning phase, no application prototypes, performance benchmarks, or implementation tests have been completed. Technical claims were evaluated using documentation from MDN Web Docs and platform usage information from StatCounter.

The final platform recommendation is based on the team's current understanding of the application's requirements rather than experimental results. Further validation will be necessary once development begins.

**Validation boundary:** The original RFC reports source-based evaluation, not hands-on prototype validation. No repository tests, CI checks, staging deployment, or rollback path are documented in the source. These must be recorded when they exist, rather than assumed complete.

## Decision

**Status: Proposed.** The team has not yet recorded a final decision. After review, record whether the proposal was accepted, rejected, or superseded, the decision date, and the deciders. If superseded, link the replacement RFC in the header.

## Open Questions

- How important is offline functionality?
- Are mobile push notifications essential?
- Will multiple users manage the same garden?
- What development frameworks can the team support?

## References

1. Mozilla Developer Network, ["Strategies for Carrying Out Testing"](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Testing/Testing_strategies), accessed October 25, 2026.
2. StatCounter GlobalStats, ["Desktop vs Mobile vs Tablet Market Share"](https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet), accessed October 25, 2026.
3. Mozilla Developer Network, ["Offline and Background Operation"](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Offline_and_background_operation), accessed October 25, 2026.
