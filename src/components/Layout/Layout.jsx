import { Outlet } from "react-router-dom";
import TopPromo from "../TopPromo/TopPromo";
import Footer from "../Footer/Footer";
import MobileAppPromo from "../MobileAppPromo/MobileAppPromo";
import { useState, useEffect } from "react";
import axios from "axios";

const endpoint = 'https://meddata-backend.onrender.com/states';

export default function Layout () {

    const [stateData, setStateData] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [cityData, setCityData] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [medicalCenters, setMedicalCenters] = useState([]);
    const [bookedDetails, setBookedDetails] = useState(() => {

        const temp = localStorage.getItem('bookings');
        // console.log("data book >> ", temp ? temp : []);
        return temp ? JSON.parse(temp) : []
    });

    const outletData = {
        stateData,
        selectedState,
        setSelectedState,
        cityData,
        selectedCity,
        setSelectedCity,
        medicalCenters,
        setBookedDetails,
        bookedDetails
    }



    //useeffect - runs only once
    useEffect(() => {

        // fetch state data
        const fetchStateData = () => {
            axios.get(endpoint)
            .then(data => {
                // console.log("data>>", data.data)
                setStateData(data.data)
            })
            .catch(error => console.error("Error while fetching state data : ", error))
        }
        fetchStateData();

    }, [])

    // console.log("state within layout >>", stateData)
    //useeffect - selected state
    useEffect(() => {
        if(selectedState != ""){
            // console.log("selected state >>", selectedState);
            setSelectedCity("");
            axios.get(`https://meddata-backend.onrender.com/cities/${selectedState}`)
            .then(data => {
                // console.log("city data>> ", data.data);
                setCityData(data.data)
            })
            .catch(error => console.error("Error while fetching state data : ", error))
        }
    }, [selectedState])

    useEffect(() => {

        if (selectedCity != "" && selectedState != ""){
            // console.log("selected state >>", selectedState);
            // console.log("selected city >>", selectedCity);

            axios.get(`https://meddata-backend.onrender.com/data?state=${selectedState}&city=${selectedCity}`)
            .then(data => {
                // console.log("mc data >>", data.data);
                setMedicalCenters(data.data);

            })
            .catch(error => console.error("Error while fetching state data : ", error))
        }
    }, [selectedCity, selectedState])


    //set booked details to local storage on change in booked details
    useEffect(() => {

        localStorage.setItem("bookings", JSON.stringify(bookedDetails))

    }, [bookedDetails])


    return (
        <div>
            <TopPromo />

            {/* Nested routes here */}
            <Outlet context={outletData} />

            <MobileAppPromo />
            <Footer />

        </div>
    )
}