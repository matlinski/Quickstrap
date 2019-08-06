import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'

function f_carousel(active, interval = 5000, content) {

    if (Array.isArray(content)) {
        let content_compiler = '';
        content.forEach(function (value, key) {
            if ((key + 1) === active) {
                content_compiler += HTML('div', { 'class': 'carousel-item active', 'data-interval': interval }, value);

            } else {
                content_compiler += HTML('div', { 'class': 'carousel-item', 'data-interval': interval }, value);
            }
        })
        return content_compiler;
    } else {
        return 'Please set the content as an array';
    }
}

function f2_carousel(content, active, id) {
    return HTML(
        'ol',
        { 'class': 'carousel-indicators' },
        (function () {
            let temp = '';
            content.forEach(function (value, key) {

                if ((key + 1) === active) {
                    temp +=
                        HTML('li', { 'data-target': '#' + id, 'data-slide-to': key, 'class': 'active' })

                } else {
                    temp +=
                        HTML('li', { 'data-target': '#' + id, 'data-slide-to': key })
                }
            })
            return temp;
        })()
    );
}







function Carousel(input = '') {
    const {
        content,
        tag,
        attr,
        template,
        active,
        controls,
        indicators,
        interval,
        style,
        id
    } = Component(input, {
        content: [
            HTML('div',
                '',
                HTML('h2', { 'class': 'display-4' }, 'First caption') +
                HTML('p', '', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est ipsam, deleniti quo quos illo voluptatibus consequuntur magni quae eaque deserunt neque explicabo consectetur minima autem placeat suscipit odit inventore!')
            ) +
            HTML('img', { 'src': 'https://source.unsplash.com/2501x300?moon', 'alt': '...' }),

            HTML('div',
                '',
                HTML('h2', { 'class': 'display-4' }, 'Second caption') +
                HTML('p', '', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est ipsam, deleniti quo quos illo voluptatibus consequuntur magni quae eaque deserunt neque explicabo consectetur minima autem placeat suscipit odit inventore!')
            ) +
            HTML('img', { 'src': 'https://source.unsplash.com/2500x300?moon', 'alt': '...' }),

            HTML('div',
                '',
                HTML('h2', { 'class': 'display-4' }, 'Third caption') +
                HTML('p', '', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error est ipsam, deleniti quo quos illo voluptatibus consequuntur magni quae eaque deserunt neque explicabo consectetur minima autem placeat suscipit odit inventore!')
            ) +
            HTML('img', { 'src': 'https://source.unsplash.com/2499x300?moon', 'alt': '...' })
        ],
        tag: 'div',
        attr: '',
        template: 'slide',
        active: 2,
        controls: true,
        indicators: true,
        interval: 5000,
        style: `&>.carousel-inner>.carousel-item>:not(img) {
                position: absolute;
                right: 15%;
                bottom: 20px;
                left: 15%;
                z-index: 10;
                padding-top: 20px;
                padding-bottom: 20px;
                color: #fff;
                text-align: center;
            }`
    }, 'carousel');

    return compiler([
        {
            "condition": true,
            "line": HTML
                (
                    tag,
                    `id='${id}' class='carousel 
                                                ${template}' ` + attr_append(attr, {
                        "data-ride": "carousel"
                    }),
                    ((indicators) ? f2_carousel(content, active, id) : '') +
                    HTML('div',
                        { 'class': 'carousel-inner' },
                        f_carousel(active, interval, content)
                    ) + ((style && style.length > 0) ? (HTML(
                        'style',
                        '',
                        style
                    )) : '') +
                    ((Array.isArray(content) && controls)
                        ? HTML('a',
                            { 'class': 'carousel-control-prev', 'href': '#' + id, 'role': 'button', 'data-slide': 'prev' },
                            HTML('span', { 'class': 'carousel-control-prev-icon', 'aria-hidden': 'true' }) +
                            HTML('span', { 'class': 'sr-only' }, 'Previous')
                        ) +
                        HTML('a',
                            { 'class': 'carousel-control-next', 'href': '#' + id, 'role': 'button', 'data-slide': 'next' },
                            HTML('span', { 'class': 'carousel-control-next-icon', 'aria-hidden': 'true' }) +
                            HTML('span', { 'class': 'sr-only' }, 'Next')
                        )
                        : ''
                    )
                )
        }
    ]);
}
export default Carousel;