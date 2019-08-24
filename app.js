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

  getNames: function() {
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
  setCurrentCatID: function(id) {
    model.currentCatID = id;
  },

  // Get current cat ID
  getCurrentCatID: function() {
    return model.currentCatID;
  },

  // Get current cat
  getCurrentCat: function() {
    return model.cats[model.currentCatID];
  },

  // Update name according to form input
  updateName: function(name) {
    let id = model.currentCatID;
    // Update data
    model.cats[id].name = name;
    // Reload the list of cat and the selected cat
    catListView.loadList();
    catListView.handleClicks();
    catView.loadCat(id);
  },

  // Update clicks according to form input
  updateClicks: function(count) {
    let id = model.currentCatID;
    // Update data
    model.cats[id].count = count;
    // Reload the selected cat
    catView.loadCat(id);
  }

};

/* ========== View ========== */

var catListView = {

  loadList: function() {
    // Empty out existing list
    $('.cat-list-item').remove();
    // Load the list with data
    let id = 0;
    octopus.getNames().forEach(function(name) {
      let template = `<li class='cat-list-item'
      data-id='${id}'>${name}</li>`;
      $('.cat-list').append(template);
      id++;
    });
    // Underline selected cat
    let currentCatID = octopus.getCurrentCatID();
    $('.cat-list-item').removeClass('selected-cat');
    $('[data-id=' + currentCatID + ']').addClass('selected-cat');
  },

  // Handle clicks
  handleClicks: function() {
    let numOfCats = octopus.getNames().length;
    for (var i = 0; i < numOfCats; i++) {
      let catName = $('[data-id=' + i + ']');
      catName.click((function(numCopy) {
        return function() {
          octopus.setCurrentCatID(numCopy);
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
    let template = `
      <img class="cat-image" src="img/Cat${id}.png" alt="A cat image">
      <p class="cat-name" style="color: ${cat.color}">
        ${cat.name}
      </p>
      <p class="num-of-clicks" style="color: ${cat.color}">
        Clicks: ${cat.count}
      </p>
      <div class="edit-button">Edit</div>`;
    $('.container-cat').empty();
    $('.container-cat').append(template);
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
    let name = octopus.getCurrentCat().name;
    let count = octopus.getCurrentCat().count;
    let template = `
    <form class="form-container">
      <div>
        <label for="name">Name: </label>
        <input type="text" id="name" placeholder="${name}">
      </div>
      <div>
        <label for="email">Clicks: </label>
        <input type="text" id="clicks" placeholder="${count}">
      </div>
      <div>
        <button type="submit" id="save">Save</button>
        <button type="button" id="cancel">Cancel</button>
      </div>
    </form>`;
    $('.form-container').remove();
    $('.container-main').append(template);

    $('#cancel').click(function() {
      $('.form-container').remove();
    });

    $('.form-container').submit(function(event) {
      let name = $('#name').val();
      let clicks = $('#clicks').val();
      if (name) {
        octopus.updateName(name);
      }
      if (clicks) {
        octopus.updateClicks(clicks);
      }
      $('.form-container').remove();
      event.preventDefault();
    });

  }
};

/* ========== Start! ========== */

octopus.init();
