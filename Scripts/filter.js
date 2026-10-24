/*Filter */
var filterLinks = document.querySelectorAll('.filter-bar a');

if (filterLinks.length > 0) {
    filterLinks.forEach(function(link) {
        link.addEventListener('click', function (e) {
        e.preventDefault();
        var chosen = link.dataset.filter;

        filterLinks.forEach(function (a) {
            var isThis = (a === link);
            a.classList.toggle('active', isThis);
            a.setAttribute('aria-pressed', isThis);
        });

        document.querySelectorAll('[data-cat]').forEach(function(item){
         item.hidden = !(chosen === 'all' || item.dataset.cat === chosen);   
        });
        });
    });
}