# RFC: Taking a Web-First or Cross-Platform Approach

<!-- Decision record header. Leave Status as "Proposed" until your team decides,
     before or after the reviews. Then fill in the outcome and the decision date.
     The document stays where it is; this header is what makes it a record. -->

| Field | Value |
| --- | --- |
| Author | Dristi Patel|
| Date | 2026-10-24 |
| Status | Proposed |
| Decision Date | 1/8/27 (Week 1) of Winter Term|
| Deciders | The team and team mentor|
| Superseded By | N/A||

## Problem and Context

YardWise is an application made to assist users in planning and managing their outdoor improvement projects. It allows users to plan projects, create checklists, gain insights through plant information, and more. Along with this, financial information is also managed through this application to help the user plan for possible costs and decide what materials they may need within their budget. As of now, our team is planning to make a web application, however, we may want to publish it as a mobile application if the time and project requirements allow it.

The decision we need to make is whether to build a React web application first now or to use React Native to support both mobile and web from the beginning. Since the decision affects the styling, UI, access to certain device features, deployment, and more, it is an important decision we have to make. React and React Native are similar programming wise, but they do use different UI components as well as render differently, so this would cause us to have to rebuild a lot of the interface. If we choose to create a web application first, this can lead to us having to do additional work later if we switch over to a mobile application. If we choose to do a mobile application with web implementation in the beginning, we risk starting unnecessary work in the beginning if all we needed to create for a final product is running it in the browser. 

If the team does nothing, we risk complication in understanding how choosing a mobile application could influence an application architecture decision. This can lead to having to change a lot of work or doing too much in the beginning, which may not be necessary. 

## Options:
At least three options, **including "do nothing"**. Give each option a short name, an account of its real costs, and the condition under which it would be the right choice. An option with no such condition is a strawman, and a strawman weakens the whole document.

### Option A:  Create a React Web Application from the Beginning 

Create Yardwise as a React web application that uses other web -based tools and UI components that are specifically used for a browser. This application would be browser based rather than creating a mobile application. 

As of now, this option supports our team plan to go a web-development route. It allows for the team to create responsive layouts that support a web application on a mobile device, have browser compatibility, and core application functionality without having to manage mobile builds and publishing to the app store. Users can just easily access a website without having to install. 

The costs of this option is that choosing to do a React Native application in the future, if we choose to adapt it from the current React web application, would require us to change the interface components and navigation features. The components created for a web application, the styling, and functionality made for a browser that won’t work with React Native. Overall, this is a good option if we want to make a functional web application as a main priority but the mobile application is not yet certain. 

### Option B: Build a React Native Application using Expo with Web Support

This option would allow React Native as the foundation of a mobile application that can run on any OS while also potentially being supported on the web. Our team would build the interface with React Native components and use Expo’s web support where appropriate. 

Taking this approach would require maintaining a separate UI if the team ultimately wants to support both web and mobile. Expo provides tooling for building native applications and supports web development through React Native for Web. Shared application logic and some UI components can be used across platforms.
However, this does not guarantee that every component or interaction will work identically everywhere. Web and mobile platforms have different interaction patterns, layout expectations, and capabilities. Our team would need to verify that its desired web experience works well with the chosen cross platform architecture. It would also need to learn the Expo workflow and test the application on the platforms it intends to support.

### Option C: Do Nothing

This option considers continuing developing YardWise without deciding whether publishing a mobile application  should influence the current architecture set up. Our team would make implementation choices as needed and revisit the question if creating a mobile application is a concrete requirement.
This option minimizes the immediate time spent evaluating architectures and may be reasonable if our team expects to decide on mobile publication near the end of the project.
However, if we choose not to consider the architecture of the application, it will most likely be web focused. If mobile development becomes necessary, our team may discover that important application logic is tied into browser components or that existing dependencies do not support React Native.
This option is appropriate if the likelihood of a mobile release is very low and our team is comfortable accepting potential rework rather than investing in cross-platform considerations now. Wanting to publish the mobile application, having to rework certain parts, would happen if we decide to do the mobile application and the architecture switch appears with a lot of work. 
## Analysis

Performance

