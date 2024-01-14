import {useState} from "react";

export function useCount(){
    const [count, setCount] = useState<number>(0);

    // 숫자를 1씩 올리는 함수
    function addCount(){
        setCount(prev => prev + 1);
    }

    // 숫자를 1씩 내리는 함수
    function extractCount(){
        setCount(prev => prev -1);
    }

    return {count, addCount, extractCount}
}
