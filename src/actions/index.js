// import { filtersFetching, filtersFetched, filtersFetchingError } from "../components/heroesFilters/filtersSlice";

// // Action creator нужны для того, чтобы не прописывать каждый раз {type: "..."}, поэтому мы просто возвращаем нужный тип экшена в виде объекта


// export const fetchFilters = (request) => (dispatch) => {
//     dispatch(filtersFetching());
//     request("http://localhost:3001/filters")
//         .then(data => dispatch(filtersFetched(data)))
//         .catch(() => dispatch(filtersFetchingError))
// }



// export const filtersFetching = () => {
//     return {
//         type: 'FILTERS_FETCHING'
//     }
// }


// export const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }

// export const filtersFetchingError = () => {
//     return {
//         type: 'FILTERS_FETCHING_ERROR'
//     }
// }

// export const activeFilterChanged = (filter) => {
//     return {
//         type: 'ACTIVE_FILTER_CHANGED',
//         payload: filter
//     }
// }
