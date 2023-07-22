"use strict";
exports.id = 396;
exports.ids = [396];
exports.modules = {

/***/ 99396:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z$: () => (/* binding */ $f99a8c78507165f7$export$adb584737d712b70),
  ck: () => (/* binding */ $f99a8c78507165f7$export$6d08773d2e66f8f2),
  fC: () => (/* binding */ $f99a8c78507165f7$export$be92b6f5f03c0fe9)
});

// UNUSED EXPORTS: RadioGroup, RadioGroupIndicator, RadioGroupItem, createRadioGroupScope

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(69885);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/primitive/dist/index.mjs
var dist = __webpack_require__(14958);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var react_compose_refs_dist = __webpack_require__(49837);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-context/dist/index.mjs
var react_context_dist = __webpack_require__(95866);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-primitive/dist/index.mjs
var react_primitive_dist = __webpack_require__(15585);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-collection/dist/index.mjs
var react_collection_dist = __webpack_require__(25580);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-id/dist/index.mjs
var react_id_dist = __webpack_require__(81042);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs
var react_use_callback_ref_dist = __webpack_require__(76601);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var react_use_controllable_state_dist = __webpack_require__(64352);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-direction/dist/index.mjs
var react_direction_dist = __webpack_require__(64416);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-roving-focus/dist/index.mjs























const $d7bdfb9eb0fdf311$var$ENTRY_FOCUS = 'rovingFocusGroup.onEntryFocus';
const $d7bdfb9eb0fdf311$var$EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
/* -------------------------------------------------------------------------------------------------
 * RovingFocusGroup
 * -----------------------------------------------------------------------------------------------*/ const $d7bdfb9eb0fdf311$var$GROUP_NAME = 'RovingFocusGroup';
