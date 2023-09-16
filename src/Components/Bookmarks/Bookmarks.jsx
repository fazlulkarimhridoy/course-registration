/* eslint-disable react/prop-types */

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="bg-white p-6 rounded-2xl">
            <h2 className="text-2xl font-bold text-[#2F80ED] pb-4">Credit Hour Remaining 7 hr</h2>
            <hr />
            <h3 className="text-3xl font-bold pt-4 pb-4">Course Name</h3>
            {
                bookmarks.map((item)=>(
                    <li className="list-decimal" key={item.id}>{item.title}</li>
                ))
            }
        </div>
    );
};

export default Bookmarks;