import React, { useState } from 'react';
import TipAmount from './TipAmount';
import TotalAmount from './TotalAmount';
import PerPersonAmount from './PerPersonAmount';
import SplitBill from './SplitBill';

interface TipCalculatorProps {
  initialBillAmount?: number;
}

const TipCalculator: React.FC<TipCalculatorProps> = ({
  initialBillAmount = 0,
}) => {
  const [billAmount, setBillAmount] = useState(initialBillAmount);
  const [tipPercentage, setTipPercentage] = useState(20);
  const [numPeople, setNumPeople] = useState(1);
  const [splitType, setSplitType] = useState('even');

  const handleBillAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBillAmount(parseFloat(event.target.value));
  };

  const handleTipPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipPercentage(parseInt(event.target.value));
  };

  const handleNumPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumPeople(parseInt(event.target.value));
  };

  const handleSplitTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSplitType(event.target.value);
  };

  const calculateTip = (): number => {
    return billAmount * (tipPercentage / 100);
  };

  const calculateTotal = (): number => {
    return billAmount + calculateTip();
  };

  const calculatePerPerson = (): number => {
    if (splitType === 'even') {
      return calculateTotal() / numPeople;
    } else if (splitType === 'uneven') {
      return calculateTotal();
    }
    return 0;
  };

  const splitBill = (): Array<number> => {
    if (splitType === 'even') {
      const amountPerPerson = calculatePerPerson();
      return Array(numPeople).fill(amountPerPerson);
    } else if (splitType === 'uneven') {
      return [];
    }
    return [];
  };

  return (
    <div>
      <label>
        Bill amount:
        <input type="number" value={billAmount} onChange={handleBillAmountChange} />
      </label>
      <br />
      <label>
        Tip percentage:
        <input type="number" value={tipPercentage} onChange={handleTipPercentageChange} />
      </label>
      <br />
      <label>
        Number of people:
        <input type="number" value={numPeople} onChange={handleNumPeopleChange} />
      </label>
      <br />
      <SplitBill splitType={splitType} handleSplitTypeChange={handleSplitTypeChange} />
      <TipAmount tipAmount={calculateTip()} />
      <TotalAmount totalAmount={calculateTotal()} />
      <PerPersonAmount perPersonAmount={calculatePerPerson()} />
      {splitType === 'even' && (
        <div>
          <h2>Amount per person:</h2>
          <ul>
            {splitBill().map((amount, index) => (
              <li key={index}>Person {index + 1}: ${amount.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TipCalculator;
