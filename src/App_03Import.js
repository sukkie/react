import './App.css';

// component를 임포트
import Aaa from './Sub';
// component내의 디폴트 익스포트가 아닌 다른 객체
import { num } from './Sub';

function App() {
  return (
    <div>
      <Aaa></Aaa>
      {num}
    </div>
  );
}

export default App;
