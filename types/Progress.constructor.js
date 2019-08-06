import Component from './Component.constructor.js'
import attr_append from '../utilities/attr.append.js'
import compiler from '../utilities/compiler.js'
import HTML from '../utilities/HTML.func.js'

function Progress(input = '') {
     const {
          progress,
          attr,
          template,
          min,
          max,
          percent,
          style,
          id
     } = Component(input, {
          progress: 25,
          attr: '',
          template: 'bg-success',
          min: 0,
          max: 100,
          percent: false,
          style: ''
     }, 'progress');

     return compiler([
          {
               "condition": true,
               "line": HTML('div', `id='${id}' class='${progress}'
                                 style='width: ${max}% ' ` + attr_append(attr),
                    HTML('div', {
                         'class': 'progress-bar ' + template,
                         'role': 'progressbar',
                         'aria-valuenow': progress,
                         'aria-valuemin': min,
                         'aria-valuemax': max,
                         'style': 'width: ' + (progress / max * 100) + '%'
                    }, ((percent)
                         ? Math.floor(progress / max * 100) + '%'
                         : `${progress} / ${max}`
                         ))
               )
          }
     ]);
}
export default Progress;