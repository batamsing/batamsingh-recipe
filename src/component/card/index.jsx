import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/UseFetch';
import { ButtonFav } from '../button/Button';
import { GlobalContext } from '../../context/GlobalContext';


function CardCol({ img_url, itemId, tag, title, details }) {

    return <div className='flex flex-col-reverse w-full min-w-36 md:max-w-96 md:flex-col overflow-hidden rounded-md'>
        <div className='rounded-md overflow-hidden'>
            <Link to={`/recipe-item/${itemId}`}>
                <img className='hover:brightness-90 transition duration-100' src={img_url} alt={title} />
            </Link>

        </div>
        <div className='flex flex-row justify-between items-center mt-2 px-4'>
            <h3 className='font-bold text-lg text-gray-700'>{title}</h3>
            <h4 className='font-bold text-gray-600'>{tag}</h4>
        </div>
        <p className="text-sm text-gray-500">{details}</p>
    </div>
}

function CardRow1({ img_url, tag = 'tag', title = 'title', details }) {
    return <div className='flex flex-col gap-5 lg:flex-row w-3/4'>
        <div className='flex flex-col'>
            <div>
                <img src={img_url} alt={title} />
            </div>
            <h2>{title}</h2>

        </div>
        <p>{details}</p>
    </div>
}

function CardRow({ item }) {
    return <div className='flex flex-row shadow-md p-4 gap-10 bg-orange-50'>
        <Link to={`/recipe-item/${item.idMeal}`}>
            <div className='overflow-hidden rounded-md'>
                <img className='w-56 block hover:scale-105 transition duration-100 ease-in-out transform' src={item?.strMealThumb} alt={item?.strMeal} />
            </div>
        </Link>

        <div>
            <div className='flex flex-col w-96 h-40 overflow-hidden'>
                <h1 className='font-bold text-3xl text-red-700'>{item?.strCategory}</h1>
                <h2 className='font-bold text-gray-800 mt-7'>{item?.strMeal}</h2>
                <p className='text-gray-600'>{item?.strInstructions}</p>
            </div>
            <Link className=' text-gray-500 hover:text-gray-900'
                to={`/recipe-item/${item.idMeal}`}
            >
                Read More
            </Link>

        </div>

    </div>
}

function FavCard({ itemId, handleFav }) {
    const { data, loading } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`);

    return <div className='flex flex-col items-center w-96 rounded-md p-2 border border-red-600'>
        {
            loading && <span className='text-2xl font-semibold'>Loading...</span>
        }
        <div className='overflow-hidden rounded-lg mb-5 relative hover:brightness-95 transition duration-100 cursor-pointer'>
            <h2 className='absolute text-white font-semibold top-4 left-3 text-2xl'>{!loading && data?.meals.length > 0 && data?.meals?.length > 0 && data.meals[0].strMeal}</h2>
            {
                !loading && data?.meals.length > 0 && <Link to={`/recipe-item/${itemId}`}><img className='' src={data.meals[0].strMealThumb} alt={data.meals[0].strMeal} /></Link>
            }
        </div>
        <ButtonFav
            text='Remove from Fav'
            handleFav={() => handleFav(itemId)}
        />

    </div>
}

export { FavCard, CardCol, CardRow1, CardRow };

export default function CardWithDetail({ img_url, img_title, img_detail }) {
    return (
        <div className='flex flex-col rounded-md shadow-md overflow-hidden'>
            <img className='' src={img_url} alt={img_title} />
            <h2>{img_title}</h2>
            <p>{img_detail}</p>
        </div>
    )
}
