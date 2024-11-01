import React from 'react';
import SearchBar from './SearchBar';

interface RightProps {
  hideSearch: boolean;
}

const Right: React.FC<RightProps> = ({ hideSearch }) => {
  return (
    <div className={`flex items-center ${hideSearch ? 'justify-center' : ''}`}>
      {!hideSearch && <SearchBar />}
      <img
        src="../../public/chat.png"
        className="w-[2rem] h-[2rem] ml-[0.75rem] transition-all duration-200"
        alt="Chat Icon"
      />
      <img
        src="../../public/notification.png"
        className="w-[2rem] h-[2rem] ml-[0.75rem] transition-all duration-200"
        alt="Notification Icon"
      />
      <img
        src="../../public/user (1).png"
        className="w-[2rem] h-[2rem] ml-[0.75rem] transition-all duration-200"
        alt="User Icon"
      />
    </div>
  );
};

export default Right;
