import { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";

export default function Bookmarked() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(stored.filter(c => c.isBookmarked));
  }, []);

  const toggleBookmark = (id) => {
    const stored = JSON.parse(localStorage.getItem("courses"));
    const updated = stored.map(c =>
      c.id === id ? { ...c, isBookmarked: !c.isBookmarked } : c
    );
    localStorage.setItem("courses", JSON.stringify(updated));
    setCourses(updated.filter(c => c.isBookmarked));
  };

  return (
    <div style={{ padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "15px" }}>
      {courses.length ? courses.map(c =>
        <CourseCard key={c.id} course={c} toggleBookmark={toggleBookmark} />
      ) : <p className="empty-message">Oops!!! 😔 <br/> No bookmarked courses found.</p>
}
    </div>
  );
}
