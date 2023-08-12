import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

export default function Form() {
  const [form, setForm] = useState({
    number1: 0,
    number2: 0,
  });
  
  return (
    <>
      <label>
        <input
          value={form.number1}
          onChange={e => {
            setForm({
              ...form,
              number1: e.target.value
            });
          }}
        />
      </label>

      <br />

      <label>
        <input
          value={form.number2}
          onChange={e => {
            setForm({
              ...form,
              number2: e.target.value
            });
          }}
        />
      </label>
      
      <p>
        hasil : ({+form.number1 + +form.number2})
      </p>
    </>
  );
}
