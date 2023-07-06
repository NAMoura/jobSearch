import DeletePost from "./Delete";

export default function JobCard({ job }) {
  return (
    <div className="border rounded-xl overflow-hidden hover:shadow">
      <div className="flex bg-[#3D67AA] text-white justify-between relative w-90 py-3 font-semibold">
        <div className="ml-6">{job.profile}</div>
        <div className="mr-6"><DeletePost id={job.id}/></div>
      </div>

      <div className="bg-white border h-52 p-6 flex flex-col">
        <div className="flex-grow">{job.description}</div>
        <div className="text-xs mt-auto">
          <p className="mb-2"> Years of experience: {job.experience}</p>
          <p className="text-gray-500 "><span className="text-black">Techs: </span>{job.techs.map((s) => s + " | ")}</p>
        </div>
      </div>
    </div>
  );
}
