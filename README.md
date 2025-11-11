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
