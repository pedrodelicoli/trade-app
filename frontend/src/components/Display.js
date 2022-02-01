import React, { useContext } from 'react';
import io from 'socket.io-client';
import Button from './Button';
import Context from '../Context/Context';
import useFetchUpdate from '../Hooks/usefetchUpdate';
import { Input } from '.';

const Display = () => {
  const {
    gpbToUsd,
    setUser,
    user,
    setGpbToUsd,
    setUpdate,
    update,
    setAmount,
    amount,
    usdToGpb,
    setUsdToGpb,
  } = useContext(Context);
  const socket = io('http://localhost:3001', { transports: ['websocket'] });
  socket.on('data', async (data) => {
    setGpbToUsd(parseFloat(data.p));
    setUsdToGpb(1 / (parseFloat(data.p)).toFixed(4));
    socket.emit('connected');
  });
  useFetchUpdate();
  const handleGpbToUsd = () => {
    update === false ? setUpdate(true) : setUpdate(false);
    const userUpdate = {
      ...user,
      trades: [user.trades],
    };
    const trade = {
      currencie: 'USD',
      tradePrice: gpbToUsd,
      amount: `£${amount.GBP}`,
      totalTrade: `$${(gpbToUsd * amount.GBP).toFixed(2)}`,
    };
    setUser({
      ...userUpdate,
      trades: [
        ...user.trades,
        trade,
      ],
    });
  };

  const handleUsdToGbp = () => {
    update === false ? setUpdate(true) : setUpdate(false);
    const userUpdate = {
      ...user,
      trades: [user.trades],
    };
    const trade = {
      currencie: 'GBP',
      tradePrice: usdToGpb,
      amount: `$${amount.USD}`,
      totalTrade: `£${(usdToGpb * amount.USD).toFixed(2)}`,
    };
    setUser({
      ...userUpdate,
      trades: [
        ...user.trades,
        trade,
      ],
    });
  };

  const handleChange = ({ target: { id, value } }) => {
    setAmount({
      ...amount,
      [id]: parseFloat(value),
    });
  };
  return (
    <div className="alldisplay">
      <div className="display">
        GBP to USD
        <span className="stock-price">{ `${(parseFloat(gpbToUsd)).toFixed(4)} USD` }</span>
        <Input
          inputType="number"
          labelText="Amount"
          id="GBP"
          handleChange={handleChange}
          placeholder="GBP"
          className="input"
          testId="inputGBP"
        />
        <Button
          id="USD"
          buttonName="Trade Now"
          handleClick={handleGpbToUsd}
          className="trade-btn"
          disabled={amount.GBP > 0 ? false : true}
          testId="tradeGBP"
        />
      </div>
      <div className="display">
        USD to GPB
        <span className="stock-price">{ `${(parseFloat(usdToGpb)).toFixed(4)} GPB` }</span>
        <Input
          inputType="number"
          labelText="Amount"
          id="USD"
          handleChange={handleChange}
          placeholder="USD"
          className="input"
          testId="inputUSD"
        />
        <Button
          id="GBP"
          buttonName="Trade Now"
          handleClick={handleUsdToGbp}
          className="trade-btn"
          disabled={amount.USD > 0 ? false : true}
          testId="tradeUSD"
        />
      </div>
    </div>
  );
};

export default Display;
