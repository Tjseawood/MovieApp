import Component from '../lib/component.js';
import store from '../store/index.js';

export default class Comment extends Component {
  constructor() {
    super({
      store,
      element: document.querySelector('.comments')
    });
  }

  render() {
    if (store.state.comments.length === 0) {
      this.element.innerHTML = `<p class = 'comment-form'>No comments yet!</p>`;
      return;
    }

    this.element.innerHTML = `
    <div class='comments-list'>
      ${store.state.comments.map(comment => {
        return `
        <comment- name='${comment.name}' email='${comment.email}' contents='${comment.contents}'></comment->
        <button id="deleteButton">Delete Comment</button>
        `;
      }).join('')}
    </div>`;
    this.element.querySelectorAll('button').forEach((button, index) => {
      button.addEventListener('click', () => {
        store.dispatch('clearComment', { index });
      });
    });
  }
};