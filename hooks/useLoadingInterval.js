import { useRef, useState, useEffect } from "react";

const useLoadingInterval = (intervalTime) => {
  const [reactiveTimeTaken, setReactiveTimeTaken] = useState(2);
  const timeTaken = useRef(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    timeTaken.current = reactiveTimeTaken;
  }, [reactiveTimeTaken]);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setReactiveTimeTaken((prevSeconds) => prevSeconds + 1);
      }, intervalTime);
    }

    return () => clearInterval(interval);
  }, [isActive, intervalTime]);

  const startLoadingInterval = () => {
    setReactiveTimeTaken(0);
    setIsActive(true);
  };

  const stopLoadingInterval = () => {
    setReactiveTimeTaken(0);
    setIsActive(false);
  };

  return {
    reactiveTimeTaken,
    timeTaken,
    startLoadingInterval,
    stopLoadingInterval,
  };
};

export default useLoadingInterval;
