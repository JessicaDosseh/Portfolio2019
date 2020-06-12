import React from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import RouterStoreContext from './RouterStore';
import LandingPage from '../src/components/LandingPage/LandingPage';
import ArchivePage from '../src/components/ArchivePage/ArchivePage';
import ContactPage from '../src/components/ContactPage/ContactForm';
import AboutPage from '../src/components/AboutPage/AboutPage';
import FeaturedWork from '../src/components/FeaturedWork/FeaturedWork';

const Router = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  if (routerStore.screen === 'ArchivePage') {
    return <ArchivePage />;
  } else if (routerStore.screen === 'ContactPage') {
    return <ContactPage />;
  } else if (routerStore.screen === 'AboutPage') {
    return <AboutPage />;
  } else if (routerStore.screen === 'FeaturedWork') {
    return <FeaturedWork />;
  } else {
    return <LandingPage />;
  }
});

export default Router;
