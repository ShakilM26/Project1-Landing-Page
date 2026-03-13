
const jobs = [
    {
        title: "Email Marketing",
        company: "Revolut",
        location: "Madrid, Spain",
        type: "Full Time",
        description: "Revolut is looking for Email Marketing to help team...",
        logo: "/logos/revolut.png",
        tags: ["Marketing", "Design"]
    },
    {
        title: "Brand Designer",
        company: "Dropbox",
        location: "San Fransisco, US",
        type: "Full Time",
        description: "Dropbox is looking for Brand Designer to help the team...",
        logo: "/logos/dropbox.png",
        tags: ["Design", "Business"]
    },
    {
        title: "Email Marketing",
        company: "Pitch",
        location: "Berlin, Germany",
        type: "Full Time",
        description: "Pitch is looking for Customer Manager to join marketing...",
        logo: "/logos/pitch.png",
        tags: ["Marketing"]
    },
    {
        title: "Visual Designer",
        company: "Blinklist",
        location: "Granada, Spain",
        type: "Full Time",
        description: "Blinklist is looking for Visual Designer to help team desi...",
        logo: "/logos/blinklist.png",
        tags: ["Design"]
    }
];

const FeaturedJobs = () => {
    return(
        <section className="px-10 py-20">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">
                    Featured <span className="text-blue-500">jobs</span>
                </h2>

                <button className="text-blue-500">
                    Show all jobs →
                </button>
            </div>

            
        </section>
    );
};

export default FeaturedJobs;