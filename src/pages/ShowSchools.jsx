import list from "@/lib/data";
import React from "react";
import { useEffect, useState } from "react";



const ShowSchools = () => {
  const [schools, setSchools] = useState([]);
  console.log(schools);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/getSchools");
        console.log("effect");
        const data = await response.json();
        console.log("Fetched Data:", response); // Add this line
        setSchools(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="grid text-black grid-cols-6  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-8 gap-10 justify-center">
      <h1 className="text-4xl text-center mt-10  ">Schools</h1>
      {list.map((school) => (
        <div className=" flex justify-around    rounded shadow-md mx-10  my-10 ">
          <img
            src={school.image}
            
            alt={school.name}
            className="object-contain h-10"
          />
          <div className="inline-flex flex-col mt-10 ml-10">
            <h2 className="text-4xl text-black font-semibold mb-2">{school.name}</h2>
            <p className="text-black text-2xl">
              {school.address}, {school.city}
            </p>
            <p className="text-black">
              {school.contact}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowSchools;
