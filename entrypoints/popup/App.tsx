import { useState } from 'react';
import Logosvg from '/icon_logo.svg';
import { Toaster, toast } from 'sonner'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
      <Toaster closeButton  />

        <a href="https://wxt.dev" target="_blank">
          <img src={Logosvg} className="logo" alt="WXT logo" />
        </a>
      </div>
      <div className="card">
      <button onClick={() => toast('My first toast')}>
        Give me a toast
      </button>
      </div>
    </>
  );
}

export default App;
