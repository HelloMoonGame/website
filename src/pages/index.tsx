import Head from 'next/head'

import Feature from '../components/feature'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserFriends,
  faMoneyBill,
  faHeartbeat,
} from '@fortawesome/free-solid-svg-icons'
import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Theme,
  withStyles,
} from '@material-ui/core'
import React from 'react'

library.add(faUserFriends, faMoneyBill, faHeartbeat)

const useStyles = makeStyles({
  backgroundImage: {
    backgroundImage: "url('/background.jpg')",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  squareIcon: {
    width: '50%',
    height: '6rem',
  },
  footer: {
    boxShadow:
      'rgb(0 0 0 / 20%) 0px -2px 1px -1px, rgb(0 0 0 / 14%) 0px -1px 1px 0px, rgb(0 0 0 / 12%) 0px -1px 3px 0px',
  },
})

const ButtonOnBackground = withStyles((theme: Theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.contrastText,
    position: 'absolute',
    bottom: '5%',
    '&:hover': {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
    },
  },
}))(Button)

export const Home = (): JSX.Element => {
  const classes = useStyles()

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Hello Moon</title>
        <meta
          name="description"
          content="Massively Multiplayer Online Life Simulation Game"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;display=swap"
        />
      </Head>

      <Box
        className={classes.backgroundImage}
        bgcolor="primary.main"
        color="primary.contrastText"
        textAlign="center"
      >
        <Box
          component="header"
          bgcolor="primary.main"
          boxShadow={1}
          width="100%"
          py={3}
          px={8}
        >
          <img src="/hellomoon.svg" width={256} height={113} alt="Hello Moon" />
        </Box>
        <ButtonOnBackground href="https://game.hellomoon.nl" variant="outlined">
          Explore the alpha version!
        </ButtonOnBackground>
      </Box>

      <Box component="section" py={4} textAlign="center">
        <Container maxWidth="sm">
          <h2>Story</h2>
          <p>
            Sadly, a major world war will soon end in a nuclear fight.
            Everything on earth will be completely destroyed. Luckily
            EnoughSpace Inc. was able to colonize the moon by building a major
            shell around it! Now, do you want to buy a ticket and live in peace?
          </p>
          <Box py={3}>
            <Button
              href="https://game.hellomoon.nl"
              variant="contained"
              color="primary"
            >
              Yes, let&apos;s play!
            </Button>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        py={4}
        textAlign="center"
        bgcolor="primary.main"
        color="primary.contrastText"
        boxShadow={1}
      >
        <h2>Features</h2>
        <Container>
          <Grid container spacing={3}>
            <Feature
              name="Social"
              description="Find new friends and work together!"
              icon={faUserFriends}
            />
            <Feature
              name="Economy"
              description="Earn money by working for other players and build your own
              business."
              icon={faMoneyBill}
            />
            <Feature
              name="Life"
              description="Eat, drink, sleep to stay alive."
              icon={faHeartbeat}
            />
          </Grid>
        </Container>
      </Box>

      <Box component="section" py={4} textAlign="center">
        <Container maxWidth="sm">
          <h2>Development</h2>
          <p>
            This game is currently under development and will be available to
            play as soon as possible. All code is open-source and open for Pull
            Requests. Please subscribe to our YouTube channel to keep updated!
          </p>
          <Box py={3}>
            <Button
              href="https://github.com/HelloMoonGame"
              variant="outlined"
              color="primary"
              target="_blank"
              rel="noreferrer"
            >
              View source at GitHub
            </Button>
            &nbsp;
            <Button
              href="https://www.youtube.com/channel/UCLmFLctb6jsUP-YIc3yhfCw"
              variant="outlined"
              color="secondary"
              target="_blank"
              rel="noreferrer"
            >
              Follow development at YouTube
            </Button>
          </Box>
        </Container>
      </Box>

      <Box
        component="footer"
        py={2}
        textAlign="center"
        bgcolor="primary.main"
        color="primary.contrastText"
        className={classes.footer}
      >
        &copy; 2020 Hello Moon
      </Box>
    </>
  )
}

export default Home
