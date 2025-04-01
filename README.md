# Telnyx Cypress-Cucumber E2E Testing Project

## Summary of Repo

This repository contains automated end-to-end tests for the Telnyx website, written in Cypress with TypeScript and integrated with Cucumber. The project follows the Page Object Model (POM) architecture and implements structured Gherkin-based test cases covering both positive and negative scenarios across different site components (e.g., search, footer navigation).

## Requirements

- Node.js (latest LTS recommended)
- Cypress
- Cucumber preprocessor (@badeball/cypress-cucumber-preprocessor)
- TypeScript
- GitHub (for version control)

## Test Cases

🧪 [Test cases for Telnyx](https://docs.google.com/spreadsheets/d/1kseA19mz9KTTrFpkDTaiH6Goj3PPxELe0FnmTtAIUak/edit?gid=1662176966#gid=1662176966)

## Install

1. Clone the repository:
   ```sh
   git clone https://github.com/Anna-Ruban-ua/Cypress-Cucumber
   ```
2. Navigate to the project directory:
   ```sh
   cd Cypress-Cucumber
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. If you don’t have Cypress globally (optional):
   ```sh
   npm install -g cypress
   ```
### !All required dependencies like @badeball/cypress-cucumber-preprocessor are installed automatically via npm install.

## Run tests

1. Run tests with default config:
   ```sh
   npm run test
   ```
2. Run tests in Chrome:
   ```sh
   npm run test:chrome
   ```
3. Run tests in Firefox:
   ```sh
   npm run test:firefox
   ```
4. Run with mobile config:
   ```sh
   npm run test:mobile
   ```
5. Run with fullscreen config:
   ```sh
   npm run test:fullscreen
   ```
6. Open Cypress Test Runner:
   ```sh
   npm run cy:open
   ```
7. To run tests with recording enabled (Cypress Cloud):
   ```sh
   npm run test:record
   ```

## CI and Cypress Cloud

- CI/CD is set up through GitHub Actions. CI/CD pipeline is triggered automatically on every push or merge to the main branch.
- Cypress Cloud is used to record test runs and view dashboards with test analytics.
