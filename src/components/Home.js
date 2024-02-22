import BackgroundVideo from '../video/dansquared-background-video.mp4';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {Link} from 'react-scroll';
import Button from '@mui/material/Button';
import SunDanFace from '../images/sun-dan-face.png';

export default function Home() {
  return (
    <div className='center-text' style={{
      boxSizing: 'border-box',
      color: 'white',
      overflow: 'hidden',
    }}>
      <div className="section light-blue-background">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            positon: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '-100',

          }}
        >
          <source src={BackgroundVideo} type="video/mp4" />
        </video>
        <div style={{
          zIndex: '100',
          position: 'absolute',
          width: '100%',
          top: '25%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignContent: 'center',
        }}
        >
          <img src="/logo1200.png"
            alt="DanSquared Logo"
            style={{
              width: '50%',
              flexBasis: '20%',
              maxHeight: '500px',
              maxWidth: '250px',
              opacity: '60%',
            }}
          />

          <Link to="section2"
            smooth={true}
            duration={500}
            style={{
              color: 'white',
              flexBasis: '100%',
            }}>

            <ArrowDownwardIcon
              className='movingArrow
            'style={{fontSize: '96px'}} />
          </Link>

        </div>
      </div>

      <div id="section2" className='section dan-banner-background'>
        <div style={{
          paddingTop: '80px',
        }}>
          <div className='text-background'>
            <h1 className='sectionHeader'>Play the games you love with good people</h1>
            <p className='sectionCaption'>
                My mission is to build an inclusive and energetic community through engaging, entertaining, and most importantly FUN content.
                I want to recapture that magic we all felt as kids playing our favorite games with friends in my streams and videos.
                I stream on TikTok and YouTube. I am a member of the Diffraction TikTok Live Agency.
            </p>
          </div>
        </div>

        <Link to="section3"
          smooth={true}
          duration={500}
          style={{
            color: 'white',
            flexBasis: '100%',
            padding: '2em 0',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>

          <ArrowDownwardIcon
            className='movingArrow'
            style={{fontSize: '96px'}} />
        </Link>
      </div>

      <div id="section3" className='section light-blue-background'>
        <h1 className='sectionHeader'>Who am I?</h1>
        <p className='sectionCaption'>
                    My name is Sun Dan and my goal is to bring people together around my favorite games.
                    It is my goal every day to make at least one viewer&apos;s day better.
                    I get a lot of fulfilment out of making other people laugh or happy which drives me to make the best content I possibly can each day.
        </p>

        <img className='rounded-face-image'
          src={SunDanFace}
          alt="Sun Dan"
        />
        <h2 className='sectionCaption'>Sun Dan</h2>

        <Link to="section4"
          smooth={true}
          duration={500}
          style={{
            color: 'white',
            flexBasis: '100%',
            padding: '2em 0',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>

          <ArrowDownwardIcon
            className='movingArrow'
            style={{fontSize: '96px'}} />
        </Link>
      </div>


      <div id="section4" className='medium-section sand-background'>
        <h1 className='sectionHeader'>The DANimal Kingdom</h1>
        <p className='sectionCaption'>
                    I believe you cannot fake passion and enthusiasm.
                    I am passionate about making content and engaging with my community, The DANimals.
          <br />
                    I specialize in Pokemon content.
                    I am a Tera Raid expert. I also enjoy shiny hunting and making Pokémon theories.
                    I believe content comes first before the game. It&apos;s less about what we are playing and more about who we are playing it with.
        </p>

        <Button className='button'
          variant="contained"
          size="small"
          target="_blank"
          href="https://linktr.ee/dansquared">
                    Join the DANimal Kingdom!
        </Button>

      </div>

    </div>

  );
}
