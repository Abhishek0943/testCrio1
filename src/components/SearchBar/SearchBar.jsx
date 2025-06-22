import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import styles from "./Searchbar.module.css"
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';


export default function Searchbar({home=false, stateData, selectedState, setSelectedState, cityData, selectedCity, setSelectedCity}) {

    // console.log("state data in search>> ", stateData)
    let navigate = useNavigate();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleSearch = () => {

        if(selectedState == ""){
            enqueueSnackbar("State cannot be empty", {
                variant: "warning"
            })
            return
        }

        if(selectedCity == ""){
            enqueueSnackbar("City cannot be empty", {
                variant: "warning"
            })
            return
        }

        navigate("/search");
    }

    return (
        <div className={styles.container}>
            <form 
            name='searchForm'
            className={styles.searchForm}
            >   
                <div id='state'>
                    <FormControl fullWidth>
                        <InputLabel id="state-select-label">State</InputLabel>
                        <Select
                        labelId="state-select-label"
                        id="state-select"
                        label="State"
                        sx={{width: "200px"}}
                        name='state'
                        value={selectedState}
                        onChange={(e) => {
                            // console.log("state value change >>", e.target.value)
                            setSelectedState(e.target.value)
                        }}
                        >
                            {
                                stateData.map((state, index) => {
                                    return <MenuItem key={index} value={state}>{state}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </div>

                <div id='city'>
                    <FormControl fullWidth>
                        <InputLabel id="city-select-label">City</InputLabel>
                        <Select
                        labelId="city-select-label"
                        id="city-select"
                        label="city"
                        sx={{width: "200px"}}
                        name='city'
                        value={selectedCity}
                        onChange={(e) => {
                            // console.log("city value change >>", e.target.value)
                            setSelectedCity(e.target.value)
                        }}
                        >
                            
                            {
                                cityData.map((city, index) => {
                                    return <MenuItem key={index} value={city}>{city}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                </div>

                <Button variant='contained' 
                id='searchBtn'
                type='button'
                label="Search"
                startIcon={<SearchIcon />}
                onClick={handleSearch}
                >Search</Button>

            </form>

            
        </div>
    )
}