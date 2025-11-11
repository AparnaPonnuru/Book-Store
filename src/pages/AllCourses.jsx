import { useEffect, useState } from "react";
import coursesData from "../data/courses.json";
import CourseCard from "../components/CourseCard";
import "../App.css";

export default function AllCourses() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("courses"));
    setCourses(saved || coursesData);
  }, []);

  const toggleBookmark = (id) => {
    const updated = courses.map(c =>
      c.id === id ? { ...c, isBookmarked: !c.isBookmarked } : c
    );
    setCourses(updated);
    localStorage.setItem("courses", JSON.stringify(updated));
  };

  const filtered = courses.filter(c =>
    c.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? c.category === category : true)
  );

  return (
    <div className="container">
      <input className="input" placeholder="Search Courses..." onChange={(e)=>setSearch(e.target.value)} />

      <select className="select" onChange={(e)=>setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Database">Database</option>
      </select>

      <div className="grid">
        {filtered.length ? filtered.map(c => (
          <CourseCard key={c.id} course={c} toggleBookmark={toggleBookmark} />
        )) : <p className="empty">No Results Found</p>}
      </div>
    </div>
  );
}
