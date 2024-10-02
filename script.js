class UserCard extends HTMLElement{
  
  constructor(){
    super();
    this.attachShadow({mode: 'open'})
  }

  connectedCallback(){
    let img = this.hasAttribute('img') ? this.getAttribute('img') : 'no-img-found';
    let title = this.hasAttribute('title') ? this.getAttribute('title') : 'no-title-found';
    
    this.shadowRoot.innerHTML = `
      <style>
        .user-card-wrapper{
          width: 300px;
          border: 1px solid #efefef;
          border-radius: 5px;
          overflow: hidden;
          padding: 20px;
        }
          .user-img{
            width: 100%;
            border-radius: 5px;

          }
          .user-name{
            margin: 5px 0;
          }
      </style>
    
      <div class="user-card-wrapper">
        <img class="user-img" src="${img}" />
        <h2 class="user-name">${title}</h2>
        <p><slot></slot></p>
      </div>
    `
  }


  attributeChangedCallback(name,oldVal,newVal){
    if(name == 'title'){
      this.shadowRoot.innerHTML = newVal;
    }
  }



  static get observedAttributes(){
    return ['title']
  }
}


customElements.define('user-card',UserCard)