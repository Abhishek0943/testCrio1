import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import { data } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs({dateList, bookingSlots, bookingTimes, center, setBookedDetails}) {
    
    let navigate = useNavigate();

    const [value, setValue] = React.useState(0);

    const dateOptions = {
        weekday: "short",
        day: "2-digit",
        month: "short"
    }

    const convertDate = (date) => {

        const temp = new Date(date);

        return temp.toLocaleDateString('en-In', dateOptions)
    }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  //handling booking click
  const handleBooking = (date, time, center) => {
        // console.log("booking", date, time, center);

        const bookedData = {
            "Hospital Name": center["Hospital Name"],
            "City": center.City,
            "State": center.State,
            "Hospital Type": center["Hospital Type"],
            "Hospital overall rating": center["Hospital overall rating"],
            bookingDate: date,
            bookingTime: time
        }

        console.log("booked data >>", bookedData);

        //pass it to the booked data item
        setBookedDetails(prev => {
            return [...prev, bookedData]
        });
        
        navigate("/my-bookings");
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
            variant="scrollable" scrollButtons="auto"
        >
          {/* <Tab label={<p>Today</p>} {...a11yProps(0)} /> */}
          
          {
            dateList.map((date, index) => {
                
                if (index === 0){
                    return <Tab key={index} label={<p>Today</p>} {...a11yProps(index)} />
                }
                else if (index === 1){
                    return <Tab key={index} label={<p>Tommorow</p>} {...a11yProps(index)} />
                }
                else {
                    return <Tab key={index} label={<p>{convertDate(date)}</p>} {...a11yProps(index)} />
                }
            })
          }

        </Tabs>
      </Box>

      {/* <CustomTabPanel value={value} index={0}>
        <Stack spacing={2}>

            {
                bookingTimes.map((item, index) => {

                    return (
                        <Stack key={index} direction="row" spacing={2}>
                            <p
                            style={{ margin: 0, padding: "6px 8px 6px 8px" }}
                            >{item}</p>


                            {
                                bookingSlots[item].map((time, index) => {
                                    return <Button key={index} >{time}</Button>
                                })
                            }
                            </Stack>

                    )
                })
            }

        </Stack>
      </CustomTabPanel> */}

        {
            dateList.map((date, index) => {

                return (
                    <CustomTabPanel key={index} value={value} index={index}>
                        <Stack spacing={2}>

                            {
                                bookingTimes.map((item, index) => {

                                    return (
                                        <Stack key={index} direction="row" spacing={2}>
                                            <p
                                            style={{ margin: 0, padding: "6px 8px 6px 8px" }}
                                            >{item}</p>


                                            {
                                                bookingSlots[item].map((time, index) => {
                                                    return <Button key={index} variant='outlined'
                                                            onClick={() => {
                                                                handleBooking(date, time, center);
                                                            }}
                                                    >{time}</Button>
                                                })
                                            }
                                            </Stack>

                                    )
                                })
                            }

                        </Stack>
                    </CustomTabPanel>
                )
            })
        }
      
    </Box>
  );
}
