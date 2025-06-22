import React, { useState, useEffect } from 'react';
import CountryCard from './CountryCard';
import './App.css';

const App = () => {
    const [countries, setCountries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Fetch country data from API
        const fetchCountries = async () => {
            try {
                const response = await fetch('https://countries-search-data-prod-812920491762.asia-south1.run.app/countries');
                if (!response.ok) throw new Error('Network response was not ok.');
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        };

        fetchCountries();
    }, []);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm)
    );

    return (
        <div className="App">
            <input
                type="text"
                placeholder="Search for a country..."
                value={searchTerm}
                onChange={handleSearch}
                className="searchBar"
            />
            <div className="countryContainer">
                {filteredCountries.map((country) => (
                    <CountryCard
                        key={country.cca3}
                        name={country.name.common}
                        flag={country.flags.png}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
