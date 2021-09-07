import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import prepercolatorscreen from "../../media/prepercolator-screenshot.png"
import perfecthomescreen from "../../media/perfecthome-screenshot.png"
import weatherscreen from "../../media/weather-screenshot.png"
import hoprscreen from "../../media/hopr-screenshot.png"
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import "./Cards.scss";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    filter: 'grayscale(50%)'
  },
}));

function Cards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(-1);
  const projects = [
      {
          title: "Prepercolator",
          information: "An application for ordering coffee. Enables users to save their favorite drink combinations.",
          id: 1,
          
          screenshot: prepercolatorscreen,
          repo: "https://github.com/davidlucio/prepercolator",
          deploy: "https://prepercolator.herokuapp.com",
      },
      {
          title: "PerfectHome",
          information: "A site for matching adoptable pets to matching owners based on criteria the user defines.",

          id: 2,
          
          screenshot: perfecthomescreen,
          repo: "https://https://github.com/KeithMurph/PerfectHome",
          deploy: "https://perfect-home-finder.herokuapp.com/",
      },
      {
          title: "Hop'r",
          information: "An application that locates breweries nearest the user.",
          tools: "Third Party APIs, jQuery, Chart.js, Moment.js, Materialize",
          id: 3,
          
          screenshot: hoprscreen,
          repo: "https://github.com/davidlucio/breweryfinder",
          deploy: "https://davidlucio.github.io/breweryfinder/",
      },
      {
          title: "Weather Dashboard",
          information: "An app that gets weather information for the specified location.",
          id: 4,
          screenshot: weatherscreen,
          repo: "https://github.com/connorolson4/weather-dashboard",
          deploy: "https://connorolson4.github.io/weather-dashboard/",
      },
  ]

  const handleExpandClick = (i) => {
    setExpanded(expanded === i ? -1 : i);
  };

  return (
    <div className="cards">
        {projects.map((project, i) => (
            <div className="map-card">
            <Card className="portfolio-card" key={project.id}>
            <CardHeader
            
            action={
                <IconButton
                onClick={() => handleExpandClick(i)}
                aria-expanded={expanded === i}
                aria-label="show more"
                >
                <InfoOutlinedIcon className="info-icon"/>
                </IconButton>
            }
            title={project.title}
            // subheader="September 14, 2016"
            />
            <CardMedia
            className={classes.media}
            image={project.screenshot}
            title="Project Image"
            />
            <CardContent>
            </CardContent>
            <Collapse in={expanded === i} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography className="expand-info" paragraph>
                    <h3>DESCRIPTION</h3>
                    {project.information}
                </Typography>
                
                <Typography paragraph className="git-deployed-icons">
                    <a target="_blank" href={project.repo}><GitHubIcon className="git-icon"/></a>
                    <a target="_blank" href={project.deploy}><LanguageIcon className="deploy-icon"/></a>
                </Typography>
            </CardContent>
            </Collapse>
        </Card>
        </div>
        ))}
    </div>
  );
}

export default Cards;