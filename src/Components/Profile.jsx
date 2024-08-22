import React from 'react';
import userIcon from '../assets/ASIMIC.png';
import PageBanner from './PageBanner';

export default function Profile() {

  const person = {
    name: 'Adelle Charles',
    age: 25,
    gender: 'Female',
    location: 'London',
    occupation: 'Software Engineer',
    info: 'An English mathematician and writer',
    funfact: 'A deep lover of Cat and Dog, they are my best lone buddies.'
  };

  const { name } = person;

  return (
    <div>
      <PageBanner title="Profile" />
      <div className='container text-center font-roboto fs-4 p-5 mt-5 bg-dark text-white rounded shadow mb-5 mx-auto w-50 '>      
        <img className="rounded-circle mx-auto img-thumbnail w-25 mb-4"
          src={userIcon}
          alt="Adelle Charles"
          aria-label='Adelle Charles profile picture'
        />
        <div className="bg-light text-black rounded m-3 p-3">
          <h1>{name}'s Space</h1>
          <ul className='list-unstyled'>
              {Object.entries(person).map(([key, value]) => (
                <li key={key}>
                  <p>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</p>
                </li>
              ))}
          </ul>  
        </div>
        <div className='bg-black text-white rounded m-3 p-3'>
          <h2>Roast!</h2>
          <p>"They say women can't multitask, but Adelle Charles has proven them wrong. 
            She's wrangling code, cats, and dogs all at once. We're not sure who's in charge: her, the computer, or the pets."
          </p> 
        </div>
      </div>
    </div> 
  );

}
