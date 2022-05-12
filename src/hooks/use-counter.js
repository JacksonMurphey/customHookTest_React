import { useState, useEffect } from 'react'

//Updating our custom hook to be more re-usable/flexible, we can setup a default initial value for it. This can be called whatever you'd like it to be. 
//we could call it 'forwards' = true, 
//in this case, I called it 'up' then set the default value to true.
const useCounter = (up = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (up) {//Once we have declared a parameter for our function, we can now setup a conditional to check for this.
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1);
            }

        }, 1000);

        return () => clearInterval(interval);

        //Since 'up' is defined outside of our useEffect, we need to pass this in as a dependency
    }, [up]);

    //To make the counter state available to components that will use this custom hook, we can simply have this function return 'counter'
    //Note: you can return whatever you would like to in your custom hooks. That could be an array, object, number, string. 
    return counter;
}
export default useCounter
