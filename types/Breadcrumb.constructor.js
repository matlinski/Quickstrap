import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'
function f_breadcrumb(content) {
    if (Array.isArray(content)) {
        let content_compiler = "";
        let i = 1;
        content.forEach(function (value) {

            if (i === content.length) {
                content_compiler +=
                    HTML('li', { 'class': 'breadcrumb-item active', 'aria-current': 'page' }, value)

            } else {
                content_compiler +=
                    HTML('li', { 'class': 'breadcrumb-item' }, value)
            }
            i++;
        })
        return content_compiler;

    } else {
        return 'Please set the content as an array';
    }
};

function Breadcrumb(input = '') {
    let {
        content,
        attr,
        template,
        separator,
        style,
        id
    } = Component(input, {
        content: [
            HTML('a', { 'href': 'home.HTML' }, 'home'),
            HTML('a', { 'href': 'library.HTML' }, 'library'),
            'data'
        ],
        attr: '',
        template: 'justify-content-left',
        separator: '>',
        style: ''
    }, 'breadcrumb');
    if (separator) {
        style += `
            .breadcrumb-item + .breadcrumb-item::before
            {
                content: "${separator}";
            }
            `
    }
    return compiler([
        {
            "condition": true,
            "line": HTML('ul', `id='${id}' class='breadcrumb 
                             ${template}' ` + attr_append(attr),
                f_breadcrumb(content) + ((style && style.length > 0) ? HTML('style', '', style) : '')
            )
        }
    ])
}
export default Breadcrumb;
