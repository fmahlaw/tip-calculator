import React from 'react';

interface TotalAmountProps {
  totalAmount: number;
}

const TotalAmount: React.FC<TotalAmountProps> = ({ totalAmount }) => {
  return (
    <div>
      <h2>Total amount:</h2>
      <p>${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default TotalAmount;
