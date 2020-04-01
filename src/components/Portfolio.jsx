import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './header'
import ChatBot from '../images/chatBot.PNG'
import searchEngine from '../images/searchEngine.PNG'
import Turing from '../images/Turing.PNG'
import Visa from '../images/Visa.PNG'


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [
  {id:1,
  title: "ChatBot — WitAi",
  info: "A small chatbot used as demoe for a project that i was working on it!",
  demo: "https://a0m0rajab.github.io/exercise/JSuniWork/ChatBot.html",
  link: ChatBot},

  {id:2,
    title: "Turing simulation",
    info: "A turing machine simulator used for educational purposes",
    demo: "https://a0m0rajab.github.io/Automata/turing/abdurrahmanRajab_turingMachineSimulator.html",
  link:Turing}
    ,
  {id:3,
    title: "Visa application",
    info: "A purpose to fix and redesgin the front page of the Ministry of Foreign Affairs",
    demo: "https://a0m0rajab.github.io/VizeUygulamalari/  ",
  link:Visa}
    ,
  {id:4,
    title: "Arabic Search Engine",
    info: "An arabic search engine used for special purposes",
    demo: "https://a0m0rajab.github.io/BahisQurani/finder",
  link:searchEngine}

];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
     <Header/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        A few projects.
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hope you to enjoy checking them :)
            </Typography>
          
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image = {card.link}
                    title={card.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
              {card.info}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => { window.open(card.demo);}}> 
                      Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
     
    </React.Fragment>
  );
}