 import { useMediaQuery } from '@mui/material';
 
const MidBar = () => {
    const isSmallScreen = useMediaQuery('(max-width: 640px)'); 
    const isExtraSmallScreen = useMediaQuery('(max-width: 480px)');
    return (
        <div className={`font-poppins w-full h-[12rem] bg-slate-100 rounded-b-md flex items-center px-4 mt-4 mb-4 justify-between s${
          isExtraSmallScreen ? 'justify-center' : 'justify-between'
            }`}>
            <div className='flex flex-col'>
                {!isExtraSmallScreen && !isSmallScreen && <div className='font-semibold text-4xl bg-sidebar-gradient text-transparent bg-clip-text'>Exams Time</div>}
                <div className="space-y-2">
                    {!isExtraSmallScreen && !isSmallScreen &&   <p className="text-gray-600 font-medium text-lg">
                    Here we are. Are you ready to fight? Don’t worry, <br/>we prepared some tips to be ready for your exams.</p>}
                    {!isExtraSmallScreen && !isSmallScreen &&   <p className="text-gray-400 italic text-sm">
                     "Nothing happens until something moves" - Albert Einstein</p>}
                </div>
            </div>
            <div className='flex justify-end'>
                <img src='../../public/machine-learning.png'
                className={`h-[10rem] w-[10rem] pr-4  ${
                isExtraSmallScreen || isSmallScreen ? 'justify-center' : 'flex'
             }`}
            /></div>
      </div>
    );
}

export default MidBar;
