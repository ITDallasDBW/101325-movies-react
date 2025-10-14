import React from 'react';

const Main = () => {
    return (
        <>
              <section id="main">
      <div class="container">
        <div class="loading hide__spinner">
          <i class="fa-solid fa-gear" aria-hidden="true"></i>
        </div>
        <div class="row hidden">
          <div class="results__wrapper">
            <h3 class="results__message">Search Results</h3>
            <select id="filter" onchange="sortChange(event)">
              <option value="" disabled selected>Sort Movies</option>
              <option value="A_Z">Alphabetically A-Z</option>
              <option value="Z_A">Alphabetically Z-A</option>
              <option value="LOW_TO_HIGH">Oldest to Newest</option>
              <option value="HIGH_TO_LOW">Newest to Oldest</option>
            </select>
          </div>
          <div class="results">
            <div class="movie">
              <figure class="poster__wrapper">
                Poster
                <img src="" alt="" class="poster" />
              </figure>
              <div class="movie__description">
                <div class="movie__director">Directed by:</div>
                <div class="movie__actors">Starring:</div>
              </div>
              <div class="movie__title">Title</div>
              <div class="movie__year">Released</div>
              <div class="movie__imdb">IMDB:</div>
              <hr />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              aliquam numquam officia, eos quae enim vel doloremque rerum
              incidunt in.
            </div>
          </div>
        </div>
      </div>
    </section>  
        </>
    );
}

export default Main;
