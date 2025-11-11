<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
=======
**Introduction** : 
A simple and user-friendly Course Dashboard built using React.js, allowing users to browse courses, search, filter by category, and bookmark courses.
The bookmarked courses are stored in localStorage, so they remain saved even after refreshing the page.

```
src/
 ├─ data/
 │   └─ courses.json
 ├─ components/
 │   ├─ Navbar.jsx
 │   └─ CourseCard.jsx
 ├─ pages/
 │   ├─ AllCourses.jsx
 │   └─ Bookmarked.jsx
 ├─ App.js
 ├─ App.css
 └─ index.js
```

**FLOW**
When the application loads, the course data is fetched from a local JSON file and stored using useState. The user can search courses by typing in the search bar, which filters the list in real-time, and can also filter by category using the dropdown. Each course card has a bookmark button that toggles its bookmark state, and this updated state is saved in localStorage, so the bookmarked courses remain even after refreshing the page. The All Courses page shows every course, while the Bookmarked page ( accessed via React Router ) displays only the courses marked as bookmarked. The UI updates automatically whenever state changes, making the experience smooth and responsive.

**Tech Stack**
React.js
React Router
JavaScript (ES6)
LocalStorage
CSS (Custom UI styling)

**Features**
The dashboard displays a list of courses with their title, category, and duration in a clean card layout.
Users can quickly search courses by typing in the search bar and filter them by category for easier navigation.
Each course includes a Bookmark button to save or remove it from the Bookmarked list, and these bookmarks are preserved using localStorage.
Navigation between All Courses and Bookmarked Courses is handled smoothly using React Router, providing a seamless user experience.


>>>>>>> 8e15fcc3acf566f1ec9445c633dd83a507a77162
