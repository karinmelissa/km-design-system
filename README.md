# Design System UI Kit 

A **UI Kit pattern library** based on **Web Components**.

## 🔧 Tech Stack 
- Atomico with Shadow DOM.
- Vite for development and building.
- Web Test Runner/atomico-dom for testing.
- Storybook as the documentation tool.
- Style dictionary for token management.
- Npm Workspaces for managing a multi-package monorepo.


⚠️ **Important:** : This project requires **npm v7+** to properly support workspaces.


## 🚀 Installation

From the **project root**, run:

````
npm install --workspaces
````

## 🛠️ Development

**Start a package** in dev mode:

`````
npm run start <path-to-package> 
# Example:
npm run start packages/ds-button
`````

## 📦Build

#### Exports
Generate production-ready export files to be consumed by other applications.

`````
# Export a single component
npm run build:exports <path-to-package> 

# Export all components
npm run exports-all
`````

#### Build Package(s)

`````
# Build a single component
npm run build <path-to-package> 

# Build all components
npm run build-all
`````

## 🖼️ Storybook
Storybook provides documentation for each web component, including:

- Installation instructions
- Component functionality
- Attributes & properties
- Events
- Available CSS properties

Run Storybook locally:

`````
npm run storybook
`````


## 📦 Add Dependencies to a Package
When using npm workspaces, dependencies must be installed from the root, targeting the correct package.

`````
npm install <dependency-name> -w <path-to-package>

# Example: install "dep" in ds-button package
npm install dep -w packages/ds-button
`````

More info: [npm workspaces documentation](https://docs.npmjs.com/cli/v7/using-npm/workspaces)


## ✅ Testing
Testing setup follows web component testing best practices with:

- [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/)
- [open-wc/testing](https://open-wc.org/docs/testing/helpers/)
- esm-chai


Run all tests with coverage:

`````
npm run test-all 
`````

Run tests with coverage for a specific package:

`````
npm run test:coverage -w <path-to-package> 
`````

Run tests in watch mode for a specific package:
`````
npm run test:watch -w <path-to-package>
`````


✨ With this workflow, the Design System remains scalable, maintainable, and consistent across projects.

## 👤 Author / Ownership

This Design System UI Kit (demo)is created and maintained by:
- Karin Escobar
- Email : km.escobartoledo@gmail.com
- GitHub : [@karinmelissa](https://github.com/karinmelissa)