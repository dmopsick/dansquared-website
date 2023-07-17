
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {

    return(
        <div style={{
            background: "#010080",
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
                            href="https://youtube.com/@dansquared___">
                            <YouTubeIcon fontSize='large' />
                        </a>
                    </div>
                    <div className='socialIconContainer'>
                        <a className='socialIconLink'
                            target="_blank"
                            rel="noreferrer" 
                            href="https://tiktok.com/@dansquared___">
                            <img 
                                src="../tiktok.png"
                                alt="TikTok Logo"
                                style={{
                                    maxWidth: "30px"
                                }}
                             />
                        </a>
                    </div>
                    <div className='socialIconContainer'>
                        <a className='socialIconLink'
                            target="_blank"
                            rel="noreferrer" 
                            href="https://www.instagram.com/dansquared___/">
                            <InstagramIcon fontSize='large' />
                        </a>
                    </div>
                    <div className='socialIconContainer'>
                        <a className='socialIconLink'
                            target="_blank"
                            rel="noreferrer" 
                            href="https://twitter.com/dansquared___">
                            <TwitterIcon fontSize='large' />
                        </a>
                    </div>
            </div>
            <hr />
            <p>
                <a href="mailto:dansquaredbusiness@gmail.com"
                    style={{
                        color: "white"
                    }}
                >dansquaredbusiness@gmail.com </a>
            </p>
            <p>
                Delivering the DanSquared Difference since 2023
            </p>
            <hr />
        

        </div>
    )

}
