import BackgroundVideo from '../video/dansquared-background-video.mp4';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { makeStyles } from '@mui/styles';
// import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-scroll";
import Button from '@mui/material/Button';
import SunDanFace from "../images/sun-dan-face.png";
import MoonDanFace from "../images/moon-dan-face.png";

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

                <Link to="section2"
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
                <div style={{
                    paddingTop: "440px"
                }}>
                    <div className='text-background'>
                        <h1 className='sectionHeader'>Two Dans Are Better Than One</h1> 
                        <p className='sectionCaption'>Our mission is to build an inclusive and energetic community through engaging, entertaining, and most importantly FUN content.</p>
                    </div>
                </div>
            
                <Link to="section3"
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

            <div id="section3" className='section light-blue-background'>
                <h1 className='sectionHeader'>Who are we?</h1> 
                <p className='sectionCaption'>
                    We are two best friends named Dan on a content creation journey together.
                </p>
                
                <img className='rounded-face-image'
                    src={SunDanFace} 
                    alt="Sun Dan"
                />
                <h2 className='sectionCaption'>Sun Dan</h2>

                <img className='rounded-face-image'
                    src={MoonDanFace} 
                    alt="Moon Dan"
                />
                <h2 className='sectionCaption'>Moon Dan</h2>

                <Link to="section4"
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

            
            <div id="section4" className='section sand-background'>
                <h1 className='sectionHeader'>The DanSquared Difference</h1>
                <p className='sectionCaption'>
                    We believe you cannot fake passion and enthusiasm.
                    We are passionate about making content and engaging with our community, The DANimals.
                    We are so thrilled to build and grow this community everyday.
                    <br/>
                    We specialize in video game content. We are currently playing...
                </p>
                <ul className='info-list'>
                    <li>Pokémon Scarlet and Violet</li>
                    <li>Terraria</li>
                    <li>Fortnite</li>
                    <li>Co op games</li>
                    <li>And more!</li>
                </ul>


                <Button className='button'
                        variant="contained" 
                        size="small"
                        href="https://linktr.ee/dansquared">
                    Join the Danimals
                </Button>
             
            </div>

            </div>

    )
}
