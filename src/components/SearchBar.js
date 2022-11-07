import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  // 4491dee8-8561-421e-b534-b937f3d396d1

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "") return;

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${search}`;

    const response = await fetch(endpoint);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    // console.log(json);
    setResults(json.query.search);
    setSearchInfo(json.query.searchinfo);
  };

  return (
    <div className="App">
      <header className="search-bar">
        <div className="search-text">
          <h5>Start your Limited Company Online Today</h5>
          <p>
            <strong>Register your Limited Company in 4 easy steps!</strong>
          </p>
          <p>
            Over <strong>600,000 Companies Incorporated</strong> in the UK 2021.
          </p>
          <br />
          <p>Check if your company name is available</p>
        </div>

        <form action="" className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Your company name here.."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {/* {searchInfo.totalhits ? (
          <p>Search Results: {searchInfo.totalhits}</p>
        ) : (
          ""
        )} */}
      </header>
      <div className="results">
        {results.map((result, i) => {
          const url = `https://en.wikipedia.org/?curid${result.pageid}`;

          return (
            <div className="result">
              <h3>{result.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
              <a href={url} target="_blank" rel="nofollow">
                Read more
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchBar;
