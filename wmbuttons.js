$('document').ready(function() {
	require(['composer', 'composer/controls'], function(composer, controls) {
		composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '>insert spoiler disini<');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '>','<');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-youtube', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '->http://');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '->','');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		
});