For a React web application, users can access the application through a browser rather than having to install, which can make it easier to manage info. If there is a responsive styling for the web application, then it can also be used on a mobile device. Performance can be difficult to determine though as this will mainly have to consider how information is provided and how other features of the application rather than what time of application. 

Complexity 

React is a more simple interface, mostly having a single part to focus on. React Native, on the other hand, has many other dependencies to consider and can be a hassle to publish on app stores (Fateh).

Maintainability

When it comes to a React web application, the sites are generally manageable and easy to keep up maintenance with. However, with React Native mobile applications, there are some other aspects to consider during maintenance because the app can run on different operating systems and may need to fulfill different requirements (Fateh). 

Security

Comparing the two options, there isn’t much difference in security since authentication and authorization will be a backend and database issue rather than a frontend problem. Both will have a similar approach of having the backend consider security.

Cost 

React and React Native are open source languages and the tool to test our code, Expo, is also free to use (“React vs React Native”). A potential tradeoff to consider is the cost of maintaining a site compared to a mobile application. From my research and discussion with our mentor, it seems there is a cost to publishing an app on an app-store. To publish an app on the app store it is $99 a year and a $25 one time fee for the Google Play store (“How Much Does”). There is also a domain name fee for websites as well. 


## Recommendation and Verification Plan

Based on the options above, I choose Option A:  Create a React Web Application from the Beginning. I think this option wins the analysis above as it focuses on ensuring the backend logic is working first and then considering the frontend. Also, it focuses on ensuring the main features for the application are working properly before considering a mobile application as a requirement. 

We will know that this approach worked during the time of implementation as we will check that the main features of the project work. We can test that the responsive styling of the interface works on mobile devices as well. Also, we will ensure that much of the core feature implementation is tied into the backend rather than the frontend just in case we decide to go with the change of web to mobile. Overall, it allows us to be sure we meet the project requirements while also leaving room for changing our application approach. 


## Constraints

Some constraints are architecture having to be compatible with the project’s requirements and ensuring that any dependencies that are part of the project are compatible with the terms and services of any frameworks we plan to use. If our team decides to go ahead with publishing the application, it must meet requirements the app store requires. 

## Delegation and Validation

- **What you handed to AI tools** on this decision, whether that was the analysis, the prototype, the tests, or the writing.

AI was used to compare the options, the tradeoffs sections as well as the verification criteria section. It was used to better word portions of the hard decision the team is facing, taking in some notes that were taken during our team meeting with our mentor. The tool was used to give possible options, with using my judgement for what I actually wrote in the document. 

- **What checks made that reasonable**: tests, CI, review gates, a staging environment, a rollback path. Name the ones that actually exist in your repo, not the ones you intend to build.

In terms of using AI for this draft, I ensured that the information presented was in line with existing information that I research online as well as with what my team has already discussed. I also ensured that it stays in line with the project’s requirements of what features we plan to implement and are realistic to the timeline of the course, which was also verified with our mentor who has experience with working with other capstone teams. Future decisions will also be made this way if AI were to be used as a tool rather than making the final judgement. 

- **Where you stopped and validated the result yourself, and why those points.** If this decision is hard to reverse, say what you personally checked before committing to it.

I validated the results of the output several times when using the tool. Some encounters of this was when the options were given for the draft. I ensure they were in line with what my team and mentor have already discussed with the possible options we had for our project. When discussing the possible considerations with the options, I compared them to resources on React and React Native I researched as well as with the knowledge I already know about the languages. At times where I needed context to our situation, I discussed with the team as we know our project better than anyone, rather than relying on AI as its output doesn’t know all the requirements for our project. When it came to portions of the draft that asked for my own opinion, I provided my own thoughts on the matter rather than consulting with AI. 


## Decision

Proposed

##Work Cited

Fateh, David. "React vs. React Native: The Difference, and Which Is Best for You." Contentful, 2 Oct. 2024, www.contentful.com/blog/react-vs-react-native/. 
“How Much Does React Native App Development Cost in 2026?” Ronas IT, https://ronasit.com/blog/what-affects-react-native-app-cost-at-each-stage-of-development/. Accessed 24 Oct. 2026. 
React vs React Native: Best for Web or Mobile App? 9 Jan. 2025, https://www.sofrik.com/react-vs-react-native-best-for-web-or-mobile-app/.
