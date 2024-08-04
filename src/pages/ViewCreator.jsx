import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Button from '@mui/material/Button';
import './pages.css';

const ViewCreator = () => {
    const {id} = useParams();
    const [creator, setCreator] = useState({})

    useEffect (() => {
        const fectchPost = async () => {
            let { data: creator, error } = await supabase
            .from('creatorverse')
            .select('*')
            .eq('id', id)
            .single();
            setCreator(creator);
        };
        fectchPost();    
    }, []);

    return (
        <div className='view'>
            <h1>View Creator</h1>
            <div className='viewCreator'>
                <div>
                    <h2>{creator.name}</h2>
                    <a href={creator.url}>Social Media Link</a>
                    <div className='description'>{creator.description}</div>
                </div>
                <div>
                    <img src={creator.imageURL} alt={creator.name} /> <br />
                    <Button variant="contained" color="primary" href={`/edit/${creator.id}`}>Edit</Button>
                </div>           
            </div>
        </div>
    )
}

export default ViewCreator;