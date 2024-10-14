// app/components/Counter.js
'use client';

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, selectCount } from '../features/counterSlice';


const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (
        <div className="mt-28 flex flex-col items-center justify-center">
            <h1 className="text-3xl mb-4">Redux Counter</h1>
            <div className="flex items-center space-x-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <span className="text-2xl">{count}</span>
                <button
                    className="px-4 py-2 bg-blue-500 text-white"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </div>
            <div className="mt-4">
                <button
                    className="px-4 py-2 bg-green-500 text-white"
                    onClick={() => dispatch(incrementByAmount(5))}
                >
                    Increment by 5
                </button>
            </div>
        </div>
    );
};

export default Counter;
