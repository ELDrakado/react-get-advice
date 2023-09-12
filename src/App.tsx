import { useEffect, useState } from 'react';

function App() {
  const [advice, setAdvice] = useState('');
  const [counter, setCounter] = useState(0);

  async function getAdvice() {
    const res: any = await fetch('https://api.adviceslip.com/advice');
    const data: any = await res.json();
    setAdvice(data.slip.advice);
    setCounter(counter + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get advice</button>
      <Message counter={counter} />
    </div>
  );
}

function Message(props: any) {
  return (
    <p>
      You have received <strong>{props.counter}</strong> pieces of advice
    </p>
  );
}

export default App;
