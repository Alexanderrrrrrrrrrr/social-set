const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_text = 'UPDATE-NEW-POST-text';

let initialState = {
    posts: [{ id: 1, message: 'Hi, how are you', like: 5 },
    { id: 2, message: 'it,s first post', like: 20 }],
    newPostText: 'it-camasutra.com'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [...state, newPost],
                newPostText: ''
            };
        case UPDATE_NEW_POST_text: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}
export const addPostActionCreater = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreater = (text) => ({ type: UPDATE_NEW_POST_text, newText: text })
export default profileReducer