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
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "22em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url("/assets/infoBackground.svg")`,
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
  <Grid container direction="column" alignItems="flex-start"
    style={{}} >
  {/* Start 1st row*/}
    <Grid container alignItems="center" justify="space-around"
      className={classes.background}
      direction="row"
    >
    {/* Start 1st item*/}
    <Grid item>
     <Grid item>
          <LazyLoadImage className={classes.icon} alt="custom software icon"
                src="/assets/people.svg"
              />
          </Grid> 
     <Grid container direction="column" align="flex-end">
           
        <Grid item>
          <Typography variant="h3" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                fontSize : "25px"  }}
            >
          House Construction Packages
        </Typography>  
        </Grid>   
        <Grid item>
        <Typography variant="subtitle2" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
              }}
            >
         Starts at 1515 per sqft
        </Typography>
        </Grid>   
        <Grid item>
        <Typography variant="subtitle2" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                fontSize : "20px"  }}
            >
          (Incl. Of Gst)
        </Typography>
        </Grid>   
       </Grid>
      </Grid>
       {/* Start 1st end*/}

   {/* Start 4th start*/}
      <Grid item>
     <Grid item>
          <LazyLoadImage className={classes.icon} alt="custom software icon"
                src="/assets/users.svg"
              />
          </Grid> 
     <Grid container direction="column" align="flex-end">
           
        <Grid item>
          <Typography variant="h3" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
         }}
            >
          Commercial Const. Packages
        </Typography>  
        </Grid>   
        <Grid item>
        <Typography variant="subtitle2" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                fontSize : "20px"  }}
            >
         Starts at 1390 per sqft
        </Typography>
        </Grid>   
        <Grid item>
        <Typography variant="subtitle2" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                fontSize : "20px"  }}
            >
          (Incl. Of Gst)
        </Typography>
        </Grid>   
       </Grid>
      </Grid>
     {/* Start 4th end*/} 
 
    </Grid>
{/* End 1st row*/}

{/* Start 2nd row*/}
    <Grid container alignItems="center" justify="space-around"
      className={classes.background}
      direction="row"
    >
     {/* Start 2nd start*/}
     <Grid item>
     <Grid item>
          <LazyLoadImage className={classes.icon} alt="custom software icon"
                src="/assets/mobileIcon.svg"
              />
          </Grid> 
     <Grid container direction="column" align="flex-end">
           
        <Grid item>
          <Typography variant="h3" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                }}
            >
          Compound Wall Packages
        </Typography>  
        </Grid>   
        <Grid item>
        <Typography variant="subtitle2" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                fontSize : "20px"  }}
            >
         Starts at 680 per sqft
        </Typography>
        </Grid>   
        <Grid item>
        <Typography variant="subtitle2" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                fontSize : "20px"  }}
            >
          (Incl. Of Gst)
        </Typography>
        </Grid>   
       </Grid>
      </Grid>
      {/* Start 2nd end*/}
    </Grid>
{/* End 2nd row*/}

{/* Start 3rd row*/}
    <Grid container alignItems="center" justify="space-around"
      className={classes.background}
      direction="row"
    >
     {/* Start 2nd start*/}
     <Grid item>
     <Grid item>
          <LazyLoadImage className={classes.icon} alt="custom software icon"
                src="/assets/mobileIcon.svg"
              />
          </Grid> 
     <Grid container direction="column" align="flex-end">
           
        <Grid item>
          <Typography variant="h3" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                }}
            >
          Compound Wall Packages
        </Typography>  
        </Grid>   
        <Grid item>
        <Typography variant="subtitle2" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                fontSize : "20px"  }}
            >
         Starts at 680 per sqft
        </Typography>
        </Grid>   
        <Grid item>
        <Typography variant="subtitle2" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                fontSize : "20px"  }}
            >
          (Incl. Of Gst)
        </Typography>
        </Grid>   
       </Grid>
      </Grid>
      {/* Start 2nd end*/}

      {/* Start 3rd start*/}

      <Grid item>
     <Grid item>
          <LazyLoadImage className={classes.icon} alt="custom software icon"
                src="/assets/swissKnife.svg"
              />
          </Grid> 
     <Grid container direction="column" align="flex-end">
           
        <Grid item>
          <Typography variant="h3" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
               }}
            >
          WoodWork Packages
        </Typography>  
        </Grid>   
        <Grid item>
        <Typography variant="subtitle2" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                fontSize : "20px"  }}
            >
         Starts at 1080 per sqft
        </Typography>
        </Grid>   
        <Grid item>
        <Typography variant="subtitle2" align="center"
              style={{ fontSize: matchesSM ? "1.25rem" : "1.5rem" ,
               color : "#00203FFF" ,
                fontSize : "20px"  }}
            >
          (Incl. Of Gst)
        </Typography>
        </Grid>   
       </Grid>
      </Grid>
      {/* Start 3rd end*/}
    </Grid>
{/* End 3rd row*/}
    
    </Grid>   
  );
}
