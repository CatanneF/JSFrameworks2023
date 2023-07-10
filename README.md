# Props

In Visual Studio code, press `command+shift+v` (Mac) or `ctrl+shift+v` (Windows) to open a Markdown preview.

## Getting Started

Using your command line, you will need to navigate to the this folder, install all dependencies, and start the app.

```bash
cd exercises/03-props/
code . # if you would like to open this in a separate VSCode window
npm install
npm start
```

To stop the application, press `ctrl+c`.

To run the tests:

```shell
npm run test
```

If you do not see any test results, press `a` to run all tests. The tests will rerun whenever you make a change.

To stop the tests, press `ctrl+c`.

## Assignment 1

Create a component called `<Welcome />`. It should receive the prop "name". If "name" is provided, you will render "Hello **\_\_\_\_\_**". If the name is not provided, you will fallback to "Hello user".

Import and your render you `<Welcome />` component in `<App />` like this:

```jsx
<Welcome name="Jamal" />
<Welcome />
```

![](demo.png)

### Acceptance Criteria

- I should create a component called `<Welcome />` that should render test to the screen.
- It should receive the prop "name".
- It should use default props.
- If "name" is provided, you will render "Hello **\_\_\_\_\_**". If the name is not provided, you will fallback to "Hello user".

## Assignment 2

Create a component called `<Heading />`. This component should render any children props to the screen.

Import and your render you `<Heading />` component in `<App />` like this:

```jsx
<Heading>Welcome to my React App!</Heading>
```

### Acceptance Criteria

- I should create a component called `<Heading />` that renders children props to the screen.
- The `<App />` component should use the `<Heading />` component to render the text "Welcome to my React App!" to the screen.

- Projects: [First Project](projects/retro-board/README.md)
- [Code Sandboxes](https://codesandbox.io/u/matinaspatsos/sandboxes)
- Installation Guide: [Mac](docs/InstallationGuideMac.md) | [Windows](docs/InstallationGuideWindows.md) | [Linux](docs/InstallationGuideLinuxAndNVM.md)
- React: [Beginner's Code](https://www.freecodecamp.org/news/react-beginners-guide/) | [Manual](https://reactjs.org/) | [Create React App](https://create-react-app.dev/)
- JavaScript - [MDN](https://developer.mozilla.org/en-US/) (Unofficial JavaScript Manual) | [Tutorials](https://javascript.info/)
- Command Line: [NPM](https://www.npmjs.com/) | [NPM Guide](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/) | [Unix Crash Course](https://itnext.io/unix-command-line-crash-course-453e409d62f5) | [Unix Cheat Sheet](https://www.guru99.com/linux-commands-cheat-sheet.html) | [Unix Tutorial](http://www.ee.surrey.ac.uk/Teaching/Unix/)
- Git: [First Contributions Tutorial](https://github.com/firstcontributions/first-contributions) | [Git Commands for Beginners](http://rogerdudler.github.io/git-guide/)
- Visual Studio Code: [Mac Keyboard Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf) | [Windows Keyboard Shortcuts](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf) | [Getting Started](https://code.visualstudio.com/docs/getstarted/introvideos)
