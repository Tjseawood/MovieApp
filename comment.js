class comment extends HTMLElement{
    connectedCallBack() {
        this.innerHTML = ``;
    }
}



customElements.define('my-comment', Mycomponent)