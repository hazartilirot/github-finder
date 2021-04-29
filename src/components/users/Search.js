import React, {useState, useContext} from "react";
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {  
  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext)

  const [text, setText] = useState('');

  const onClick = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    
    if (text === "") 
      return setAlert('Please enter something', 'light')
    
    searchUsers(text);
    setText(""); // clearing a form
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search users"
          value={text}
          onChange={onClick}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      { 
        users.length > 0 &&
        <button
          className="btn btn-light btn-block"
          onClick={clearUsers}
        >
          Clear
        </button>
      }
    </div>
  );
}
export default Search;
