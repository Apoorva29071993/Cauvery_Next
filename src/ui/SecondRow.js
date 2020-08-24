import React from "react";
import ReactGA from "react-ga";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Link from "../Link";
import Button from "@material-ui/core/Button";
import ButtonArrow from "./ButtonArrow";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { LazyLoadImage,  LazyLoadComponent } from "react-lazy-load-image-component";

const useStyles = makeStyles(theme => ({
  learnButton: {
    borderColor: "black",
    borderWidth: 2,
    textTransform: "none",
    color: "#00203FFF",
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
    backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "40em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/houseNew.jpg")`,
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
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  }
}));

export default function FirstRow(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      alignItems="center"
      justify="space-around"
      className={classes.background}
      direction="row"
    >
       <Grid item>
         <LazyLoadImage
              className={classes.icon}
              alt="custom software icon"
              src="/assets/customSoftware.svg"
            />
          <Typography
              variant="subtitle2"
              align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
               marginTop : "30px" ,
                fontSize : "30px"  }}
            >
          390 projects
        </Typography>  
       </Grid>

       <Grid item>
       <LazyLoadImage
              className={classes.icon}
              alt="custom software icon"
              src="/assets/mobileIcon.svg"
            />
         <Typography
              variant="subtitle2"
              align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                fontSize : "30px"  }}
            >
          15 Years Warranty
        </Typography>   
       </Grid>

       <Grid item>
       <LazyLoadImage
              className={classes.icon}
              alt="custom software icon"
              src="/assets/swissKnife.svg"
            />
         <Typography
              variant="subtitle2"
              align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
               marginTop : "30px" ,
                fontSize : "30px"  }}
            >
          310 Quality Checks
        </Typography>   
       </Grid>
       
      
    </Grid>
  );
}
