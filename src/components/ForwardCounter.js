// import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const ForwardCounter = () => {
  //since useCounter is returning the counter value, we can setup our 'counter' constant like so:
  const counter = useCounter()
  //Now, we can omit the code below, since that logic is all setup inside our custom-hook.

  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
