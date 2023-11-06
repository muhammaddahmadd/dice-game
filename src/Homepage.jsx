import { useNavigate } from 'react-router-dom';
import dices from '../public/images/dices.png';


function Homepage() {
    const navigate = useNavigate();
    function handlePlay(){
     navigate("/gamepage")   
    }
  return (
    <div className="grid grid-cols-1  w-full justify-center items-center sm:grid-cols-2 mt-28 lg:mt-12 mx-4 gap-4">
     <div className="p-4 min-w-full flex flex-col sm:grid-row-2 justify-center items-center">
        <p className="text-5xl sm:text-5xl lg:ml-0 md:text-6xl lg:text-8xl justify-center items-center uppercase mb-3 from-stone-800 font-bold">
          Dice game
        </p>
        <button className='rounded-lg px-8 lg:ml-0 md:px-25 md:py-3 py-2  lg:w-2/4 lg:mr-36 sm:px-20 sm:py-2 sm:w-12/3 sm: bg-stone-800 text-stone-100' onClick={handlePlay}>
          Play Now
        </button>
      </div>
        <div className="sm:mt-4 flex justify-center w-full lg:mr-4 items-center sm:flex-grow-2 sm:flex-row">
        <img
          src={dices}
          alt="Image"
          className="w-2/3 sm:w-full md:w-4/5 lg:w-4/5 h-auto sm:ml-3"
        />
      </div>
    </div>
  );
}

export default Homepage;
