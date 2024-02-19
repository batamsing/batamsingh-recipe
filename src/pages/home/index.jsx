import React, { useState } from 'react'
import useFetch from '../../hooks/UseFetch'
import { CardCol, CardRow } from '../../component/card';
import Footer from '../../component/footer';
import { Link } from 'react-router-dom';

function Home() {
  const { data: porkData, loading: porkLoading, error: porkError } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=pork', {});
  const { data: riceData, loading: riceLoading, error: riceError } = useFetch('https://www.themealdb.com/api/json/v1/1/search.php?s=rice', {});
  const { data: indianData, loading: indianLoading, error: indianError } = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=indian', {});
  const { data: canadianData, loading: canadianLoading, error: canadianError } = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=canadian', {});
  const { data: japaneseData, loading: japaneseLoading, error: japaneseError } = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=japanese', {});
  const { data: russianData, loading: russianLoading, error: russianError } = useFetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=russian', {});


  return (
    <div className='flex flex-col'>

      <div className='relative h-96 overflow-hidden'>
        <img className='opacity-70 w-full object-cover items-center' src='/images/meal-1.jpg' alt='' />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
          <h2 className='font-extrabold text-5xl'>Good Food<br />Good Life</h2>
          <p className='mt-10 text-xl'>"Cooking is a philosophy; it's not a recipe."</p>
        </div>
      </div>

      <div className='mx-auto text-center'>
        <h1 className='text-gray-700 text-5xl font-semibold text-center my-7'>Welcome to BatamSingh's Food Recipe Site</h1>
        <p className='text-xl'>Explore a variety of delicious recipes curated just for you!</p>
      </div>
      <div className='mt-10 mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'> {/* some recipe here */}
        {
          !porkLoading && !porkError && porkData && porkData?.meals?.length > 0 &&
          porkData.meals.map(item => {
            return <CardCol
              key={item?.idMeal}
              itemId={item?.idMeal}
              tag={item?.strTags}
              img_url={item?.strMealThumb}
              title={item?.strMeal}
            />
          })
        }

      </div>

      <div className='p-5 flex flex-col'>

        <div className='my-5'>
          <h1 className='w-full text-red-500 border-b border-green-600 pb-3 font-bold text-xl'>WHAT'S HOT</h1>
        </div>
        <div className='mx-auto grid grid-cols-1 gap-4 text-center'> {/* some recipe here */}
          {
            !riceLoading && !riceError && riceData && riceData?.meals?.length > 0 &&
            riceData.meals.map(item => {
              return <CardRow
                key={item?.idMeal}
                item={item}
              />
            })
          }
        </div>
      </div>

      <div className='p-5'> {/* */}
        <div className='my-5'>
          <h1 className='w-full text-red-500 border-b border-green-600 pb-3 font-bold text-4xl'>RECIPE BASED ON AREA AND STYLE</h1>
        </div>
        <div className='grid grid-cols-2 place-items-center gap-5'>
          <div>
            <h2 className='text-2xl font-semibold text-red-600'>INDIAN STYLES</h2>
            <Link to={`/meals/${'indian'}`}
            >
              <div className='w-64 flex flex-wrap hover:scale-95 hover:brightness-75 transition duration-100'>
                {
                  !indianLoading && !indianError && indianData && indianData.meals.length > 0 &&
                  indianData.meals.slice(0, 4).map(item => {
                    return <div className='w-32 p-1'>
                      <img src={item.strMealThumb} alt='meal' />
                    </div>
                  })
                }
              </div>
            </Link>
          </div>

          <div>
            <h2 className='text-2xl font-semibold text-red-600'>CANADIAN STYLES</h2>
            <Link to={`/meals/${'canadian'}`}
            >
              <div className='w-64 flex flex-wrap hover:scale-95 hover:brightness-75 transition duration-100'>
                {
                  !canadianLoading && !canadianError && indianData && canadianData.meals.length > 0 &&
                  canadianData.meals.slice(0, 4).map(item => {
                    return <div className='w-32 p-1'>
                      <img src={item.strMealThumb} alt='meal' />
                    </div>
                  })
                }
              </div>
            </Link>
          </div>

          <div>
            <h2 className='text-2xl font-semibold text-red-600'>JAPANESE STYLES</h2>
            <Link to={`/meals/${'japanese'}`}
            >
              <div className='w-64 flex flex-wrap hover:scale-95 hover:brightness-75 transition duration-100'>
                {
                  !japaneseLoading && !japaneseError && japaneseData && japaneseData.meals.length > 0 &&
                  japaneseData.meals.slice(0, 4).map(item => {
                    return <div className='w-32 p-1'>
                      <img src={item.strMealThumb} alt='meal' />
                    </div>
                  })
                }
              </div>
            </Link>
          </div>

          <div>
            <h2 className='text-2xl font-semibold text-red-600'>RUSSIAN STYLES</h2>
            <Link to={`/meals/${'russian'}`}
            >
              <div className='w-64 flex flex-wrap hover:scale-95 hover:brightness-75 transition duration-100'>
                {
                  !russianLoading && !russianError && russianData && russianData.meals.length > 0 &&
                  russianData.meals.slice(0, 4).map(item => {
                    return <div className='w-32 p-1'>
                      <img src={item.strMealThumb} alt='meal' />
                    </div>
                  })
                }
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home