const [$d7bdfb9eb0fdf311$var$Collection, $d7bdfb9eb0fdf311$var$useCollection, $d7bdfb9eb0fdf311$var$createCollectionScope] = (0,react_collection_dist/* createCollection */.B)($d7bdfb9eb0fdf311$var$GROUP_NAME);
const [$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext, $d7bdfb9eb0fdf311$export$c7109489551a4f4] = (0,react_context_dist/* createContextScope */.b)($d7bdfb9eb0fdf311$var$GROUP_NAME, [
    $d7bdfb9eb0fdf311$var$createCollectionScope
]);
const [$d7bdfb9eb0fdf311$var$RovingFocusProvider, $d7bdfb9eb0fdf311$var$useRovingFocusContext] = $d7bdfb9eb0fdf311$var$createRovingFocusGroupContext($d7bdfb9eb0fdf311$var$GROUP_NAME);
const $d7bdfb9eb0fdf311$export$8699f7c8af148338 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    return /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$var$Collection.Provider, {
        scope: props.__scopeRovingFocusGroup
    }, /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$var$Collection.Slot, {
        scope: props.__scopeRovingFocusGroup
    }, /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl, (0,esm_extends/* default */.Z)({}, props, {
        ref: forwardedRef
    }))));
});
/*#__PURE__*/ Object.assign($d7bdfb9eb0fdf311$export$8699f7c8af148338, {
    displayName: $d7bdfb9eb0fdf311$var$GROUP_NAME
});
/* -----------------------------------------------------------------------------------------------*/ const $d7bdfb9eb0fdf311$var$RovingFocusGroupImpl = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup: __scopeRovingFocusGroup , orientation: orientation , loop: loop = false , dir: dir , currentTabStopId: currentTabStopIdProp , defaultCurrentTabStopId: defaultCurrentTabStopId , onCurrentTabStopIdChange: onCurrentTabStopIdChange , onEntryFocus: onEntryFocus , ...groupProps } = props;
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    const [currentTabStopId = null, setCurrentTabStopId] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: currentTabStopIdProp,
        defaultProp: defaultCurrentTabStopId,
        onChange: onCurrentTabStopIdChange
    });
    const [isTabbingBackOut, setIsTabbingBackOut] = (0,react_.useState)(false);
    const handleEntryFocus = (0,react_use_callback_ref_dist/* useCallbackRef */.W)(onEntryFocus);
    const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
    const isClickFocusRef = (0,react_.useRef)(false);
    const [focusableItemsCount, setFocusableItemsCount] = (0,react_.useState)(0);
    (0,react_.useEffect)(()=>{
        const node = ref.current;
        if (node) {
            node.addEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus);
            return ()=>node.removeEventListener($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, handleEntryFocus)
            ;
        }
    }, [
        handleEntryFocus
    ]);
    return /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$var$RovingFocusProvider, {
        scope: __scopeRovingFocusGroup,
        orientation: orientation,
        dir: direction,
        loop: loop,
        currentTabStopId: currentTabStopId,
        onItemFocus: (0,react_.useCallback)((tabStopId)=>setCurrentTabStopId(tabStopId)
        , [
            setCurrentTabStopId
        ]),
        onItemShiftTab: (0,react_.useCallback)(()=>setIsTabbingBackOut(true)
        , []),
        onFocusableItemAdd: (0,react_.useCallback)(()=>setFocusableItemsCount((prevCount)=>prevCount + 1
            )
        , []),
        onFocusableItemRemove: (0,react_.useCallback)(()=>setFocusableItemsCount((prevCount)=>prevCount - 1
            )
        , [])
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        tabIndex: isTabbingBackOut || focusableItemsCount === 0 ? -1 : 0,
        "data-orientation": orientation
    }, groupProps, {
        ref: composedRefs,
        style: {
            outline: 'none',
            ...props.style
        },
        onMouseDown: (0,dist/* composeEventHandlers */.M)(props.onMouseDown, ()=>{
            isClickFocusRef.current = true;
        }),
        onFocus: (0,dist/* composeEventHandlers */.M)(props.onFocus, (event)=>{
            // We normally wouldn't need this check, because we already check
            // that the focus is on the current target and not bubbling to it.
            // We do this because Safari doesn't focus buttons when clicked, and
            // instead, the wrapper will get focused and not through a bubbling event.
            const isKeyboardFocus = !isClickFocusRef.current;
            if (event.target === event.currentTarget && isKeyboardFocus && !isTabbingBackOut) {
                const entryFocusEvent = new CustomEvent($d7bdfb9eb0fdf311$var$ENTRY_FOCUS, $d7bdfb9eb0fdf311$var$EVENT_OPTIONS);
                event.currentTarget.dispatchEvent(entryFocusEvent);
                if (!entryFocusEvent.defaultPrevented) {
                    const items = getItems().filter((item)=>item.focusable
                    );
                    const activeItem = items.find((item)=>item.active
                    );
                    const currentItem = items.find((item)=>item.id === currentTabStopId
                    );
                    const candidateItems = [
                        activeItem,
                        currentItem,
                        ...items
                    ].filter(Boolean);
                    const candidateNodes = candidateItems.map((item)=>item.ref.current
                    );
                    $d7bdfb9eb0fdf311$var$focusFirst(candidateNodes);
                }
            }
            isClickFocusRef.current = false;
        }),
        onBlur: (0,dist/* composeEventHandlers */.M)(props.onBlur, ()=>setIsTabbingBackOut(false)
        )
    })));
});
/* -------------------------------------------------------------------------------------------------
 * RovingFocusGroupItem
 * -----------------------------------------------------------------------------------------------*/ const $d7bdfb9eb0fdf311$var$ITEM_NAME = 'RovingFocusGroupItem';
