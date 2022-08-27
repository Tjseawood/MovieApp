class comment extends HTMLElement {
  connectedCallback() {
    const name = this.getAttribute('name');
    const email = this.getAttribute('email');
    const contents = this.getAttribute('contents');

    this.innerHTML = `

        <div class="comment">
         <p>@${name} | ${contents}

        <style>
          .comment {
            font-size: 16px;
            width: auto;
            height: auto;
            color: #fff;
            padding: 10px;
        }
        </style>

        
    `;
  }
}

customElements.define('comment-', comment);
