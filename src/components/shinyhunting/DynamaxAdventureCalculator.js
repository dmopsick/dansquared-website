import {Card, CardContent, FormControlLabel, FormGroup, FormLabel, RadioGroup, Typography} from '@mui/material';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import {useEffect, useState} from 'react';
import calculateSingleEventProbability from './SingleEventProbability';

const FAVORABLE_OUTCOMES_NO_CHARM = 1;
const FAVORABLE_OUTCOMES_CHARM = 3;
const TOTAL_OUTCOMES = 300;

const NO_SHINY_CHARM = 0;
const HAS_SHINY_CHARM = 1;

export default function DynamaxAdventureCalculator() {
  const [shinyCharm, setShinyCharm] = useState(0);
  const [numEncounters, setNumEncounters] = useState(0);
  const [mainHuntShinyOdds, setMainHuntShinyOdds] = useState(0);

  // Add some react hooks that react to the user input and do the calculations live
  useEffect(() => {
    let favorableOutcomes = FAVORABLE_OUTCOMES_NO_CHARM;

    if (shinyCharm == HAS_SHINY_CHARM) {
      favorableOutcomes = FAVORABLE_OUTCOMES_CHARM;
    }

    const shinyChance = calculateSingleEventProbability(favorableOutcomes, TOTAL_OUTCOMES, numEncounters);

    if (shinyChance >= 0) {
      setMainHuntShinyOdds((shinyChance * 100).toFixed(2));
    } else {
      setMainHuntShinyOdds('Haha very funny, you cannot have negative odds.');
    }
  }, [shinyCharm, numEncounters]);

  // In the future can render a sprite of the Pokemon that the user is searching for

  // Show the odds they would have caught the Pokemon they are hunting in n encounters
  // Based on the percentage show a different message of flavor text
  // Future enhancement... show the likelihood of catching 1, 2, 3... n other shinies along the way

  return (
    <div className='pageContainer light-blue-background'>
      <div className='section'>
        <h1 className="sectionSubheader">Trust the DANalytics</h1>

        {/* Future enhancement... make the text that displays here rotate */}
        <p className="sectionCaption">
          Join my <a href="https://dan2discord.com" target="_blank" rel="noreferrer">Discord Server</a> to not have to raid with the dreaded bots.
        </p>

        <Card className='card'>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" className='center-text'>
              Dynamax Adventure Shiny Odds Calculator
            </Typography>
            <FormGroup>
              <FormLabel id="shiny-charm-label">Do you have the Shiny Charm?</FormLabel>
              <RadioGroup
                value={shinyCharm}
                row
                aria-labelledby="shiny-charm-label"
                name="shiny-charm-buttons-group">
                <FormControlLabel onChange={(e) => setShinyCharm(e.currentTarget.value)} value={HAS_SHINY_CHARM} control={<Radio />} label="Yes😎" />
                <FormControlLabel onChange={(e) => setShinyCharm(e.currentTarget.value)} value={NO_SHINY_CHARM} control={<Radio />} label="No. I still need to catch them all" />
              </RadioGroup>

              <TextField
                id="filled-number"
                label="Number of encounters"
                type="number"
                value={numEncounters}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
                onChange={(e) => setNumEncounters(e.currentTarget.value)}
              />
            </FormGroup>

            <Typography gutterBottom variant="h5" component="div" className='marginTop'>
                Shiny Odds: {mainHuntShinyOdds}%
            </Typography>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
