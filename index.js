const trbl = prefix => {
  const rules = [];

  if (prefix) {
    rules.push(prefix);
    prefix += '-';
  } else {
    prefix = '';
  }

  return rules.concat([
    `${prefix}top`,
    `${prefix}right`,
    `${prefix}bottom`,
    `${prefix}left`
  ]);
};

const vendorPrefixWkMz = property => {
  const rules = [];
  const prefixes = ['-webkit', '-moz'];

  return rules.concat(prefixes.map(p => `${p}-${property}`), property);
};

const vendorPrefixAll = property => {
  const rules = [];
  const prefixes = ['-webkit', '-moz', '-ms', '-o'];

  return rules.concat(prefixes.map(p => `${p}-${property}`), property);
};

const minMax = suffix => [suffix, `min-${suffix}`, `max-${suffix}`];
const xy = property => [property, `${property}-x`, `${property}-y`];

const positioning = []
  .concat('position')
  .concat(trbl())
  .concat('z-index');

const displayAndBoxModel = []
  .concat(vendorPrefixWkMz('box-sizing'))
  .concat(['display']);

const flexbox = [
  'flex',
  'flex-basis',
  'flex-direction',
  'flex-flow',
  'flex-grow',
  'flex-shrink',
  'flex-wrap',
  'align-content',
  'align-items',
  'align-self',
  'justify-content',
  'order'
];

const gridLayout = [
  'grid',
  'grid-auto-flow',
  'grid-auto-rows',
  'grid-auto-columns',
  'grid-area',
  'grid-row',
  'grid-row-start',
  'grid-row-end',
  'grid-column',
  'grid-column-start',
  'grid-column-end',
  'grid-gap',
  'grid-row-gap',
  'grid-column-gap',
  'grid-template',
  'grid-template-areas',
  'grid-template-rows',
  'grid-template-columns'
]
  .concat('float')
  .concat(minMax('width'))
  .concat(minMax('height'))
  .concat(trbl('padding'))
  .concat(trbl('margin'))
  .concat(xy('overflow'))
  .concat(['clip', 'clear']);

const typography = [
  'font',
  'font-family',
  'font-size',
  'font-style',
  'font-weight',
  'font-variant',
  'font-size-adjust',
  'font-stretch',
  'font-effect',
  'font-emphasize',
  'font-emphasize-position',
  'font-emphasize-style',
  'font-smooth',
  '-webkit-hyphens',
  '-moz-hyphens',
  'hyphens',
  'line-height',
  'color',
  'text-align',
  '-webkit-text-align-last',
  '-moz-text-align-last',
  '-ms-text-align-last',
  'text-align-last',
  'text-emphasis',
  'text-emphasis-color',
  'text-emphasis-style',
  'text-emphasis-position',
  'text-decoration',
  'text-indent',
  'text-justify',
  'text-outline',
  '-ms-text-overflow',
  'text-overflow',
  'text-overflow-ellipsis',
  'text-overflow-mode',
  'text-shadow',
  'text-transform',
  'text-wrap',
  '-webkit-text-size-adjust',
  '-ms-text-size-adjust',
  'letter-spacing',
  '-ms-word-break',
  'word-break',
  'word-spacing',
  '-ms-word-wrap',
  'word-wrap',
  'overflow-wrap',
  '-moz-tab-size',
  '-o-tab-size',
  'tab-size',
  'white-space',
  'vertical-align',
  'list-style',
  'list-style-position',
  'list-style-type',
  'list-style-image'
];

const accessibility = [
  'pointer-events',
  '-ms-touch-action',
  'touch-action',
  'cursor',
  'visibility',
  'zoom',
  'table-layout',
  'empty-cells',
  'caption-side',
  'border-spacing',
  'border-collapse',
  'content',
  'quotes',
  'counter-reset',
  'counter-increment',
  'resize',
  '-webkit-user-select',
  '-moz-user-select',
  '-ms-user-select',
  '-o-user-select',
  'user-select',
  'nav-index',
  'nav-up',
  'nav-right',
  'nav-down',
  'nav-left'
];

