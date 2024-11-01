import React from "react";

interface ComponentsProps {
  iconPath: string;
  text: string;
  selected: boolean;
  onClick: () => void;
}

const Components: React.FC<ComponentsProps> = ({ iconPath, text, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`font-poppins cursor-pointer w-full max-w-[11.25rem] h-[2.5rem] flex ml-[0.625rem] mt-[0.5rem] justify-start items-center rounded-[0.375rem] mr-[0.62rem] group ${
        selected ? "bg-white text-[#0c808f]" : "text-white hover:bg-white hover:text-[#0c808f]"
      }`}
    >
      <img
        src={iconPath}
        alt={`${text} icon`}
        className={`w-[2rem] h-[2rem] ml-[0.75rem] transition-all duration-200 ${
          selected ? "filter-selected" : "filter-default"
        }`}
      />
      <div
        className={`text-[0.9375rem] font-semibold p-[0.75rem] ${
          selected ? "text-[#0c808f]" : "text-white group-hover:text-[#0c808f]"
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Components;
