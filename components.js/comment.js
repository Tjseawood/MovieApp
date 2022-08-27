class comments extends HTMLElement{
    connectedCallBack() {
        const name = this.getAttribute('name');
        const email = this.getAttribute('email');
        const contents = this.getAttribute('contents')

        this.innerHTML = `
        <div class='comments'>
            <p>${name} | ${email}</p>
            <hr>
            ${contents}
        <style>
            .comment {
                width: 40px;
                height: auto;
                padding: 10px;
                border: 2px solid gray;
                background-color: #b8b6b6a4;
            }

            p {
                color: blue;
            }
        </style>
        <div>
        `;
    }
}

customElements.define('comments-', comments)