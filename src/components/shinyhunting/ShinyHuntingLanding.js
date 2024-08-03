
import Card from '@mui/material/Card';
import {CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import DynamaxAdventurePic from '../../images/dynamax-adventures-card.png';

export default function ShinyHuntingLanding() {
  return (
    <div className='pageContainer light-blue-background'>
      <div className='section'>
        <h1 className="sectionHeader">Shiny Pokémon Hunting Calculators</h1>

        {/* Maybe show a whimiscal image here */}

        <p className="sectionCaption">
          Apply DANalytics to your shiny Pokémon Hunts.
        </p>

        {/* Make card elements here to link to different calculators */}

        {/* Dynamax Adventure Calculator */}
        <a href="/shinyhunting/dynamax-adventures-shiny-odds-calculator">
          <Card className='card'>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={DynamaxAdventurePic}
                alt="Dynamax Adventures in Pokémon Sword and Shield" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Dynamax Adventures
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Catch 37 shiny Legendary Pokémon and 10 Shiny Ultra Beasts.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </a>

        {/* Base hunting calculator pre gen 6 (1/4096) */}

        {/* Base hunting calculator post gen 6 1/8192) */}

        {/* Masuda Method Calculator */}

        {/* Scarlet/Violet Outbreak Calculator */}

      </div>
    </div>
  );
}
