import './Search.css';
import SearchImg from '../Search/search.png';

export default function Search({ inputValue, setInputValue }) {
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div id="search-container-main">
      <div id="search-container">
        <input
          type="text"
          id="search-input"
          value={inputValue}
          onChange={handleChange}
          placeholder="Find the recipe..."
        />
        <button id="searchImage-button" onClick={() => { }}>
          <img id="searchImage" src={SearchImg} alt="search" />
        </button>
      </div>
    </div>
  );
}
