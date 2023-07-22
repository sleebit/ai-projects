"use strict";
exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 7499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l0: () => (/* binding */ Form),
  NI: () => (/* binding */ FormControl),
  pf: () => (/* binding */ FormDescription),
  Wi: () => (/* binding */ FormField),
  xJ: () => (/* binding */ FormItem),
  lX: () => (/* binding */ FormLabel),
  zG: () => (/* binding */ FormMessage)
});

// UNUSED EXPORTS: useFormField

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-slot/dist/index.mjs
var dist = __webpack_require__(59818);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(71031);
// EXTERNAL MODULE: ./lib/utils.js
var utils = __webpack_require__(23853);
// EXTERNAL MODULE: ./node_modules/@radix-ui/react-label/dist/index.mjs
var react_label_dist = __webpack_require__(89441);
// EXTERNAL MODULE: ./node_modules/class-variance-authority/dist/index.mjs
var class_variance_authority_dist = __webpack_require__(17247);
;// CONCATENATED MODULE: ./components/ui/label.jsx
/* __next_internal_client_entry_do_not_use__ Label auto */ 




const labelVariants = (0,class_variance_authority_dist/* cva */.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ (0,react_.forwardRef)(({ className, ...props }, ref)=>/*#__PURE__*/ jsx_runtime_.jsx(react_label_dist/* Root */.f, {
        ref: ref,
        className: (0,utils.cn)(labelVariants(), className),
        ...props
    }));
Label.displayName = react_label_dist/* Root */.f.displayName;


;// CONCATENATED MODULE: ./components/ui/form.jsx






const Form = index_esm/* FormProvider */.RV;
const FormFieldContext = /*#__PURE__*/ (0,react_.createContext)({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* Controller */.Qr, {
            ...props
        })
    });
};
const useFormField = ()=>{
    const fieldContext = (0,react_.useContext)(FormFieldContext);
    const itemContext = (0,react_.useContext)(FormItemContext);
    const { getFieldState, formState } = (0,index_esm/* useFormContext */.Gc)();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
const FormItemContext = /*#__PURE__*/ (0,react_.createContext)({});
const FormItem = /*#__PURE__*/ (0,react_.forwardRef)(({ className, ...props }, ref)=>{
    const id = (0,react_.useId)();
    return /*#__PURE__*/ jsx_runtime_.jsx(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            ref: ref,
            className: (0,utils.cn)("space-y-2", className),
            ...props
        })
    });
});
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ (0,react_.forwardRef)(({ className, ...props }, ref)=>{
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ jsx_runtime_.jsx(Label, {
        ref: ref,
        className: (0,utils.cn)(error && "text-red-500 dark:text-red-900", className),
        htmlFor: formItemId,
        ...props
    });
});
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ (0,react_.forwardRef)(({ ...props }, ref)=>{
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ jsx_runtime_.jsx(dist/* Slot */.g7, {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    });
});
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ (0,react_.forwardRef)(({ className, ...props }, ref)=>{
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        ref: ref,
        id: formDescriptionId,
        className: (0,utils.cn)("text-[0.8rem] text-zinc-500 dark:text-zinc-400", className),
        ...props
    });
});
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ (0,react_.forwardRef)(({ className, children, ...props }, ref)=>{
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("p", {
        ref: ref,
        id: formMessageId,
        className: (0,utils.cn)("text-[0.8rem] font-medium text-red-500 dark:text-red-900", className),
        ...props,
        children: body
    });
});
FormMessage.displayName = "FormMessage";



/***/ })

};
;