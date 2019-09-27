class PhoneContact extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });
    }
    set article(article) {
        this.root.innerHTML = `
            <style>
            * {
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
                Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
            }
            
            max-img {
                width: 100%;
            }

            .contact-person img {
                width: 140px;
                height: 140px;
            }

            .contact {
                box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.16);
            }

            </style>
            <div class="contact">
                <h1 data-id="${article._id}">${article.name}</h1>
                <h2>${article.address}</h2>
                <div class='contact-person'><img src="${article.picture}" ></div>
            </div>

        `
    }
}

customElements.define('phone-contact', PhoneContact);