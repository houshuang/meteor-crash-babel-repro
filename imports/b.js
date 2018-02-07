'use strict';

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class, _descriptor;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var React = void 0;
module.watch(
  require('react'),
  {
    default: (function() {
      function _default(v) {
        React = v;
      }

      return _default;
    })()
  },
  0
);

var _action = void 0,
  _observable = void 0,
  _computed = void 0,
  _isObservable = void 0;

module.watch(
  require('mobx'),
  {
    action: (function() {
      function action(v) {
        _action = v;
      }

      return action;
    })(),
    observable: (function() {
      function observable(v) {
        _observable = v;
      }

      return observable;
    })(),
    computed: (function() {
      function computed(v) {
        _computed = v;
      }

      return computed;
    })(),
    isObservable: (function() {
      function isObservable(v) {
        _isObservable = v;
      }

      return isObservable;
    })()
  },
  1
);

var _observer = void 0;

module.watch(
  require('mobx-react'),
  {
    observer: (function() {
      function observer(v) {
        _observer = v;
      }

      return observer;
    })()
  },
  2
);

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer
      ? descriptor.initializer.call(context)
      : void 0
  });
}

function _applyDecoratedDescriptor(
  target,
  property,
  decorators,
  descriptor,
  context
) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function(key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators
    .slice()
    .reverse()
    .reduce(function(desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error(
    'Decorating class property failed. Please ensure that transform-class-properties is enabled.'
  );
}

var A = ((_class = (function() {
  function A() {
    (0, _classCallCheck3.default)(this, A);

    _initDefineProp(this, 'x', _descriptor, this);

    this.x = '';
  }

  (0, _createClass3.default)(A, [
    {
      key: 'setF',
      value: (function() {
        function setF(f) {
          console.log('imports/a.js(17:4)', 'setf inside', 'f', f);
          this.x = f;
          console.log('imports/a.js(19:4)', 'this.x', this.x);
        }

        return setF;
      })()
    },
    {
      key: 'f',
      get: (function() {
        function get() {
          console.log('imports/a.js(12:4)', 'compute');
          return this.x + 'arb';
        }

        return get;
      })()
    }
  ]);
  return A;
})()),
((_descriptor = _applyDecoratedDescriptor(
  _class.prototype,
  'x',
  [_observable],
  {
    enumerable: true,
    initializer: null
  }
)),
_applyDecoratedDescriptor(
  _class.prototype,
  'f',
  [_computed],
  Object.getOwnPropertyDescriptor(_class.prototype, 'f'),
  _class.prototype
),
_applyDecoratedDescriptor(
  _class.prototype,
  'setF',
  [_action],
  Object.getOwnPropertyDescriptor(_class.prototype, 'setF'),
  _class.prototype
)),
_class);
var c = new A();
console.log(
  'imports/a.js(23:0)',
  'isObservable(c)',
  _isObservable(c),
  "isObservable(c, 'x')",
  _isObservable(c, 'x')
);
module.exportDefault(
  _observer(function() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('h1', null, c.f),
      React.createElement(
        'a',
        {
          onClick: (function() {
            function onClick(e) {
              e.preventDefault();
              c.setF('john');
              console.log('imports/a.js(31:8)', 'setf result', 'c.f', c.f);
              console.log(
                'imports/a.js(32:8)',
                'isObservable(c)',
                _isObservable(c),
                "isObservable(c, 'x')",
                _isObservable(c, 'x')
              );
            }

            return onClick;
          })()
        },
        'Hi'
      )
    );
  })
);
c.setF('peter');
