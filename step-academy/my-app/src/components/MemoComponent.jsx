import React, {useState} from 'react';
import {useMemo} from "react";
import {click} from "@testing-library/user-event/dist/click";

const MemoComponent = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [d, setD] = useState(0);
    const [e, setE] = useState(0);
    const [sum, setSum] = useState(0);
    const sum_f = (a, b) => {
        console.log("sum");
        return a + b;
    }
    const even = (n) => {
        console.log("even");
        if (n % 2) return "нечетный";
        return "четный";
    }
    const res = useMemo(() => sum_f(d,e), [d,e]);
    const ev = useMemo(() => even(res), [res]);

    const click = () => {
        setD(a);
        setE(b);
    }
    return (
        <div>
            <input type="number" value={a} onChange={(e) => setA(parseInt(e.target.value))}/>
            <input type="number" value={b} onChange={(e) => setB(parseInt(e.target.value))}/>
            <button onClick={click}>Check Sum</button>
            <h3>{res}</h3>
            <h3>{ev}</h3>
        </div>
    );
};

export default MemoComponent;