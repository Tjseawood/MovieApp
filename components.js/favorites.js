class Favorites extends HTMLElement{
    connectedCallback() {
      this.innerHTML = `
        <h1>Tyler</h1>
      `
    }
}
  
customElements.define('favorite-', Favorites);