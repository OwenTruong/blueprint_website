# Stevens Blueprint Website

![Blueprint](/src/assets/logo_banner.png)

Stevens Blueprint is a (TBD) studen-run organization at Stevens Institute of Technology devoted to matching the skills of its members to our desire to see social good enacted in our community. Each semester, teams of 4-5 students work closely with a non-profit to bring technological solutions to the problems they face every day.

## Local Setup

1. clone repo locally (url to be changed but for now 2/9)

```
git clone https://github.com/stevensblueprint/sit_blueprint_website.git
```

2. install all dependencies

```
npm install
```

3. run

```
npm start
```

## Contributing Basics

1. create new branch and enter new branch

```
git checkout -b "feature/featureName"
```

- i.e. if you want to create an About Page, you'd run the following

```
git checkout -b "feature/aboutPage"
```

2. add, commit, push changes; this is sent will be a pull request

```
git add .
git commit -m "commit message"
```
- on your first push using your new local branch you will need run [-set-upstream](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/git-push-new-branch-remote-github-gitlab-upstream-example#:~:text=New%20Git%20branches%20and%20upstream,it%20synchronizes%20its%20commit%20history.)
```
git push --set-upstream origin feature/featureName
```
- after the first time, you are good to push as normal
```
git push
```

3. You're all set!

### Make sure you stay up to date with main branch

Since your feature branch is expected to be pulled to main eventually, make sure your branch isn't too out of date. 
Do this occassionally so make sure your branch doesn't fall too far behind. [More Info](https://linuxhint.com/pull-master-into-branch-in-git/)

1. fetch the data
```
git fetch origin
```
2. pull from the main branch
```
git pull origin main
```


## Dependencies

- ReactJS (CRA: react, react-dom, react-scripts)
- Tailwind (PostCSS, AutoPrefixer)
- React-Router

<br>

# Default Create-React-App Info

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
