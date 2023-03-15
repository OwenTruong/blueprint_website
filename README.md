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

<br>

## Contributing Basics

1. create new branch and enter new branch

```
git checkout -b "feature/featureName"
```

- Example: if you want to create an About Page, you'd run the following

  ```
  git checkout -b "feature/aboutPage"
  ```

1. add, commit, push changes; this is sent will be a pull request

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

<br>

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

## Running ESLint and Prettier

Linting is the automatic checking of progromattic and style errors within the code. Linters ensure consistency amongst every team members code and helps prevent merge conflicts. This website is using ESLint and Prettier to enforce formatting and code-quality rules. The project also uses Husky's pre-commit hooks to automatically run ESLint and Prettier on the src/ folder whenever you make a commit. However, to run the two manually:

ESLint (the second option will fix most lint errors automatically, while the first stack traces them to show you where they are)

```
npm run eslint
npm run eslint:fix
```

Prettier:

```
npm run format
```

## Dependencies

- ReactJS (CRA: react, react-dom, react-scripts)
- Tailwind (PostCSS, AutoPrefixer)
- React-Router
