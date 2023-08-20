import './App.css'
function Current()
{
    var a=5000;
    return(
     <div className='current'>
        <h3>CURRENT BALANCE</h3>
        <h4>{a}</h4>
     </div>
    );
}

export default Current;