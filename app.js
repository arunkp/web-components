import './phone-contact.js';

window.addEventListener('load', () => {
    fetchData();
});

async function fetchData() {
    const res = await fetch('dirty-json.json');
    const json = await res.json();
    const frag = document.createDocumentFragment();

    json.forEach(el => {
        const item = document.createElement('phone-contact');
        item.article = el;
        frag.appendChild(item);
    });
    
    document.getElementById("app").appendChild(frag);
}