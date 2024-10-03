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
          border: 1px solid #eaecee;
          border-radius: 5px;
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.1);
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



class PrintItems extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'})
  }

  connectedCallback(){
    let listArray = this.dataset.list.split(' ');

    this.shadowRoot.innerHTML = `
    <style>
      .list-wrapper{
        max-width: 300px;
        background: #d5d8dc;
        padding: 10px;
        border-radius: 5px;
        display: flex;
        gap: 25px;
      }
    .single-item{
      padding: 5px 10px;
      background: #eaecee;
      color: #273746;
      border-radius: 5px;
    }
    </style>
    <div class="list-wrapper">
     ${listArray.map(item => `<div class="single-item">${item}</div>`).join('')}
    </div>
    `
  }
}


customElements.define('print-items',PrintItems)




class CustomBtn extends HTMLElement{
  constructor(){
    super()
    this.attachShadow({mode: 'open'})
  }
  connectedCallback(){
    let text = this.getAttribute('text') || 'click me'

    this.shadowRoot.innerHTML = `
    <style>
    button{
      margin: 5px 0;
      padding: 10px 20px;
      background: #34495e;
      color: white;
      border: none;
      border-radius: 5px;
      outline:none;
      font-family: inherit;
      cursor: pointer;
    }
    
    </style>
    
    <button>${text}</button>
    
    `
  }
}


customElements.define('custom-btn',CustomBtn)