import Faq from "../../Components/FAQ/Faq"
import Navbar from "../../Components/Navbar/Navbar"
import styles from "./Search.module.css";
import { useOutletContext } from "react-router-dom";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Stack from "@mui/material/Stack";
import TickIcon from "../../Assets/Search/subtitle_tick.png"
import MedicalCenterCard from "../../Components/MedicalCenterCard/MedicalCenterCard";



export default function Search() {

    

    const {stateData, selectedState, setSelectedState,
        cityData, selectedCity, setSelectedCity,
        medicalCenters, setBookedDetails
    } = useOutletContext();

    // console.log("mc >> ", medicalCenters);

    return (
        <div>
            <Navbar home />
            <div className={styles.blueBlock}>
                <Searchbar home stateData={stateData} selectedState={selectedState} setSelectedState={setSelectedState} 
                    cityData={cityData} selectedCity={selectedCity} setSelectedCity={setSelectedCity}
                />
            </div>

            <div className={styles.searchResult}>

                <Stack spacing={3}
                sx={{
                    marginBottom: "20px"
                }}
                >

                    <h1
                    className={styles.heading}
                    >{`${medicalCenters.length} medical centers available in ${selectedCity.toLowerCase()}`}</h1>

                    <div
                    style={{
                        display: "flex",
                        marginTop: "5px"
                    }}
                    >
                        <img src={TickIcon} alt="tick-symbol"/>
                        <p style={{ margin: 5, fontSize: "16px", fontWeight: 400, color: "#787887"}} >Book appointments with minimum wait-time & verified doctor details</p>
                    </div>
                    

                </Stack>

                <Stack spacing={2}>
                    {
                        medicalCenters.map(((center, index) => {
                            return <MedicalCenterCard key={index} center={center} setBookedDetails={setBookedDetails} />
                        }))
                    }
                </Stack>

            </div>
            <Faq />
        </div>
    )
}