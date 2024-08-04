import { useState, useEffect } from 'react';
import { supabase } from '../client';
import { ContentCreator } from '../components/ContentCreator';
import './pages.css';
const ShowCreators = () => {
    const [creators, setCreators] = useState([])

    useEffect (() => {
        const fectchPosts = async () => {
            let { data: creators, error } = await supabase
            .from('creatorverse')
            .select('*')
            setCreators(creators)
        };
        fectchPosts();    
    }, []);

       
    return (
        <div>
        <h1>Show Creators</h1>
        {creators.length === 0
        ? <div>Loading...</div>
        : 
        <div className='showAll'>
            {creators.map((creator) => (
                <ContentCreator key={creator.id} creator={creator} />
            ))}
        </div>
        }
        </div>
    )
}

export default ShowCreators;