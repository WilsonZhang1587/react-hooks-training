import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";
import { useCountRenders } from "./useCountRenders";

// export const Hello = () => {
//   const [count, setCount] = useState(() => {
//     let localStorageData = JSON.parse(localStorage.getItem("count"));
//     return !localStorageData ? 0 : localStorageData;
//   });
//   const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
//   useEffect(() => {
//     localStorage.setItem("count", JSON.stringify(count));
//   }, [count]);

//   const [rect, divRef] = useMeasure([data]);

//   return (
//     <div>
//       <div style={{ display: "flex" }}>
//         <div ref={divRef}>{!data ? "loading..." : data}</div>
//       </div>
//       <pre>{JSON.stringify(rect, null, 2)}</pre>
//       <div>count: {count}</div>
//       <button onClick={() => setCount(count => count + 1)}>increment</button>
//     </div>
//   );
// };

export const Hello = React.memo(({ increment }) => {
  useCountRenders();

  return <button onClick={() => increment(5)}>hello</button>;
});
