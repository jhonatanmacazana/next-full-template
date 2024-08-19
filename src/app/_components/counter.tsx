"use client";

import { decrement, increment, selectCount } from "@/redux/features/counter/counter-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export const Counter = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="flex flex-row items-center gap-2">
        <button
          className="btn btn-primary"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          type="button"
        >
          -
        </button>
        <span className="label">{count}</span>
        <button
          className="btn btn-primary"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          type="button"
        >
          +
        </button>
      </div>
    </div>
  );
};
