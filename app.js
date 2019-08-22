// Initialise variables
var count1 = 0;
var count2 = 0;
var count3 = 0;
var catName1 = 'Alice';
var catName2 = 'Jay';
var catName3 = 'Bonnie';


// Display cat names
$('#cat-name-1').text(catName1);
$('#cat-name-2').text(catName2);
$('#cat-name-3').text(catName3);


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
