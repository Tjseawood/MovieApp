export default {
    addComment(context, payload) {
    context.commit('addComment', payload);
  },
  clearComment(context, payload) {
    context.commit('clearComment', payload);
  }
  };