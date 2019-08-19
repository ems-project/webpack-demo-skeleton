'use strict';
const $ = require('jquery');
window.$ = $;
window.jQuery = $;

require('bootstrap');
import ace from 'ace-builds/src-noconflict/ace';
import hashcash from '@elasticms/hashcash';

const assetPath = document.querySelector("BODY").getAttribute('data-asset-path') ;
ace.config.set('basePath', assetPath + 'js/ace' );

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
});


hashcash();
