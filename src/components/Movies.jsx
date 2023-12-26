import  { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { ItemMovies } from './ItemMovies'


export const Movies = () => {
  const { isLoading, data } = useContext(DataContext);

  return ( 
    <div className="movies-content">
        {
            !isLoading ?
                data.map(item => (
                    <ItemMovies
                    key={item.imdbID} 
                    id={item.imdbID} 
                    type={item.Type} 
                    title={item.Title} 
                    poster={item.Poster} 
                    year={item.Year}
                    />
                ))
            : ''
        }
    </div>
);
}
