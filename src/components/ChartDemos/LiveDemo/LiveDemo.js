import React from 'react';
import { Link } from 'react-router-dom';
import VerticalDivider from './../VerticalDivider';
import { Doughnut } from 'react-chartjs-2';

//import a chart to use from `react-chartjs-2`

const LiveDemo = () => {
  //data needs `labels` and `datasets` properties
  const data = {
    labels: ['Students', 'Mentors'],
    datasets: [
      {
        backgroundColor: ['#f00', '#00f'],
        borderColor: '#000',
        borderWidth: 3,
        hoverBackgroundColor: ['rgba(255,99,132,0.4)', 'rgba(0,0,233,0.4)'],
        data: [26, 2]
      },
      {
        backgroundColor: ['#f00', '#00f'],
        borderColor: '#000',
        borderWidth: 3,
        hoverBackgroundColor: ['rgba(255,99,132,0.4)', 'rgba(0,0,233,0.4)'],
        data: [26, 1]
      }
    ]
  };

  return (
    <main className="demo_wrapper">
      {NavLive()}

      <VerticalDivider />

      <Doughnut data={data} />

      <VerticalDivider />
    </main>
  );
};

export default LiveDemo;

const NavLive = () => {
  return (
    <header className="demo_header">
      <h1>react-chartjs-2</h1>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/async">Async</Link>
      {' | '}
      Static
      <p>I need a chart!!</p>
    </header>
  );
};
