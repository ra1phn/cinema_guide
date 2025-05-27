// Array to hold movie objects
const movieList = [];    

// Function to add a movie to the list
function addMovie(title, genre, year) {
    if (!title || !genre || !year) {
        console.log("All fields (title, genre, year) are required.");
        return;
    }
    const movie = {
        title: title,
        genre: genre,
        year: year
    };
    movieList.push(movie);                  
    console.log(`Movie "${title}" added successfully.`);  }

// Function to view all movies in the list
    function viewMovies() {
    if (movieList.length === 0) {
        console.log("No movies in the list.");
        return;
    }
    console.log("Movie List:");
    movieList.forEach((movie, index) => {
        console.log(`${index + 1}. ${movie.title} (${movie.year}) - Genre: ${movie.genre}`);
    });
}

// Example usage
addMovie("Inception", "Sci-Fi", 2010);
addMovie("Parasite", "Thriller", 2019);
addMovie("Final Destination Bloodlines", "Horror", 2025);

// View all movies
viewMovies();