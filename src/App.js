

import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

const chessSets = [
  {
    id: 1,
    title: 'chess sets',
    link: 'https://chess-set-sales-page.vercel.app/',
    description: 'a few different chess sets you can get',
  },
  {
    id: 2,
    title: 'masks',
    link: 'https://mask-s-sales-page.vercel.app/',
    description: 'here is a few masks you can order if you like them',
  },
  {
    id: 3,
    title: 'skulls',
    link: 'https://skull-sales-page.vercel.app/',
    description: 'here you can find skulls ready for production',
  },

  {
    id: 4,
    title: 'random section',
    link: 'https://random-items.vercel.app/',
    description: 'more comming soon',
  },
  {
    id: 5,
    title: 'more comming soon',
    link: '',
    description: 'more comming soon',
  },
  {
    id: 6,
    title: 'more comming soon',
    link: '',
    description: 'more comming soon',
  },
];

function ChessSet({ title, link, description }) {
  return (
    <div className="chess-set">
      <h2>{title}</h2>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            View {title}
          </button>
        </a>
      ) : (
        <p>No link available</p>
      )}
      <p>{description}</p>
    </div>
  );
}

function App() {
  const aboutMeUrl = "https://eric-canada.vercel.app/";

  return (
    <div className="app">
      {chessSets.map((set) => (
        <ChessSet key={set.id} {...set} />
      ))}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a href={aboutMeUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <button style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            meet the creator 
          </button>
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
