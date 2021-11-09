import Head from 'next/head';
import Home from '../components/organisms/Home'
import Projects from '../components/organisms/Projects';
import { ContainerPage } from '../components/templates';
import About from '../components/organisms/About';
import Footer from '../components/organisms/Footer';
import SectionPage from '../components/organisms/SectionPage';

import { about } from '../components/data';

export default function Index() {
  return (
    <ContainerPage>
      <Head>
        <title>Fernando</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/developer.png" />
        {/* Material Icons Link */}
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* Font Awesome Link */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossOrigin="anonymous"
        />
      </Head>
      <Home />
      <SectionPage />
      <About items={ about } />
      <Projects />
      <Footer />
    </ContainerPage>
  )
};
