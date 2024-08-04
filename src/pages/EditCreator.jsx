import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';

const EditCreator = () => {
    const {id} = useParams();
    const [creator, setCreator] = useState({'name': '', 'url': '', 'description': '', 'imageURL': ''});

    const handleChange = (event) => {
        setCreator({...creator, [event.target.name]: event.target.value});
    }

    useEffect(() => {
        const fetchPost = async () => {
          const { data, error } = await supabase
            .from('creatorverse')
            .select()
            .eq('id', id)
            .single();
            if (error) {
                console.log('Error fetching post:', error);
            } else {
                setCreator(data);
            }
        };
        fetchPost();
    }, [id]);

    const updateCreator = async (event) => {
        if (creator.name === '' || creator.url === '' || creator.description === '' || creator.imageURL === '') {
            alert('Please fill in all fields');
            return;
        }
        event.preventDefault();
        const { error } = await supabase
        .from('creatorverse')
        .update(creator)
        .eq('id', id);
    
        if (error) {
            console.error('Error updating post:', error);
        } else {
            window.location = "/"; 
        }
    }

    const deleteCreator = async (event) => {
        event.preventDefault();
        const { error } = await supabase
        .from('creatorverse')
        .delete()
        .eq('id', id);
    
        if (error) {
            console.error('Error deleting post:', error);
        } else {
            window.location = "/"; 
        }
    }

    return (
        <div>
        <h1>Edit Creator</h1>
        <form onSubmit={updateCreator}>
            <input type='text' name='name' placeholder='Name' onChange={handleChange} value={creator.name} /> <br />
            <input type='text' name='url' placeholder='Social Media Link' onChange={handleChange} value={creator.url} /> <br />
            <textarea name='description' placeholder='Description' onChange={handleChange} value={creator.description} /> <br />
            <input type='text' name='imageURL' placeholder='Image URL' onChange={handleChange} value={creator.imageURL} /> <br />
            <Button type='submit' variant="contained" onClick={updateCreator}>Edit Creator</Button>&nbsp;
            <Button type='submit' variant="contained" onClick={deleteCreator} style={{backgroundColor:'red'}}>Delete Creator</Button>
        </form>
        </div>
    )
}

export default EditCreator;