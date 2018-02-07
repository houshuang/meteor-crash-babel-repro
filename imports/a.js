var _createClass = require('@babel/runtime/helpers/createClass');

var _class;

var React;
module.watch(
  require('react'),
  {
    default: function(v) {
      React = v;
    }
  },
  0
);
var action, observable, computed, isObservable;
module.watch(
  require('mobx'),
  {
    action: function(v) {
      action = v;
    },
    observable: function(v) {
      observable = v;
    },
    computed: function(v) {
      computed = v;
    },
    isObservable: function(v) {
      isObservable = v;
    }
  },
  1
);
var observer;
module.watch(
  require('mobx-react'),
  {
    observer: function(v) {
      observer = v;
    }
  },
  2
);

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

var A = ((_class =
  /*#__PURE__*/
  (function() {
    function A() {
      this.x = '';
    }

    var _proto = A.prototype;

    _proto.setF = (function() {
      function setF(f) {
        console.log('setf inside', f);
        this.x = f;
        console.log(this.x);
      }

      return setF;
    })();

    _createClass(A, [
      {
        key: 'f',
        get: function() {
          console.log('compute');
          return this.x + 'arb';
        }
      }
    ]);

    return A;
  })()),
(_applyDecoratedDescriptor(
  _class.prototype,
  'f',
  [computed],
  Object.getOwnPropertyDescriptor(_class.prototype, 'f'),
  _class.prototype
),
_applyDecoratedDescriptor(
  _class.prototype,
  'setF',
  [action],
  Object.getOwnPropertyDescriptor(_class.prototype, 'setF'),
  _class.prototype
)),
_class);
var c = new A();
console.log(isObservable(c), isObservable(c, 'x'));
module.exportDefault(
  observer(function() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement('h1', null, c.f),
      React.createElement(
        'a',
        {
          onClick: function(e) {
            e.preventDefault();
            c.setF('john');
            console.log('setf result', c.f);
            console.log(isObservable(c), isObservable(c, 'x'));
          }
        },
        'Hi'
      )
    );
  })
);
c.setF('peter');
