import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
// import Save from './Save';
// import { useLoader } from './Load';
import { useCookies } from 'react-cookie';

function useLoader() {
  const [myCookies] = useCookies(['cookie-number']);

  return myCookies['cookie-number'];
}

function useSaver(myNumber: number) {
  const [cookies, setCookies] = useCookies(['cookie-number']);

  useEffect(() => {
    if (myNumber!==0) {
      setCookies('cookie-number',myNumber, { path: '/' })
    }
  }, [myNumber])
}


export default function App() {
  const initialValue = Number(useLoader());
  console.log(initialValue);
  console.log(typeof(initialValue));
  let [myNumber, setMyNumber] = useState(initialValue ?? 0);

  useSaver(myNumber);

  return (
    <div>
      <p>{myNumber}</p>
      <button onClick={() => setMyNumber(myNumber+1)}>Click</button>
    </div>
  )

}

// function App() {
//   console.log(Load().props.children.props.children);
//   let [myNumber, setMyNumber] = useState(Number(Load().props.children.props.children));

//   useEffect(() => {
//     // console.log(Load);
//   },[])
//   // <Save myNumber={myNumber.toString()} />
//   return (
//     <div>
//       <p>{myNumber}</p>
//       <Save myNumber={myNumber.toString()} />
//       <button onClick={() =>setMyNumber(myNumber+1)}>Click</button>
//       <Load />
//     </div>
//   );
// }

// export default App;