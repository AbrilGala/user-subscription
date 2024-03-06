import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import List from './components/List'
import Form from './components/Form';
import { Sub } from './types';

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: 'abril',
    subMonths: 4,
    avatar: 'https://i.pravatar.cc/150?u=abril',
    description: 'Abril hace de moderadora a veces'
  }, 
  {
    nick: 'matteo',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=matteo'
  }
]


function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);

  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub : Sub): void => {
    setSubs(subs => [...subs,newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Youtube Subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
