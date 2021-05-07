window.onload = function () {
  const searchCriteria = document.getElementById("searchInput");
  const queryString = window.location.search;

  const urlParams = new URLSearchParams(queryString);
  const searchValue = urlParams.get("s");
  searchCriteria.value = searchValue;

  const filterValue = urlParams.get("searchFilter");

  const options = document.getElementById("filter").options;
  for (let i = 0; i < options.length; i++) {
    if (options[i].value === filterValue) options[i].selected = true;
  }

  document.getElementById("title").innerText = filterValue;

  const buildBody = async () => {
    const results = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=c6a37cad`);
    const { Search } = await results.json();
    let i = 1;

    let row = document.createElement("div");
    row.className = "d-flex flex-row justify-content-center align-items-center mt-30";
    Search.forEach((el) => {
      if (i !== 10) {
        const imgContainer = document.createElement("div");
        //image for card
        const img = document.createElement("img");

        imgContainer.className = "zoom mb-3000";

        img.className = "card-img-top img-fluid imgZoom";
        img.src = el.Poster;
        img.alt = el.Title;
        img.style = "width: 500px; height: 500px; object-fit:cover;";

        const overlay = document.createElement("div");
        overlay.className = "shareContainer d-flex flex-row";

        const shareButton = document.createElement("button");
        shareButton.innerHTML = "<span><i  class='material-icons'>share</i> <span>Share</span></span>";

        shareButton.className = `shareButton btn ml-2 ${el.imdbID}`;

        shareButton.setAttribute("data-toggle", "modal");
        shareButton.setAttribute("data-target", "#exampleModal");
        shareButton.type = "button";

        shareButton.onclick = function setUpShare() {
          const parent = document.getElementById("mBody");
          while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
          }
          document.getElementById("exampleModalLabel").innerText = "Share With Friends Or Groups";
          const movieTitle = document.getElementById("movieTitle");
          movieTitle.innerText = el.Title;

          const imgContainer = document.createElement("div");
          const img = document.createElement("img");
          img.src = el.Poster;
          img.className = "card-img-top img-fluid";
          img.style = "width: 375px; height: 375px; object-fit:contain;";
          imgContainer.appendChild(img);
          parent.appendChild(imgContainer);
        };

        const details = document.createElement("button");
        details.innerHTML = "<span><i class='material-icons'>more_horiz</i> <span>More</span></span>";
        details.className = "detailsButton btn ml-2";
        details.type = "button";

        const watchlist = document.createElement("button");

        watchlist.innerHTML = "<span><i class='material-icons'>playlist_add</i> <span>Add</span></span>";
        watchlist.className = "watchListButton btn  ml-2";

        const play = document.createElement("button");
        play.innerHTML = "<span><i class='material-icons'>play_arrow</i> <span>Play</span></span>";
        play.className = "playButton btn";

        overlay.appendChild(play);
        overlay.appendChild(details);
        overlay.appendChild(watchlist);
        overlay.appendChild(shareButton);

        imgContainer.appendChild(img);
        imgContainer.appendChild(overlay);
        row.appendChild(imgContainer);
        document.getElementById("main").appendChild(row);
      }

      if (i % 3 === 0) {
        row = document.createElement("div");
        row.className = "d-flex flex-row justify-content-center align-items-center mt-6";
      }
      i++;
    });
  };
  buildBody();
};

function searchNextPage() {
  const searchCriteria = document.getElementById("searchInput");
  const filter = document.getElementById("filter");
  window.location.href = `search.html?s=${searchCriteria.value}&searchFilter=${filter.value}`;
  return false;
}

function loadStatus() {
  const confirmModal = document.getElementById("confirmModal");
}
