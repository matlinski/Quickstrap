import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'

function Modal(input = '') {
     const {
          header,
          body,
          footer,
          attr,
          template,
          trigger_id,
          style,
          id
     } = Component(input, {
          header: HTML('h5', { 'class': 'modal-title' }, 'Header placeholder'),
          body: HTML('p', '', 'Body placeholder'),
          footer: HTML('button', { 'class': 'btn btn-primary' }, 'Take action!'),
          attr: '',
          template: 'fade',
          trigger_id: 'myID',
          style: ''
     }, 'modal');
     return compiler([
          {
               "condition": true,
               "line": HTML('div', `id='${trigger_id}' class='modal 
                                             ${template}' ` + attr_append(attr, {
                    "tabindex": "-1",
                    "role": "dialog",
                    "aria-hidden": "true"
               }),
                    HTML('div',
                         { 'class': 'modal-dialog', 'role': 'document' },
                         HTML('div',
                              { 'class': 'modal-content' },
                              HTML('div',
                                   { 'class': 'modal-header' },
                                   header +
                                   HTML('button',
                                        { 'type': 'button', 'class': 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                                        HTML('span',
                                             { 'aria-hidden': 'true' },
                                             '&times;'
                                        )
                                   )
                              ) +
                              HTML('div',
                                   { 'class': 'modal-body' },
                                   body
                              ) +
                              HTML('div',
                                   { 'class': 'modal-footer' },
                                   HTML('button',
                                        { 'type': 'button', 'class': 'btn btn-secondary', 'data-dismiss': 'modal' },
                                        'Close') + footer
                              )
                         )
                    ) +
                    ((style && style.length > 0) ? (HTML(
                         'style',
                         '',
                         style
                    )) : '')
               )
          },
     ]);
}
export default Modal;