import React from 'react';

interface TipAmountProps {
  tipAmount: number;
}

const TipAmount: React.FC<TipAmountProps> = ({ tipAmount }) => {
  return (
    <div>
      <h2>Tip amount:</h2>
      <p>${tipAmount.toFixed(2)}</p>
    </div>
  );
};

export default TipAmount;
