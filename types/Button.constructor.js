import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import secondary_id from '../utilities/secondary_id.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'
function Button(input = '') {
    let {
        content,
        tag,
        attr,
        template,
        tooltip,
        dropdown,
        popover,
        collapse,
        style,
        id,
        parent
    } = Component(input, {
        content: 'Content placeholder',
        tag: 'button',
        attr: '',
        template: 'btn-primary',
        tooltip: false,
        dropdown: false,
        popover: false,
        collapse: false,
        style: ''
    }, 'btn');
    if (dropdown && !popover && !tooltip && !collapse) {
        style +=
            `.dropdown>.dropdown-menu>*{
                 display: block;
                 width: 100%;
                 padding: .25rem 1.5rem;
                 clear: both;
                 font-weight: 400;
                 color: #212529;
                 text-align: inherit;
                 white-space: nowrap;
                 background-color: transparent;
                 border: 0;
             }`;
    }
    let drop_length;
    let s_id = secondary_id();
    if (!Array.isArray(dropdown)) {
        drop_length = 0;
    }

    let base_attr = {};
    if (tooltip && Array.isArray(tooltip) && !dropdown && !popover && !collapse) {
        base_attr = {
            "type": "submit",
            "data-toggle": "tooltip",
            "data-placement": tooltip[1],
            "title": tooltip[0]
        };
    }
    if (tooltip && !Array.isArray(tooltip) && !dropdown && !popover && !collapse) {
        base_attr = {
            "type": "submit",
            "data-toggle": "tooltip",
            "data-placement": "top",
            "title": tooltip
        };
    }
    if (dropdown && !tooltip && !popover && !collapse) {
        base_attr = {
            "class": "dropdown-toggle",
            "type": "submit",
            "id": "dropdownMenuButton",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
        };
    }
    if (popover && Array.isArray(popover) && !tooltip && !dropdown && !collapse) {
        base_attr = {
            "data-container": "body",
            "data-toggle": "popover",
            "data-placement": popover[1],
            "data-content": popover[0]
        };
    }
    if (popover && !Array.isArray(popover) && !tooltip && !dropdown && !collapse) {
        base_attr = {
            "data-container": "body",
            "data-toggle": "popover",
            "data-placement": "top",
            "data-content": popover
        };
    }
    if (collapse && !tooltip && !dropdown && !popover) {
        base_attr = {
            "data-toggle": "collapse",
            "data-target": '#' + s_id,
            "aria-expanded": "false",
            "aria-controls": '#' + s_id
        };
    }
    if (!tooltip && !dropdown && !popover && !collapse) {
        base_attr = {
            "type": "submit"
        };
    }
    if (tag === 'a') {
        base_attr['href'] = '#'
        base_attr['role'] = 'button'
        base_attr['type'] = "submit"
    }
    if (tag === 'input') {
        base_attr['type'] = "submit"
        base_attr['value'] = content
    }
    console.log(base_attr)
    return compiler([
        {
            "condition": dropdown && !collapse && !tooltip && !popover,
            "line": HTML('div', { 'class': 'dropdown' },
                HTML(tag, `id='${id}' class='btn ${template}' ` +
                    attr_append(attr, base_attr), content + ((style && style.length > 0) ? (HTML(
                        'style',
                        '',
                        style
                    )) : '')) + ((dropdown && !Array.isArray(dropdown))
                        ? HTML('div', { 'class': 'dropdown-menu' }, dropdown)
                        : (function () {
                            let drop_compilator = "";
                            if (Array.isArray(dropdown)) {
                                dropdown.forEach(function (value) {
                                    if (!value.match(/[<>]+/)) {
                                        drop_compilator += value;
                                    } else if (value.match(/[<>]+/)) {
                                        drop_compilator += value;
                                    }
                                })
                                drop_compilator = HTML('div', { 'class': 'dropdown-menu' }, drop_compilator);
                            } else {
                                drop_compilator = dropdown;
                            }

                            return drop_compilator
                        })()
                )
            )
        },
        {
            "condition": !dropdown,
            "line": HTML(tag, `id='${id}' class='btn ${template}' ` + attr_append(attr, base_attr), content + ((style && style.length > 0) ? (HTML(
                'style',
                '',
                style
            )) : ''))
        },
        {
            "condition": collapse && !dropdown && !tooltip && !popover,
            "line": HTML('div', { 'class': 'collapse navbar-collapse', 'id': s_id }, collapse)
        }
    ]);
}
export default Button;
