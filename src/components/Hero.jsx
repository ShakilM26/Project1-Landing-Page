import person from "../images/person.png";

const Hero = () => {
  return (
    <section className="px-10 py-20 flex items-center justify-between">

      
      <div className="max-w-xl">

        <h1 className="text-5xl font-bold leading-tight">
          Discover <br />
          more than <span className="text-blue-500">5000+ Jobs</span>
        </h1>

        <p className="text-gray-500 mt-6">
          Great platform for the job seeker that searching for
          new career heights and passionate about startups.
        </p>


        
        <div className="flex bg-white shadow-lg mt-8 p-3 rounded-md">

          <input
            type="text"
            placeholder="Job title or keyword"
            className="outline-none px-3"
          />

          <input
            type="text"
            placeholder="Location"
            className="outline-none px-3"
          />

          <button className="bg-[#4640DE] text-[black]">
            Search my job
          </button>

        </div>

      </div>

      
      <div>
        <img
          src={person}
          alt="hero"
          className="w-[400px]"
        />
      </div>

    </section>
  );
};

export default Hero;