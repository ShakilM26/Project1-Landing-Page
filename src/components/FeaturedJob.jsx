import JobCard from "./JobCard";
import revolut from './logos/revolut.png';
import dropbox from './logos/dropbox.png';
import pitch from './logos/pitch.png';
import blinklist from './logos/blinklist.png';
import classpass from './logos/classpass.png';
import canva from './logos/canva.png';
import godaddy from './logos/godaddy.png';
import twitter from './logos/twitter.png';


const jobs = [
    {
        title: "Email Marketing",
        company: "Revolut",
        location: "Madrid, Spain",
        type: "Full Time",
        description: "Revolut is looking for Email Marketing to help team...",
        logo: revolut,
        tags: [{name: "Marketing", color: "orange"},
                {name: 'Design', color: 'green'}
        ],
    },
    {
        title: "Brand Designer",
        company: "Dropbox",
        location: "San Fransisco, US",
        type: "Full Time",
        description: "Dropbox is looking for Brand Designer to help the team...",
        logo: dropbox,
        tags: [{name: "Design", color: 'green'},
                {name: "Business", color: 'blue'}]
    },
    {
        title: "Email Marketing",
        company: "Pitch",
        location: "Berlin, Germany",
        type: "Full Time",
        description: "Pitch is looking for Customer Manager to join marketing...",
        logo: pitch,
        tags: [{name: "Marketing", color: 'orange'}]
    },
    {
        title: "Visual Designer",
        company: "Blinklist",
        location: "Granada, Spain",
        type: "Full Time",
        description: "Blinklist is looking for Visual Designer to help team desi...",
        logo: blinklist,
        tags: [{name: "Design", color: 'green'}]
    },
    {
        title: "Product Designer",
        company: "ClassPass",
        location: "Manchester, UK",
        type: "Full Time",
        description: "ClassPass is looking for Product Designer to help us...",
        logo: classpass,
        tags: [{name: "Marketing", color: 'orange'},
               {name: "Design", color: 'green'}]
    },
    {
        title: "Lead Designer",
        company: "Canva",
        location: "Ontario, Canada",
        type: "Full Time",
        description: "Canva is looking for Lead Engineer to help develop n...",
        logo: canva,
        tags: [{name: "Design", color: 'green'},
               {name: "Business", color: 'blue'}]
    },
    {
        title: "Brand Strategist",
        company: "GoDaddy",
        location: "Marseille, France",
        type: "Full Time",
        description: "GoDaddy is looking for Brand Strategist to join the team...",
        logo: godaddy,
        tags: [{name: "Marketing", color: 'orange'}]
    },
    {
        title: "Data Analyst",
        company: "Twitter",
        location: "San Diego, US",
        type: "Full Time",
        description: "Twitter is looking for Data Analyst to help team desi...",
        logo: twitter,
        tags: [{name: "Technology", color: 'red'}]
    }
];

const FeaturedJobs = () => {
    return(
        <section className="px-10 py-20">
            {/* // header */}
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold">
                    Featured <span className="text-blue-500">jobs</span>
                </h2>
                

                <button className="text-blue-500">
                    Show all jobs →
                </button>
            </div>

            {/* // jobs grid layout */}
            <div className="grid grid-cols-4 gap-6">
                {/* map --> render card, for every job  */}
                {jobs.map((job, index) => (
                    <JobCard key={index} job={job} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedJobs;