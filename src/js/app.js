'use strict';
const $ = require('jquery');
window.$ = $;
window.jQuery = $;

require('bootstrap');

import ace from 'ace-builds/src-noconflict/ace';
import hashcash from '@elasticms/hashcash';

const assetPath = document.querySelector("BODY").getAttribute('data-asset-path') ;
ace.config.set('basePath', assetPath + 'js/ace' );
window.CKEDITOR_BASEPATH = assetPath + 'js/ckeditor/';

require('ckeditor');

$( document ).ready(function() {
    const codeEditors = document.getElementsByClassName('ems-code-editor');
    for(let i = 0;i < codeEditors.length; i++) {
        const codeDiv = $(codeEditors[i]);
        console.log(codeDiv);
        let pre = codeEditors[i];
        let language = codeDiv.data('language');
        language = language?language:'ace/mode/twig';
        let theme = 'ace/theme/monokai';
        ace.edit(pre, {
            mode: language,
            readOnly: true,
            maxLines: 400,
            theme: theme
        });
    }

    $('.ckeditor_default').each(function(){
        CKEDITOR.replace( $( this ).attr('id'), {
            "plugins": "a11yhelp,basicstyles,bidi,blockquote,clipboard,colorbutton,colordialog,contextmenu,dialogadvtab,div,elementspath,enterkey,entities,filebrowser,find,floatingspace,format,horizontalrule,htmlwriter,image2,indentlist,indentblock,justify,language,list,liststyle,magicline,maximize,newpage,pastefromword,pastetext,preview,removeformat,resize,save,scayt,selectall,showborders,sourcearea,specialchar,stylescombo,tab,table,tabletools,templates,toolbar,undo,wsc,wysiwygarea",
            "pasteFromWordRemoveFontStyles": true,
            "pasteFromWordRemoveStyles": true,
            "contentsCss": assetPath + 'css/index.css',
            "height": 400,
            "language": "en",
            "toolbarGroups": [{
                "name": "clipboard",
                "groups": ["clipboard", "undo"]
            }, {
                "name": "clipboard",
                "groups": ["clipboard", "undo"]
            }, {
                "name": "editing",
                "groups": ["spellchecker"]
            }, {
                "name": "links"
            }, {
                "name": "insert"
            }, {
                "name": "tools",
                "groups": ["mode"]
            }, "/", {
                "name": "basicstyles",
                "groups": ["basicstyles", "cleanup"]
            }, {
                "name": "paragraph",
                "groups": ["list", "indent", "blocks", "align"]
            }, {
                "name": "styles"
            }],
            "stylesSet": [{
                "name": "Shell code",
                "element": "pre",
                "attributes" : {
                    "class": "ems-code-editor",
                    "data-language": "ace/mode/sh",
                    "data-theme": "ace/theme/monokai",
                    "data-max-lines": "400"
                }
            },{
                "name": "YAML code",
                "element": "pre",
                "attributes" : {
                    "class": "ems-code-editor",
                    "data-language": "ace/mode/yaml",
                    "data-theme": "ace/theme/monokai",
                    "data-max-lines": "400"
                }
            },{
                "name": "Apache Conf code",
                "element": "pre",
                "attributes" : {
                    "class": "ems-code-editor",
                    "data-language": "ace/mode/apache_conf",
                    "data-theme": "ace/theme/monokai",
                    "data-max-lines": "400"
                }
            },{
                "name": "Twig code",
                "element": "pre",
                "attributes" : {
                    "class": "ems-code-editor",
                    "data-language": "ace/mode/twig",
                    "data-theme": "ace/theme/monokai",
                    "data-max-lines": "400"
                }
            },{
                "name": "JSON code",
                "element": "pre",
                "attributes" : {
                    "class": "ems-code-editor",
                    "data-language": "ace/mode/json",
                    "data-theme": "ace/theme/monokai",
                    "data-max-lines": "400"
                }
            },{
                "name": "Javascript code",
                "element": "pre",
                "attributes" : {
                    "class": "ems-code-editor",
                    "data-language": "ace/mode/javascript",
                    "data-theme": "ace/theme/monokai",
                    "data-max-lines": "400"
                }
            }]
        });
    });

});


hashcash();
