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
CKEDITOR.config.uiColor = '#67C067';
CKEDITOR.config.width = 'auto';
CKEDITOR.config.toolbarCanCollapse = true;

CKEDITOR.config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'forms', groups: [ 'forms' ] },
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'tools', groups: [ 'tools' ] },
		{ name: 'others', groups: [ 'others' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

CKEDITOR.	config.removeButtons = 'Save,NewPage,Preview,Print,Templates,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,RemoveFormat,CreateDiv,BidiLtr,BidiRtl,Language,Anchor,Image,Flash,Smiley,PageBreak,Iframe,Maximize,ShowBlocks,About,Find,Replace,Indent,Outdent,Table,HorizontalRule,Styles';

var initSample = ( function() {
	var wysiwygareaAvailable = isWysiwygareaAvailable(),
		isBBCodeBuiltIn = !!CKEDITOR.plugins.get( 'bbcode' );

	return function() {
		var editorElement = CKEDITOR.document.getById('courseEditor');

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
      CKEDITOR.replace('courseEditor', {
        startupFocus : true,
				//extraPlugins: 'uploadwidget,uploadimage,filereader',
				height: 300,				
				filebrowserUploadUrl: '/upload'
        //filebrowserUploadMethod: 'form'
        //imageUploadUrl: '/upload'
			} );
		} else {
			editorElement.setAttribute('contenteditable', 'true');
			CKEDITOR.inline('courseEditor');

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

