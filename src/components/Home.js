import GymTourVideo from '../video/gymTourVideo.mp4';
import Logo from '../logo.svg';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { makeStyles } from '@mui/styles';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-scroll";
import Button from '@mui/material/Button';

const useStyles = makeStyles(theme => ({
    movingArrow: {
        animation: "arrow-jump 1s infinite",
        color: "skyblue"
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
                    <img src={Logo}
                        alt="DanSquared Logo"
                        style={{
                            width: "50%",
                            flexBasis: "20%"
                        }}
                    />

                    <Link to="info"
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
        
            <div id="info" className='section'>
                <h1 className='sectionHeader'>Movement. Strength. Performance.</h1> 
                <p className='sectionCaption'>Become a better human - a better athlete - a better player</p>
                    
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
                </div>

                <div id="training" className='section redBackground'>
                    <h1 className='sectionHeader'>Training at GSP</h1>
                    <p className='sectionCaption'>How we do things</p>
                    <ul className='infoList'>
                        <li className='infoListItem'>Learn the proper movement patterns for athletic efficiency and performance</li>
                        <li className='infoListItem'>Develop Power, Strength, and Speed for your sport</li>
                        <li className='infoListItem'>Explore the boundaries of your athleticism and express your full abilities</li>
                        <li className='infoListItem'>Develop confidence and self-reliance in a competitive environment</li>
                        <li className='infoListItem'>Become battle-tested in your off-seasons to be ready for the main event</li>
                    </ul>
                    <Link to="signUp" 
                        smooth={true}
                        duration={500}
                        style={{
                            textDecoration: "none",
                            color: "white"
                        }}
                    >
                        <h1>Sign Up <ArrowDownwardIcon className={classes.movingArrow} fontSize="large" /></h1>
                    </Link>
                </div>

                <div id="signUp"
                    className='section'
                    style={{
                        height: "875px"
                    }}
                >
                    <h1 className='sectionHeader'>What Do the People Think of GSP?</h1>

                    <p className={classes.testimonialText}>
                        <em>
                            Great place to workout. My son is a football player who loves to workout here.
                            Great people and awesome motivators. He has helped my son transform his body for football. 
                            Highly recommend this place. Shane is the best!”
                        </em> - Jill B. of Neptune, son Avery plays football for Red Bank Catholic

                    </p>

                    <p className={classes.testimonialText}>
                        <em>
                            You will not be disappointed in this gym at all. All three of my kids are members here and they absolutely love it. 
                            My oldest son is now a freshman in college on the Wrestling team lifting more than most on his team. 
                            GSP is 100% the reason for this. The BEST, go check them out.
                        </em> - The Levies of Neptune, all three boys are members with the oldest, Nate, wrestling Division 2 at Seton Hill University
                    </p>

                    <p className={classes.testimonialText}>
                        <em>
                            I&#8217;ve  been to so many gyms and none compare to Garden State Performance. Every day is different and challenging and the results are awesome!
                        </em> - Esther D., adult fitness client and avid pickleball player
                    </p>

                    <p className={classes.testimonialText}>
                        <em>
                            GSP is a welcoming place designed for all levels and ages. 
                            Work out at your own pace, increasing levels and timing each week. 
                            Challenging while gaining endurance and strength.
                        </em> - Tom K. of Eatontown, adult fitness client/legend
                    </p>

                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://forms.gle/26EjLbeDkoVDGhU78"
                    >
                        <h2>Become a Member <AddIcon /></h2>
                    </a>

                </div>

            </div>

    )
}
