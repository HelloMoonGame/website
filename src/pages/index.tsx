import Head from 'next/head'

import Feature from '../components/feature'

import 'bootstrap/scss/bootstrap.scss'
import '../styles/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserFriends,
  faMoneyBill,
  faHeartbeat,
} from '@fortawesome/free-solid-svg-icons'

library.add(faUserFriends, faMoneyBill, faHeartbeat)

export const Home = (): JSX.Element => (
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
    </Head>

    <header>
      <div className="container py-5">
        <h1 className="text-center">
          <img src="/hellomoon.svg" width="200" height="204" alt="Hello Moon" />
        </h1>
      </div>
    </header>

    <section className="bg-img-moon text-center">
      <div className="container py-5 text-light">
        <h2 className="py-5 mt-5">Online Life Simulation Game</h2>
        <button className="btn btn-outline-light my-5">Sign up soon!</button>
      </div>
    </section>

    <section>
      <div className="container py-5">
        <h2 className="text-center pb-3">Story</h2>
        <p>
          Sadly, a major world war will soon end in a nuclear fight. Everything
          on earth will be completely destroyed. Luckily EnoughSpace Inc. was
          able to colonize the moon by building a major shell around it! Now, do
          you want to buy a ticket and live in peace?
        </p>
      </div>
    </section>

    <section className="bg-light">
      <div className="container pt-5">
        <h2 className="text-center pb-3">Features</h2>
        <div className="row">
          <Feature
            name="Social"
            icon="user-friends"
            description="Find new friends and work together!"
          />
          <Feature
            name="Economy"
            icon="money-bill"
            description="Earn money by working for other players and build your own business."
          />
          <Feature
            name="Life"
            icon="heartbeat"
            description="Eat, drink, sleep to stay alive."
          />
        </div>
      </div>
    </section>

    <section>
      <div className="container text-center py-5">
        <h2 className="pb-3">Development</h2>
        <p className="pb-3">
          This game is currently under development and will be available to play
          as soon as possible. All code is open-source and open for Pull
          Requests. Please subscribe to our YouTube channel to keep updated!
        </p>
        <a
          href="https://github.com/HelloMoonGame"
          className="btn btn-outline-dark"
          target="_blank"
          rel="noreferrer"
        >
          View source at GitHub
        </a>
        <a
          href="https://www.youtube.com/channel/UCLmFLctb6jsUP-YIc3yhfCw"
          className="btn btn-outline-danger ml-1"
          target="_blank"
          rel="noreferrer"
        >
          Follow development at YouTube
        </a>
      </div>
    </section>

    <footer className="bg-dark text-white">
      <div className="container py-3 text-center">&copy; 2020 Hello Moon</div>
    </footer>
  </>
)

export default Home
