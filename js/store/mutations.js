export default {
    addComment(state, payload) {
      state.comments.push(payload);
      return state;
  },
    clearItem(state, payload) {
      state.items.splice(payload.index, 1);
      
    return state;
  }
};