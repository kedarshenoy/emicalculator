// EMIGraph.js

import React from 'react';
import { Line } from 'react-chartjs-2';

const EMIGraph = ({ labels, outstandingBalance }) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Outstanding Balance',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        fill: false,
        data: outstandingBalance,
      },
    ],
  };

  const options = {
    scales: {
      x: { 
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: { 
        title: {
          display: true,
          text: 'Outstanding Balance',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default EMIGraph;
