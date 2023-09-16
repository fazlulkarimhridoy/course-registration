import { useEffect } from "react";
import Course from "../Course/Course";
import { useState } from "react";

const Courses = () => {
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1000px] gap-6">
            {
                course.map((courseData) => (
                    <Course key={courseData.id} courseData={courseData}></Course>
                ))
            }
        </div>
    );
};

export default Courses;