import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { FavCard } from '../../component/card';

function Favorite() {
  const { favList, handleFav } = useContext(GlobalContext);

  console.log(favList);
  return (

    <div className='w-full lg:w-3/4 mx-auto my-5 h-screen'>
      <h1 className='font-bold text-3xl text-slate-600 text-center py-4'>MY FAVORITE MEALS</h1>
      {
        favList && favList.length > 0 ? <div className='flex flex-row flex-wrap gap-4'>
          {
            favList.map(item => {
              return <FavCard itemId={item}
                handleFav={handleFav}
              />
            })
          }
        </div> :
        <div className='text-3xl font-bold text-gray-700 text-center pb-8 pt-24'>No favorite meals yet.
        </div>
      }
    </div>
  )
}

export default Favorite