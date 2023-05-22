import GymTourVideo from '../video/gymTourVideo.mp4';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { makeStyles } from '@mui/styles';
// import AddIcon from '@mui/icons-material/Add';
// import { Link } from "react-scroll";
// import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
    movingArrow: {
        animation: "arrow-jump 1s infinite",
        color: "#010080"
    },

    homeContainer: {
        color: "white",
        background: "black",
        textAlign: "center"  
    },

    hoursLink: {
        color: "skyblue",
        fontSize: "32px",
        margin: "auto"
    },

    testimonialText: {
        margin: "auto",
        width: "90%",
        marginBottom: "20px"
    }
    
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.homeContainer}>
            <div className="section">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        positon: "absolute",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: "-100",
                        filter: "grayscale(100%)"
                    }}
                >
                    <source src={GymTourVideo} type="video/mp4" />
                </video>
                <div style={{   
                        zIndex: "100",
                        position: "absolute",
                        width: "100%",
                        top: "20%",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignContent: "center"
                    }}
                >
                    <img src="/logo1200.png"
                        alt="DanSquared Logo"
                        style={{
                            width: "50%",
                            flexBasis: "20%",
                            maxHeight: "500px"
                        }}
                    />

                    {/* <Link to="info"
                        smooth={true}
                        duration={500}
                        style={{
                            color: "white",
                            flexBasis: "100%"
                        }}>
                            
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link> */}
                    
                </div>
            </div>
        
            {/* <div id="info" className='section'>
                <h1 className='sectionHeader'>Two Dans are Better Than one</h1> 
                <p className='sectionCaption'>We are two best friends named Dan on a content creation journey.</p>
                    
                    <Button className='button' 
                        variant="contained" 
                        size="large"
                        href="/athletes">
                            Athletes
                        </Button>
                    
               
                    
                    <Button className='button'
                        variant="contained" 
                        size="large"
                        href="adults">
                            Adult Fitness
                    </Button>
                    
                    <Link to="training"
                        smooth={true}
                        duration={500}
                        style={{
                            textDecoration: "none",
                            color: "white"
                        }}
                    >
                        <h1>Training at GSP <ArrowDownwardIcon className={classes.movingArrow} fontSize="large" /></h1>
                    </Link>
                </div> */}

                {/* <div id="training" className='section redBackground'>

                </div> */}

                {/* <div id="signUp"
                    className='section'
                    style={{
                        height: "875px"
                    }}
                >
             
                </div> */}

            </div>

    )
}
