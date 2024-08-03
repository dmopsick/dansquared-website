import {Card, CardContent, FormControlLabel, FormGroup, FormLabel, RadioGroup, Typography} from '@mui/material';
import Radio from '@mui/material/Radio';
import TextField from '@mui/material/TextField';
import {useLayoutEffect, useState} from 'react';
import calculateSingleEventProbability from './SingleEventProbability';

const FAVORABLE_OUTCOMES_NO_CHARM = 1;
const FAVORABLE_OUTCOMES_CHARM = 3;
const TOTAL_OUTCOMES = 300;

const NO_SHINY_CHARM = 0;
const HAS_SHINY_CHARM = 1;

function loadFlavorText(odds, numEncounters) {
  console.log(odds);
  // Todo add a random number generator that we can use to load one of 3 text responses per range
  if (odds > 98) {
    return 'It is actually absurd you have not caught this shiny by now...';
  } else if (odds > 90) {
    return 'This is some BRUTAL luck.';
  } else if (odds > 80) {
    return 'Yikes. I thought you would have caught it by now.';
  } else if (odds > 70) {
    return 'So this was REALLY not one of the quicker hunts. That is ok. Lock in, you are right there!';
  } else if (odds > 60) {
    return 'Any one of these encounters could be the one...';
  } else if (numEncounters == 60) {
    return 'Nice! You made it to 50% odds which is NOT 50 encounters.';
  } else if (odds > 50) {
    return 'You are over half odds at this point. Surely the next one will be shiny...';
  } else if (odds > 40) {
    return 'No one said this was going to be easy. Just remember all DANimals are smart and cute';
  } else if (odds > 30) {
    return 'It\'s still early don\'t worry. The next one is for sure shiny';
  } else if (odds > 20) {
    return 'If you are still doing DAs with bots, join my Discord linked above for raid lives and to find folks to raid with.';
  } else if (odds > 10) {
    return 'It\'s still early! You can still get an early score! Do not lose hope!';
  } else if (odds > 5) {
    return 'OK so it was not an instant catch. But maybe the next one shines';
  } else if (odds > 3) {
    return 'Now we are making progress';
  } else if (odds > 2) {
    return 'Ah gotta love a fresh hunt';
  } else if (odds > 0) {
    return 'Gotta start somewhere!';
  } else if (odds == 0) {
    return 'Enter valid data above to get results...';
  }
  return 'Haha very funny I have not blocked you from selecting negative encounters yet.';
}

export default function DynamaxAdventureCalculator() {
  const [shinyCharm, setShinyCharm] = useState(0);
  const [numEncounters, setNumEncounters] = useState(0);
  const [mainHuntShinyOdds, setMainHuntShinyOdds] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [pokemonName, setPokemonName] = useState('Pokémon');
  // eslint-disable-next-line no-unused-vars
  const [flavorText, setFlavorText] = useState('Enter some data above to get results...');

  // Add some react hooks that react to the user input and do the calculations live
  useLayoutEffect(() => {
    let favorableOutcomes = FAVORABLE_OUTCOMES_NO_CHARM;

    if (shinyCharm == HAS_SHINY_CHARM) {
      favorableOutcomes = FAVORABLE_OUTCOMES_CHARM;
    }

    const shinyChance = calculateSingleEventProbability(favorableOutcomes, TOTAL_OUTCOMES, numEncounters);

    if (shinyChance < 0) {
      setMainHuntShinyOdds(0);
    }
    setMainHuntShinyOdds((shinyChance * 100).toFixed(2));

    setFlavorText(loadFlavorText((shinyChance * 100).toFixed(2)));
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
            <hr/>
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

            <Typography gutterBottom variant="h5" component="div" className='marginTop center-text'>
              The DANalytics
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {flavorText}
            </Typography>
            <hr/>

            <Typography variant="body">
              Likelihood to catch the shiny {pokemonName} after {numEncounters} encounters: {mainHuntShinyOdds}%
            </Typography>
            <p>
              <Typography variant="body" className='marginTop'>
                Likelihood to not catch the shiny {pokemonName} after {numEncounters} encounters: {100 - mainHuntShinyOdds}%
              </Typography>
            </p>


          </CardContent>
        </Card>
      </div>
    </div>
  );
}
