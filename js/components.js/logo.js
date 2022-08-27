class logo extends HTMLElement {
    connectedCallback() {
    this.innerHTML = ` 
     <div class="logo">
         <div class="container">
           <h1>Flic<span>Pic</span></h1>
      </div>

      <style>
      
      .logo{
        padding: 1rem 0;
        border-bottom: 1px solid var(--light-color);
      }
      .logo h1{
        font-size: 2rem;
        color:var(--light-color);
        font-weight: bold;
      }
      .logo h1 span{
       color: var(--blue-color);
      }

      </style>
    </div>
    `;
    }
}
  
customElements.define('logo-', logo);