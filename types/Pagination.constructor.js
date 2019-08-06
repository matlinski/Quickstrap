import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'

function f_pagination(links, inter, active) {
    let links_compiler = '';
    if (Array.isArray(links)) {
        let i = 1;

        if (inter) {
            links_compiler +=
                HTML('li',
                    { 'class': 'page-item' + ((i == active) ? ' disabled' : '') },
                    HTML('a',
                        { 'class': 'page-link', 'href': ((i != active) ? links[active - 2] : '#') },
                        ((Array.isArray(inter))
                            ? inter[0]
                            : 'previous'
                        )
                    )
                )

        };

        links.forEach(function (value) {
            links_compiler +=
                HTML('li',
                    { 'class': 'page-item' + ((i == active) ? ' active' : '') },
                    HTML('a', { 'class': 'page-link', 'href': value }, i)
                )
            i++;
        })
        if (inter) {
            links_compiler +=
                HTML('li',
                    { 'class': 'page-item' + ((i == active + 1) ? ' disabled' : '') },
                    HTML('a',
                        { 'class': 'page-link', 'href': (((i != active + 1) ? links[active] : '#')) },
                        ((Array.isArray(inter))
                            ? inter[1]
                            : 'next'
                        )
                    )
                )

        };
    } else {
        links_compiler = 'Please set the links as an array';
    }
    return links_compiler;
}

function Pagination(input = '') {
    const {
        links,
        tag,
        attr,
        template,
        active,
        inter,
        style,
        id
    } = Component(input, {
        links: [
            '#id1',
            '#id2',
            '#id3'
        ],
        tag: 'ul',
        attr: '',
        template: 'justify-links-left',
        active: 3,
        inter: [
            "previous",
            "next"
        ],
        style: ''
    }, 'pagination');

    return compiler([
        {
            "condition": true,
            "line": HTML(tag, `id='${id}' class='pagination ${template}' ` + attr_append(attr),
                f_pagination(links, inter, active)
            )
        },
    ]);
}
export default Pagination;
