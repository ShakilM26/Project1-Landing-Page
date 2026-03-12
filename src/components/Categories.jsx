// icon import from lucid-react
import {
  PenTool, BarChart, Megaphone, Wallet, Monitor, Code, Briefcase, Users
} from "lucide-react";

// array of objects where each obejct represent a job category
const categories = [
  { name: "Design", jobs: 235, icon: PenTool},
  { name: "Sales", jobs: 756, icon: BarChart},
  { name: "Marketing", jobs: 140, icon:Megaphone, featured: true }, 
  // featured true means - mane ei category ta ekta alada style dekha jabe
  { name: "Finance", jobs: 325 , icon: Wallet},
  { name: "Technology", jobs: 436,icon: Monitor },
  { name: "Engineering", jobs: 542, icon: Code },
  { name: "Business", jobs: 211, icon: Briefcase},
  { name: "Human Resource", jobs: 346, icon: Users},
];

const Categories = () => {
  return (
    // left-right(px) and top-bottom(py) padding set
    <section className="px-10 py-20">

      {/* mb-10: title er niche margin dilam */}
      <div className="flex justify-between items-center mb-10">
        
        <h2 className="text-3xl font-bold">
          Explore by <span className="text-blue-500">category</span>
        </h2>

        <button className="text-blue-500">
          Show all jobs →
        </button>

      </div>

{/* grid-cols-4 means 4 columns side by side and each of them have spacing gap-6 */}
      <div className="grid grid-cols-4 gap-6">

        {/* map makes every categoy a card, map diye UI generate hocche */}
        {categories.map((category, index) => {
          // icon component into a variable so that icon hisebe render kora jay
          const Icon = category.icon;

          return(
            <div key={index} // react list render 
            className={`p-8 border 
              ${category.featured
                ? "bg-blue-600 text-white" // if featured then it is
                : "bg-white hover:shadow"
              }`}
            >
              {/* mb-4 means margin, icon er niche margin */}
              <Icon className="mb-4" />
              <h3 className="font-semibold text-lg">
                {category.name}
              </h3>

              {/* // jobs count */}
              <p className="text-sm opacity-70">
                {category.jobs} jobs available →
              </p>
            </div>
          );
        })};

      </div>

    </section>
  );
};

export default Categories;