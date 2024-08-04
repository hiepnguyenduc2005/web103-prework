import Button from '@mui/material/Button';
import './Overview.css';

const Overview = () => {

    return (
        <div className='background'>
        <h1>Creatorverse</h1>
        <Button variant="contained" color="primary" href="/add">Add Creator</Button> &nbsp;
        <Button variant="contained" color="primary" href="/">Show Creators</Button>
        </div>   
    )
}

export default Overview;