import { useEffect } from "react";
import Course from "../Course/Course";
import { useState } from "react";
import Bookmarks from "../Bookmarks/Bookmarks";

const Courses = () => {
    // all states
    const [course, setCourse] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

    // side effects
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);

    // handlers for events
    const handleBookmarks = (courseData) => {
        const seclectedBookmarks = [...bookmarks, courseData];
        setBookmarks(seclectedBookmarks);
    };

    return (
        <div className="flex justify-between gap-6 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1000px] gap-6">
                {
                    course.map((courseData) => (
                        <Course key={courseData.id}
                            courseData={courseData}
                            handleBookmarks={handleBookmarks}></Course>
                    ))
                }
            </div>
            <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
    );
};

export default Courses;