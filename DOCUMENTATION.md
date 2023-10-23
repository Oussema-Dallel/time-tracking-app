# Time Tracking Application

A simplified time tracking application built with React, Redux, MaterialUI and other 3rd party libraries.

## Architechture Overview

Here is a brief overview of the application's architechture:

- `components` folder contains UI components used by the application, these component are meant to be feature specific and reusable. Meaning, They are meant to be used in this case by the `Event` feature only. However, they can be used by other features as well. P.S: normally we would have a `featurs` folder that contains all the features of the application, but since this application is very small, I decided to keep all the features in the root folder.
- `shared` contains all logic that is shared across the application. For instance, the `utils` folder contains all utility functions that are used by the application. The `hooks` folder contains all custom hooks used by the application. The `components` folder contains all shared components used by the application. The `interfaces` folder contains all types used by the application.
- `store` folder contains all the redux logic of the application. the `slices` sub-directory contains all the slices of the application. In a bigger application where we have multiple features, we would havea `store` folder for each `feature` and each `feature` would have its own `slices` folder.

- `Providers` component is a highly extendable component that can be used to render any component with any number of providers(`Redux`, `I18Next`, `React-Router` ...). It is used to wrap the `App` component and provide it with all the providers it needs.

## Current State

The application in its current state allows users to add, edit and delete events. The events are stored in local storage.

Considering the time constraints, here is the current state of the application in more details:

- The UI is not that great but it is fully functional with some querks when it comes to UX. For instance, when editing an event via the `Event View`, the `View` dialog won't close automatically after the event is updated. The user has to close it manually. This is due to the fact that the `View` dialog is not aware of the changes made to the event as of now.

- The application is not responsive. It is only optimized for desktop view.

- The system ecosystem is fully implemented including some utility functions, namely the `renderWithProviers` which is highly extendable and can be used to render any component with any number of providers(`Redux`, `I18Next`, `React-Router` ...). However, the application is not fully tested as of now, only a handful of tests are implemented.

=> The application has been been developed whilst keeping extendability in mind, thus a huge amount of time was reserved to setup and `utils` implementation. It is very scalable and can be extended to support more features and functionalities.

## Third party libraries

React is a minimal UI library unlike Angular, it relies heavily on third party libraries to implement scalable and beyond simple application. Here is a list of the third party libraries used by the application:

- `Redux` is used to manage the application's state. It is a very powerful library that allows us to implement a scalable and maintainable application. It is used in conjunction with `Redux Toolkit` which is a library that provides us with a set of tools to simplify the redux logic implementation. `React-Redux` is used to connect the application to the redux store.
- `MaterialUI` is used to implement the UI of the application. It is a very powerful library that provides us with a set of components that are highly customizable and reusable. It is used in conjunction with `MaterialUI Icons` which is a library that provides us with a set of icons that can be used with `MaterialUI` components. `styled-components` was chosen as the styling engine of choice for `MaterialUI` components as it allows us to style the components in a very elegant way. `MaterialUI Pickers` is used to implement the date picker component. `x-date-pickers` is used to implement the time picker component, this needs `dayjs` as a per dependency.
- `react-color` is used to implement the color picker component.
- `zod` is used to implement the runtime validation logic of the application as `typescript` can only do cpmpile time validations.
- `react-router-dom` is used to implement the routing logic of the application.
=> this is the main list of the third party libraries used by the application. There are other libraries used by the application but are only `devDependencies` such as `eslint`, `react-testing-library` and `@testing-library/jest-dom`, these dependencies won't contribute to the production bundle size.

## Conclusion

Finally, there is always room for improvement given more time. I would have loved to polish the application more, but I had to prioritize the tasks and focus on the most important ones.
