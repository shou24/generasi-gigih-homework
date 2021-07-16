import './artist.css';
import data from '../../../data';

function Artist() {
    return (
        <h1 id="track-artist">{data.artists[0].name}</h1>
    )
}

export default Artist;