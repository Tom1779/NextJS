'use client';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

if (!supabaseKey || !supabaseUrl) {
  throw new Error('Supabase API key or URL is not defined in environment variables.');
}

const supabase = createClient(supabaseUrl, supabaseKey);


export default function NameList({names, updateNames}: { names: string[], updateNames: (newName: string[]) => void}) {
  // Use the 'updateNames' function to append data to the 'names' state
  useEffect(() => {
    async function fetchNames() {
      try {
        const { data, error } = await supabase.from('Names').select('name');

        if (error) {
          console.error('Error fetching data:', error);
          return;
        }

        // Append the retrieved names to the 'names' state using the 'updateNames' function
        if (data) {
          // Extract the names from the data
          const newNames = data.map((entry) => entry.name);

          // Pass the new names up to the ancestor component
          updateNames(newNames);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    // Call the fetchNames function when the component mounts
    fetchNames();
  }, []);

  return (
    <div>
      <h2>List of Names:</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}