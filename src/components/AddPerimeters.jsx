import { Search } from "lucide-react";
import PropTypes from "prop-types";
function AddPerimeters({ handleSearch, handleChange, city }) {
  return (
    <div className="space-y-4 p-6 bg-gray-200  rounded-md shadow font-mono ">
      <div>
        <form className="flex items-center gap-2" onSubmit={handleSearch}>
          <input
            type="text"
            value={city} required
            onChange={handleChange}
            className=" w-[300] p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 "
            placeholder="Enter city name"
          />
          <button className="bg-slate-500 text-white  p-2 rounded-lg" type="submit" >
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
