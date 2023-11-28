const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_text = 'UPDATE-NEW-POST-text'

const store = {
  _state: {
    profilePage: {
      posts: [{ id: 1, message: 'Hi, how are you', like: 5 },
      { id: 2, message: 'it,s first post', like: 20 }],
      newPostText: 'it-camasutra.com'

    },
    messagesPage: {
      dialogData: [{ id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Victor' },
      { id: 6, name: 'Valera' }],
      massagesData: [{ id: 1, massage: 'Hi' },
      { id: 2, massage: 'How is your it-camasutra' },
      { id: 3, massage: 'Yo' },
      { id: 4, massage: 'Yo' },
      { id: 5, massage: 'Yo' },]
    }
  },
  getState() {
    return this._state
  },
  _callSubskriber() {
    console.log('hueta');
  },
  addPost() {

  },
  updateNewPostText(newText) {

  },
  subscribe(observer) {
    this._callSubskriber = observer;
  },
  dispatchEvent(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like: 0
      };

      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubskriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_text) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubskriber(this._state);
    }
  }
};

export const addPostActionCreater = () => {
  return {
      type: 'ADD-POST'
  }

}

export const updateNewPostTextActionCreater = (text) => {
  return {
      type: 'UPDATE-NEW-POST-text', newText: text
  }

}

export default store;