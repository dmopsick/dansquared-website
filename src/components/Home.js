import BackgroundVideo from '../video/dansquared-background-video.mp4';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { makeStyles } from '@mui/styles';
// import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-scroll";
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
    movingArrow: {
        animation: "arrow-jump 1s infinite",
        color: "#E4E816"
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
            <div className="section light-blue-background">
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
                        zIndex: "-100"
                    }}
                >
                    <source src={BackgroundVideo} type="video/mp4" />
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
                        maxHeight: "500px",
                        maxWidth: "250px",
                        opacity: "60%"
                    }}
                />

                <Link to="section1"
                    smooth={true}
                    duration={500}
                    style={{
                        color: "white",
                        flexBasis: "100%"
                    }}>
                        
                    <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                </Link>
                    
                </div>
            </div>
        
            <div id="section2" className='section two-dan-background'>
                <h1 className='sectionHeader text-background'>Two Dans Are Better Than One</h1> 
                <p className='sectionCaption text-background'>We are two best friends named Dan on a content creation journey together.</p>
                    
                    <Link to="section2"
                        smooth={true}
                        duration={500}
                        style={{
                            color: "white",
                            flexBasis: "100%",
                            padding: "2em",
                            left: "50%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                        }}>
         
                        <ArrowDownwardIcon className={classes.movingArrow}  style={{fontSize: "96px"}} />
                    </Link>
                </div>

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
