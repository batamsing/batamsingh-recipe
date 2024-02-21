import React from 'react';
import fb from '../social-logo/facebook-logo.png';
import github from '../social-logo/github.png';
import insta from '../social-logo/instagram.png';
import linkedIn from '../social-logo/linkedIn.png';
import myPhoto from '../social-logo/20230821_030037.jpg'
export default function Footer() {
    return (
        <div className='flex flex-col bg-orange-600 mt-32 text-white'>
            <div className='flex bg-orange-700 justify-center py-3'>
                <a href='' className='w-40'>
                    <img className='size-12 mx-auto' src={fb} />
                </a>
                <a href='' className='w-40'>
                    <img className='size-12 mx-auto' src={linkedIn} />
                </a>
                <a href='' className='w-40 bg-slate-300 rounded-md'>
                    <img className='size-12 mx-auto' src={github} />
                </a>
                <a href='' className='w-40'>
                    <img className='size-12 mx-auto' src={insta} />
                </a>
            </div>

            <div className='flex flex-col md:flex-row justify-around py-5 gap-7'>
                <div>
                    <div className='w-56 h-32 overflow-hidden mt-5'>
                        <img  src={myPhoto} alt="profile" />
                    </div>
                    <h4 className=' font-semibold text-xl'>BatamSingh</h4>
                </div>
                <div className='text-base col-span-2'>
                    <p>I am a beginner software developer with skills in developing web applications using JavaScript, Node</p>
                    <p>I have a strong background in HTML, CSS, JavaScript, SQL</p>
                    <p>This is a simple project to demonstrate how you can use React with Tailwind CSS and custom components.</p>
                    <p>© 2021 - Present | Developed by Batam Singh<br/>
                    This website is built using react and hosted on Netlify.<br/>
                    Source code available at GitHub.</p>
            
                </div>

            </div>

        </div>
    )
}
