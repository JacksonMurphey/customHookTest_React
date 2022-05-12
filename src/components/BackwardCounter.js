import { useState, useEffect } from 'react';
import useCounter from '../hooks/use-counter';

import Card from './Card';

const BackwardCounter = () => {
  const counter = useCounter(false) //Here we are passing an argument of false to our hook. This lets our custom hook know that that for our variable 'up', that it should be false. Since its false, our logic tells the function to run the decrementing portion of the function, and to countDown.

  //Again, like we did in FowardCounter, now that we have called our custom hook, we can omit the rest of the code, as our hook will now do all the work.


  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
