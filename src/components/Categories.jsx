const categories = [
  { name: "Design", jobs: 235 },
  { name: "Sales", jobs: 756 },
  { name: "Marketing", jobs: 140, featured: true },
  { name: "Finance", jobs: 325 },
  { name: "Technology", jobs: 436 },
  { name: "Engineering", jobs: 542 },
  { name: "Business", jobs: 211 },
  { name: "Human Resource", jobs: 346 },
];

const Categories = () => {
  return (
    <section className="px-10 py-20">

      <div className="flex justify-between items-center mb-10">
        
        <h2 className="text-3xl font-bold">
          Explore by <span className="text-blue-500">category</span>
        </h2>

        <button className="text-blue-500">
          Show all jobs →
        </button>

      </div>

      <div className="grid grid-cols-4 gap-6">

        {categories.map((cat, index) => (
          <div
            key={index}
            className={`p-6 border rounded cursor-pointer 
            ${cat.featured
                ? "bg-blue-600 text-white"
                : "bg-white hover:shadow"
            }`}
          >


            <div className="text-2x">📁</div>

            <h3 className="font-semibold">
              {cat.name}
            </h3>

            <p className="text-sm opacity-70 mt-1">
              {cat.jobs} jobs available →
            </p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Categories;