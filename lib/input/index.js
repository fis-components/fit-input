'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = (function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, props));
    }

    _createClass(Checkbox, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.props.onChange(event.target.value);
        }
    }, {
        key: 'handleFocus',
        value: function handleFocus() {
            this.props.onFocus();
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur() {
            this.props.onBlur();
        }
    }, {
        key: 'render',
        value: function render() {
            var textStyle = {};
            if (this.props.width) {
                textStyle.width = this.props.width;
            } else {
                textStyle.flexGrow = 1;
            }

            var childs = _react2.default.createElement('input', { type: 'text',
                value: this.props.value || null,
                className: 'form-control input',
                onFocus: this.handleFocus.bind(this),
                onBlur: this.handleBlur.bind(this),
                onChange: this.handleChange.bind(this),
                disabled: this.props.disabled,
                style: textStyle });

            if (!_lodash2.default.isEmpty(this.props.label)) {
                childs = _react2.default.createElement(
                    'div',
                    { className: 'form-container' },
                    _react2.default.createElement(
                        'label',
                        { style: { width: this.props.labelWidth || null },
                            className: 'form-control-label' },
                        this.props.label
                    ),
                    childs
                );
            }

            if (!_lodash2.default.isEmpty(this.props.addonLeft) || !_lodash2.default.isEmpty(this.props.addonRight)) {
                childs = _react2.default.createElement(
                    'form',
                    { className: 'form-inline' },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-group' },
                            _lodash2.default.isEmpty(this.props.addonLeft) ? null : _react2.default.createElement(
                                'div',
                                { className: 'input-group-addon' },
                                this.props.addonLeft
                            ),
                            childs,
                            _lodash2.default.isEmpty(this.props.addonRight) ? null : _react2.default.createElement(
                                'div',
                                { className: 'input-group-addon' },
                                this.props.addonRight
                            )
                        )
                    )
                );
            }

            return _react2.default.createElement(
                'div',
                { style: this.props.style,
                    className: 'lib-pc-input-lib-input' },
                childs
            );
        }
    }]);

    return Checkbox;
})(_react2.default.Component);

exports.default = Checkbox;

Checkbox.defaultProps = {
    style: {},
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    disabled: false,
    width: null
};