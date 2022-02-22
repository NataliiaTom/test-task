import React, { useState } from 'react';

export function Conversion(props) {
  const [state, setState] = useState({
    leftRate: 1,
    leftValue: 0,
    rightRate: 1,
    rightValue: 0,
  });

  const handleLeftCurrencyChange = (event) => {
    console.log('handleLeftCurrencyChange:', event.target.value);
    setState({
      ...state,
      leftRate: event.target.value,
      rightValue: (state.leftValue / event.target.value) * state.rightRate,
    });
  };

  const handleLeftAmountChange = (event) => {
    console.log(
      'handleLeftAmountChange:',
      (event.target.value / state.leftRate) * state.rightRate,
    );

    setState({
      ...state,
      leftValue: event.target.value,
      rightValue: (event.target.value / state.leftRate) * state.rightRate,
    });
  };

  const handleRightCurrencyChange = (event) => {
    console.log('handleRightCurrencyChange:', event.target.value);
    setState({
      ...state,
      rightRate: event.target.value,
      leftValue: (state.rightValue / event.target.value) * state.leftRate,
    });
  };

  const handleRightAmountChange = (event) => {
    console.log('handleRightAmountChange:', event.target.value);
    setState({
      ...state,
      rightValue: event.target.value,
      leftValue: (event.target.value / state.rightRate) * state.leftRate,
    });
  };

  return (
    <div>
      <form>
        <label>
          PICK YOUR CURRENCY:
          <select onChange={handleLeftCurrencyChange}>
            <option value={props.data.UAH}>UAH</option>
            <option value={props.data.USD}>USD</option>
            <option value={props.data.EUR}>EUR</option>
          </select>
        </label>
        <input
          type="text"
          value={state.leftValue}
          onChange={handleLeftAmountChange}
        />

        <label>
          PICK YOUR CURRENCY:
          <select onChange={handleRightCurrencyChange}>
            <option value={props.data.UAH}>UAH</option>
            <option value={props.data.USD}>USD</option>
            <option value={props.data.EUR}>EUR</option>
          </select>
        </label>
        <input
          type="text"
          value={state.rightValue}
          onChange={handleRightAmountChange}
        />
      </form>
    </div>
  );
}
