import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
        <div className='min-h-screen flex flex-col bg-white text-black'>

        <nav className='flex pt-[2rem] items-center justify-between px-[1.4rem] md:px-[4rem] mb-[1rem]'>
          <Link to="/" className='text-2xl font-bold'>MovieExplorer</Link>    
          <Link to="/movies" className='text-2xl font-bold'>MOVIES</Link>
        </nav>

        <hr className=' border-2'></hr>
        
        <div className='flex-1 flex flex-col items-center justify-center text-center px-6 '>
        <h1 className=' font-extrabold text-4xl md:text-6xl  '>DISCOVER MOVIES</h1>                     
                                                    
        <p className=' text-gray-900 font-medium mb-[2rem] text-[1.2rem] '>Explore and discover your favorite   movies from around the world.</p>                 
                                                      
        <Link to="/movies" className="border-2 border-black bg-black text-white text-lg px-6 py-3 md:py-4 font-bold"> EXPLORE NOW </Link> 
        </div>

        <footer className="bg-black md:mt-0 text-center md:flex md:justify-between p-5 text-neutral-600 text-sm border-t border-neutral-800">
        <div>
        <aside className=" text-white">
         <p>© 2026 MovieExplorer. All rights reserved.</p>
        </aside>
        </div>

        <div>
        <nav className=" text-white mt-2 md:mt-0 flex justify-center md:justify-around  gap-6">
           <a href='#'>Facebook</a>
           <a href='#'>Twitter</a>
           <a href='#'>GitHub</a>
        </nav>
        </div>

        </footer>

        </div>
    </>
  );
}