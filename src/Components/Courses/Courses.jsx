import { useEffect } from "react";
import Course from "../Course/Course";
import { useState } from "react";
import Bookmarks from "../Bookmarks/Bookmarks";

const Courses = () => {
    // all states
    const [course, setCourse] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalRemaining, setTotalRemaining] = useState(20);

    // side effects
    useEffect(() => {
        fetch("./data.json")
            .then(res => res.json())
            .then(data => setCourse(data))
    }, []);

    // handlers for events
    const handleBookmarks = (courseData) => {
        const isExisted = bookmarks.find((item) => item.id === courseData.id);
        let credit = courseData.hour;
        if (isExisted) {
            return alert("You have already selected this course.")
        }
        else {
            bookmarks.forEach((item)=>{
                credit += item.hour;
            });
            const remainingHour = 20-credit;
            console.log(credit, remainingHour);
            setTotalRemaining(remainingHour);
            setTotalCredit(credit);
            const seclectedBookmarks = [...bookmarks, courseData];
            setBookmarks(seclectedBookmarks);

        }

    };

    return (
        <div className="flex justify-around gap-6 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1000px] gap-6">
                {
                    course.map((courseData) => (
                        <Course key={courseData.id}
                            courseData={courseData}
                            handleBookmarks={handleBookmarks}></Course>
                    ))
                }
            </div>
            <Bookmarks 
            bookmarks={bookmarks}
            totalCredit={totalCredit}
            totalRemaining={totalRemaining}></Bookmarks>
        </div>
    );
};

export default Courses;