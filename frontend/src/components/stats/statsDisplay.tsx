import React, { useContext, useState } from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

import StatsFetcher from '../fetchStats.tsx';
import { StatsContext } from '../fetchStats.tsx';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const copy_pasta = [
  {
    "count": 3,
    "type": "ObjectId",
    "name": "_id",
    "probability": 1,
    "types": {
      "ObjectId": [
        "6576540df505f562c94d72bf",
        "6576540df505f562c94d72c0",
        "6576540df505f562c94d72c1"
      ]
    }
  },
  {
    "count": 3,
    "type": "Document",
    "name": "address",
    "probability": 1,
    "types": {}
  },
  {
    "count": 3,
    "type": "Document",
    "name": "card",
    "probability": 1,
    "types": {}
  },
  {
    "count": 3,
    "type": "String",
    "name": "email",
    "probability": 1,
    "types": {
      "String": [
        "mramet5@slashdot.org",
        "hlethby9@printfriendly.com",
        "bdayb@diigo.com"
      ]
    }
  },
  {
    "count": 3,
    "type": "String",
    "name": "first_name",
    "probability": 1,
    "types": {
      "String": [
        "Brigg",
        "Chane",
        "Lonnie"
      ]
    }
  },
  {
    "count": 3,
    "type": "String",
    "name": "gender",
    "probability": 1,
    "types": {
      "String": [
        "Female",
        "Male",
        "Female"
      ]
    }
  },
  {
    "count": 3,
    "type": "String",
    "name": "last_name",
    "probability": 1,
    "types": {
      "String": [
        "Grabbam",
        "Waller",
        "Dayton"
      ]
    }
  },
  {
    "count": 3,
    "type": "Boolean",
    "name": "married_status",
    "probability": 1,
    "types": {
      "Boolean": [
        true,
        true,
        false
      ]
    }
  }
]
// const faaaaaaa = temp0[0].types.Boolean.filter(bool => bool === false).length
// const trueeee = temp0[0].types.Boolean.filter(bool => bool === true).length

function StatsDoughnut() {
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
}
function NumberStatsDisplay() {
  const numbers = [12, 12, 12, 12, 4, 4, 4, 3, 23, 44, 0, 4];
  const name = 'score';

  const labels = numbers.map((number, index) => (index));

  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: numbers,
        backgroundColor: '#2A5639',
      },
    ],
  };
  return <Bar data={data} />;
}
function BoolStatsDisplay() {
  const ctx = useContext(StatsContext);
  if (!ctx) {
    return (<><p>noooooo</p></>);
  } else {
    const boolean_stats = ctx.stats.filter(obj => obj.type === "Boolean");
    console.log("bool: ", boolean_stats);
    try {
      const values = boolean_stats[0].types["Boolean"];
      const truthy = values.filter(value => value === true);
      const falsy = values.filter(value => value === false);
      const data = {
        labels: [
          'true',
          'false'
        ],
        datasets: [{
          data: [truthy.length, falsy.length],
          backgroundColor: [
            '#B2DF8A',
            '#2A5639',
          ],
          hoverOffset: 4
        }]
      };
      return (<Doughnut data={data} />);
    }

    catch {
      return (<><p>noooooo000000000000000000000000</p></>);
    }
  }
}

function TheStatsDisplay() {
  const ctx = useContext(StatsContext);
  console.log("all", ctx);
  console.log("all strings", ctx?.stats.filter(s => s.type === "String"));
  console.log("all boolean", ctx?.stats.filter(s => s.type === "Boolean")); 

  return (
    <>
      <div className='flex'>
        <div className='w-1/4'>
          <BoolStatsDisplay />
        </div>
        <div className='w-1/2'>
          <NumberStatsDisplay />
        </div>
      </div>
    </>
  );
}

export { TheStatsDisplay };
