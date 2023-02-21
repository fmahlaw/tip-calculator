import React from 'react';

interface SplitBillProps {
  splitType: string;
  handleSplitTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SplitBill: React.FC<SplitBillProps> = ({ splitType, handleSplitTypeChange }) => {
  return (
    <div>
      <label>
        Split bill:
        <input
          type="radio"
          value="even"
          checked={splitType === 'even'}
          onChange={handleSplitTypeChange}
        />
        Evenly
        <input
          type="radio"
          value="uneven"
          checked={splitType === 'uneven'}
          onChange={handleSplitTypeChange}
        />
        Unevenly
      </label>
    </div>
  );
};

export default SplitBill;
