import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'

function Jumbotron(input = '') {
     const {
          header,
          body,
          tag,
          attr,
          template,
          style,
          id
     } = Component(input, {
          header: HTML('h1', { 'class': 'display-4' }, 'Header placeholder'),
          body: HTML('p', { 'class': 'lead' }, 'This is a body placeholder.') +
               HTML('button', { 'class': 'btn btn-primary' }, 'Take action!'),
          tag: 'div',
          attr: '',
          template: 'jumbotron-fluid',
          style: `&{
                         background-image: url(\'https://source.unsplash.com/featured/?dark\');
                         background-size: cover;
                         color: white
                    }`
     }, 'jumbotron');

     return compiler([
          {
               "condition": true,
               "line": HTML(tag, `id='${id}' class='jumbotron 
                               ${template}' ` + attr_append(attr),
                    HTML('div',
                         { 'class': 'container' },
                         header + body) +
                    ((style && style.length > 0) ? (HTML(
                         'style',
                         '',
                         style
                    )) : '')
               )
          }
     ]);
}
export default Jumbotron;