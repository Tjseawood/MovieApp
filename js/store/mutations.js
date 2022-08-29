export default {
    addComment(state, payload) {
      state.comments.push(payload);
      return state;
  },
    clearComment(state, payload) {
      state.comments.splice(payload.index, 1);
      
    return state;
  }
};