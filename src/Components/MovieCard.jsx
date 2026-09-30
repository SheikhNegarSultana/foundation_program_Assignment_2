
const MovieCard = ({show, onShowDetails }) => {
    const imageUrl = show.image?.medium || 'https://via.placeholder.com/210x295/f5f5f5/999?text=No+Image';
    const rating = show.rating?.average || 'N/A';  
    const year = show.premiered ? show.premiered.split('-')[0] : 'N/A';

    return (
        <>
    
    <div className="bg-white border border-black overflow-hidden shadow-sm flex flex-col group">
      
      <div className="overflow-hidden">
        <img 
          src={imageUrl} 
          alt={show.name} 
          className="w-full h-80 object-cover group-hover:scale-110 transition duration-500" 
        />
      </div>
      
      
      <div className="p-5 flex flex-col">
        <h3 className="text-lg font-bold mb-3 tracking-wide">{show.name}</h3>
        
        <div className="flex items-center gap-3 text-sm text-neutral-500 mb-5">
          <span>Rating : {rating}</span>
          <span>Released Year: {year}</span>
        </div>
        
        
        <button 
          onClick={() => onShowDetails(show)} 
          className="mt-auto w-full bg-black text-white py-3 font-semibold hover:bg-neutral-800 transition tracking-wider text-sm"
        >
          SEE DETAILS
        </button>
      </div> 
      
      </div>
  
            
        </>
    );
};

export default MovieCard;