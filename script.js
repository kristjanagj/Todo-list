$(document).ready(function () {

	$('#add-btn').click(function(event) {
		event.preventDefault();
		var item = $('#todo-list-item').val();
		if(item) {
			$('#list-items').append("<li>* " + item + "<i class='material-icons'> delete </i></li>");
			$('#todo-list-item').val("");
		}
	});

	$(document).on('click', '.material-icons', function() {
		$(this).parent().remove();
	});
});