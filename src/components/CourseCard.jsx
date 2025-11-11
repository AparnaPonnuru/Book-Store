import "../App.css";

export default function CourseCard({ course, toggleBookmark }) {
  return (
    <div className="card">
      <h3>{course.title}</h3>
      <p>Category: {course.category}</p>
      <p>Duration: {course.duration}</p>

      <button
        className={`btn ${course.isBookmarked ? "remove" : "book"}`}
        onClick={() => toggleBookmark(course.id)}
      >
        {course.isBookmarked ? "★ Remove Bookmark" : "☆ Bookmark"}
      </button>
    </div>
  );
}
