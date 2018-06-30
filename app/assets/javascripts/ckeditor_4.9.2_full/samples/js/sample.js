/**
 * Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* exported initSample */

if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
	CKEDITOR.tools.enableHtml5Elements(document);

// The trick to keep the editor in the sample quite small
// unless user specified own height.

CKEDITOR.config.language = 'zh-cn';
CKEDITOR.config.uiColor = '#F7B42C';
CKEDITOR.config.width = 'auto';
CKEDITOR.config.toolbarCanCollapse = true;
CKEDITOR.config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

CKEDITOR.config.removeButtons =
'Save,NewPage,Preview,Print,SelectAll,Scayt,Form,HiddenField,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,Styles,CreateDiv,BidiLtr,BidiRtl,Language,Anchor,Smiley,PageBreak,Iframe,Maximize,ShowBlocks,About';  

var initSample = ( function() {
	var wysiwygareaAvailable = isWysiwygareaAvailable(),
		isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

	return function() {
		var editorElement = CKEDITOR.document.getById('editor');

		// :(((
		if (isBBCodeBuiltIn) {
			editorElement.setHtml(
				'Hello world!\n\n' +
				'I\'m an instance of [url=https://ckeditor.com]CKEditor[/url].'
			);
		}

		// Depending on the wysiwygare plugin availability initialize classic or inline editor.
		if ( wysiwygareaAvailable ) {
			//CKEDITOR.replace('editor');
      CKEDITOR.replace('editor', {
        startupFocus : true,
				//extraPlugins: 'uploadwidget,uploadimage,filereader',
				height: 300,				
				filebrowserUploadUrl: '/upload'
        //filebrowserUploadMethod: 'form'
        //imageUploadUrl: '/upload'
			} );
		} else {
			editorElement.setAttribute('contenteditable', 'true');
			CKEDITOR.inline('editor');

			// TODO we can consider displaying some info box that
			// without wysiwygarea the classic editor may not work.
		}
	};

	function isWysiwygareaAvailable() {
		// If in development mode, then the wysiwygarea must be available.
		// Split REV into two strings so builder does not replace it :D.
		if ( CKEDITOR.revision == ('%RE' + 'V%') ) {
			return true;
		}

		return !!CKEDITOR.plugins.get('wysiwygarea');
	}
} )();

