var count = 0;

$('.cat').click(function() {
  count++;
  $('.num-of-clicks').text('Clicks: ' + count);
});
