import { blogData } from "../blogData";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { Link } from "react-router-dom";

export default function Blog() {
  const { selectBlog } = useContext(BlogContext);
  
  // Hardcoded gym equipment data
  const gymEquipment = [
    {
      title: "Dumbbells",
      image: "https://www.ukgymequipment.com/images/2-5-32-5kg-set-of-used-dumbbells-rack-p5151-62329_medium.jpg", // Replace with actual image path
      description: "Versatile weights for strength training.",
    },
    {
      title: "Treadmill",
      image: "https://www.gosportsart.com/wp-content/uploads/2019/04/1-SA_18-Verde-Treadmills-075-edit.jpg", // Replace with actual image path
      description: "Perfect for cardio workouts.",
    },
    {
      title: "Bench Press",
      image: "https://th.bing.com/th/id/OSK.HEROWaO39aV-8hyJQsUC5SarQsDFYLWamZ0vvBYHVLTArlQ?rs=1&pid=ImgDetMain", // Replace with actual image path
      description: "Essential for upper body strength.",
    },
   
  ];

  return (
    <div className="w-11/12 m-auto md:w-10/12 py-40 grid grid-cols-1 gap-20 md:gap-10 md:grid-cols-2 ">
      {blogData.map((data) => (
        <Link
          to={`/blog/${data.id}`}
          onClick={() => selectBlog(data)}
          key={data.id}
        >
          <h1 className="mb-4 text-3xl font-bold">{data.title}</h1>
          <img
            src={data.image}
            alt=""
            className="w-[700px] h-[350px] object-cover"
          />
          <p className="py-4">{data.introduction}</p>
          <div className="flex justify-between">
            <p className="border-b border-black">{data.date}</p>
            <p className="border-b border-black">Fitness</p>
          </div>
        </Link>
      ))}

      {/* Gym Equipment Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">Gym Equipment</h2>
        <div className="grid grid-cols-1 gap-20 md:gap-10 md:grid-cols-2">
          {gymEquipment.map((equipment, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="mb-4 text-2xl font-bold">{equipment.title}</h3>
              <img
                src={equipment.image}
                alt={equipment.title}
                className="w-full h-[200px] object-cover mb-4"
              />
              <p>{equipment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}