import React, { useEffect, useState } from "react";

 const Counter = ({ target, suffix = "+" }) => {
  const [count, setCount] = useState(0);

  // format numbers into k, M etc.
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return Math.floor(num / 1000) + "k";
    return num;
  };

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end) return;

    let totalDuration = 2000; // 2 sec
    let incrementTime = Math.max(20, Math.floor(totalDuration / end)); // safe step

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <h2 className="text-4xl font-bold  text-white">
      {formatNumber(count)}
      {suffix}
    </h2>
  );
};
export default Counter;