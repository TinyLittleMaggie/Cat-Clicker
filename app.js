// Initialise variables
var cats = [{
  name: 'Alice',
  count: 0,
  color: '#BE976D'
}, {
  name: 'Jay',
  count: 0,
  color: '#5186A0'
}, {
  name: 'Bonnie',
  count: 0,
  color: '#5B75A6'
}, {
  name: 'Daniel',
  count: 0,
  color: '#C56F71'
}];

// Load selected cat
function loadCat(id) {

  let Template = `
    <img class="cat-image" src="img/Cat${id}.png" alt="A cat image">
    <p class="cat-name" style="color: ${cats[id].color}">
      ${cats[id].name}
    </p>
    <p class="num-of-clicks" style="color: ${cats[id].color}">
      Clicks: ${cats[id].count}
    </p>`;
  $('.container-cat').empty();
  $('.container-cat').append(Template);
  $('.cat-list-item').removeClass('selected-cat');
  $('[data-id=' + id + ']').addClass('selected-cat');

  $('.cat-image').click(function() {
    cats[id].count++;
    $('.num-of-clicks').text('Clicks: ' + cats[id].count);
  });

}

// Load default cat
function init() {

  // Load the list of cats
  let id = 0;
  cats.forEach(function(cat) {
    let Template = `<li class='cat-list-item' data-id='${id}'>${cat.name}</li>`;
    $('.cat-list').append(Template);
    id++;
  });

  // Load the default cat
  loadCat(0);

}

// Initialise the page
init();

// Handle clicks
for (var i = 0; i < cats.length; i++) {
  let catName = $('[data-id='+ i + ']');
  catName.click((function(numCopy) {
    return function() {
      loadCat(numCopy);
    };
  })(i));
};
