/*Menu js- renamed and updated all the code according to what the poe wants */

var IMG = '../Assets/images/';
 var CATS = {
    events: 'Events Catering',
    weekday: 'Weekday Menu',
    private: 'Private Catering'
 };

 //price = number used for sorting, label = text shown
 var MENU = [
    {cat: 'events', name: 'Harvest Table', price: 5000, label: 'R5 000',
        desc: 'Fresh fruits picked straight from our farm to your table.',
        img: 'Harvest-Table-800.jpg', img400: 'Harvest-Table-400.jpg',
        alt: 'Harvest table laid out with fresh fruit'},
     {cat: 'events', name: 'Harvest Table', price: 1500, label: 'Serving of 20 cups: R1 500',
        desc: 'Various flavours from peppermint crisp tart cups to Choclate mousse cups.',
        img: 'desertable-800.png.jpg', img400: 'desertable-400.png.jpg',
        alt: 'Dessert table'},   
        {cat: 'events', name: 'Canapes', price: 2500, label: 'Serving of 20 canapes: R2 500',
        desc: 'Canapes topped with cream cheese, fresh vegetables and/or rump steak.',
        img: 'private-chef2-resized-800.png.jpg', img400: 'private-chef2-resized-400.png.jpg',
        alt: 'Canapes'},  
        {cat: 'events', name: 'Custom Cake', price: 800, label: 'Starting price: R800',
        desc: 'Freshly baked cakes with any flavour of your choice.',
        img: 'Paw-petrol-cake-800.jpg', img400: 'Paw-petrol-cake-400.jpg',
        alt: 'Custom cake'}, 
        {cat: 'events', name: 'Custom Cupcakes', price: 500, label: 'Starting price: R500',
        desc: 'Freshly baked cakes with a flavour and design of your choice.',
        img: 'cupcakes-birtday-800.jpg', img400: 'cupcakes-birtday-400.jpg',
        alt: 'Custom cupcakes'}, 
        {cat: 'events', name: 'Finger Food Spread', price: 3500, label: 'Starting price: R3 500',
        desc: 'An exquisite collection of hand-crafted bites, designed to delight the senses.',
        img: 'Event-1-800.jpg', img400: 'Event-1-400.jpg',
        alt: 'Finger food'}, 

        {cat: 'weekday', name: 'Cinnamon Rolls', price: 250, label: 'R250',
        desc: 'Freshly baked, soft and fluffy rolls with four different flavours.',
        img: 'cinnamon-rolls-800.jpg', img400: 'cinnamon-rolls-400.jpg',
        alt: 'Cinnamon rolls'}, 
          {cat: 'weekday', name: 'Chicken Champ Combo', price: 150, label: 'R150',
        desc: 'Freshly baked, fluffy buns stuffed with a crispy fried chicken served with crispy fries and wings on the side.',
        img: 'Chicken-burger-800.jpg', img400: 'Chicken-burger-400.jpg',
        alt: 'Chicken burger'}, 
         {cat: 'weekday', name: 'BBQ Mac Attack', price: 100, label: 'R100',
        desc: 'Creamy, cheesy macaroni served with a side of sweet and sticky chicken bites.',
        img: 'Mac-chesse-800.jpg', img400: 'Mac-chesse-gallery.jpg',
        alt: 'Mac and chesse'}, 
        {cat: 'weekday', name: 'Beefy Bliss Combo', price: 160, label: 'R160',
        desc: 'Classic, juicy beef burger served with crispy fries and wings on the side.',
        img: 'beef-bliss-800.jpg', img400: 'beef-bliss-400.jpg',
        alt: 'Beef burger'}, 

         {cat: 'private', name: 'Breakfast Spread', price: null, label: 'Price on request',
        desc: 'Menu curated according to the clients request.',
        img: 'breakfast-catering-800.jpg', img400: 'breakfast-catering-400.jpg',
        alt: 'Breakfast spread'},
         {cat: 'private', name: 'Lunch Spread', price: null, label: 'Price on request',
        desc: 'Menu curated according to the clients request.',
        img: 'Burger-meal - private-800.jpg', img400: 'Burger-meal- private-400.jpg',
        alt: 'Lunch spread'},
        {cat: 'private', name: 'Dinner Spread', price: null, label: 'Price on request',
        desc: 'Menu curated according to the clients request.',
        img: 'private-dinner-loadge-800.jpg', img400: 'private-dinner-loadge-400.jpg',
        alt: 'Dinner spread'},
 ];

 var grid = document.getElementById('menu-grid');

 if (grid){
    var state = {cat: 'all', query: '', sort: 'default'};
    var searchBox = document.getElementById('menu-search');
    var sortBox = document.getElementById('menu-sort');
    var countLine = document.getElementById('result-count');
    var emptyMsg = document.getElementById('no-results');
    var filterLinks = document.querySelectorAll('.filter-bar a');

    function makeCard(item){
        var card = document.createElement('article');
        card.className = 'card';

        var img = document.createElement('img');
        img.src = IMG + item.img;
        if (item.img400) {
            img.srcset = IMG + item.img400 + ' 400w, ' + IMG + item.img + ' 800w';
        }
        img.sizes = '(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw';
        img.alt = item.alt;
        img.width = 800;
        img.height = 600;
        img.loading = 'lazy';

        var body = document.createElement('div');
        body.className = 'card-body';

        var tag = document.createElement('span');
        tag.className = 'tag';
        tag.textContent = CATS[item.cat];

        var h3 = document.createElement('h3');
        h3.textContent = item.name;

        var p = document.createElement('p');
        p.textContent = item.desc;

        var price = document.createElement('p');
        price.className = 'price';
        price.textContent = item.label;

        body.appendChild(tag);
        body.appendChild(h3);
        body.appendChild(p);
        body.appendChild(price);
        card.appendChild(img);
        card.appendChild(body);
        return card;
    }

    // Items with POR always sort to the end
    function compare(a, b){
        if (state.sort === 'name') { return a.name.localeCompare(b.name); }
        if (state.sort === 'price-low' || state.sort === 'price-high') {
            if (a.price === null && b.price === null) { return 0;}
            if (a.price === null) {return 1; }
            if (b.price === null) {return -1; }
            return state.sort === 'price-low' ? a.price - b.price : b.price - a.price;
        } 
        return 0;
    }

    function updated() {
        var q = state.query.toLowerCase();
        var list = MENU.filter(function (item) {
            var inCat = state.cat === 'all' || item.cat === state.cat;
            var matches = q === '' ||
            item.name.toLowerCase().indexOf(q) !== -1 ||
            item.desc.toLowerCase().indexOf(q) !== -1;
            return inCat && matches; 
        });
        list = list.slice().sort(compare);

        grid.innerHTML = '';
        list.forEach(function (item) {grid.appendChild(makeCard(item));});

        emptyMsg.hidden = list.length !== 0;
        countLine.textContent = 'Showing' + list.length + ' of ' + MENU.length + ' items';
    }

    searchBox.addEventListener('input', function () {
        state.query = searchBox.value.trim();
        updated();
    });
    sortBox.addEventListener('change', function() {
        state.sort = sortBox.value;
        updated();
    });
    

    filterLinks.forEach(function(link) {
        link.addEventListener('click', function (e) {
        e.preventDefault();
        state.cat = link.dataset.filter;

        filterLinks.forEach(function (a) {
            var isThis = (a === link);
            a.classList.toggle('active', isThis);
            a.setAttribute('aria-pressed', isThis);
        });
        updated();  
        });
        });
    updated();
}