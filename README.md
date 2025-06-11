# Frontend

How to run this code on your machine

Before you start, make sure these are installed on your machine:

Node.js (LTS) — includes npm

Angular CLI: npm install -g @angular/cli

Git

You can check with:

node -v
npm -v
ng version
git --version

1.Clone the GitHub Repository
Open Terminal / CMD and run:

git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
Replace YOUR_USERNAME and YOUR_REPO_NAME with your GitHub info.

Example:

git clone https://github.com/jeff-dev/takehome-frontend.git

2. Navigate to the Angular Folder
If your Angular project is inside a frontend/ folder:

cd takehome-frontend/frontend
If it's at the root, just:

cd takehome-frontend

3. Install Dependencies
Now install all the required npm packages:

npm install
This will create the node_modules/ folder.


4. Run the Angular App
Start the development server:

ng serve
It should say:

✔ Compiled successfully.

** Angular Live Development Server is listening on localhost:4200 **

5. Open your browser and go to:
➡️ http://localhost:4200



This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

How to push code to github

1. Create a New Repository Click the “+” icon in the top right → New repository
Name it something like: takehome-fullstack

Add a description (optional)

Choose Public or Private

Don’t initialize with README, .gitignore, or license

Click Create repository

2. Initialize Git Locally Open your terminal in your project folder and run: command: git init

3. Create a .gitignore file in your root folder and add this thing on .gitignore:

  node_modules/
  .env/

4.Stage and Commit Your Code
command: git add . git commit -m "Initial commit - FastAPI + Angular project" 5. Push to GitHub

command: git branch -M main command: git remote add origin https://github.com/YOUR_USERNAME/takehome-fullstack.git 
command: git push -u origin main