const backgroundAndBorder = [
  'background',
  'background-color',
  'background-image',
  'filter',
  'background-repeat',
  'background-attachment',
  'background-position',
  'background-position-x',
  'background-position-y',
  '-webkit-background-clip',
  '-moz-background-clip',
  'background-clip',
  'background-origin',
  '-webkit-background-size',
  '-moz-background-size',
  '-o-background-size',
  'background-size',
  'background-blend-mode',
  'isolation',
  'border',
  'border-color',
  'border-style',
  'border-width',
  'border-top',
  'border-top-color',
  'border-top-style',
  'border-top-width',
  'border-right',
  'border-right-color',
  'border-right-style',
  'border-right-width',
  'border-bottom',
  'border-bottom-color',
  'border-bottom-style',
  'border-bottom-width',
  'border-left',
  'border-left-color',
  'border-left-style',
  'border-left-width',
  'border-radius',
  'border-top-left-radius',
  'border-top-right-radius',
  'border-bottom-right-radius',
  'border-bottom-left-radius',
  '-webkit-border-image',
  '-moz-border-image',
  '-o-border-image',
  'border-image',
  '-webkit-border-image-source',
  '-moz-border-image-source',
  '-o-border-image-source',
  'border-image-source',
  '-webkit-border-image-slice',
  '-moz-border-image-slice',
  '-o-border-image-slice',
  'border-image-slice',
  '-webkit-border-image-width',
  '-moz-border-image-width',
  '-o-border-image-width',
  'border-image-width',
  '-webkit-border-image-outset',
  '-moz-border-image-outset',
  '-o-border-image-outset',
  'border-image-outset',
  '-webkit-border-image-repeat',
  '-moz-border-image-repeat',
  '-o-border-image-repeat',
  'border-image-repeat',
  'outline',
  'outline-width',
  'outline-style',
  'outline-color',
  'outline-offset',
  '-webkit-box-shadow',
  '-moz-box-shadow',
  'box-shadow',
  'mix-blend-mode',
  'opacity',
  '-ms-interpolation-mode'
];

const transitionAnimation = []
  .concat(vendorPrefixAll('transition'))
  .concat(vendorPrefixAll('transition-delay'))
  .concat(vendorPrefixAll('transition-timing-function'))
  .concat(vendorPrefixAll('transition-duration'))
  .concat(vendorPrefixAll('transition-property'))
  .concat(vendorPrefixAll('transform'))
  .concat(vendorPrefixAll('transform-origin'))
  .concat(vendorPrefixAll('animation'))
  .concat(vendorPrefixAll('animation-name'))
  .concat(vendorPrefixAll('animation-duration'))
  .concat(vendorPrefixAll('animation-play-state'))
  .concat(vendorPrefixAll('animation-timing-function'))
  .concat(vendorPrefixAll('animation-delay'))
  .concat(vendorPrefixAll('animation-iteration-count'))
  .concat(vendorPrefixAll('animation-direction'));

const propertyList = [
  ...positioning,
  ...displayAndBoxModel,
  ...flexbox,
  ...gridLayout,
  ...typography,
  ...backgroundAndBorder,
  ...transitionAnimation,
  ...accessibility
];

module.exports = {
  plugins: [
    'stylelint-no-unsupported-browser-features',
    'stylelint-selector-no-utility',
    'stylelint-scss',
    'stylelint-order'
  ],
  extends: '/usr/local/lib/node_modules/stylelint-config-standard',
  rules: {
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-empty-line-before': [
      'always',
      { except: ['blockless-after-same-name-blockless', 'first-nested'] },
      { ignore: ['after-comment'] },
      {
        ignoreAtRules: ['else']
      }
    ],
    'block-closing-brace-newline-before': 'always',
    'block-opening-brace-newline-after': 'always',
    'color-named': 'never',
    'color-no-invalid-hex': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment']
      }
    ],
    'scss/at-extend-no-missing-placeholder': true,
    'scss/at-function-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/at-import-no-partial-leading-underscore': true,
    'scss/at-import-partial-extension-blacklist': ['scss'],
    'scss/at-mixin-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/dollar-variable-colon-space-after': 'always',
    'scss/dollar-variable-colon-space-before': 'never',
    'scss/dollar-variable-pattern': '^[_]?[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/percent-placeholder-pattern': '^[a-z]+([a-z0-9-]+[a-z0-9]+)?$',
    'scss/selector-no-redundant-nesting-selector': true,
    'selector-class-pattern': [
      '^[a-z0-9\\-]+$',
      {
        message:
          'Selector should be written in lowercase with hyphens (selector-class-pattern)'
      }
    ],
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-no-qualifying-type': [true, { ignore: ['attribute'] }],
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-quotes': 'single',
    'value-no-vendor-prefix': true,
    'order/order': [
      { type: 'at-rule', name: 'extend' },
      'custom-properties',
      'dollar-variables',
      'declarations',
      { type: 'at-rule', name: 'include' },
      { type: 'at-rule', name: 'media' },
      {
        type: 'at-rule',
        name: 'include',
        parameter: 'media-breakpoint-[a-z]+'
      },
      'at-rules',
      'rules'
    ],
    'order/properties-order': [
      { properties: propertyList, unspecified: 'bottomAlphabetical' }
    ],
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
        browsers: ['> 2%', 'not op_mini > 0', 'not OperaMini all']
      }
    ],
    'primer/selector-no-utility': true
  }
};
