$('document').ready(function() {
	require(['composer', 'composer/controls'], function(composer, controls) {
		composer.addButton('fa fa-strikethrough', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '~~Insert Text Here~~');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '~~','~~');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-underline', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '~Insert Text Here~');
				controls.updateTextareaSelection(textarea, selectionStart + 1, selectionEnd + 17);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '~','~');
				controls.updateTextareaSelection(textarea, selectionStart + 1, selectionEnd + 2);
			}
		});	
		composer.addButton('fa fa-code', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '```\nInsert Code Here\n```');
				controls.updateTextareaSelection(textarea, selectionStart + 4, selectionEnd + 21);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '```\n','\n```\n');
				controls.updateTextareaSelection(textarea, selectionStart + 4, selectionEnd + 4);
			}
		});
		composer.addButton('fa fa-quote-right', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '@Username / Website said:\n> ');
				controls.updateTextareaSelection(textarea, selectionStart + 28, selectionEnd + 28);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '@Username / Website said:\n> ','\n\n');
			}
		});
		composer.addButton('fa fa-align-left', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '<-Insert Text Here<-');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '<-','<-');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-align-center', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '->Insert Text Here<-');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '->','<-');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-align-right', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '->Insert Text Here->');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '->','->');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-align-justify', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-bell', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-camera', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-youtube', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-file-image-o', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-file-image-o', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});composer.addButton('fa fa-github-square', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-calculator', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-calendar', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-archive', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-trash', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-money', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
	});
});
