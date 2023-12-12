// App.js

import React from 'react';
import EMIGraph from './EMIGraph';

const Graph = (props) => {
  const principalAmount = props.p;
  const annualInterestRate = props.r;
  const loanTermInYears = props.t;

  const months = Array.from({ length: loanTermInYears * 12 }, (_, index) => index + 1);

  // Calculate EMI for each month
  const emiData = months.map((month) => {
    const monthlyInterestRate = (annualInterestRate / 12) / 100;
    const numberOfPayments = loanTermInYears * 12;
    const emi = (principalAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
    const outstandingBalance = principalAmount * (Math.pow(1 + monthlyInterestRate, numberOfPayments) - Math.pow(1 + monthlyInterestRate, month - 1)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return outstandingBalance;
  });

  return (
    <div>
      <h1>EMI Payment Overview</h1>
      <EMIGraph labels={months} outstandingBalance={emiData} />
    </div>
  );
};

export default Graph;
