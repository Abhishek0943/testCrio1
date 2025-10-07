"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CreateEventPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    artist: "",
    date: "",
    time: "",
    location: "",
    price: 0,
    description: "",
    tags: "",
  });

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/events");
    }
  }, [status, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventCreate = async (e) => {
    e.preventDefault();

    const randomId = `event-${Date.now()}`;
    const randomImage = `https://picsum.photos/seed/${Math.floor(
      Math.random() * 100
    )}/600/400`;

    const newEvent = {
      id: randomId,
      name: form.name,
      artist: form.artist,
      date: form.date,
      time: form.time,
      location: form.location,
      price: Number(form.price),
      description: form.description,
      tags: form.tags.split(",").map((tag) => tag.trim()),
      image: randomImage,
    };

    try {
      setSubmitting(true);
      const res = await fetch("https://qevent-backend.labs.crio.do/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });

      if (res.status === 201) {
        alert("Event created successfully!");
        router.push("/events");
      } else {
        const errorData = await res.json();
        alert(
          "Error creating event: " + (errorData.message || "Unknown error")
        );
      }
    } catch (err) {
      console.error("Event creation failed:", err);
      alert("Failed to create event. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create a New Event</h1>

      <form onSubmit={handleEventCreate} className="flex flex-col gap-4">
        <input
          name="name"
          onChange={handleChange}
          value={form.name}
          placeholder="Event Name"
          required
          className="p-2 border rounded"
        />
        <input
          name="artist"
          onChange={handleChange}
          value={form.artist}
          placeholder="Artist"
          required
          className="p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={form.date}
          required
          className="p-2 border rounded"
        />
        <input
          type="time"
          name="time"
          onChange={handleChange}
          value={form.time}
          required
          className="p-2 border rounded"
        />
        <input
          name="location"
          onChange={handleChange}
          value={form.location}
          placeholder="Location"
          required
          className="p-2 border rounded"
        />
        <input
          name="price"
          type="number"
          onChange={handleChange}
          value={form.price}
          placeholder="Price"
          required
          className="p-2 border rounded"
        />
        <textarea
          name="description"
          onChange={handleChange}
          value={form.description}
          placeholder="Description"
          className="p-2 border rounded"
        />
        <input
          name="tags"
          onChange={handleChange}
          value={form.tags}
          placeholder="Tags (comma separated)"
          className="p-2 border rounded"
        />

        <button
          type="submit"
          disabled={submitting}
          className={`mt-4 bg-gradient-to-r from-orange-400 to-teal-600 text-white py-2 px-4 rounded hover:opacity-80 ${
            submitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {submitting ? "Submitting..." : "Submit Event"}
        </button>
      </form>
    </div>
  );
};

export default CreateEventPage;

// "use client";

// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// const CreateEventPage = () => {
//   const { data: session, status } = useSession();
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     artist: "",
//     date: "",
//     time: "",
//     location: "",
//     price: 0,
//     description: "",
//     tags: "",
//   });

//   useEffect(() => {
//     if (status === "unauthenticated") {
//       router.push("/events");
//     }
//   }, [status, router]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleEventCreate = async (e) => {
//     e.preventDefault();

//     const randomId = `event-${Date.now()}`;
//     const randomImage = `https://picsum.photos/seed/${Math.floor(
//       Math.random() * 100
//     )}/600/400`;

//     const newEvent = {
//       id: randomId,
//       name: form.name,
//       artist: form.artist,
//       date: form.date,
//       time: form.time,
//       location: form.location,
//       price: Number(form.price),
//       description: form.description,
//       tags: form.tags.split(",").map((tag) => tag.trim()),
//       image: randomImage,
//     };

//     try {
//       const res = await fetch("https://qevent-backend.labs.crio.do/events", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newEvent),
//       });

//       if (res.status === 201) {
//         alert("Event created successfully!");
//         router.push("/events");
//       } else {
//         const errorData = await res.json();
//         alert("Error creating event: " + errorData.message || "Unknown error");
//       }
//     } catch (err) {
//       console.error("Event creation failed:", err);
//       alert("Failed to create event. Please try again.");
//     }
//   };

//   if (status === "loading") {
//     return <p className="text-center mt-10">Loading...</p>;
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Create a New Event</h1>

//       <form onSubmit={handleEventCreate} className="flex flex-col gap-4">
//         <input
//           name="name"
//           onChange={handleChange}
//           value={form.name}
//           placeholder="Event Name"
//           required
//           className="p-2 border rounded"
//         />
//         <input
//           name="artist"
//           onChange={handleChange}
//           value={form.artist}
//           placeholder="Artist"
//           required
//           className="p-2 border rounded"
//         />
//         <input
//           type="date"
//           name="date"
//           onChange={handleChange}
//           value={form.date}
//           required
//           className="p-2 border rounded"
//         />
//         <input
//           type="time"
//           name="time"
//           onChange={handleChange}
//           value={form.time}
//           required
//           className="p-2 border rounded"
//         />
//         <input
//           name="location"
//           onChange={handleChange}
//           value={form.location}
//           placeholder="Location"
//           required
//           className="p-2 border rounded"
//         />
//         <input
//           name="price"
//           type="number"
//           onChange={handleChange}
//           value={form.price}
//           placeholder="Price"
//           required
//           className="p-2 border rounded"
//         />
//         <textarea
//           name="description"
//           onChange={handleChange}
//           value={form.description}
//           placeholder="Description"
//           className="p-2 border rounded"
//         />
//         <input
//           name="tags"
//           onChange={handleChange}
//           value={form.tags}
//           placeholder="Tags (comma separated)"
//           className="p-2 border rounded"
//         />

//         <button
//           type="submit"
//           className="mt-4 bg-gradient-to-r from-orange-400 to-teal-600 text-white py-2 px-4 rounded hover:opacity-80"
//         >
//           Submit Event
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreateEventPage;