const $d7bdfb9eb0fdf311$export$ab9df7c53fe8454 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeRovingFocusGroup: __scopeRovingFocusGroup , focusable: focusable = true , active: active = false , tabStopId: tabStopId , ...itemProps } = props;
    const autoId = (0,react_id_dist/* useId */.M)();
    const id = tabStopId || autoId;
    const context = $d7bdfb9eb0fdf311$var$useRovingFocusContext($d7bdfb9eb0fdf311$var$ITEM_NAME, __scopeRovingFocusGroup);
    const isCurrentTabStop = context.currentTabStopId === id;
    const getItems = $d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup);
    const { onFocusableItemAdd: onFocusableItemAdd , onFocusableItemRemove: onFocusableItemRemove  } = context;
    (0,react_.useEffect)(()=>{
        if (focusable) {
            onFocusableItemAdd();
            return ()=>onFocusableItemRemove()
            ;
        }
    }, [
        focusable,
        onFocusableItemAdd,
        onFocusableItemRemove
    ]);
    return /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$var$Collection.ItemSlot, {
        scope: __scopeRovingFocusGroup,
        id: id,
        focusable: focusable,
        active: active
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({
        tabIndex: isCurrentTabStop ? 0 : -1,
        "data-orientation": context.orientation
    }, itemProps, {
        ref: forwardedRef,
        onMouseDown: (0,dist/* composeEventHandlers */.M)(props.onMouseDown, (event)=>{
            // We prevent focusing non-focusable items on `mousedown`.
            // Even though the item has tabIndex={-1}, that only means take it out of the tab order.
            if (!focusable) event.preventDefault(); // Safari doesn't focus a button when clicked so we run our logic on mousedown also
            else context.onItemFocus(id);
        }),
        onFocus: (0,dist/* composeEventHandlers */.M)(props.onFocus, ()=>context.onItemFocus(id)
        ),
        onKeyDown: (0,dist/* composeEventHandlers */.M)(props.onKeyDown, (event)=>{
            if (event.key === 'Tab' && event.shiftKey) {
                context.onItemShiftTab();
                return;
            }
            if (event.target !== event.currentTarget) return;
            const focusIntent = $d7bdfb9eb0fdf311$var$getFocusIntent(event, context.orientation, context.dir);
            if (focusIntent !== undefined) {
                event.preventDefault();
                const items = getItems().filter((item)=>item.focusable
                );
                let candidateNodes = items.map((item)=>item.ref.current
                );
                if (focusIntent === 'last') candidateNodes.reverse();
                else if (focusIntent === 'prev' || focusIntent === 'next') {
                    if (focusIntent === 'prev') candidateNodes.reverse();
                    const currentIndex = candidateNodes.indexOf(event.currentTarget);
                    candidateNodes = context.loop ? $d7bdfb9eb0fdf311$var$wrapArray(candidateNodes, currentIndex + 1) : candidateNodes.slice(currentIndex + 1);
                }
                /**
         * Imperative focus during keydown is risky so we prevent React's batching updates
         * to avoid potential bugs. See: https://github.com/facebook/react/issues/20332
         */ setTimeout(()=>$d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)
                );
            }
        })
    })));
});
/*#__PURE__*/ Object.assign($d7bdfb9eb0fdf311$export$ab9df7c53fe8454, {
    displayName: $d7bdfb9eb0fdf311$var$ITEM_NAME
});
/* -----------------------------------------------------------------------------------------------*/ // prettier-ignore
const $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT = {
    ArrowLeft: 'prev',
    ArrowUp: 'prev',
    ArrowRight: 'next',
    ArrowDown: 'next',
    PageUp: 'first',
    Home: 'first',
    PageDown: 'last',
    End: 'last'
};
function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key, dir) {
    if (dir !== 'rtl') return key;
    return key === 'ArrowLeft' ? 'ArrowRight' : key === 'ArrowRight' ? 'ArrowLeft' : key;
}
function $d7bdfb9eb0fdf311$var$getFocusIntent(event, orientation, dir) {
    const key = $d7bdfb9eb0fdf311$var$getDirectionAwareKey(event.key, dir);
    if (orientation === 'vertical' && [
        'ArrowLeft',
        'ArrowRight'
    ].includes(key)) return undefined;
    if (orientation === 'horizontal' && [
        'ArrowUp',
        'ArrowDown'
    ].includes(key)) return undefined;
    return $d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key];
}
function $d7bdfb9eb0fdf311$var$focusFirst(candidates) {
    const PREVIOUSLY_FOCUSED_ELEMENT = document.activeElement;
    for (const candidate of candidates){
        // if focus is already where we want to go, we don't want to keep going through the candidates
        if (candidate === PREVIOUSLY_FOCUSED_ELEMENT) return;
        candidate.focus();
        if (document.activeElement !== PREVIOUSLY_FOCUSED_ELEMENT) return;
    }
}
/**
 * Wraps an array around itself at a given start index
 * Example: `wrapArray(['a', 'b', 'c', 'd'], 2) === ['c', 'd', 'a', 'b']`
 */ function $d7bdfb9eb0fdf311$var$wrapArray(array, startIndex) {
    return array.map((_, index)=>array[(startIndex + index) % array.length]
    );
}
const $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9 = $d7bdfb9eb0fdf311$export$8699f7c8af148338;
const $d7bdfb9eb0fdf311$export$6d08773d2e66f8f2 = $d7bdfb9eb0fdf311$export$ab9df7c53fe8454;





