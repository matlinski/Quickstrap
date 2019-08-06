import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'

function Toast(input = '') {
     const {
          header,
          body,
          attr,
          template,
          style,
          id
     } = Component(input, {
          header: HTML('img', {
               'src': 'https://picsum.photos/20/20',
               'class': 'rounded mr-2', 'alt': '...'
          }) +
               HTML('strong', { 'class': 'mr-auto' }, 'Title example') +
               HTML('small', '', '11 mins ago'),

          body: 'Body placeholder',
          attr: '',
          template: '',
          style: ''
     }, 'toast');

     return compiler([
          {
               "condition": true,
               "line": HTML(
                    'div', `id='${id}' class='toast 
                              ${template}' ` + attr_append(attr, {
                         "data-autohide": "false",
                         "role": "alert",
                         "aria-live": "assertive",
                         "aria-atomic": "true"
                    }),
                    HTML('div',
                         { 'class': 'toast-header' },
                         header +
                         HTML('button',
                              {
                                   'type': 'button',
                                   'class': 'ml-2 mb-1 close',
                                   'data-dismiss': 'toast',
                                   'aria-label': 'close'
                              },
                              HTML('span', {
                                   'aria-hidden': 'true'
                              }, '&times;')
                         )
                    ) +
                    HTML('div', { 'class': 'toast-body' }, body) +
                    ((style && style.length > 0) ? (HTML(
                         'style',
                         '',
                         style
                    )) : '')
               )
          }
     ]);
}
export default Toast;

