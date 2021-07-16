import './image.css'
import data from '../../data'

function Image() {
    return (
        <img src={data.album.images[0].url} alt="Album" />
    )
}

export default Image;