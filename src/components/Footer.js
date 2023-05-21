
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {

    return(
        <div style={{
            background: "black",
            color: "white",
            height: "200px",
            paddingTop: "10px",
            paddingBottom: "20px",
            textAlign: "center"
        }}>
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "90%",
                    margin:"auto",
                    maxWidth: "500px"
                }}>
                    <div className='socialIconContainer'>
                        <a className='socialIconLink'
                            target="_blank"
                            rel="noreferrer" 
                            href="https://www.instagram.com/gardenstateperformance_/">
                            <InstagramIcon fontSize='large' />
                        </a>
                    </div>
                    <div className='socialIconContainer'>
                        <a className='socialIconLink'
                            target="_blank"
                            rel="noreferrer" 
                            href="https://www.youtube.com/channel/UC_PjfKHV8wfWTIinmjaHPLg">
                            <YouTubeIcon fontSize='large' />
                        </a>
                    </div>
            </div>
            <hr />
            <p>
                <a href="mailto:gardenstateperf@gmail.com"
                    style={{
                        color: "white"
                    }}
                >GardenStatePerf@gmail.com </a>
                •
                732-245-7494 
            </p>
            <p>
                1701 Valley Road Unit E, Ocean, NJ 07712
            </p>
            <hr />
        

        </div>
    )

}
