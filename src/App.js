import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from './Asserts/Logo.png'
function App() {
  return (
    <div className='text-3xl w-screen h-screen'>
      {/* <i class="bi bi-moon-stars"></i>Hello World!<i class="bi bi-sun"></i> */}
      <h1 className='flex items-center font-medium font-Popins  p-5'><img src = {logo} alt='logo' className='w-16'/>Travel Log</h1>
    </div>
  );
}

export default App;
