import './album.css';
import data from '../../../data';

function Album() {
    return (
        <h4 id="track-album">{data.album.name}</h4>
    )
}

export default Album;