import './App.css';
import AppPather from './components/AppPather/AppPather';


// 0707일요일 프젝시작

function App() {
  const loginID = sessionStorage.getItem("loginID");

  return (
    <div className="App">
      <AppPather></AppPather>
    </div>
  );
}

export default App;
