'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

if (!supabaseKey|| !supabaseUrl) {
    throw new Error('Supabase API key or URL is not defined in environment variables.');
  }

const supabase = createClient(supabaseUrl, supabaseKey);


interface NameFormProps {
    updateNames: (newName: string[]) => void; // Define the prop type for updateNames
  }

export default function NameForm({ updateNames }: NameFormProps) {
  const [name, setName] = useState('');

  const handleNameChange = (e:any) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    try {
      // Insert the name into the "Names" table
      const { data, error } = await supabase
        .from('Names')
        .upsert([
          {
            name: name,
          },
        ]);

      if (error) {
        console.error('Error inserting data:', error);
        return;
      }

      console.log('Data inserted successfully:', data);
      updateNames([name])
    } catch (error) {
      console.error('Error inserting data:', error);
    }
    setName('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input placeholder='firstname lastname' type="text" value={name} onChange={handleNameChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}