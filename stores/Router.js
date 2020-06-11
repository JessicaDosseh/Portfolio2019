import React from 'react';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import RouterStoreContext from './RouterStore';
import LandingPage from '../src/components/LandingPage/LandingPage';
import ArchivePage from '../src/components/ArchivePage/ArchivePage';
import ContactPage from '../src/components/ContactPage/ContactForm';

const Router = observer(() => {
  const routerStore = useContext(RouterStoreContext);
  // return routerStore.screen === 'LandingPage' ? (
  //   <LandingPage />
  // ) : (
  //   <ArchivePage />
  // );
  if (routerStore.screen === 'ArchivePage') {
    return <ArchivePage />;
  } else if (routerStore.screen === 'ContactPage') {
    return <ContactPage />;
  } else {
    return <LandingPage />;
  }
});

export default Router;
