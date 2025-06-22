import Navbar from "../../Components/Navbar/Navbar"
import Hero from "../../Components/Hero/Hero"
import Specialization from "../../Components/Specialization/Specialization"
import LatestNews from "../../Components/LatestNews/LatestNews"
import Faq from "../../Components/FAQ/Faq"
import { useOutletContext } from "react-router-dom"

export default function Home() {

    const {stateData, selectedState, setSelectedState,
        cityData, selectedCity, setSelectedCity
    } = useOutletContext();

    // console.log("state within Home >>", stateData)

    return (
        <div>
            {/* <Navbar home /> */}
            <Hero stateData={stateData} selectedState={selectedState} setSelectedState={setSelectedState} 
                cityData={cityData} selectedCity={selectedCity} setSelectedCity={setSelectedCity}
            />
            <Specialization />
            <LatestNews />
            <Faq />
        </div>
    )
}