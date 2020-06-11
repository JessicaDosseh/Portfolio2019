import React from 'react';
import { observable } from 'mobx';
import { createContext } from 'react';

let Router = 'LandingPage' | 'ArchivePage' | 'ContactPage';

class RouterStore {
  @observable screen = (Router = 'LandingPage'); // path
}

const RouterStoreContext = createContext(new RouterStore());

export default RouterStoreContext;
