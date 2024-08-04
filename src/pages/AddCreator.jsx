import React, { useState } from 'react';
import { supabase } from '../client';
import Button from '@mui/material/Button';

const AddCreator = () => {
    const [creator, setCreator] = useState({'name': '', 'url': '', 'description': '', 'imageURL': ''});

    const handleChange = (event) => {
        setCreator({...creator, [event.target.name]: event.target.value});
    }

    const addCreator = async (event) => {
        if (creator.name === '' || creator.url === '' || creator.description === '' || creator.imageURL === '') {
            alert('Please fill in all fields');
            return;
        }
        event.preventDefault();
        let { data, error } = await supabase
        .from('creatorverse')
        .insert(creator);
        console.log(data);
        window.location = '/';
    }

    return (
        <div>
        <h1>Add Creator</h1>
        <form onSubmit={addCreator}>
            <input type='text' name='name' placeholder='Name' onChange={handleChange} value={creator.name} /> <br />
            <input type='text' name='url' placeholder='Social Media Link' onChange={handleChange} value={creator.url} /> <br />
            <textarea name='description' placeholder='Description' onChange={handleChange} value={creator.description} /> <br />
            <input type='text' name='imageURL' placeholder='Image URL' onChange={handleChange} value={creator.imageURL} /> <br />
            <Button type='submit' variant="contained" onClick={addCreator}>Add Creator</Button>
        </form>
        </div>
    )
}

export default AddCreator;