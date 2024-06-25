# 🎬 Movie Finder App 🎬

Welcome to the Movie Finder App! This simple project leverages the [OMDb API](https://www.omdbapi.com/) to fetch and display movie information for users. 🌟

## Features 🚀

- 🔍 **Search Movies**: Type the name of the movie you wish to search for in the text input.
- ⏳ **Debounce Search**: The search input has a 700-millisecond debounce, meaning the movie search is triggered automatically if no keyboard activity is detected for 700 milliseconds.
- 🖱️ **Search Button**: A search button is also available to trigger the movie search manually with the same functionality.
- 🔄 **Sort Alphabetically**: Includes a checkbox to sort the movies alphabetically.
- 🚫 **Prevent Duplicate Searches**: The app prevents users from making duplicate searches with the same input text to enhance performance by avoiding redundant queries.

## Getting Started 🛠️

Follow these instructions to set up and run the project on your local machine.

### Prerequisites 📋

- Node.js and npm
- An API key from [OMDb API](https://www.omdbapi.com/apikey.aspx)

### Installation 🔧

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/movie-finder-app.git
    cd movie-finder-app
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

### Usage ▶️

Run the development server:
```bash
npm run dev
