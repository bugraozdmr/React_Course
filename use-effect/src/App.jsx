import { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [grant, setGrant] = useState(0)
  const [polat, setPolat] = useState(0)

  useEffect(()=>{
    console.log('component ilk kez render edildiğinde çalışır daha çalışmaz')
  },[]);

  useEffect(()=>{
    console.log('Her zaman çalışır')
  });


  useEffect(()=>{
    console.log('Her zamana çalışır + grant değerinde bir değişiklik olduğunda')
  },[grant]);


  useEffect(()=>{
    console.log('Her zamana çalışır + polat değerinde bir değişiklik olduğunda')
  },[polat]);

  useEffect(()=>{
    console.log('Her zamana çalışır + polat veya grant değerinde bir değişiklik olduğunda')
  },[polat,grant]);


  return (
    <>
      <div className='firstDiv'>
        <button
          onClick={() => {
            setGrant(grant+1);
          }}
        >
          Grant ++
        </button>
        <span>Grant : {grant}</span>
      </div>

      <div>
        <button
          onClick={() => {
            setPolat(polat+1);
          }}
        >
          polat ++
        </button>
        <span>Polat : {polat}</span>
      </div>
    </>
  );
}

export default App
