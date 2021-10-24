import { Link } from "react-router-dom";
const AddBook = () => {
    return (
      <div className="open-search">
        <Link to="search">
          <button>Add a Book</button>
        </Link>
      </div>
    );
  }

export default AddBook 