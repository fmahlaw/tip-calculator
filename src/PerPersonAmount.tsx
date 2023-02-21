import React from 'react';

interface PerPersonAmountProps {
  perPersonAmount: number;
}

const PerPersonAmount: React.FC<PerPersonAmountProps> = ({ perPersonAmount }) => {
  return (
    <div>
      <h2>Amount per person:</h2>
      <p>${perPersonAmount.toFixed(2)}</p>
    </div>
  );
};

export default PerPersonAmount;
