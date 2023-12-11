import React, { useContext } from 'react';
import './MongoREST.css';
import { useState } from 'react';
import StatsFetcher from './fetchStats.tsx';
import { StatsContext } from './fetchStats.tsx';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExampleDoughnut = () => {
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 1000],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };
  return (
    <>
      <Doughnut data={data} />
    </>
  );
};
const OtherExampleDoughnut = () => {
  const data = {
    datasets: [{
      data: [{ id: 'Sales', nested: { value: 1500 } }, { id: 'Purchases', nested: { value: 500 } }]
    }]
  };
  const options = {
    parsing: {
      key: 'nested.value'
    }
  };
  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
};
function TheStatsDisplay() {
  const ctx = useContext(StatsContext);
  console.log(ctx)
  return (
    <>
      <textarea value={ctx?.collection}></textarea>
    </>
  )
}
const MongoDou = () => {
  return (
    <>
      <StatsFetcher>
        <TheStatsDisplay />
      </StatsFetcher>

    </>
  )
};



export { MongoDou };