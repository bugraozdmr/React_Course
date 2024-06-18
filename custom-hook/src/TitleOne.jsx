import React,{useState,useEffect} from 'react'
import UseTitle from './UseTitle';

export default function TitleOne() {
    const [num, setNum] = useState(0);

    /*useEffect(() => {
        document.title = `Sayı - ${num}`
    },[num]);*/

    // Hooks'a atandı işlemler
    UseTitle(num);

    return (
      <div>
        <button
          onClick={() => {
            setNum(num + 1);
          }}
        >
          Sayı - {num}
        </button>
      </div>
    );
}
