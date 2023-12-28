// pages/addSchool.js
// import fs from 'fs/promises';
import path from "path";
import SchoolForm from "../components/SchoolForm";

const SchoolImagesDirectory = path.join(process.cwd(), "public/SchoolImages");

const ensureDirectoryExists = async () => {
  try {
    await fs.access(SchoolImagesDirectory);
  } catch (error) {
    await fs.mkdir(SchoolImagesDirectory);
  }
};

const AddSchoolPage = () => {
  const onSubmit = async (data) => {
    await ensureDirectoryExists();

    const imagePath = path.join(SchoolImagesDirectory, data.image.name);

    await fs.writeFile(imagePath, data.image.data);

    // Handle the rest of the form data (e.g., store in database)
    console.log("Form Data:", {
      name: data.name,
      address: data.address,
      city: data.city,
      state: data.state,
      contact: data.contact,
      email: data.email,
      image: data.image,
    });

    // Add logic to store the data in the database or perform other actions.
  };

  return (
    <>
    <h1 className="text-center text-4xl ">Add School</h1>
    <div className="flex w-[100vw] h-[90vh] mt-10 items-center justify-center">
      <div>
        <SchoolForm onSubmit={onSubmit} />
      </div>
    </div>
    
    </>
  );
};

export default AddSchoolPage;
