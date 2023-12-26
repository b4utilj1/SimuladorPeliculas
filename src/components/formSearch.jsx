import  { useState, useContext} from 'react'
import { DataContext } from '../context/DataContext.jsx';

export const FormSearch = () => {
  const {setQuery, error} = useContext(DataContext)
  const [title, setTitle] = useState("");
  // const {data} = useFetch("&s=troya")


  const HandleSubmit = (e) => {
    e.preventDefault();
    setQuery(title)
  }
  return (
        <div className="form-search">
            <h2>B4PELIS</h2>
            <form onSubmit={ HandleSubmit }>
                <input type="text" placeholder="Name of the movie" onChange={e=>setTitle(e.target.value)}/>
                <input type="submit" value="Search" />
            </form>
        </div>
  )
}