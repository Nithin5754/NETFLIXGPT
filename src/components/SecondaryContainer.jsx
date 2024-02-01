import { useSelector } from "react-redux";
import { CardsList } from "./index";


const SecondaryContainer = () => {
  const nowPaylingList=useSelector(store=>store.movies?.nowPlaying)
  const popularMovies=useSelector(store=>store.movies?.popularmovies)
  const topRated=useSelector(store=>store.movies?.topRated)

  return (
<div >
<div className="text-white bg-black  relative z-50 ">
      <CardsList title={"Now Playing"} nowPaylingList={nowPaylingList}/>
      <CardsList title={"Popular Movies"} nowPaylingList={popularMovies}/>
      <CardsList title={"Top Rated"} nowPaylingList={topRated}/>
      <CardsList title={"Commedy"} nowPaylingList={nowPaylingList}/>
      <CardsList title={"Drama"} nowPaylingList={nowPaylingList}/>
      <CardsList title={"Animie"} nowPaylingList={nowPaylingList}/>
    </div>
</div>
  )
}
export default SecondaryContainer