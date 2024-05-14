# Phonebook Mobile App

Welcome to the Phonebook Mobile Test App. For now, this is a basic app that simply renders post data from PhoneBook's API onto a user's screen. Features tab-navigation to better display Post Data, User Preferences, and can be configured for additional tabs.

The app is preset to render my Phonebook account---'savine63', but you can change this to any username in the API call under 'site-name'.

This project is setup to use the Expo CLI. Expo is a platform for building universal React applications. It streamlines React Native development by providing pre-configured tools, and provides a nice client app for testing. 

# Known Issues
- Timezone error---displays incorrect timezone.
- Posts with both image & text are formatted as two seperate posts. 
- Unable to reload data while using app.
  
# Setting Up React Native Project with Expo CLI

This guide provides step-by-step instructions for setting up a React Native project using Expo CLI, including installing Node.js, Expo CLI, and cloning a project from Git.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/en/download/): JavaScript runtime for executing JavaScript code outside a web browser.
- [Git](https://git-scm.com/downloads): Version control system for tracking changes in source code during software development.

## Installing Node.js

1. Visit the [Node.js website](https://nodejs.org/en/download/).
2. Download the appropriate installer for your operating system.
3. Run the installer and follow the installation instructions.
4. Verify the installation by opening a terminal or command prompt and typing:
   `node --version` or `npm --version`


## Installing Expo CLI

1. Open a terminal or command prompt.
2. Run the following command to install Expo CLI globally: `npm install -g expo-cli`
3. Verify the installation by typing `expo --version`.

## Cloning a React Native Project from Git

1. Navigate to the directory where you want to clone the project.
2. Run the following command to clone the Git repository: `git clone <repository_url>`
3. Once the cloning process is complete, navigate into the cloned project directory.
   
## Getting Started with the Cloned Project

To install any dependencies, you can run `npm install` in your project directory, which will read the dependencies section of your package.json file and install all listed dependencies.

Now that you have cloned the project and installed the necessary tools, you can use the following command to start the project: `npm start`

Running `npm start` will invoke the Expo CLI development server, allowing you to preview and develop your React Native project. This command starts the development server and launches the Expo Developer Tools in your default web browser. From there, you can preview your app in the Expo client app on your mobile device or simulator/emulator, and you can also access additional development features and options provided by Expo.





