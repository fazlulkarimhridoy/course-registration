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
        // finding matched data
        const isExisted = bookmarks.find((item) => item.id === courseData.id);

        // initial value for credit & price
        let credit = courseData.hour;
        let price = courseData.price;

        // validating for matched data
        if (isExisted) {
            // toast message
            return toast.warning('You have already selected this course !', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
        else {
            // looping each credit & price
            bookmarks.forEach((item) => {
                // calculating credit & price
                credit += item.hour;
                price += item.price;

            });

            // validating for credit limit
            if (credit > 20) {
                // toast message
                return toast.error('Not enough credit to select the course and also remaining hour can not be negative !', {
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }
            // calculating remaining hour
            const remainingHour = 20 - credit;

            // setting credit,price,remaining & bookmarks
            setTotalCredit(credit);
            setTotalRemaining(remainingHour);
            setTotalPrice(price);
            setBookmarks([...bookmarks, courseData]);

        }

    };

    return (
        <div className="flex justify-around gap-6 container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[1000px] gap-6">
                {
                    // mapping each course from courses
                    course.map((courseData) => (
                        <Course key={courseData.id}
                            courseData={courseData}
                            handleBookmarks={handleBookmarks}></Course>
                    ))
                }
            </div>
            <Bookmarks
                // sending props
                bookmarks={bookmarks}
                totalCredit={totalCredit}
                totalRemaining={totalRemaining}
                totalPrice={totalPrice}></Bookmarks>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Courses;