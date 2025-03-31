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

🧪 [Test cases for Telnyx](https://docs.google.com/spreadsheets/d/1kseA19mz9KTTrFpkDTaiH6Goj3PPxELe0FnmTtAIUak/edit?gid=0)

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

## Steps to Launch

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
   npm run open
   ```

## CI and Cypress Cloud

- The project can be integrated with CI pipelines using GitHub Actions.
- Cypress Cloud is used to record test runs and view dashboards with test analytics.

To run tests with recording enabled (Cypress Cloud):
```sh
npm run test:record
```