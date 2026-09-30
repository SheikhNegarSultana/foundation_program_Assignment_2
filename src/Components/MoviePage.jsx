import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

const MoviePage = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState(''); 
    const [selectedShow, setSelectedShow] = useState(null);
    
    const fetchShows = async() =>{
        try {
            setLoading(true);
            const res = await fetch('https://api.tvmaze.com/shows'); 
            const data = await res.json(); 
            setShows(data); 
            
        } catch (err) {
               console.error("Error fetching data:", err); 
        } finally {
              setLoading(false); 
    }
    }
    
    useEffect(() => {
    fetchShows();}, []);

    const handleSearch = async (e) => {
        const query = e.target.value; 
        setSearchQuery(query);

        if (query === '') { 
            fetchShows();     
            return;
        }

        try {
      
            const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
            const data = await res.json();
      
            setShows(data.map(item => item.show)); 
        } catch (err) {
            console.error("Error searching:", err);
        }
    };



    return (
        <>
        <div className="min-h-screen bg-neutral-50 text-black">
      
      
        <nav className="flex justify-between items-center p-6 bg-white">
        <Link to="/" className='text-2xl font-bold'>MovieExplorer</Link>    
        </nav>

       <hr className=' border-2'></hr>
       
       <div className="max-w-3xl mx-auto my-10 px-4">
        <input
          type="text"
          value={searchQuery} 
          onChange={handleSearch} 
          placeholder="🔍 Search for a movie..."
          className="w-full p-4 border-b-2 border-neutral-900 bg-transparent text-black text-lg focus:outline-none focus:border-black placeholder:text-neutral-400"
        />
      </div>

      {loading ? (
        
        <p className="text-center text-xl text-neutral-500 mt-20">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 pb-12">
          {shows.map((show) => (
            <MovieCard 
              key={show.id} 
              show={show}  
              onShowDetails={setSelectedShow} 
            />
          ))}
        </div>
      )}

      
      {selectedShow && (
        <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
      )}
    </div>

        </>
    );
};

export default MoviePage;