//# sourceMappingURL=index.mjs.map

// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-size/dist/index.mjs
var react_use_size_dist = __webpack_require__(97020);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-use-previous/dist/index.mjs
var react_use_previous_dist = __webpack_require__(17421);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-presence/dist/index.mjs
var react_presence_dist = __webpack_require__(84261);
;// CONCATENATED MODULE: ./node_modules/@radix-ui/react-radio-group/dist/index.mjs
































/* -------------------------------------------------------------------------------------------------
 * Radio
 * -----------------------------------------------------------------------------------------------*/ const $ce77a8961b41be9e$var$RADIO_NAME = 'Radio';
const [$ce77a8961b41be9e$var$createRadioContext, $ce77a8961b41be9e$export$67d2296460f1b002] = (0,react_context_dist/* createContextScope */.b)($ce77a8961b41be9e$var$RADIO_NAME);
const [$ce77a8961b41be9e$var$RadioProvider, $ce77a8961b41be9e$var$useRadioContext] = $ce77a8961b41be9e$var$createRadioContext($ce77a8961b41be9e$var$RADIO_NAME);
const $ce77a8961b41be9e$export$d7b12c4107be0d61 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeRadio: __scopeRadio , name: name , checked: checked = false , required: required , disabled: disabled , value: value = 'on' , onCheck: onCheck , ...radioProps } = props;
    const [button, setButton] = (0,react_.useState)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, (node)=>setButton(node)
    );
    const hasConsumerStoppedPropagationRef = (0,react_.useRef)(false); // We set this to true by default so that events bubble to forms without JS (SSR)
    const isFormControl = button ? Boolean(button.closest('form')) : true;
    return /*#__PURE__*/ (0,react_.createElement)($ce77a8961b41be9e$var$RadioProvider, {
        scope: __scopeRadio,
        checked: checked,
        disabled: disabled
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.button, (0,esm_extends/* default */.Z)({
        type: "button",
        role: "radio",
        "aria-checked": checked,
        "data-state": $ce77a8961b41be9e$var$getState(checked),
        "data-disabled": disabled ? '' : undefined,
        disabled: disabled,
        value: value
    }, radioProps, {
        ref: composedRefs,
        onClick: (0,dist/* composeEventHandlers */.M)(props.onClick, (event)=>{
            // radios cannot be unchecked so we only communicate a checked state
            if (!checked) onCheck === null || onCheck === void 0 || onCheck();
            if (isFormControl) {
                hasConsumerStoppedPropagationRef.current = event.isPropagationStopped(); // if radio is in a form, stop propagation from the button so that we only propagate
                // one click event (from the input). We propagate changes from an input so that native
                // form validation works and form events reflect radio updates.
                if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
        })
    })), isFormControl && /*#__PURE__*/ (0,react_.createElement)($ce77a8961b41be9e$var$BubbleInput, {
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
/*#__PURE__*/ Object.assign($ce77a8961b41be9e$export$d7b12c4107be0d61, {
    displayName: $ce77a8961b41be9e$var$RADIO_NAME
});
/* -------------------------------------------------------------------------------------------------
 * RadioIndicator
 * -----------------------------------------------------------------------------------------------*/ const $ce77a8961b41be9e$var$INDICATOR_NAME = 'RadioIndicator';
const $ce77a8961b41be9e$export$d35a9ffa9a04f9e7 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeRadio: __scopeRadio , forceMount: forceMount , ...indicatorProps } = props;
    const context = $ce77a8961b41be9e$var$useRadioContext($ce77a8961b41be9e$var$INDICATOR_NAME, __scopeRadio);
    return /*#__PURE__*/ (0,react_.createElement)(react_presence_dist/* Presence */.z, {
        present: forceMount || context.checked
    }, /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.span, (0,esm_extends/* default */.Z)({
        "data-state": $ce77a8961b41be9e$var$getState(context.checked),
        "data-disabled": context.disabled ? '' : undefined
    }, indicatorProps, {
        ref: forwardedRef
    })));
});
/*#__PURE__*/ Object.assign($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, {
    displayName: $ce77a8961b41be9e$var$INDICATOR_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $ce77a8961b41be9e$var$BubbleInput = (props)=>{
    const { control: control , checked: checked , bubbles: bubbles = true , ...inputProps } = props;
    const ref = (0,react_.useRef)(null);
    const prevChecked = (0,react_use_previous_dist/* usePrevious */.D)(checked);
    const controlSize = (0,react_use_size_dist/* useSize */.t)(control); // Bubble checked change to parents (e.g form change event)
    (0,react_.useEffect)(()=>{
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
    return /*#__PURE__*/ (0,react_.createElement)("input", (0,esm_extends/* default */.Z)({
        type: "radio",
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
function $ce77a8961b41be9e$var$getState(checked) {
    return checked ? 'checked' : 'unchecked';
}


const $f99a8c78507165f7$var$ARROW_KEYS = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight'
];
/* -------------------------------------------------------------------------------------------------
 * RadioGroup
 * -----------------------------------------------------------------------------------------------*/ const $f99a8c78507165f7$var$RADIO_GROUP_NAME = 'RadioGroup';
const [$f99a8c78507165f7$var$createRadioGroupContext, $f99a8c78507165f7$export$c547093f11b76da2] = (0,react_context_dist/* createContextScope */.b)($f99a8c78507165f7$var$RADIO_GROUP_NAME, [
    $d7bdfb9eb0fdf311$export$c7109489551a4f4,
    $ce77a8961b41be9e$export$67d2296460f1b002
]);
const $f99a8c78507165f7$var$useRovingFocusGroupScope = $d7bdfb9eb0fdf311$export$c7109489551a4f4();
const $f99a8c78507165f7$var$useRadioScope = $ce77a8961b41be9e$export$67d2296460f1b002();
const [$f99a8c78507165f7$var$RadioGroupProvider, $f99a8c78507165f7$var$useRadioGroupContext] = $f99a8c78507165f7$var$createRadioGroupContext($f99a8c78507165f7$var$RADIO_GROUP_NAME);
const $f99a8c78507165f7$export$a98f0dcb43a68a25 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeRadioGroup: __scopeRadioGroup , name: name , defaultValue: defaultValue , value: valueProp , required: required = false , disabled: disabled = false , orientation: orientation , dir: dir , loop: loop = true , onValueChange: onValueChange , ...groupProps } = props;
    const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
    const direction = (0,react_direction_dist/* useDirection */.gm)(dir);
    const [value, setValue] = (0,react_use_controllable_state_dist/* useControllableState */.T)({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange
    });
    return /*#__PURE__*/ (0,react_.createElement)($f99a8c78507165f7$var$RadioGroupProvider, {
        scope: __scopeRadioGroup,
        name: name,
        required: required,
        disabled: disabled,
        value: value,
        onValueChange: setValue
    }, /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9, (0,esm_extends/* default */.Z)({
        asChild: true
    }, rovingFocusGroupScope, {
        orientation: orientation,
        dir: direction,
        loop: loop
    }), /*#__PURE__*/ (0,react_.createElement)(react_primitive_dist/* Primitive */.WV.div, (0,esm_extends/* default */.Z)({
        role: "radiogroup",
        "aria-required": required,
        "aria-orientation": orientation,
        "data-disabled": disabled ? '' : undefined,
        dir: direction
    }, groupProps, {
        ref: forwardedRef
    }))));
});
/*#__PURE__*/ Object.assign($f99a8c78507165f7$export$a98f0dcb43a68a25, {
    displayName: $f99a8c78507165f7$var$RADIO_GROUP_NAME
});
/* -------------------------------------------------------------------------------------------------
 * RadioGroupItem
 * -----------------------------------------------------------------------------------------------*/ const $f99a8c78507165f7$var$ITEM_NAME = 'RadioGroupItem';
const $f99a8c78507165f7$export$9f866c100ef519e4 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeRadioGroup: __scopeRadioGroup , disabled: disabled , ...itemProps } = props;
    const context = $f99a8c78507165f7$var$useRadioGroupContext($f99a8c78507165f7$var$ITEM_NAME, __scopeRadioGroup);
    const isDisabled = context.disabled || disabled;
    const rovingFocusGroupScope = $f99a8c78507165f7$var$useRovingFocusGroupScope(__scopeRadioGroup);
    const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
    const ref = (0,react_.useRef)(null);
    const composedRefs = (0,react_compose_refs_dist/* useComposedRefs */.e)(forwardedRef, ref);
    const checked = context.value === itemProps.value;
    const isArrowKeyPressedRef = (0,react_.useRef)(false);
    (0,react_.useEffect)(()=>{
        const handleKeyDown = (event)=>{
            if ($f99a8c78507165f7$var$ARROW_KEYS.includes(event.key)) isArrowKeyPressedRef.current = true;
        };
        const handleKeyUp = ()=>isArrowKeyPressedRef.current = false
        ;
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return ()=>{
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, []);
    return /*#__PURE__*/ (0,react_.createElement)($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2, (0,esm_extends/* default */.Z)({
        asChild: true
    }, rovingFocusGroupScope, {
        focusable: !isDisabled,
        active: checked
    }), /*#__PURE__*/ (0,react_.createElement)($ce77a8961b41be9e$export$d7b12c4107be0d61, (0,esm_extends/* default */.Z)({
        disabled: isDisabled,
        required: context.required,
        checked: checked
    }, radioScope, itemProps, {
        name: context.name,
        ref: composedRefs,
        onCheck: ()=>context.onValueChange(itemProps.value)
        ,
        onKeyDown: (0,dist/* composeEventHandlers */.M)((event)=>{
            // According to WAI ARIA, radio groups don't activate items on enter keypress
            if (event.key === 'Enter') event.preventDefault();
        }),
        onFocus: (0,dist/* composeEventHandlers */.M)(itemProps.onFocus, ()=>{
            var _ref$current;
            /**
       * Our `RovingFocusGroup` will focus the radio when navigating with arrow keys
       * and we need to "check" it in that case. We click it to "check" it (instead
       * of updating `context.value`) so that the radio change event fires.
       */ if (isArrowKeyPressedRef.current) (_ref$current = ref.current) === null || _ref$current === void 0 || _ref$current.click();
        })
    })));
});
/*#__PURE__*/ Object.assign($f99a8c78507165f7$export$9f866c100ef519e4, {
    displayName: $f99a8c78507165f7$var$ITEM_NAME
});
/* -------------------------------------------------------------------------------------------------
 * RadioGroupIndicator
 * -----------------------------------------------------------------------------------------------*/ const $f99a8c78507165f7$var$INDICATOR_NAME = 'RadioGroupIndicator';
const $f99a8c78507165f7$export$5fb54c671a65c88 = /*#__PURE__*/ (0,react_.forwardRef)((props, forwardedRef)=>{
    const { __scopeRadioGroup: __scopeRadioGroup , ...indicatorProps } = props;
    const radioScope = $f99a8c78507165f7$var$useRadioScope(__scopeRadioGroup);
    return /*#__PURE__*/ (0,react_.createElement)($ce77a8961b41be9e$export$d35a9ffa9a04f9e7, (0,esm_extends/* default */.Z)({}, radioScope, indicatorProps, {
        ref: forwardedRef
    }));
});
/*#__PURE__*/ Object.assign($f99a8c78507165f7$export$5fb54c671a65c88, {
    displayName: $f99a8c78507165f7$var$INDICATOR_NAME
});
/* ---------------------------------------------------------------------------------------------- */ const $f99a8c78507165f7$export$be92b6f5f03c0fe9 = $f99a8c78507165f7$export$a98f0dcb43a68a25;
const $f99a8c78507165f7$export$6d08773d2e66f8f2 = $f99a8c78507165f7$export$9f866c100ef519e4;
const $f99a8c78507165f7$export$adb584737d712b70 = $f99a8c78507165f7$export$5fb54c671a65c88;





//# sourceMappingURL=index.mjs.map


/***/ })

};
;