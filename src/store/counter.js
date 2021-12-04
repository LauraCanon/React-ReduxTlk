import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selectCount, increase, reset } from './counter-slice';
import { addAsyncAmount } from './counterActions';

    export const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(selectCount);

   
    return (
        <div>
            <h1>{count}</h1>

            <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>Decrementar</button>
            <button onClick={() => dispatch(increment())}>Incrementar</button>
            <button onClick={()=> dispatch(increase(5))}>Incrementar +5</button>
            <div>
                {/*<button onClick={() => dispatch(toogle)}>Toggle</button>*/}
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(addAsyncAmount())}>addAsync</button>
            </div>
        </div>
    )
} 

export default Counter;
