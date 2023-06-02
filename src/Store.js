import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './components/newsSlice'
const store = configureStore({
    reducer: {
        news: newsReducer,
        // Add other reducers if needed
    },
});

export default store;
