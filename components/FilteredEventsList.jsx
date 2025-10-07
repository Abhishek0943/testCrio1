// components/FilteredEventsList.jsx
"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";

const FilteredEventsList = () => {
  const searchParams = useSearchParams();
  const artist = searchParams.get("artist");
  const tag = searchParams.get("tag");

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("https://qevent-backend.labs.crio.do/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  const filtered = events.filter((e) => {
    const matchesArtist = artist
      ? e.artist?.toLowerCase() === artist.toLowerCase()
      : true;
    const matchesTag = tag
      ? e.tags?.some((t) => t.toLowerCase() === tag.toLowerCase())
      : true;
    return matchesArtist && matchesTag;
  });

  if (loading) return <p className="text-center">Loading events...</p>;

  return (
    <>
      {(artist || tag) && (
        <h2 className="text-2xl mb-4 text-center">
          Showing events for{" "}
          {artist && <span className="text-orange-500">Artist: {artist} </span>}
          {tag && <span className="text-teal-500">Tag: {tag}</span>}
        </h2>
      )}
      {filtered.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-4">
          {filtered.map((event) => (
            <EventCard key={event.id} eventData={event} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No events found.</p>
      )}
    </>
  );
};

export default FilteredEventsList;
