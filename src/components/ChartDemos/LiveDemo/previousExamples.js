
//SIMPLE POLAR CHART EXAMPLE
import {Radar} from 'react-chartjs-2';



const LiveDemo = () => {
  const data = {
    labels: ['Sean', 'Chris J.', 'Chris L.', 'Jeremy R.', 'Mason G.'],
    datasets: [
      {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [29, 40, 28, 90, 24]
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      pointBackgroundColor: 'rgba(255,99,132,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,99,132,1)',
      data: [19, 30, 18, 80, 14]
    }
    ]
  };

  return (
    <main className="demo_wrapper">
      {NavLive()}

      <VerticalDivider />

      <h3>Look what we can do!:</h3>
      <Radar data={data} />

      <VerticalDivider />

    </main>
  )
}





//SIMPLE BAR CHART EXAMPLE
import {Bar} from 'react-chartjs-2';



const LiveDemo = () => {
  const data = {
    labels: ['Elephant', 'Chicken', 'Lion', 'Puppy', 'Butterfly'],
    datasets: [
      {
      label: 'My First dataset',
      backgroundColor: 'rgba(179,181,198,0.2)',
      borderColor: 'rgba(179,181,198,1)',
      pointBackgroundColor: 'rgba(179,181,198,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(179,181,198,1)',
      data: [900, 40, 200, 90, 24]
    }
    ]
  };

  return (
    <main className="demo_wrapper">
      {NavLive()}

      <VerticalDivider />

      <h3>Look what we can do!:</h3>
      <Bar data={data} />

      <VerticalDivider />

    </main>
  )
}
