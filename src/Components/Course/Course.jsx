/* eslint-disable react/prop-types */

const Course = ({courseData}) => {
    return (
        <div className="card clear-both p-4 bg-white">
            <img src={courseData.image} alt="Shoes" />
            <h4 className="text-lg font-semibold pb-4 pt-5">{courseData.title}</h4>
            <p className="text-sm font-normal">{courseData.description}</p>
            <div className="flex gap-4 mt-5">
                <div className="flex gap-3">
                    <img src="src/assets/doller.jpg" alt="" />
                    <h4>Price : {courseData.price}</h4>
                </div>
                <div className="flex gap-3">
                    <img src="src/assets/Frame.png" alt="" />
                    <h4>Credit : {courseData.hour}hr</h4>
                </div>
            </div>
            <button className="bg-[#2F80ED] text-white text-lg font-semibold w-full rounded-lg py-2 mt-7">Select</button>
        </div>
    );
};

export default Course;