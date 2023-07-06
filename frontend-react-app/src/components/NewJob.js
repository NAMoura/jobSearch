import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";


export default function NewJob() {
  const [profile, setProfile] = useState("");
  const [experience, setExperience] = useState("");
  const [techs, setTechs] = useState([]);
  const [description, setDescription] = useState("");



  const techOptions = [
    { value: "Java", label: "Java" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Django", label: "Django" },
    { value: "Rust", label: "Rust" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Tailwind", label: "Tailwind" },
  ];

  const handleTechChange = (value) => {
    if (techs.includes(value)) {
      setTechs(techs.filter((tech) => tech !== value));
    } else {
      setTechs([...techs, value]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newJob = {
        profile,
        exp: experience,
        techs,
        desc: description,
      };

      const response = await axios.post(
        "https://job-listing-test-both.onrender.com/post",
        newJob
      );

      console.log("Job posted successfully:", response.data);
      toast.success("New job was added!");

      // Reset form fields after successful submission
      setProfile("");
      setExperience("");
      setTechs([]);
      setDescription("");

      
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <div className="w-96 mx-auto bg-[#f0f0f0] rounded-lg border-2 mt-10 mb-10 border-[#3D67AA] shadow-md">
      <div className="text-center font-bold bg-[#3D67AA] p-4 text-white">
        Create a New Job
      </div>
      <form onSubmit={handleSubmit} className="p-6">
        <div className="mb-4">
          <label>
            <div className="font-semibold">Profile:</div>
            <input
              type="text"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              minLength={5} 
              maxLength={50} 
              required
              className="bg-[#ffffff] px-1 rounded w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label>
            <div className="font-semibold">Experience:</div>
            <input
              type="number"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              minLength={1} 
              maxLength={2}
              required 
              className="bg-[#ffffff] px-1 rounded w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="font-semibold">Technologies:</label>
          <div className="flex flex-wrap mt-2">
            {techOptions.map((option) => (
              <label
                key={option.value}
                className="inline-flex items-center mr-4"
              >
                <input
                  type="checkbox"
                  name="techs"
                  value={option.value}
                  checked={techs.includes(option.value)}
                  onChange={() => handleTechChange(option.value)}
                  className="form-checkbox"
                  
                />
                <span className="ml-2">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label>
            <div className="font-semibold">Description:</div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-40 bg-[#ffffff] px-1 rounded"
              required
              maxLength={150}
            ></textarea>
          </label>
        </div>
        <div className="text-center text-white font-semibold">
          <button className="bg-[#3D67AA] rounded p-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
