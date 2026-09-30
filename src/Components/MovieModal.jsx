import { useEffect } from "react";

const MovieModal = ({ show, onClose }) => {
    const cleanSummary = show.summary?.replace(/<[^>]*>/g, '') || 'No summary available.';

    const imageUrl = show.image?.original || show.image?.medium || '';
    const rating = show.rating?.average || 'N/A';
    const year = show.premiered ? show.premiered.split('-')[0] : 'N/A';
    const genres = show.genres?.join(', ') || 'N/A'; 

    useEffect(() => {
    document.body.style.overflow = 'hidden'; 
    return () => {
      document.body.style.overflow = 'auto'; 
    };
  }, []);

    return (
        
        <>
        
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-60 p-4 backdrop-blur-sm"
      onClick={onClose} 
    >
      
      <div 
        className="bg-white text-black rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto  relative"
        onClick={(e) => e.stopPropagation()} 
      >
        
    <button 
          onClick={onClose} 
          className="absolute top-4 right-4 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center text-xl z-10 hover:bg-neutral-800 transition"
        >
          ✕
    </button>

        {imageUrl && (
          <img src={imageUrl} alt={show.name} className="w-full object-cover" />
        )}

        
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{show.name}</h2>
          
          
          <div className="flex flex-wrap gap-4 text-neutral-600 mb-6 text-sm border-b border-neutral-200 pb-4">
            <span>Rating: {rating}</span>
            <span>Release: {year}</span>
            <span>Genre: {genres}</span>
          </div>

        
          <h4 className="font-semibold text-lg mb-2 tracking-wide">OVERVIEW</h4>
          <p className="text-neutral-700 ">{cleanSummary}</p>

          
          <button 
            onClick={onClose} 
            className="mt-8 border-2 border-black text-black py-2 px-8 font-semibold hover:bg-black hover:text-white transition "
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
            
        </>
    );
};

export default MovieModal;


