import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'
import rand from '../utilities/rand.func.js'

function Media(input = '') {
     let {
          content,
          image,
          tag,
          attr,
          template,
          reverse,
          style,
          id
     } = Component(input, {
          content: HTML('h5', '', "Content placeholder") +
               HTML('p', '',
                    `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Nesciunt repellendus perspiciatis maxime porro. Est ab cum,
                         porro ullam dicta expedita! Quis a, vero nemo dolore assumenda
                         vitae impedit doloremque reiciendis.`) +
               HTML('button', { 'class': 'btn btn-primary' }, 'Click here'),
          image: HTML('img', { 'src': 'https://picsum.photos/' + rand(190, 210) + '/200', 'class': 'card-img-top col-md-2 col-sm-4 col-6 mt-4', 'alt': '...' }),
          tag: 'div',
          attr: '',
          template: '',
          reverse: false,
          style: ''
     }, 'media');

     style += `#id>.media{
            display: flex; flex-direction: row
            }
            #id>.media>img{
                flex-basis: 150px; margin: 1.25rem 0 0 1.25rem
            } 
            #id>.media>.card-body{
                flex-basis: 100%
            }`;

     return compiler([
          {
               "condition": true,
               "line": HTML(
                    tag,
                    `id='${id}' class='media 
                                   ${template}'` + attr_append(attr),
                    ((!reverse)
                         ? image + HTML('div', { 'class': 'card-body' }, content)
                         : HTML('div', { 'class': 'card-body' }, content) + image
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
export default Media;