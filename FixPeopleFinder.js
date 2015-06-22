$('.barrier').remove();
$('.maginot img').css({
  'max-width': '300px',
  'width': 'auto',
});


if (document.location.search == "?party") {
  $('img').each(function(i, el) {
    el = $(el);
    orig_src = $(el).attr('src')
    el.attr('src', "http://partyhatify.herokuapp.com/?src=" + orig_src);
  })
}

var query_str = $('#query').val().trim();
var correct_result = $('.search-result>:contains("'+query_str+'")').parent();
var tmp_result = correct_result.clone()
correct_result.remove();
correct_result.insertAfter($('.pagination'))