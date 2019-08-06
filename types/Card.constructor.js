import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'
import rand from '../utilities/rand.func.js'
function Card(input = '') {
     const {
          content,
          tag,
          attr,
          template,
          image,
          style,
          id
     } = Component(input, {
          content: HTML('h5', '', "Title placeholder") +
               HTML('p', '', "Body placeholder") +
               HTML('button', { 'class': 'btn btn-primary' }, 'Click here'),
          tag: 'div',
          attr: '',
          template: 'col-lg-3 col-md-5 col-sm-7 col-12',
          image: HTML('img', { 'width': '100%', 'src': 'https://source.unsplash.com/' + rand(320, 370) + 'x350/', 'alt': '...' }),
          style: `&>img{
                         "background-size: cover;
                         "border-top-left-radius: calc(+25rem - 1px);
                         "border-top-right-radius: calc(+25rem - 1px);
                    }`
     }, 'card');

     return compiler([
          {
               "condition": true,
               "line": HTML(
                    tag,
                    `id='${id}' class='card ${template}' ` + attr_append(attr),
                    image + HTML('div', { 'class': 'card-body' }, content) +
                    ((style && style.length > 0) ? (HTML(
                         'style',
                         '',
                         style
                    )) : '')
               )
          },
     ]);
}
export default Card;
