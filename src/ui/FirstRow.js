import React from "react";
import ReactGA from "react-ga";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  learnButton: {
    borderColor: "black",
    borderWidth: 2,
    textTransform: "none",
    color : "#00203FFF" ,
    backgroundColor: "teal",
    borderRadius: 10,
    fontFamily: "Raleway",
    fontWeight: "bold",
    fontSize: "1.5rem",
    height: 65,
    padding: 15,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em"
    }
  },
  background: {
    backgroundImage: `url("/assets/wood3.jpg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "65em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/wood3.jpg")`,
      backgroundAttachment: "inherit"
    }
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",
    marginRight: "5em",
    marginLeft: "2em",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0
    }
  }
}));

export default function FirstRow(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
  <Grid container style={{ minHeight : "20px"}}>  
    <Grid container alignItems="center" justify="flex-start"
      className={classes.background}
      direction="column"
    >
       <Grid item style={{marginTop :"10em" ,marginBottom : "30px"}}>
          <Typography
                  variant="h1"
                  gutterBottom
                  style={{ lineHeight: matchesSM ? 1.1 : null , 
                    color : "#3c32a8" ,
                fontSize : "70px" }}
                >
            Manufacturers of Wooden Boxes
            </Typography>
        </Grid>    

        <Grid item style={{marginTop : "90px" , marginBottom : "110px"}}>
            <Typography
                  variant="h3"
                  gutterBottom
                  align="center"
                  style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" , color : "black" , fontSize : "40px"  }}
                >
          30+ Years of Quality Packaging |  On Time 
            </Typography>  
         </Grid>        

   
              <Grid item style={{marginTop : "15px"}}> 
                <Button
                    component={Link}
                    href="/revolution"
                    variant="contained"
                    className={classes.learnButton}
                    onClick={() => props.setValue(2)}
                  >
                    <span style={{ marginRight: 5 }}>Ask Quotation</span>
                    <ButtonArrow
                      width={20}
                      height={20}
                      fill={theme.palette.common.newBlue}
                    />
                  </Button>
              </Grid> 
      </Grid>
  </Grid>
  );
}
