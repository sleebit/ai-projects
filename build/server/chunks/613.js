"use strict";
exports.id = 613;
exports.ids = [613];
exports.modules = {

/***/ 26613:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bU: () => (/* binding */ $6be4966fd9bbc698$export$6521433ed15a34db),
/* harmony export */   fC: () => (/* binding */ $6be4966fd9bbc698$export$be92b6f5f03c0fe9)
/* harmony export */ });
/* unused harmony exports createSwitchScope, Switch, SwitchThumb */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(69885);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14958);
/* harmony import */ var _radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49837);
/* harmony import */ var _radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95866);
/* harmony import */ var _radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64352);
/* harmony import */ var _radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17421);
/* harmony import */ var _radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(97020);
/* harmony import */ var _radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15585);



















/* -------------------------------------------------------------------------------------------------
 * Switch
 * -----------------------------------------------------------------------------------------------*/ const $6be4966fd9bbc698$var$SWITCH_NAME = 'Switch';
const [$6be4966fd9bbc698$var$createSwitchContext, $6be4966fd9bbc698$export$cf7f5f17f69cbd43] = (0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__/* .createContextScope */ .b)($6be4966fd9bbc698$var$SWITCH_NAME);
const [$6be4966fd9bbc698$var$SwitchProvider, $6be4966fd9bbc698$var$useSwitchContext] = $6be4966fd9bbc698$var$createSwitchContext($6be4966fd9bbc698$var$SWITCH_NAME);
const $6be4966fd9bbc698$export$b5d5cf8927ab7262 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeSwitch: __scopeSwitch , name: name , checked: checkedProp , defaultChecked: defaultChecked , required: required , disabled: disabled , value: value = 'on' , onCheckedChange: onCheckedChange , ...switchProps } = props;
    const [button, setButton] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const composedRefs = (0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__/* .useComposedRefs */ .e)(forwardedRef, (node)=>setButton(node)
    );
    const hasConsumerStoppedPropagationRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false); // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = button ? Boolean(button.closest('form')) : true;
    const [checked = false, setChecked] = (0,_radix_ui_react_use_controllable_state__WEBPACK_IMPORTED_MODULE_3__/* .useControllableState */ .T)({
        prop: checkedProp,
        defaultProp: defaultChecked,
        onChange: onCheckedChange
    });
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($6be4966fd9bbc698$var$SwitchProvider, {
        scope: __scopeSwitch,
        checked: checked,
        disabled: disabled
    }, /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__/* .Primitive */ .WV.button, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        type: "button",
        role: "switch",
        "aria-checked": checked,
        "aria-required": required,
        "data-state": $6be4966fd9bbc698$var$getState(checked),
        "data-disabled": disabled ? '' : undefined,
        disabled: disabled,
        value: value
    }, switchProps, {
        ref: composedRefs,
        onClick: (0,_radix_ui_primitive__WEBPACK_IMPORTED_MODULE_6__/* .composeEventHandlers */ .M)(props.onClick, (event)=>{
            setChecked((prevChecked)=>!prevChecked
            );
            if (isFormControl) {
                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(); // if switch is in a form, stop propagation from the button so that we only propagate
                // one click event (from the input). We propagate changes from an input so that native
                // form validation works and form events reflect switch updates.
                if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
        })
    })), isFormControl && /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)($6be4966fd9bbc698$var$BubbleInput, {
        control: button,
        bubbles: !hasConsumerStoppedPropagationRef.current,
        name: name,
        value: value,
        checked: checked,
        required: required,
        disabled: disabled // We transform because the input is absolutely positioned but we have
        ,
        style: {
            transform: 'translateX(-100%)'
        }
    }));
});
/*#__PURE__*/ Object.assign($6be4966fd9bbc698$export$b5d5cf8927ab7262, {
    displayName: $6be4966fd9bbc698$var$SWITCH_NAME
});
/* -------------------------------------------------------------------------------------------------
 * SwitchThumb
 * -----------------------------------------------------------------------------------------------*/ const $6be4966fd9bbc698$var$THUMB_NAME = 'SwitchThumb';
const $6be4966fd9bbc698$export$4d07bf653ea69106 = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((props, forwardedRef)=>{
    const { __scopeSwitch: __scopeSwitch , ...thumbProps } = props;
    const context = $6be4966fd9bbc698$var$useSwitchContext($6be4966fd9bbc698$var$THUMB_NAME, __scopeSwitch);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_4__/* .Primitive */ .WV.span, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        "data-state": $6be4966fd9bbc698$var$getState(context.checked),
        "data-disabled": context.disabled ? '' : undefined
    }, thumbProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($6be4966fd9bbc698$export$4d07bf653ea69106, {
    displayName: $6be4966fd9bbc698$var$THUMB_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $6be4966fd9bbc698$var$BubbleInput = (props)=>{
    const { control: control , checked: checked , bubbles: bubbles = true , ...inputProps } = props;
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const prevChecked = (0,_radix_ui_react_use_previous__WEBPACK_IMPORTED_MODULE_7__/* .usePrevious */ .D)(checked);
    const controlSize = (0,_radix_ui_react_use_size__WEBPACK_IMPORTED_MODULE_8__/* .useSize */ .t)(control); // Bubble checked change to parents (e.g form change event)
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const input = ref.current;
        const inputProto = window.HTMLInputElement.prototype;
        const descriptor = Object.getOwnPropertyDescriptor(inputProto, 'checked');
        const setChecked = descriptor.set;
        if (prevChecked !== checked && setChecked) {
            const event = new Event('click', {
                bubbles: bubbles
            });
            setChecked.call(input, checked);
            input.dispatchEvent(event);
        }
    }, [
        prevChecked,
        checked,
        bubbles
    ]);
    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)({
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked
    }, inputProps, {
        tabIndex: -1,
        ref: ref,
        style: {
            ...props.style,
            ...controlSize,
            position: 'absolute',
            pointerEvents: 'none',
            opacity: 0,
            margin: 0
        }
    }));
};
function $6be4966fd9bbc698$var$getState(checked) {
    return checked ? 'checked' : 'unchecked';
}
const $6be4966fd9bbc698$export$be92b6f5f03c0fe9 = $6be4966fd9bbc698$export$b5d5cf8927ab7262;
const $6be4966fd9bbc698$export$6521433ed15a34db = $6be4966fd9bbc698$export$4d07bf653ea69106;





//# sourceMappingURL=index.mjs.map


/***/ })

};
;