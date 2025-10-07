"use client";

import { useRouter } from "next/navigation"; // ✅ Import router

const ArtistCard = ({ artistData }) => {
  const router = useRouter(); // ✅ Initialize router

  const handleViewEvents = () => {
    // ✅ Navigate to /events with the artist's name as a query param
    router.push(`/events?artist=${encodeURIComponent(artistData.name)}`);
  };

  return (
    <div className="hover-inverse group w-[20%] min-w-[300px] h-fit flex text-center justify-center transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5">
      <div>
        <img
          className="w-24 h-24 mb-3 group-hover:filter-none rounded-full shadow-lg m-auto"
          src={artistData.image}
          alt={`${artistData.name} image`}
        />
        <p>{artistData.location}</p>
        <h2 className="text-2xl font-bold">{artistData.name}</h2>
        <p>{artistData.description}</p>
        <div className="flex justify-between items-center mt-10">
          <h3 className="text-2xl">{artistData.artist}</h3>
        </div>
        <button
          className="bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
          onClick={handleViewEvents} // ✅ Add onClick handler
        >
          View Events
        </button>
      </div>
    </div>
  );
};

export default ArtistCard;

// "use client";

// const ArtistCard = ({ artistData }) => {

//   return (
//     <div className="hover-inverse group w-[20%] min-w-[300px]  h-fit flex text-center justify-center transform transition-transform duration-400 hover:scale-110 hover:bg-gradient-to-r hover:from-orange-200 hover:to-white text-dark m-4 border-slate-400 border rounded-md px-8 py-2.5">

//         <div>
//           <img
//             className="w-24 h-24 mb-3 group-hover:filter-none rounded-full shadow-lg m-auto"
//             src={artistData.image}
//             alt={`${artistData.name} image`}
//           />
//           <p>{artistData.location}</p>
//           <h2 className="text-2xl font-bold">{artistData.name}</h2>
//           <p>{artistData.description}</p>
//           <div className="flex justify-between items-center mt-10">
//             <h3 className="text-2xl">{artistData.artist}</h3>
//           </div>
//           <button
//             className=" bg-gradient-to-r from-orange-400 to-teal-600 text-white px-4 py-2 rounded-md font-medium hover:opacity-70"
//           >
//             View Events
//           </button>
//         </div>
//     </div>
//   );
// };

// export default ArtistCard;
