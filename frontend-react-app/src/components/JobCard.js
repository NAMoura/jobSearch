import Link from "next/link";

export default function JobCard({ job, index }){


    return (
        <Link href={`/jobs/${index}`} className="border rounded-xl overflow-hidden hover:shadow">
  <div className="bg-[#3D67AA] text-white text-center relative w-90 py-3 font-semibold">{job.profile}</div>
  <div className="bg-white border h-52 p-6 flex flex-col">
    <div className="flex-grow">
      {job.description}
    </div>
    <div className="text-xs mt-auto">
      <p className="mb-2"> Years of experience: {job.experience}</p>
      <p className="text-gray-500 ">| {job.techs.map((s) => s + ' | ')}</p>
      
    </div>
  </div>
</Link>
    )

}