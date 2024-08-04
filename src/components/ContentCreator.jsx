import './ContentCreator.css';
import Button from '@mui/material/Button';
export const ContentCreator = ({creator}) => {

    return (
        <div className='creator'>
            <h2>{creator.name}</h2>
            <div>
                <Button variant="contained" color="primary" href={`/view/${creator.id}`}>View</Button> &nbsp;
                <Button variant="contained" color="primary" href={`/edit/${creator.id}`}>Edit</Button>
            </div>
            <div className='description'>{creator.description}</div>
            <img src={creator.imageURL} alt={creator.name} />
            <a href={creator.url}>Social Media Link</a>
        </div>   
    )
}

// export default ContentCreator;