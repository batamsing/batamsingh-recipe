import React, { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalContext'
import SearchNavbar from '../../component/navbar/navbar';
import { CardRow } from '../../component/card';
import { ButtonFav } from '../../component/button/Button';

export default function SearchRecipe() {
  const {
    data,
    error,
    loading,
    favList,
    handleFav
  } = useContext(GlobalContext);

  return (
    <div className='w-screen h-lvh'>

      <main className='flex flex-col items-center'>
        
        <section className="flex flex-col items-center justify-start w-full mx-2 sm:mx-6 md:mx-10 lg:mx-14 xl:mx-20 text-lg">
          {
            loading ? <h1 className='text-2xl font-bold text-center'>Loading...Please Wait!</h1> : null
          }
          {
            error ? <div className='text-red-500'>{error}</div> : null
          }
          {
            !loading && !error && data && data.length > 0 ?
              data.map(item => {
                return <div className='relative my-4'>
                  <CardRow
                    key={item.idMeal}
                    item={item}
                  />
                  <div className='absolute top-5 right-8'>
                    <ButtonFav
                      text={favList.includes(item.idMeal) ? 'Remove from Fav' : 'Add to Fav'}
                      handleFav={handleFav}
                      id={item.idMeal}
                    />
                  </div>
                </div>

              }) :
              <h2 className='text-2xl font-bold text-center italic py-8'>No results found! Try to search again!</h2>
          }
        </section>
      </main>
    </div>
  )
}
