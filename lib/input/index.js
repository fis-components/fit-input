'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('./index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Checkbox = (function (_React$Component) {
    _inherits(Checkbox, _React$Component);

    function Checkbox(props) {
        _classCallCheck(this, Checkbox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).call(this, props));

        _this.state = {
            showFlexTextarea: false,
            value: _this.props.value || _this.props.defaultValue
        };
        return _this;
    }

    _createClass(Checkbox, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    checked: nextProps.value
                });
            }
        }
    }, {
        key: 'handleChange',
        value: function handleChange(event) {
            var _this2 = this;

            this.setState({
                value: event.target.value
            }, function () {
                _this2.props.onChange(_this2.state.value);
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            this.$dom = (0, _jquery2.default)(_reactDom2.default.findDOMNode(this));
            if (this.props.flexWidth || this.props.flexHeight) {
                this.forceUpdate();
                setTimeout(function () {
                    _this3.$dom.find('#j-flex-textarea').show();
                });
            }
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
        key: 'handleFlexTextareaFocus',
        value: function handleFlexTextareaFocus() {
            this.setState({
                showFlexTextarea: true
            });
        }
    }, {
        key: 'handleFlexTextareaBlur',
        value: function handleFlexTextareaBlur() {
            this.setState({
                showFlexTextarea: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var textStyle = {
                height: this.props.height,
                resize: this.props.resize ? null : 'none'
            };
            if (this.props.width) {
                textStyle.width = this.props.width;
            } else {
                textStyle.flexGrow = 1;
            }

            var mergedInputStyle = Object.assign(_lodash2.default.cloneDeep(this.props.styles.input), textStyle);

            var iconClass = (0, _classnames2.default)((_classNames = {
                'fa': true
            }, _defineProperty(_classNames, 'fa-' + this.props.icon, true), _defineProperty(_classNames, 'icon', true), _classNames));

            var childs = _react2.default.createElement('input', { type: 'text',
                id: 'j-input',
                value: this.props.value || null,
                className: 'form-control input',
                onFocus: this.handleFocus.bind(this),
                onBlur: this.handleBlur.bind(this),
                onChange: this.handleChange.bind(this),
                disabled: this.props.disabled,
                placeholder: this.props.placeholder,
                style: mergedInputStyle });

            if (this.props.textarea) {
                childs = _react2.default.createElement('textarea', {
                    id: 'j-input',
                    value: this.props.value || null,
                    className: 'form-control input',
                    onFocus: this.handleFocus.bind(this),
                    onBlur: this.handleBlur.bind(this),
                    onChange: this.handleChange.bind(this),
                    disabled: this.props.disabled,
                    placeholder: this.props.placeholder,
                    style: mergedInputStyle });
            }

            var flexTextareaStyle = {
                width: this.state.showFlexTextarea ? this.props.flexWidth || this.props.width || this.$dom && this.$dom.find('#j-input').outerWidth() || 200 : this.$dom && this.$dom.find('#j-input').outerWidth(),
                height: this.state.showFlexTextarea ? this.props.flexHeight || 120 : this.$dom && this.$dom.find('#j-input').outerHeight() || 0
            };

            var flexTextareaClass = (0, _classnames2.default)({
                'form-control': true,
                'flex-textarea': true,
                'input': true
            });

            var flexChild = _react2.default.createElement('textarea', { id: 'j-flex-textarea',
                onFocus: this.handleFlexTextareaFocus.bind(this),
                onBlur: this.handleFlexTextareaBlur.bind(this),
                className: flexTextareaClass,
                value: this.props.value || null,
                onChange: this.handleChange.bind(this),
                disabled: this.props.disabled,
                placeholder: this.props.placeholder,
                style: flexTextareaStyle });

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
                    _react2.default.createElement(
                        'div',
                        { style: { position: 'relative' } },
                        childs,
                        this.props.icon ? _react2.default.createElement('i', { className: iconClass }) : null,
                        this.props.flexHeight || this.props.flexWidth ? flexChild : null
                    )
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
                            _react2.default.createElement(
                                'div',
                                { style: { position: 'relative' } },
                                childs,
                                this.props.icon ? _react2.default.createElement('i', { className: iconClass }) : null,
                                this.props.flexHeight || this.props.flexWidth ? flexChild : null
                            ),
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
                childs,
                (this.props.flexHeight || this.props.flexWidth) && _lodash2.default.isEmpty(this.props.label) && _lodash2.default.isEmpty(this.props.addonLeft) && _lodash2.default.isEmpty(this.props.addonRight) ? flexChild : null,
                this.props.icon && _lodash2.default.isEmpty(this.props.label) && _lodash2.default.isEmpty(this.props.addonLeft) && _lodash2.default.isEmpty(this.props.addonRight) ? _react2.default.createElement('i', { className: iconClass }) : null
            );
        }
    }]);

    return Checkbox;
})(_react2.default.Component);

exports.default = Checkbox;

Checkbox.defaultProps = {
    style: {},
    styles: {
        input: {}
    },
    onChange: function onChange() {},
    onFocus: function onFocus() {},
    onBlur: function onBlur() {},
    disabled: false,
    width: null,
    placeholder: '',
    textarea: false,
    resize: false,
    flexWidth: null,
    flexHeight: null,
    icon: null
};