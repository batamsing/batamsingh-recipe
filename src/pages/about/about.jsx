import React from 'react'
import myPhoto from '../../component/social-logo/20230821_030037.jpg';

export default function About() {
  return (
    <div className='text-center'>
      <div className='bg-blue-200 pt-10 pb-32'>
        <h1 className='text-3xl font-bold text-red-500'>BatamSingh</h1>
        <p className='text-red-600'>I'm a front-end developer passionate about creating beautiful and user-friendly web experiences.</p>
      </div>

      <div className='w-full md:w-3/4 mx-auto py-20'>
        I'm a budding software developer who's passionate about learning and building cool things with code.

        I started my coding journey by tinkering with HTML, CSS, and JavaScript to create simple websites and add a bit of flair to my projects. From there, I've been diving into the world of programming languages like Java and technologies like React and Spring Boot, taking small steps to understand how everything fits together.
      </div>
      <div className='w-full bg-blue-100 py-20'>


        <div className='w-full flex flex-col gap-10 md:flex-row md:px-10 lg:w-3/4'>
          <div className='w-full md:w-96'>
            <img src={myPhoto} alt='my-photo' />
          </div>
          <div className='py-5 text-left w-full md:w-1/2'>
            <p>
              My ultimate goal is to become a skilled software developer who can build awesome stuff and make a positive impact in the tech community. I know I've got a lot to learn, but I'm eager to grow and improve with every project I tackle.
            </p>
            <p className='mt-5'>
              Thanks for stopping by, and I hope you'll join me on this journey of learning and discovery!
            </p>
          </div>


        </div>
      </div>
    </div>
  )
}
