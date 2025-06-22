import styles from "./LatestNews.module.css"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Detox from "../../Assets/medical/detox.png"
import DocAvatar from "../../Assets/medical/docAvatar.png"
import Avatar from '@mui/material/Avatar';
import stsIcon1 from "../../Assets/medical/sts1.png"
import stsIcon2 from "../../Assets/medical/sts2.png"
import Grid from "@mui/material/Grid";

export default function LatestNews() {

    return (
        <div className={styles.containerMain}>
            
            {/* Latest News */}
            
            <div className={styles.container1} >
                
                <Typography color="primary" >Blog & News</Typography>
                <Typography variant="h4" color="#1B3C74" 
                style={{
                    fontWeight: 700
                }}
                >Read Our Latest News</Typography>

                <Stack direction="row" spacing={2}
                sx={{
                    marginTop: "25px"
                }}
                >

                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="240"
                            image={Detox}
                            alt="green iguana"
                            />
                            <CardContent>

                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Medical | March 31, 2022
                                </Typography>

                                <Typography gutterBottom variant="h6" component="div" color="#1B3C74" >
                                    6 Tips To Protect Your Mental Health When You’re Sick
                                </Typography>


                                <Stack direction="row" spacing={2}
                                sx={{
                                    alignItems: "center"
                                }}
                                >

                                    <Avatar src={DocAvatar} alt="doc-avatar" />
                                    <Typography variant="body2" sx={{ color: '1B3C74' }}>
                                        Rebecca Lee
                                    </Typography>
                                </Stack>
                                

                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="240"
                            image={Detox}
                            alt="green iguana"
                            />
                            <CardContent>

                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Medical | March 31, 2022
                                </Typography>

                                <Typography gutterBottom variant="h6" component="div" color="#1B3C74" >
                                    6 Tips To Protect Your Mental Health When You’re Sick
                                </Typography>


                                <Stack direction="row" spacing={2}
                                sx={{
                                    alignItems: "center"
                                }}
                                >

                                    <Avatar src={DocAvatar} alt="doc-avatar" />
                                    <Typography variant="body2" sx={{ color: '1B3C74' }}>
                                        Rebecca Lee
                                    </Typography>
                                </Stack>
                                

                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            height="240"
                            image={Detox}
                            alt="green iguana"
                            />
                            <CardContent>

                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    Medical | March 31, 2022
                                </Typography>

                                <Typography gutterBottom variant="h6" component="div" color="#1B3C74" >
                                    6 Tips To Protect Your Mental Health When You’re Sick
                                </Typography>


                                <Stack direction="row" spacing={2}
                                sx={{
                                    alignItems: "center"
                                }}
                                >

                                    <Avatar src={DocAvatar} alt="doc-avatar" />
                                    <Typography variant="body2" sx={{ color: '1B3C74' }}>
                                        Rebecca Lee
                                    </Typography>
                                </Stack>
                                

                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Stack>

            </div>


            {/* Quick status view */}
                                
            <div className={styles.container2}>
                
                <Stack direction="row" spacing={2}
                sx={{
                    width: "100%",
                    justifyContent: "space-evenly"
                }}
                >

                    <div className={styles.status1}>

                        <Typography color="primary" >CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</Typography>
                        <Typography variant="h4" color="#1B3C74" 
                        style={{
                            fontWeight: 700
                        }}
                        >Our Families</Typography>

                        <Typography color="grey"
                        style={{
                            marginTop: "25px"
                        }}
                        >
                            We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.
                        </Typography>

                    </div>

                    <div className={styles.status2}>
                        
                        <Grid container spacing={1}>

                            <Grid size={6}>

                                <Stack spacing={2}
                                style={{
                                    background: "white",
                                    width: "fit-content",
                                    padding: "20px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "10px"
                                }}
                                >
                                    <img src={stsIcon1} alt="sts-icon-1" 
                                    style={{
                                        width: "140px"
                                    }}
                                    />
                                    
                                    <Typography variant="h4" color="#1B3C74" 
                                    style={{
                                        fontWeight: 700
                                    }}
                                    >5000+</Typography>

                                    <Typography color="grey"
                                    style={{
                                        marginTop: "25px"
                                    }}
                                    >
                                        Happy Patients
                                    </Typography>
                                </Stack>

                            </Grid>

                            <Grid size={6} marginTop={"50px"}>

                                <Stack spacing={2}
                                style={{
                                    background: "white",
                                    width: "fit-content",
                                    padding: "20px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "10px"
                                }}
                                >
                                    <img src={stsIcon2} alt="sts-icon-2" 
                                    style={{
                                        width: "140px"
                                    }}
                                    />
                                    
                                    <Typography variant="h4" color="#1B3C74" 
                                    style={{
                                        fontWeight: 700
                                    }}
                                    >200+</Typography>

                                    <Typography color="grey"
                                    style={{
                                        marginTop: "25px"
                                    }}
                                    >
                                        Hospitals
                                    </Typography>
                                </Stack>

                            </Grid>

                            <Grid size={6}>

                                <Stack spacing={2}
                                style={{
                                    background: "white",
                                    width: "fit-content",
                                    padding: "20px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "10px"
                                }}
                                >
                                    <img src={stsIcon1} alt="sts-icon-1" 
                                    style={{
                                        width: "140px"
                                    }}
                                    />
                                    
                                    <Typography variant="h4" color="#1B3C74" 
                                    style={{
                                        fontWeight: 700
                                    }}
                                    >5000+</Typography>

                                    <Typography color="grey"
                                    style={{
                                        marginTop: "25px"
                                    }}
                                    >
                                        Happy Patients
                                    </Typography>
                                </Stack>

                            </Grid>

                            <Grid size={6} marginTop={"50px"} >

                                <Stack spacing={2}
                                style={{
                                    background: "white",
                                    width: "fit-content",
                                    padding: "20px",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "10px"
                                }}
                                >
                                    <img src={stsIcon2} alt="sts-icon-2" 
                                    style={{
                                        width: "140px"
                                    }}
                                    />
                                    
                                    <Typography variant="h4" color="#1B3C74" 
                                    style={{
                                        fontWeight: 700
                                    }}
                                    >200+</Typography>

                                    <Typography color="grey"
                                    style={{
                                        marginTop: "25px"
                                    }}
                                    >
                                        Hospitals
                                    </Typography>
                                </Stack>

                            </Grid>

                        </Grid>

                        

                        

                    </div>

                </Stack>

            </div>



        </div>
    )
}