import { useEffect } from "react";
import Course from "../Course/Course";
import { useState } from "react";
import Bookmarks from "../Bookmarks/Bookmarks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Courses = () => {
    // all states
    const [course, setCourse] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalRemaining, setTotalRemaining] = useState(20);
    const [totalPrice, setTotalPrice] = useState(0);

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
        let price = courseData.price;
        if (isExisted) {
            return toast.warning('You have already selected this course !', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
        else {
            bookmarks.forEach((item) => {
                credit += item.hour;
                price += item.price;

            });
            if (credit > 20) {
                return toast.error('You do not have enough credit to select this course !', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }
            const remainingHour = 20 - credit;
            setTotalCredit(credit);
            setTotalRemaining(remainingHour);
            setTotalPrice(price);
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
                totalRemaining={totalRemaining}
                totalPrice={totalPrice}></Bookmarks>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Courses;