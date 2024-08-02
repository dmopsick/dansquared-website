import {Card, CardContent, FormControlLabel, FormGroup, FormLabel, RadioGroup} from '@mui/material';
import Radio from '@mui/material/Radio';

export default function DynamaxAdventureCalculator() {
  // Add some react hooks that react to the user input and do the calculations live

  // In the future can render a sprite of the Pokemon that the user is searching for

  // Add a radio button that determines whether or not the user has the shiny charm

  // Let the user enter the amount of encounters

  // Show the odds they would have caught the Pokemon they are hunting in n encounters
  // Based on the percentage show a different message of flavor text
  // Future enhancement... show the likelihood of catching 1, 2, 3... n other shinies along the way

  return (
    <div className='pageContainer light-blue-background'>
      <div className='section'>
        <h1 className="sectionSubheader">Dynamax Adventure Calculator</h1>

        {/* Future enhancement... make the text that displays here rotate */}
        <p className="sectionCaption">
          Join my <a href="https://dan2discord.com" target="_blank" rel="noreferrer">Discord Server</a> to not have to raid with the dreaded bots.
        </p>

        <Card className='card'>
          <CardContent>
            <FormGroup>
              <FormLabel id="shiny-charm-label">Do you have the Shiny Charm?</FormLabel>
              <RadioGroup
                row
                aria-labelledby="shiny-charm-label"
                name="shiny-charm-buttons-group">
                <FormControlLabel value="true" control={<Radio />} label="Yes😎" />
                <FormControlLabel value="false" control={<Radio />} label="No I need to catch them all" />
              </RadioGroup>
            </FormGroup>

          </CardContent>

        </Card>


      </div>
    </div>
  );
}
