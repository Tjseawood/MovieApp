export default {
    addItem(context, payload) {
    context.commit('addComment', payload);
  },
  clearItem(context, payload) {
    context.commit('clearItem', payload);
    }
  };