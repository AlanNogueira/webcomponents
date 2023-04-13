class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement('div');
    componentRoot.setAttribute('class', 'card');

    const cardLeft = document.createElement('div');
    cardLeft.setAttribute('class', 'card_left');

    const autor = document.createElement('span');
    autor.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous');

    const linkTitle = document.createElement('a');
    linkTitle.textContent = this.getAttribute('linkTitle');
    linkTitle.href = this.getAttribute('link-url');

    const newsContent = document.createElement('p');
    newsContent.textContent = this.getAttribute('newsContent');

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement('div');
    cardRight.setAttribute('class', 'card_righ');
    const newsImage = document.createElement('img');
    newsImage.src =
      this.getAttribute('img-url') ||
      'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg';
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
        .card{
            width: 80%;
            max-height: 50%;
            -webkit-box-shadow: 5px 6px 12px -4px rgba(0,0,0,0.75);
            -moz-box-shadow: 5px 6px 12px -4px rgba(0,0,0,0.75);
            box-shadow: 5px 6px 12px -4px rgba(0,0,0,0.75);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > a {
            margin-top: 15px;
            font-size: 25px;
            text-decoration: none;
            color: black;
            font-weight: bold;
        }
        
        .card_left > p{
            color: rgb(70, 70, 70);
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_right > img {
            height: 50%;
        }
        `;
    return style;
  }
}

customElements.define('card-news', CardNews);
