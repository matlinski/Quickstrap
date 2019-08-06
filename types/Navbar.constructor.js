import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'

function Navbar(input = '') {
     const {
          content,
          tag,
          attr,
          template,
          style,
          id
     } = Component(input, {
          content: HTML('h1', { 'class': 'navbar-brand' }, 'Content placeholder'),
          tag: 'nav',
          attr: '',
          template: 'navbar-light bg-light',
          style: ''
     }, 'navbar');

     return compiler([
          {
               "condition": true,
               "line": HTML(tag, `id='${id}' class='navbar 
                           ${template}' ` + attr_append(attr),
                    content
               ) +
                    ((style && style.length > 0) ? (HTML(
                         'style',
                         '',
                         style
                    )) : '')
          }
     ]);
}
export default Navbar;