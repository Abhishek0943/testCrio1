"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const router = useRouter();

  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(
          `https://qevent-backend.labs.crio.do/events/${eventId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch event data");
        }
        const data = await response.json();
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-xl font-medium">
        Loading event details...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center mt-10 text-red-600 font-medium">
        Error: {error}
      </p>
    );
  }

  if (!event) {
    return <p className="text-center mt-10 font-medium">Event not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <button
        className="mb-6 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => router.back()}
      >
        &larr; Back
      </button>

      <img
        src={event.image}
        alt={`${event.name} image`}
        className="w-full rounded shadow mb-6"
      />

      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-teal-600 bg-clip-text text-transparent">
        {event.name}
      </h1>

      <p className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-teal-600 bg-clip-text text-transparent">
        <strong>Location:</strong> {event.location}
      </p>

      <p className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-teal-600 bg-clip-text text-transparent mb-9">
        <strong>Artist:</strong> {event.artist}
      </p>

      <div className="flex gap-4 flex-wrap mb-4">
        {event.tags &&
          event.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gradient-to-r from-orange-400 to-teal-600 text-white rounded-full px-3 py-1 font-bold"
            >
              # {tag}
            </span>
          ))}
      </div>

      <p className="text-lg text-gray-700 mb-2">
        {event.description || "No description available."}
      </p>

      <div className="flex justify-between items-center mb-9">
        <p className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-teal-600 bg-clip-text text-transparent">
          {event.price > 0 ? `$${event.price.toLocaleString()}` : "FREE"}
        </p>
        <button className="bg-red-500 text-white font-semibold px-6 py-2 rounded hover:opacity-80">
          Buy Ticket
        </button>
      </div>
    </div>
  );
};

export default EventDetailsPage;
