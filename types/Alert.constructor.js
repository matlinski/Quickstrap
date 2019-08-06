import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'

function Alert(input = '') {
	const {
		content,
		tag,
		attr,
		template,
		dismisable,
		style,
		id
	} = Component(input, {
		content: 'Content placeholder',
		tag: 'div',
		attr: '',
		template: 'alert-warning fade show',
		dismisable: true,
		style: ''
	}, 'alert');
	return compiler([
		{
			condition: true,
			line: HTML(
				tag,
				`id="${id}" class="alert ${template}"` +
				attr_append(attr, { role: 'alert' }),
				content +
				((style && style.length > 0) ? (HTML(
					'style',
					'',
					style
				)) : '') +
				(
					(dismisable)
						? (
							HTML(
								'button',
								{
									type: 'button',
									class: 'close',
									'data-dismiss': 'alert',
									'aria-label': 'close'
								},
								HTML(
									'span',
									{ 'aria-hidden': 'true' },
									'&times;'
								)
							)
						)
						: ''
				)
			)
		}
	]);
}
export default Alert;

