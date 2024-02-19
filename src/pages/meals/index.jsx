import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import useFetch from '../../hooks/UseFetch';
import { CardCol } from '../../component/card';

export default function Meals() {
    const { id } = useParams();
    const { data, loading, error } = useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`);

    return (
        <div className='w-full h-screen px-5 lg:w-3/4 mx-auto'>
            <div className='my-20'>
                <h1 className="text-center text-red-600 text-2xl font-bold uppercase">{id} Meals</h1>
                <section className="flex flex-wrap justify-around items-start gap-5 my-8">
                    {
                        loading && <h1>Loading...Please Wait!</h1>
                    }
                    {
                        !loading && !error && data && data?.meals?.length > 0 ?
                        data.meals.map(item => {
                            return <CardCol
                                key={item.idMeal}
                                img_url={item.strMealThumb}
                                itemId={item.idMeal}
                            />
                        }) :
                        <div></div>
                    }
                </section>
            </div>

        </div>
    )
}

export function DefaultMeals() {
    return <Navigate to={'/meals/indian'} />
}