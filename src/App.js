import './App.css';
import Current from './Current.js'
function Title()
{
  return(
  <div >
  <h1 className='tit'>EXPENSE TRACKER</h1>
  </div>
  );
}
function App() {
  return (
    <>
    <Title></Title>
    <Current></Current>
    </>
  );
}

export default App;
