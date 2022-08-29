class Comment extends HTMLElement {
    connectedCallback() {
      const name = this.getAttribute('name');
      const email = this.getAttribute('email');
      const contents = this.getAttribute('contents');
  
      this.innerHTML = `
      <div class='comment'>
        <p>${name} | ${email}</p>
        <hr>
        ${contents}
      <style>
        .comment {
          
          width: 40%;
          height: auto;
          padding: 10px;
          border: 2px solid gray;
          background-color: #b8b6b6a4;
        }
        p {
          color: #fff;
        }
      </style>
      </div>
      `;
    }
  }
  
customElements.define('comment-', Comment);
export default Comment;