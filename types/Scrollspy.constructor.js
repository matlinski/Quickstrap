import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'

function f_scrollspy(content, reference_id) {
     let content_compiler = '';
     if (Array.isArray(content)) {
          content.forEach(function (value, key) {
               content_compiler +=
                    HTML('a',
                         { 'class': 'list-group-item list-group-item-action', 'href': '#' + reference_id + key },
                         value)
          })

     } else {
          content_compiler += 'Please set the content as an array';
     }
     return content_compiler;
}

function Scrollspy(input = '') {
     let {
          content,
          tag,
          attr,
          template,
          reference_id,
          style,
          id
     } = Component(input, {
          content: [
               'Top',
               'Middle',
               'Bottom'
          ],
          tag: 'nav',
          attr: '',
          template: 'navbar-light bg-light col-md-1 col-3',
          reference_id: 'id_placeholder',
          style: `&{
                    position: fixed;
                    top: 50%;
                    right: 0%;
                    z-index: 999;
                    background: transparent !important;
                    transform: translateY(-50%)
               }`
     }, 'scrollspy');
     return compiler([
          {
               "condition": true,
               "line": HTML(tag, `id='${id}' class='scrollspy 
                                             ${template}' ` + attr_append(attr, { target: 'scroll' }),
                    f_scrollspy(content, reference_id) +
                    ((style && style.length > 0) ? (HTML(
                         'style',
                         '',
                         style
                    )) : '')
               )
          }
     ]);
}
export default Scrollspy;
