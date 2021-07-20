export default (posts = [], action) => {
    switch (action.type) {
        
        case 'FETCH_ALL':
            return action.payload;
            
        case 'CREATE':
            return [...posts, action.payload];
        
        case 'UPDATE':
            return posts.map( (post) => post._id === action.payload._id ? action.payload : post );

        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);
    
        default:
            return posts;
    }
}


// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'FETCH_ALL':
            
//             return state;
//         case 'CREATE':
            
//             return state;
    
//         default:
//             return state;
//     }
// }

//  here we have posts instead of state so we write posts