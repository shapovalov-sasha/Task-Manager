# Task Manager

Learn React by implementing a Task Manager app alongside your Frontend mentor as a part of **React** course from [SkillBrain©](https://skillbrain.com/)

## 🛠 Clone and install the project

1. Clone this repository in the desired folder:

    `git clone git@github.com:shapovalov-sasha/Task-Manager.git`

2. Navigate into the project directory:

    `cd Task-Manager`

3. Install by running:

    `npm install`

    > Run this command once - when you're installing  the project. 

4. When installation is complete, you can start the server in development mode:

    `npm start`

## Course structure and branches

### 💻 Base code

The project has different branches corresponding to the module covered in video courses, each module having **two branches**.

> There are two types of branches which start with `<base>` or `<solution>`

💡 **Example:**
`base/1.0/first-component-in-react` or `solution/1.0/first-component-in-react`

### ✅ Solution

The branch starting with `<base>` contains the mentor's final code at the end of the video course.
If you fail to track what the mentor is doing and have lost the thread, you can always check your code with the mentor's version to avoid getting stuck at this step.


### ❗️Before starting your work

 **Ensure you're on the right branch** when working on a new feature. You can find the branch under the each video course at [Class SkillBrain](https://class.skillbrain.com/).

So at the start of each lesson, you should do the following steps:

1. Launch the **VsCode** and open the project directory.
2. Open a new terminal window, `Terminal > New Terminal`.
3. Update the reference to remote branches:

  `git fetch --all`

  > 📚 The git fetch command downloads commits, files, and refs from a remote repository into your local repo. Fetching is what you do when you want to see what everybody else has been working on.
  > **then**

  `git switch "<branch name>"`

  > 📚 The "switch" command allows you to switch your current HEAD branch. It's relatively new (added in Git v2.23) and provides a simpler alternative to the classic "checkout" command.

  💡 **Example:**

  `git fetch --all`

  `git switch base/1.0/first-component-in-react`
  
  or better **create a new branch on switch**, to keep it clean by adding `-c <your_branch_name>` param at the end of `git switch` command:
  
  💡 **Example:**
  `git switch base/1.0/first-component-in-react -c working/1.0/first-component-in-react`

  this command will create a new branch named `working/1.0/first-component-in-react` from `base/1.0/first-component-in-react`
  This will allow you to work on an independent branch and save your work locally.
 
 #### Saving your work locally

🚨 **You should commit your changes before switching to another branch. Otherwise, you won't be able to perform this action.**

💡 **Example:**

- You started with:
`git switch base/1.0/first-component-in-react -c working/1.0/first-component-in-react`
- You added changes working on `working/1.0/first-component-in-react` branch.
- When task is done and you want to switch to another branch: 
  - stage your changes `git add .`
  - commit yout changes `git commit -m "first-component-in-react"`
- Now your working tree is clean and you can switch to another branch.
- You can return to your branch at any time with checkout command `git checkout working/1.0/first-component-in-react`
  
___  

# Project dependencies and references

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
