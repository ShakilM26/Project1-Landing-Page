const JobCard = ({ job }) => {
    return (
        <div className="bg-white border border-gray-200 p-6 hover:shadow-md">

            {/* logo type */}
            <div className="flex justify-between items-center mb-4">
                <img
                    src={job.logo}
                    alt="logo"
                    className="w-8 h-8"
                />

                <span className="text-xs border border-blue-500 text-blue-500 px-3 py-1 rounded-md">
                    {job.type}
                </span>
            </div>

            {/* space-y-2 --> equal gap to title, company, description  */}
            <div className="space-y-2">


                <h3 className="font-semibold text-lg text-gray-800">
                    {job.title}
                </h3>

                {/* company and location */}
                <p className="text-sm text-gray-500">
                    {job.company} • {job.location}
                </p>

                {/* description */}
                <p className="text-sm text-gray-500 line-clamp-2">
                    {job.description}
                </p>

            </div>

            {/* tags (colors) */}
            <div className="flex gap-3 mt-4 flex-wrap">
                {job.tags.map((tag, index) => (
                    <span
                        key={index}
                        className={`text-xs px-3 py-1 rounded-full
                        ${
                            tag.color === "orange"
                                ? "bg-orange-100 text-orange-500"
                                : tag.color === "green"
                                ? "bg-green-100 text-green-600"
                                : tag.color === "blue"
                                ? "bg-blue-100 text-blue-600"
                                : "bg-red-100 text-red-500"
                        }`}
                    >
                        {tag.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default JobCard;