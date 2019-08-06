import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'


function f_navs(content, active, disabled) {
    let content_compiler = '';
    if (Array.isArray(content) && content[0].match('href')) {
        content.forEach(function (value, key) {
            value = value.split('href');

            if ((key + 1) == active) {
                value[0] += 'class ="nav-link active" ';

            } else if ((key + 1) == disabled) {
                value[0] += 'class ="nav-link disabled" ';

            } else {
                value[0] += 'class ="nav-link" ';
            }
            value = value.join('href');
            content_compiler += HTML('li', { 'class': 'nav-item' }, value);
        })
    } else {
        content_compiler = 'Please set the content as an array, each element has to have a href attribute';
    }

    return content_compiler;
}


function Navs(input = '') {
    const {
        content,
        tag,
        attr,
        template,
        active,
        disabled,
        style,
        id
    } = Component(input, {
        content: [
            HTML('a', { 'href': 'home.HTML' }, 'Home'),
            HTML('a', { 'href': 'about.HTML' }, 'About us'),
            HTML('a', { 'href': 'contact.HTML' }, 'Contact')
        ],
        tag: 'ul',
        attr: '',
        template: 'nav-tabs',
        active: 2,
        disabled: 1,
        style: ''
    }, 'nav');

    return compiler([
        {
            "condition": true,
            "line": HTML(tag, `id='${id}' class='nav 
                        ${template}' ` + attr_append(attr),
                f_navs(content, active, disabled) +
                ((style && style.length > 0) ? (HTML(
                    'style',
                    '',
                    style
                )) : '')
            )
        },
    ]);
}
export default Navs;