// Initialise variables
var cats = [
{
  name: 'Alice',
  count: 0,
  color: '#BE976D'
}, {
  name: 'Jay',
  count: 6,
  color: '#5186A0'
}, {
  name: 'Bonnie',
  count: 8,
  color: '#5B75A6'
}, {
  name: 'Daniel',
  count: 15,
  color: '#C56F71'
}
];

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
  $('.container-cat').append(Template);
}

// Load the list of cats
cats.forEach(function(cat) {
  let Template = `<li class='cat-list-item'>${cat.name}</li>`;
  $('.cat-list').append(Template);
});

// Load the default cat
loadCat(0);

// Handle clicks
$('#cat1').click(function() {
  count1++;
  $('#clicks-1').text('Clicks: ' + count1);
});

$('#cat2').click(function() {
  count2++;
  $('#clicks-2').text('Clicks: ' + count2);
});

$('#cat3').click(function() {
  count3++;
  $('#clicks-3').text('Clicks: ' + count3);
});
