import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'

function Input(input = '') {
     let {
          content,
          tag,
          attr,
          template,
          label,
          sticker,
          global,
          style,
          id
     } = Component(input, {
          content: 'Content placeholder',
          tag: 'input',
          attr: '',
          template: '',
          label: "Label placeholder",
          sticker: HTML('span', '', '@'),
          global: 'col-4',
          style: ''
     }, 'form-group');

     if (sticker.match(/<\/span>/)) {
          style += '#' + id + `.form-group>.input-group>div{
                   display: -ms-flexbox;
                   display: flex;
                   -ms-flex-align: center;
                   align-items: center;
                   padding: .375rem .75rem;
                   margin-bottom: 0;
                   font-size: 1rem;
                   font-weight: 400;
                   line-height: 1.5;
                   color: #495057;
                   text-align: center;
                   white-space: nowrap;
                   background-color: #e9ecef;
                   border: 1px solid #ced4da;
                   border-radius: .25rem;
               }`;
     }
     let base_attr = {
          "type": "text",
          "placeholder": "example placeholder",
          "aria-label": "example",
          "aria-describedby": "basic-addon"
     };
     if (tag === 'input') {
          base_attr = {
               "type": "text",
               "placeholder": "example placeholder",
               "aria-label": "example",
               "aria-describedby": "basic-addon",
               "value": content
          }
     }
     return compiler([
          {
               "condition": true,
               "line": HTML(
                    'div',
                    `id='${id}' style='width:auto' class='form-group ${global}'`,
                    ((label)
                    
                    ?((Array.isArray(label))
                         ? HTML('label', { 'for': id, 'class': label[1] }, label[0])
                         : HTML('label', { 'for': id }, label)
                    )
                    :''
                    ) +
                    HTML(
                         'div',
                         { 'class': 'input-group', 'style': 'width:auto' }
                         , ((sticker)
                              ? ((Array.isArray(sticker))
                                   ? ((sticker[1] !== "append")
                                        ? HTML('div', { 'class': 'input-group-' + sticker[1] }, sticker[0]) +
                                        HTML(tag, `class="form-control ${template}"` + attr_append(attr, base_attr), content)
                                        : HTML(tag, `class="form-control ${template}"` + attr_append(attr, base_attr), content) +
                                        HTML('div', { 'class': 'input-group-' + sticker[1] }, sticker[0])
                                   )
                                   : HTML('div', { 'class': 'input-group-prepend' }, sticker) +
                                   HTML(tag, `class="form-control ${template}"` + attr_append(attr, base_attr), content)
                              )
                              : HTML(tag, `class="form-control ${template}"` + attr_append(attr, base_attr), content)
                         )
                    ) +
                    ((style && style.length > 0) ? (HTML(
                         'style',
                         '',
                         style
                    )) : '')
               )
          }
     ]);
}
export default Input;