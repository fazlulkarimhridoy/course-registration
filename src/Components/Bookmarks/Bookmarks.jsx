/* eslint-disable react/prop-types */

const Bookmarks = ({ bookmarks, totalCredit, totalRemaining }) => {
    return (
        <div className="bg-white p-6 rounded-2xl h-[750px]">
            <h2 className="text-2xl font-bold text-[#2F80ED] pb-4">Credit Hour Remaining {totalRemaining} hr</h2>
            <hr />
            <h3 className="text-3xl font-bold pt-4 pb-4">Course Name</h3>
            <div className="pb-4">
                {
                    bookmarks.map((item) => (
                        <li className="list-decimal" key={item.id}>{item.title}</li>
                    ))
                }
            </div>
            <hr />
            <h3 className="text-base font-medium pt-4">Total Credit Hour : {totalCredit}hr</h3>
        </div>
    );
};

export default Bookmarks;