export const dynamic = "force-dynamic";
import FilteredEventsList from "@/components/FilteredEventsList";

const EventsPage = () => {
    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold text-center mb-6">Events</h1>
            <FilteredEventsList />
        </div>
    );
};

export default EventsPage;




// "use client";
// export const dynamic = "force-dynamic";

// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import EventCard from "@/components/EventCard";

// const EventsPage = () => {
//     const searchParams = useSearchParams();
//     const artist = searchParams.get("artist");
//     const tag = searchParams.get("tag");

//     const [events, setEvents] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchEvents = async () => {
//             try {
//                 const response = await fetch("https://qevent-backend.labs.crio.do/events");
//                 const data = await response.json();
//                 setEvents(data);
//             } catch (error) {
//                 console.error("Error fetching events:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchEvents();
//     }, []);

//     // Filter events by artist and tag
//     const filteredEvents = events.filter((event) => {
//         const matchesArtist = artist
//             ? event.artist && event.artist.toLowerCase() === artist.toLowerCase()
//             : true;

//         const matchesTag = tag
//             ? event.tags &&
//             Array.isArray(event.tags) &&
//             event.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
//             : true;

//         return matchesArtist && matchesTag;
//     });

//     if (loading) {
//         return (
//             <p className="text-center mt-10 text-xl font-medium">Loading events...</p>
//         );
//     }

//     return (
//         <div className="p-6">
//             <h1 className="text-4xl font-bold text-center mb-8">Events</h1>

//             {(artist || tag) && (
//                 <h2 className="text-2xl font-medium text-center mb-4">
//                     Showing events for:{" "}
//                     {artist && <span className="text-orange-500 mr-4">Artist: {artist}</span>}
//                     {tag && <span className="text-teal-500">Tag: {tag}</span>}
//                 </h2>
//             )}

//             <div className="flex flex-wrap justify-center">
//                 {filteredEvents.length > 0 ? (
//                     filteredEvents.map((event) => (
//                         <EventCard key={event.id} eventData={event} />
//                     ))
//                 ) : (
//                     <p className="text-center mt-10 text-gray-600 text-lg">
//                         No events found{artist || tag ? " for this filter" : ""}.
//                     </p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default EventsPage;



// "use client";

// import React, { useEffect, useState } from "react";
// import EventCard from "@/components/EventCard";

// const EventsPage = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch("https://qevent-backend.labs.crio.do/events");
//         const data = await response.json();
//         setEvents(data);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-10 text-xl font-medium">Loading events...</p>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-4xl font-bold text-center mb-8">Events</h1>
//       <div className="flex flex-wrap justify-center">
//         {events.map((event) => (
//           <EventCard key={event.id} eventData={event} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EventsPage;
