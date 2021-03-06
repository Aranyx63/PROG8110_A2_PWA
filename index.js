const fetch = require('sync-fetch');
const Page = require("./_layout/Default");

module.exports = class extends Page {
    constructor(){
        super({title:"Home", sName:"Group 6"});
    }
    render(sPage) {
        const oJson = fetch("https://popup-meals-b6bfd-default-rtdb.firebaseio.com/meals.json").json();
        console.log(oJson);
        let sResult = "<h1>Upcoming Popup Meals</h1>";
        let n = 0;
        Object.keys(oJson).map((key) => {
            const oEntity = oJson[key];
            console.log(oEntity);
            oEntity.id = key;
            sResult += `
            <h2>${oEntity.title}</h2>
            <h4><span style="font-weight:bold">Event Date:</span> ${oEntity.event_date}</h4>
            <p><img src="${oEntity.featured_image}" alt="${oEntity.title}"</p>
            <p>${oEntity.full_description}</p>
            <p><span style="font-weight:bold">Location:</span> ${oEntity.location}</p>
            <p><span style="font-weight:bold">Cost:</span> $ ${oEntity.cost}</p>
            <form>
                <button id="button_${n++}" disabled class="paypal_button" data-cost="${oEntity.cost}">
                Order now
                </button>
            </form>
            `;
        });
        return sResult;
    }
}