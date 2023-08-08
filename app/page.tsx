"use client";
import styles from '@/public/styles/page.module.scss'
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {decrement, decrementByAmount, increment, incrementByAmount, reset} from "@/redux/features/basketSlice";

export default function Home() {
  const count = useAppSelector((state) => state.basketReducer.value);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.main}>
      <div>
        <h4 >{count}</h4>
        <button onClick={() => dispatch(incrementByAmount(2))}>increment2</button>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrementByAmount(2))}>decrement2</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
    </div>
  )
}
