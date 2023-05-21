import DannyImage from '../../images/Danny.JPG';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({

    container: {
        background: "skyblue",
        color: "navy"
    },

    header: {
        width: "85%",
        margin: "auto",
        textAlign: "center"
    }


}));

export default function Danny() {
    const classes = useStyles();

    return(

        <div className={classes.container}>
            <h1 className={classes.header}>Danny</h1>
            <div style={{
                margin: "auto",
                width: "80%",
                textAlign: "center"
            }}>

            <img 
                style={{
                    marginTop: "100px",
                    height: "500px"
                }} 
                src={DannyImage} 
                alt="Danyell"
            /> 

            </div>
            <h2 style={{
                marginBottom: "0px",
                textAlign: "center"
            }}>Darnel made this site with love for his bad ass friend Shane. Have a great day.</h2>

        </div>

    
    )
}