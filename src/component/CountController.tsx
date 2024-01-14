import {useCount} from "../hooks/customHooks.ts";


const CountController = () => {
    const {addCount, extractCount, count} = useCount();
    return(
        <div>
            <h3>{count}</h3>
            <button onClick={addCount}>1씩 증가</button>
            <button onClick={extractCount}>1씩 감소</button>
        </div>
    )
}

export default CountController
