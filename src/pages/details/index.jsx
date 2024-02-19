import React, { useContext, useEffect, useState } from 'react'
import useFetch from '../../hooks/UseFetch'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';
import { ButtonFav } from '../../component/button/Button';

export default function Details() {
  const { id } = useParams();
  const { handleFav, favList } = useContext(GlobalContext);

  const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`, {})

  if (loading) return <div className='text-3xl font-semibold w-full h-screen text-center'>
    Loading... Please wait!
  </div>

  if (error) return <div className="flex items-center justify-around w-full h-screen">
    An error encountered! Please try again
  </div>
  return (
    <div className='w-full h-screen'>
      {
        data?.meals?.length > 0 ? <div className='py-8 px-3'>
          <h2 className='text-red-600 font-semibold text-xl'>Recipe Details</h2>
          <h2 className='font-bold text-4xl mb-5'>{data.meals[0].strMeal}</h2>
          <div className='flex justify-center flex-wrap gap-x-4 gap-y-8 relative lg:w-3/4'>
          <div className='absolute top-0 right-2'>
                    <ButtonFav
                      text={favList.includes(id) ? 'Remove from Fav' : 'Add to Fav'}
                      handleFav={handleFav}
                      id={id}
                    />
                  </div>
            <div className='w-1/2 relative overflow-hidden'>
              <a href={data?.meals[0]?.strYoutube} target='blank'>
              <img className='cursor-pointer hover:brightness-75 transition duration-200 ease-in-out' src={data.meals[0].strMealThumb} alt={data.meals[0].strMeal} />
              </a>
              <span className='absolute bottom-2 left-2 text-white font-semibold bg-slate-600 px-2 rounded-sm'>{data?.meals[0]?.strTags}</span>
            </div>
            <div>
              <p className='mb-5 font-semibold text-xl text-red-700'>Ingredients:</p>
              <ul className='space-y-2 ml-7 font-semibold text-2xl'>
                {
                  data.meals[0].strIngredient1 && <li>{data.meals[0].strIngredient1} : {data.meals[0].strMeasure1}</li>
                }
                {
                  data.meals[0].strIngredient1 && <li>{data.meals[0].strIngredient2} : {data.meals[0].strMeasure2}</li>
                }
                {
                  data.meals[0].strIngredient1 && <li>{data.meals[0].strIngredient3} : {data.meals[0].strMeasure3}</li>
                }
                {
                  data.meals[0].strIngredient1 && <li>{data.meals[0].strIngredient4} : {data.meals[0].strMeasure4}</li>
                }
                {
                  data.meals[0].strIngredient1 && <li>{data.meals[0].strIngredient5} : {data.meals[0].strMeasure5}</li>
                }
                {
                  data.meals[0].strIngredient1 && <li>{data.meals[0].strIngredient6} : {data.meals[0].strMeasure6}</li>
                }
                {
                  data.meals[0].strIngredient1 && <li>{data.meals[0].strIngredient7} : {data.meals[0].strMeasure7}</li>
                }
                {
                  data.meals[0].strIngredient1 && <li>{data.meals[0].strIngredient8} : {data.meals[0].strMeasure8}</li>
                }
                {
                  data.meals[0].strIngredient1 && <li>{data.meals[0].strIngredient9} : {data.meals[0].strMeasure9}</li>
                }
              </ul>
              <a href={data.meals[0].strYoutube} className='text-white font-semibold bg-red-500 rounded-md px-2 ml-10'>YouTube</a>
            </div>

          </div>
          <div className='mx-auto lg:w-3/4 my-10'>
            <h2 className='text-2xl font-bold text-red-600'>Instructions for making "{data?.meals[0]?.strMeal}":</h2>
            <p className='text-gray-800 italic'>
              {data?.meals[0]?.strInstructions}
            </p>
          </div>

          <div className='space-x-5 w-full lg:w-1/2 mx-auto my-48'>
            <h3 className='font xl'>Share this on:</h3>
            <a href='https://www.facebook.com/batam.puyam.3' className='bg-slate-500 text-white rounded-sm px-2'>facebook</a>
            <a href='https://twitter.com/PuyamBatam' className='bg-slate-500 text-white rounded-sm px-2'>twitter</a>
            <a href='https://www.instagram.com/puyambatam/' className='bg-slate-500 text-white rounded-sm px-2'>instagram</a>
          </div>


        </div> :
          <div>
            No Data Found for this ID
          </div>
      }
    </div>
  )
}
