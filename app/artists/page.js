"use client";

import { useEffect, useState } from "react";
import ArtistCard from "@/components/ArtistCard"; // Adjust path based on your folder structure

const ArtistsPage = () => {
    const [artists, setArtists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch artist data
    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const response = await fetch("https://qevent-backend.labs.crio.do/artists");
                if (!response.ok) {
                    throw new Error("Failed to fetch artists");
                }
                const data = await response.json();
                setArtists(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArtists();
    }, []);

    // Render loading, error or artist cards
    if (loading) return <p className="text-center text-lg">Loading artists...</p>;
    if (error) return <p className="text-center text-red-600">{error}</p>;

    return (
        <div className="flex flex-wrap justify-center p-6">
            {artists.map((artist) => (
                <ArtistCard key={artist.id} artistData={artist} />
            ))}
        </div>
    );
};

export default ArtistsPage;
