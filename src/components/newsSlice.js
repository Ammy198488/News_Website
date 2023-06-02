import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'd04a924623e0406fb63e658abc3e96d3';
const API_URL = 'https://newsapi.org/v2/everything';
const API_URL_HEADLINE = 'https://newsapi.org/v2/top-headlines';


// Create an async thunk for fetching general news in US
export const fetchArticles = createAsyncThunk('news/fetchArticles', async () => {
    const response = await fetch(`${API_URL_HEADLINE}?country=in&category=general&apiKey=${API_KEY}`);
    const data = await response.json();
    return data.articles;
});

// Create an async thunk for fetching articles for science
export const fetchScience = createAsyncThunk(
    'news/fetchScience',
    async () => {
        const response = await fetch(`${API_URL}?q=science&apiKey=${API_KEY}`);
        const data = await response.json();
        return data.articles;
    }
);

// Create an async thunk for fetching articles for health
export const fetchHealth = createAsyncThunk(
    'news/fetchHealth',
    async () => {
        const response = await fetch(`${API_URL}?q=health&apiKey=${API_KEY}`);
        const data = await response.json();
        return data.articles;
    }
);
// Create an async thunk for fetching articles for Entertainment in India
export const fetchEntertainment = createAsyncThunk(
    'news/fetchEntertainment',
    async () => {
        const response = await fetch(`${API_URL}?q=entertainment&apiKey=${API_KEY}`);
        const data = await response.json();
        return data.articles;
    }
);
// Create an async thunk for fetching articles for Entertainment in India
export const fetchVideo = createAsyncThunk(
    'news/fetchVideo',
    async () => {
        const response = await fetch(`${API_URL}?q=video&apiKey=${API_KEY}`);
        const data = await response.json();
        return data.articles;
    }
);

// Define the initial state for the data fetched
const initialState = {
    articles: [],
    scienceArticles: [],
    healthArticles: [],
    entertainArticles: [],
    videoArticles: [],
    status: 'idle',
    error: null,
};


const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchArticles.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.articles = action.payload;
            })
            .addCase(fetchArticles.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchScience.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchScience.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.scienceArticles = action.payload;
            })
            .addCase(fetchScience.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchHealth.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHealth.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.healthArticles = action.payload;
            })
            .addCase(fetchHealth.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchEntertainment.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchEntertainment.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.entertainArticles = action.payload;
            })
            .addCase(fetchEntertainment.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchVideo.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.videoArticles = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    },
});

export default newsSlice.reducer;