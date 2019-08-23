/* ========== Model ========== */

var model = {
  currentCatID: 0,
  cats: [{
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
  }]
};

/* ========= Octopus ========= */

var octopus = {

  // Load default cat
  init: function() {

    // Load the list of cats
    catListView.loadList();
    catListView.handleClicks();

    // Load the default cat
    catView.loadCat(0);

  },

  getNames: function(){
    let names = [];
    model.cats.forEach(function(cat) {
      names.push(cat.name);
    });
    return names;
  },

  // Get cat data for 'view' to use
  getCat: function(id) {
    return model.cats[id];
  },

  // Set current cat ID
  setCurrentCat: function(id) {
    model.currentCatID = id;
  }

};

/* ========== View ========== */

var catListView = {

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
    let numOfCats = octopus.getNames().length;
    for (var i = 0; i < numOfCats; i++) {
      let catName = $('[data-id='+ i + ']');
      catName.click((function(numCopy) {
        return function() {
          octopus.setCurrentCat(numCopy);
          catView.loadCat(numCopy);
        };
      })(i));
    };
  }
};

var catView = {

  // Load selected cat
  loadCat: function(id) {
    let cat = octopus.getCat(id);
    let Template = `
      <img class="cat-image" src="img/Cat${id}.png" alt="A cat image">
      <p class="cat-name" style="color: ${cat.color}">
        ${cat.name}
      </p>
      <p class="num-of-clicks" style="color: ${cat.color}">
        Clicks: ${cat.count}
      </p>
      <div class="edit-button">Edit</div>`;
    $('.container-cat').empty();
    $('.container-cat').append(Template);
    $('.cat-list-item').removeClass('selected-cat');
    $('[data-id=' + id + ']').addClass('selected-cat');

    $('.cat-image').click(function() {
      octopus.getCat(id).count++;
      $('.num-of-clicks').text('Clicks: ' + octopus.getCat(id).count);
    });

    $('.edit-button').click(function() {
      editView.render();
    });

  }

};

var editView = {
  render: function() {
    let name = model.cats[model.currentCatID].name;
    console.log(name + ' says: "I am clicked!"');
  }
};

/* ========== Start! ========== */

octopus.init();
