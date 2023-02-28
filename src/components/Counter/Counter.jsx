import { useEffect } from "react";
import { useState } from "react";

const Counter = ({ description, defaultCount }) => {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);
  const [checkShow, setCheckShow] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      setCheckShow(true);
    }, 300);
    return () => {
      clearTimeout(delay);
    };
  }, []);
  return (
    <div>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <div> {!checkShow ? "showData" : null}</div>
      <label>
        Incrementor:
        <input
          value={incrementor}
          onChange={(evt) => {
            setIncrementor(parseInt(evt.target.value) || 1);
          }}
          type="number"
        />
      </label>
      <button
        aria-label="Subtract from Counter"
        onClick={() => setCount(count - incrementor)}
      >
        -
      </button>
      Current Count: {count}
      <button
        aria-label="+"
        onClick={() =>
          setTimeout(() => {
            setCount(count + incrementor);
          }, 200)
        }
      >
        +
      </button>
    </div>
  );
};
export default Counter;
