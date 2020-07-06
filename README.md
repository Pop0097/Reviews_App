# Reviews_App

Reviews app made using React JS.

Built using tutorial by [The Net Ninja](https://www.youtube.com/watch?v=cFVHTazhb7I&list=PL4cUxeGkcC9ixPU-QkScoRBVxtPPzVjrQ&index=16)

Note: One directory called "node_modules" is not included in this repository as a result of its large file size. It is the default node_modules directory that is created when you create an Expo app.

# Deploying the app

1. Download this repository on your computer and extract the files.
2. Go to [Expo](https://expo.io/learn) and install Expo.
3. Create an Expo project by writing "expo init myApp".
4. Take the node_modules directory from your myApp project and transfer the directory to this project's directory on your computer. (Path: ~/Reviews_App/).
5. Enter the Reviews_App directory using "cd".
6. Install all dependencies (listed below)
7. Write "expo start" or "npm start".
8. You can then deploy the application on the web, iOS, or Android. You may have to consult turotials on Youtube for help on this step.
9. Enjoy :))

# Dependencies 

I used [React Navigation](https://reactnavigation.org/docs/getting-started) to make stack and drawer navigation work. To make the project, work, you will have to write these lines in the root directory of the project:

- npm install react-navigation
- npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
- npm install react-navigation-stack