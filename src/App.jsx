import { Header } from './components/Header/Header';
import { Main } from './components/pages/Main/Main';

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Main />
      </div>
    </div>
  );
}
export default App;
