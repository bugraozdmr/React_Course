import {useContext} from 'react';
import { NumberContext } from './App';

function Calculate(){
    const numbercontext = useContext(NumberContext)

    return (
        <>
            <div>Sayı : {numbercontext.count}</div>
                <button onClick={() => numbercontext.dispatch('increment')}>Arttır</button>
                <button onClick={() => numbercontext.dispatch('decrement')}>Azalt</button>
                <button onClick={() => numbercontext.dispatch('reset')}>Sıfırla</button>
        </>
    )
}


export default Calculate;