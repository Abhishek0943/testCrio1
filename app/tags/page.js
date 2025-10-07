"use client";

import { useEffect, useState } from "react";
import Tag from "@/components/Tag"; // ✅ Adjust path as needed

const TagsPage = () => {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ Fetch tags from the API
    useEffect(() => {
        const fetchTags = async () => {
            try {
                const response = await fetch("https://qevent-backend.labs.crio.do/tags");
                if (!response.ok) {
                    throw new Error("Failed to fetch tags");
                }
                const data = await response.json();
                setTags(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchTags();
    }, []);

    if (loading) {
        return <p className="text-center mt-10 text-xl font-medium">Loading tags...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 mt-10">{error}</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Tags</h1>
            <div className="flex flex-wrap gap-4 justify-center">
                {tags.map((tag) => (
                    <Tag key={tag.id} text={tag.name} />
                ))}
            </div>
        </div>
    );
};

export default TagsPage;
