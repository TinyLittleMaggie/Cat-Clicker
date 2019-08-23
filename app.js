var model = [{
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

var octopus = {

  // Load default cat
  init: function() {

    // Load the list of cats
    view.loadList();

    // Load the default cat
    view.loadCat(0);

    // Handle Clicks
    view.handleClicks();

  },

  getNames: function(){
    let names = [];
    model.forEach(function(cat) {
      names.push(cat.name);
    });
    return names;
  },

  // Get cat data for 'view' to use
  getCat: function(id) {
    return model[id];
  }

};

var view = {

  // Load selected cat
  loadCat: function(id) {

    let Template = `
      <img class="cat-image" src="img/Cat${id}.png" alt="A cat image">
      <p class="cat-name" style="color: ${model[id].color}">
        ${model[id].name}
      </p>
      <p class="num-of-clicks" style="color: ${model[id].color}">
        Clicks: ${model[id].count}
      </p>`;
    $('.container-cat').empty();
    $('.container-cat').append(Template);
    $('.cat-list-item').removeClass('selected-cat');
    $('[data-id=' + id + ']').addClass('selected-cat');

    $('.cat-image').click(function() {
      octopus.getCat(id).count++;
      $('.num-of-clicks').text('Clicks: ' + octopus.getCat(id).count);
    });

  },

  loadList: function() {
    // Load the list of cats
    let id = 0;
    octopus.getNames().forEach(function(name) {
      let Template = `<li class='cat-list-item'
      data-id='${id}'>${name}</li>`;
      $('.cat-list').append(Template);
      id++;
    });
  },

  // Handle clicks
  handleClicks: function() {
    for (var i = 0; i < model.length; i++) {
      let catName = $('[data-id='+ i + ']');
      catName.click((function(numCopy) {
        return function() {
          view.loadCat(numCopy);
        };
      })(i));
    };
  }
};

octopus.init();
