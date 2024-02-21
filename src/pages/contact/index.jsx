import React from 'react'

export default function ContactUs() {
    return (
        <div className='text-lg'>
            <div className='text-center text-white py-20 bg-gradient-to-b from-red-500 via-red-700 to-red-700'>
                <h1 className='text-5xl font-semibold my-3'>BatamSingh</h1>
                <p>"I'm not a great programmer; I'm just a good programmer with great habits."</p>
            </div>

            <div className='w-full mx-auto px-20 lg:w-1/2 text-gray-700'>
                <h2 className='text-left font-bold text-3xl my-10'>CONTACT DETAILS</h2>
                <div className='flex flex-row justify-between'>
                    <div>
                        <div>
                            <h3 className='text-xl font-semibold'>EMAIL ME:</h3>
                            <p className='font-semibold'>general enquiries: <span className='text-red-600'><a href="mailto:batampuyam09@gmail.com" target="_blank">batampuyam09@gmail.com</a></span></p>
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold'>CALL ME:</h3>
                            <p className='font-semibold'>general enquiries: <span className='text-red-600'><a href="tel:+917085928124" target="_blank">+91 7085928124</a></span></p>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl font-semibold'>ADDRESS:</h3>
                        <p className='font-semibold'>Origin: <span className='text-red-600'>Manipur, India</span></p>
                        <p className='font-semibold'>Live in: <span className='text-red-600'>Gurgaon, Haryana, India</span></p>
                    </div>

                </div>

            </div>


        </div>
    )
}
