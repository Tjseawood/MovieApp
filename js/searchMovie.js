class SearchMovie extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="search-element">
            
        <form action="" class="searchForm" id="searchForm">
          <div class="form-field">
            <label for="movieApi">Movie API</label>
            <input
              type="text"
              class="form-control"
              name="movieApi"
              id="movieApi"
              placeholder='Enter API Key: "adec4839"'
            />
          </div>
          <div class="form-field">
            <label for="movieTitle">Movie Title</label>
            <input
              type="text"
              class="form-control"
              name="movieTitle"
              id="movieTitle"
              placeholder=" The Avengers"
              required
            />
          </div>
          <div class="form-field">
            <label for="moviePlot">Plot length:</label>
            <select name="moviePlot" id="moviePlot" required>
              <option value="short">Short</option>
              <option value="long">Long</option>
            </select>
          </div>
          <div class="form-field">
            <button type="submit" value= "Search" class="submit-button" id="button">Search</button>
          </div>
        </form>
           
            <div class="note">
              <p>
                <em
                  >Register for a key at<a
                    href="https://www.omdbapi.com/apikey.aspx"
                    target="_blank"
                    >omdbapi.com</a
                  ></em>
              </p>
            </div>
          </div>
        `;
    }
}

customElements.define('movie-', SearchMovie);