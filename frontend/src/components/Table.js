import React, { useContext } from 'react';
import { Button } from '.';
import Context from '../Context/Context';

const Table = () => {
  const {
    user, update, setUpdate, setUser,
  } = useContext(Context);
  const pastTrades = () => {
    const { trades } = user;
    if (trades !== undefined) {
      return trades.map((trade) => {
        return (
          <li key={Math.random() * 60} className='list'>{`Amount: ${trade.amount} 
             Price: ${parseFloat(trade.tradePrice).toFixed(4)} 
             Total: ${trade.totalTrade}`}</li>
        )
      });
    }
  };

  const handleClick = () => {
    update === false ? setUpdate(true) : setUpdate(false);
    setUser({
      ...user,
      trades: [],
    });
  };
  return (
    <div className="Table">
      <ul className="ul">
        <span className="textul">Trade Board</span>
        {pastTrades()}
      </ul>
      <Button
        buttonName="Delete"
        handleClick={handleClick}
        className="trade-btn"
        testId=''
      />
    </div>
  );
};

export default Table;
