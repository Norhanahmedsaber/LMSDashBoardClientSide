import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className="relative w-full max-w-sm mx-auto">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
                type="search"
                placeholder="Search here"
                className="w-full pl-10 pr-4 py-1 rounded-full border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            />
        </div>
    );
}

export default SearchBar;