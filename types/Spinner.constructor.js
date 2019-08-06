import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'
function Spinner(input = '') {
     const {
          radius,
          attr,
          template,
          style,
          id
     } = Component(input, {
          radius: '2rem',
          attr: '',
          template: 'spinner-border',
          style: ''
     }, 'spinner');

     return compiler([
          {
               "condition": true,
               "line": HTML('div', `id='${id}' class='spinner 
                                                  ${template}' style='width:".${radius}."; height:"${radius}
                                                  "' `+ attr_append(attr, {
                    "role": "status"
               }),
                    HTML('span', { 'class': 'sr-only' }, 'Loading...') +
                    ((style && style.length > 0) ? (HTML(
                         'style',
                         '',
                         style
                    )) : '')
               )
          },
     ]);
}
export default Spinner;