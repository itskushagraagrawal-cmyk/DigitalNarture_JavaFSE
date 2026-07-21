import React, { useState } from 'react';
import './App.css';


// HOL 2
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';

// HOL 3
import { CalculateScore } from './Components/CalculateScore';

// HOL 4
import Posts from './Components/Posts';

// HOL 5
import CohortDetails from './Components/CohortDetails';

// HOL 9
import { OddPlayers } from './Components/OddPlayers';
import { EvenPlayers } from './Components/EvenPlayers';
import { ListofPlayers, Scorebelow70 } from './Components/ListofPlayers';
import { ListofIndianPlayers } from './Components/ListofIndianPlayers';

// HOL 10
import OfficeSpace from './Components/OfficeSpace';

// HOL 11
import Counter from './Components/Counter';
import CurrencyConvertor from './Components/CurrencyConvertor';

// HOL 12
import TicketBookingApp from './Components/TicketBookingApp';

// HOL 13
import BloggerApp, { books, courses, blogs } from './Components/BloggerApp';

function App() {
  const [currentHol, setCurrentHol] = useState(13);

  const indianPlayers = ["Sachin", "Dhoni", "Virat", "Rohit", "Yuvraj", "Raina"];

  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Michael', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Ann', score: 61 },
    { name: 'Elisabeth', score: 61 },
    { name: 'Sachin', score: 95 },
    { name: 'Dhoni', score: 60 },
    { name: 'Virat', score: 84 },
    { name: 'Jadeja', score: 64 },
    { name: 'Raina', score: 75 },
    { name: 'Rohit', score: 80 }
  ];

  const renderHol = () => {
    switch (currentHol) {
      case 1:
        return (
          <div style={{ margin: '20px' }}>
            <h2>HOL 1: Getting Started</h2>
            <h1>Welcome the first session of React</h1>
          </div>
        );
      case 2:
        return (
          <div style={{ margin: '20px' }} className="container">
            <h2>HOL 2: Creating Components</h2>
            <Home />
            <About />
            <Contact />
          </div>
        );
      case 3:
        return (
          <div style={{ margin: '20px' }}>
            <h2>HOL 3: Components and Props</h2>
            <CalculateScore Name="John" School="ABC School" total={284} goal={300} />
          </div>
        );
      case 4:
        return (
          <div style={{ margin: '20px' }}>
            <h2>HOL 4: State and Fetch API</h2>
            <Posts />
          </div>
        );
      case 5:
        return (
          <div style={{ margin: '20px' }}>
            <h2>HOL 5: Styling Components</h2>
            <CohortDetails code="CHN-21-CH101" startedOn="15-Jan-2021" currentStatus="Ongoing" coach="John Doe" trainer="Jane Smith" />
          </div>
        );
      case 9:
        return (
          <div style={{ margin: '20px' }}>
            <h2>HOL 9: Array Manipulation</h2>
            <OddPlayers players={indianPlayers} />
            <hr />
            <EvenPlayers players={indianPlayers} />
            <hr />
            <ListofPlayers players={players} />
            <hr />
            <Scorebelow70 players={players} />
            <hr />
            <ListofIndianPlayers IndianPlayers={indianPlayers} />
          </div>
        );
      case 10:
        return (
          <div style={{ margin: '20px' }}>
            <h2>HOL 10: JSX and Styling</h2>
            <OfficeSpace />
          </div>
        );
      case 11:
        return (
          <div style={{ margin: '20px' }}>
            <h2>HOL 11: Events</h2>
            <Counter />
            <hr />
            <CurrencyConvertor />
          </div>
        );
      case 12:
        return (
          <div style={{ margin: '20px' }}>
            <h2>HOL 12: Conditional Rendering</h2>
            <TicketBookingApp />
          </div>
        );
      case 13:
        return (
          <div style={{ margin: '20px' }}>
            <h2>HOL 13: Keys and Lists</h2>
            <BloggerApp books={books} courses={courses} blogs={blogs} />
          </div>
        );
      default:
        return <div>Select a HOL from the menu above.</div>;
    }
  };

  return (
    <div>
      <div style={{ padding: '10px', backgroundColor: '#eee', display: 'flex', gap: '10px' }}>
        <button onClick={() => setCurrentHol(1)} style={{ fontWeight: currentHol === 1 ? 'bold' : 'normal' }}>HOL 1</button>
        <button onClick={() => setCurrentHol(2)} style={{ fontWeight: currentHol === 2 ? 'bold' : 'normal' }}>HOL 2</button>
        <button onClick={() => setCurrentHol(3)} style={{ fontWeight: currentHol === 3 ? 'bold' : 'normal' }}>HOL 3</button>
        <button onClick={() => setCurrentHol(4)} style={{ fontWeight: currentHol === 4 ? 'bold' : 'normal' }}>HOL 4</button>
        <button onClick={() => setCurrentHol(5)} style={{ fontWeight: currentHol === 5 ? 'bold' : 'normal' }}>HOL 5</button>
        <button onClick={() => setCurrentHol(9)} style={{ fontWeight: currentHol === 9 ? 'bold' : 'normal' }}>HOL 9</button>
        <button onClick={() => setCurrentHol(10)} style={{ fontWeight: currentHol === 10 ? 'bold' : 'normal' }}>HOL 10</button>
        <button onClick={() => setCurrentHol(11)} style={{ fontWeight: currentHol === 11 ? 'bold' : 'normal' }}>HOL 11</button>
        <button onClick={() => setCurrentHol(12)} style={{ fontWeight: currentHol === 12 ? 'bold' : 'normal' }}>HOL 12</button>
        <button onClick={() => setCurrentHol(13)} style={{ fontWeight: currentHol === 13 ? 'bold' : 'normal' }}>HOL 13</button>
      </div>
      {renderHol()}
    </div>
  );
}

export default App;
