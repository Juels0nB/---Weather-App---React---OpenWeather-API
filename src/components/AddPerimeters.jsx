import { Search } from "lucide-react";
import PropTypes from "prop-types";
function AddPerimeters({ handleSearch, handleChange, city }) {
  return (
    <div className="space-y-4 p-6 bg-gray-200 bg-opacity-70 rounded-xl shadow-lg font-mono backdrop-blur">
      <div>
        <form className="flex items-center gap-2" onSubmit={handleSearch}>
          <input
            type="text"
            value={city}
            required
            onChange={handleChange}
            className=" w-full p-2 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white bg-opacity-80"
            placeholder="Enter city name"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 transition text-white  p-2 rounded-xl shadow"
            type="submit"
          >
            <Search />
          </button>
        </form>
      </div>
    </div>
  );
}

AddPerimeters.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
};
export default AddPerimeters;
