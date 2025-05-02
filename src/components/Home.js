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
            <h1 className='sectionHeader'>Who am I?</h1>
            <div className='sectionCaption'>
              My name is Dan Mopsick and my goal is to bring people together around my favorite game franchise, Pokémon.
              I am a content creator, software developer, aspiring adult athlete, and competitive Pokémon Trading Card Game Player.
            </div>
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
        <h1 className='sectionHeader'>What do I do?</h1>
        <p className='sectionCaption'>
          I stream on TikTok and YouTube. I am a member of the <a target='_blank' rel='noreferrer' href='https://tiktoklivestream.com/'>Diffraction TikTok Live Agency</a>.
          I want to recapture that magic we all felt as kids playing our favorite games with friends in my streams and videos.
        </p>

        <img className='rounded-face-image'
          src={SunDanFace}
          alt="Dan Mopsick"
        />
        <h2 className='sectionCaption'>Dan (6 foot 3)</h2>
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
          It is my goal every day to make at least one viewer&apos;s day better with every stream and video.
          <br />
          I love all things Pokémon. Especially the mainline games and the Trading Card Game.
          I believe it&apos;s less about what game we are playing and more about the people we are playing it with.
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
