import dialogsReducer from "./dialogs-reducer ";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer ";


const store = {
  _state: {
    profilePage: {
      posts: [{ id: 1, message: 'Hi, how are you', like: 5 },
      { id: 2, message: 'it,s first post', like: 20 }],
      newPostText: 'it-camasutra.com'
    },
    dialogsPage: {
      dialogs: [{ id: 1, name: 'Dimych' },
      { id: 2, name: 'Andrey' },
      { id: 3, name: 'Sveta' },
      { id: 4, name: 'Sasha' },
      { id: 5, name: 'Victor' },
      { id: 6, name: 'Valera' }],
      messages: [{ id: 1, massage: 'Hi' },
      { id: 2, massage: 'How is your it-camasutra' },
      { id: 3, massage: 'Yo' },
      { id: 4, massage: 'Yo' },
      { id: 5, massage: 'Yo' },],
      newMessageBody: ''
    },
    newsPage:[{ id: 1, massage: 'просто техт' },
      { id: 2, massage: 'Просто пробы пера ' },
      { id: 3, massage: 'Yo' },
      { id: 4, massage: 'Yo' },
      { id: 5, massage: 'Yo' },],
    
  },
  _callSubskriber() {
    console.log('hueta');
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubskriber = observer;
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.DialogsPage = dialogsReducer(this._state.DialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubskriber(this._state);
    }
  
};

export default store;