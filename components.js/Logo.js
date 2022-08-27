class Logo extends HTMLElement {
    connectedCallback() {
    this.innerHTML = `
     <div class="logo">
         <div class="container">
            <h1>Flic<span>Pic</span></h1>
      </div>
    </div>
    `;
    }
}
  
customElements.define('logo-', Logo);