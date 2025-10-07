"use client";

import { useRouter } from "next/navigation";

const Tag = ({ text }) => {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to /events with query parameter 'tag'
    router.push(`/events?tag=${encodeURIComponent(text)}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-gradient-to-r from-orange-400 to-teal-600 text-white rounded-2xl w-fit px-3 py-1 text-center font-bold hover:scale-110 hover:cursor-pointer"
    >
      # {text}
    </div>
  );
};

export default Tag;
