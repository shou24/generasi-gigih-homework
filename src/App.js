import './App.css';
import Button from './component/button';
import Image from './component/image/image';
import Artist from './component/detail/artist/artist';
import Album from './component/detail/album/album';
import Tittle from './component/detail/tittle/tittle';

function App() {
  return (
    <div className="App">
      <div className="track">
        <ul>
          <li className="track-image">
            <Image />
          </li>
          <li className="detail">
            <Artist />
            <Album />
            <Tittle />
            <Button />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
