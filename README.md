# RandomMovieFinder

A simple mobile app that finds and displays movies built using React Native.

## Getting Started

These instructions will get you a copy of the project up and running on your local MacOS machine for development and testing purposes.

### Prerequisites

- [Xcode](https://facebook.github.io/react-native/docs/getting-started.html#xcode) or [Android Studio](https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment) depending on your target mobile platform
- [Homebrew](https://docs.brew.sh/Installation.html)
- Node

  ```$ brew install node```
- Watchman

  ```$ brew install watchman```
- React Native CLI

  ```$ npm install -g react-native-cli```
- A code editor such as [Atom](https://atom.io/download/mac) or [Visual Code](https://code.visualstudio.com/Download)

### Installing
```
$ npm install
```

## Running
To launch in iOS platform
```
$ react-native run-ios
```
To launch in Android platform
```
$ react-native run-android
```

## Tests
Run unit tests
```
$ npm test
```
# Folder Structure
The src folder holds all of our app code. The app.js file in the app folder is imported into our index.ios and index.android files. There are several ways to structure your project. For the purposes of this project, containers are smart components connected by redux.
