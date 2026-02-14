(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
/**
 * Card Component
 * 
 * @param children - Nội dung bên trong card.
 * @param className - Các class CSS bổ sung để tùy chỉnh.
 * @param as - (Tùy chọn) Thẻ HTML gốc để render (mặc định là 'div').
 * 
 * @description
 * Đây là một component UI chung, có thể tái sử dụng để tạo các khung (container) cho nội dung.
 * Việc tách Card ra thành một component riêng giúp:
 * - **Nhất quán:** Đảm bảo tất cả các "thẻ" trong ứng dụng có cùng một kiểu dáng và cấu trúc cơ bản.
 * - **Dễ bảo trì:** Nếu cần thay đổi thiết kế của tất cả các card (ví dụ: đổi bo góc, đổ bóng), 
 *   chỉ cần sửa ở một nơi duy nhất.
 * - **Tái sử dụng:** Có thể dùng cho bất kỳ loại nội dung nào cần được bao bọc trong một khung trực quan.
 */ const Card = ({ children, className = '', as: Component = 'div' })=>{
    const baseClasses = "bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex flex-col gap-5";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        className: `${baseClasses} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Card.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Card;
const __TURBOPACK__default__export__ = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
/**
 * Label Component - v2 (Đã được nâng cấp)
 * 
 * @param children - Nội dung text của label.
 * @param icon - (Tùy chọn) Một icon để hiển thị bên cạnh text. Prop này giúp chuẩn hóa việc thêm icon vào label.
 * @param props - Các props chuẩn của thẻ <label> (ví dụ: htmlFor).
 * 
 * @description
 * Đây là phiên bản nâng cấp của component Label. So với phiên bản cũ, nó đã được khái quát hóa để:
 * 1. **Hỗ trợ Icon:** Dễ dàng thêm icon vào đầu mỗi label, giúp giao diện trực quan hơn.
 * 2. **Style nhất quán:** Áp dụng một bộ class chung (`text-base font-bold...`) phù hợp với thiết kế của trang tạo câu hỏi,
 *    thay vì các style quá cụ thể của phiên bản cũ.
 * 
 * Lợi ích:
 * - **Tái sử dụng cao:** Dùng được cho cả label có icon và không có icon.
 * - **Dễ bảo trì:** Thay đổi style của tất cả các label ở một nơi duy nhất.
 */ const Label = ({ children, icon, className, ...props })=>{
    // Các class mặc định cho label, phù hợp với thiết kế chung
    const baseClasses = "text-base font-bold flex items-center gap-3 text-gray-800";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ...props,
        className: `${baseClasses} ${className || ''}`,
        children: [
            icon,
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/Label.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Label;
const __TURBOPACK__default__export__ = Label;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
/**
 * Textarea Component
 * 
 * @param props - Các props chuẩn của thẻ <textarea> (value, onChange, placeholder, className, ...).
 * 
 * @description
 * Component này chuẩn hóa giao diện cho tất cả các vùng nhập văn bản (textarea) trong ứng dụng.
 * Bằng cách trừu tượng hóa <textarea> ra component riêng, chúng ta đảm bảo rằng tất cả chúng đều có:
 * - Cùng một kiểu dáng (bo góc, viền, màu nền, hiệu ứng focus).
 * - Cùng một cách hoạt động.
 * 
 * Lợi ích:
 * - **Nhất quán:** Giao diện đồng bộ trên toàn trang.
 * - **Dễ dàng cập nhật:** Chỉ cần sửa đổi ở một nơi nếu muốn thay đổi giao diện của tất cả textarea.
 */ const Textarea = ({ className, ...props })=>{
    const baseClasses = "w-full resize-none rounded-lg border border-gray-200 bg-gray-50 focus:border-[#2b8cee] focus:ring-2 focus:ring-[#2b8cee]/20 p-4 text-base transition-all";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: `${baseClasses} ${className || ''}`,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Textarea.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Textarea;
const __TURBOPACK__default__export__ = Textarea;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/AnswerInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
/**
 * AnswerInput Component
 * 
 * @param option - Giá trị (text) của phương án trả lời.
 * @param index - Vị trí của phương án (0, 1, 2, ...).
 * @param isChecked - Trạng thái radio button có được chọn hay không.
 * @param onCheck - Hàm callback khi người dùng chọn radio button.
 * @param onUpdate - Hàm callback khi người dùng thay đổi text trong input.
 * 
 * @description
 * Component này đại diện cho một hàng trong danh sách các phương án trả lời.
 * Nó bao gồm một radio button để chọn đáp án đúng và một text input để nhập nội dung đáp án.
 * Việc tách ra component riêng giúp:
 * - **Gói gọn logic:** Logic cho một đáp án (hiển thị, cập nhật) được quản lý ở một nơi.
 * - **Làm sạch component cha:** Component cha (trang tạo câu hỏi) sẽ chỉ cần lặp qua danh sách đáp án
 *   và render component này, thay vì chứa tất cả logic render phức tạp.
 * - **Dễ bảo trì:** Nếu muốn thay đổi cách một hàng đáp án hiển thị, chỉ cần sửa ở đây.
 */ const AnswerInput = ({ option, index, isChecked, onCheck, onUpdate })=>{
    const character = String.fromCharCode(65 + index);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                checked: isChecked,
                onChange: onCheck,
                className: "size-5 border-2 border-gray-300 text-[#2b8cee] focus:ring-[#2b8cee]/50 cursor-pointer transition-all shrink-0 mt-0.5",
                name: "correct_answer",
                type: "radio"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/AnswerInput.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    value: option,
                    onChange: (e)=>onUpdate(e.target.value),
                    className: `w-full rounded-lg border p-3.5 text-base transition-all ${isChecked ? 'border-[#2b8cee] bg-[#2b8cee]/5 font-semibold shadow-inner' : 'border-gray-200 bg-gray-50'}`,
                    placeholder: `Đáp án ${character}...`,
                    type: "text"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/AnswerInput.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/AnswerInput.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/AnswerInput.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AnswerInput;
const __TURBOPACK__default__export__ = AnswerInput;
var _c;
__turbopack_context__.k.register(_c, "AnswerInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/FileUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
/**
 * FileUpload Component
 * 
 * @param icon - Icon hiển thị trong ô upload.
 * @param name - Tên của input (quan trọng cho FormData).
 * @param accept - Các loại file được chấp nhận (ví dụ: "image/*").
 * 
 * @description
 * Component này tạo ra một khu vực cho phép người dùng kéo thả hoặc chọn file để tải lên.
 * Nó được sử dụng cho cả tải ảnh và âm thanh, thể hiện tính tái sử dụng cao.
 * 
 * Lợi ích:
 * - **Tái sử dụng:** Một component cho nhiều loại file-upload khác nhau.
 * - **Gói gọn logic:** Logic xử lý input file được gói gọn.
 * - **Giao diện nhất quán:** Đảm bảo các ô upload file có giao diện giống hệt nhau.
 */ const FileUpload = ({ icon, name, accept })=>{
    _s();
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed border-gray-200 p-6 transition-all bg-gray-50/50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "size-12 rounded-full bg-[#2b8cee]/10 flex items-center justify-center text-[#2b8cee]",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/ui/FileUpload.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: inputRef,
                name: name,
                accept: accept,
                type: "file",
                className: "text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#2b8cee]/10 file:text-[#2b8cee] hover:file:bg-[#2b8cee]/20 cursor-pointer"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/FileUpload.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/FileUpload.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FileUpload, "iD9XNNsNOlNDckBemnvlLS+aHYk=");
_c = FileUpload;
const __TURBOPACK__default__export__ = FileUpload;
var _c;
__turbopack_context__.k.register(_c, "FileUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/definitions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Difficulty",
    ()=>Difficulty,
    "QuestionFormat",
    ()=>QuestionFormat,
    "Topic",
    ()=>Topic
]);
var QuestionFormat = /*#__PURE__*/ function(QuestionFormat) {
    QuestionFormat["MULTIPLE_CHOICE"] = "Multiple Choice";
    QuestionFormat["FILL_IN_THE_BLANK"] = "Fill in the Blank";
    QuestionFormat["MATCHING"] = "Matching";
    QuestionFormat["TRUE_FALSE"] = "True/False";
    QuestionFormat["SHORT_ANSWER"] = "Short Answer";
    return QuestionFormat;
}({});
var Difficulty = /*#__PURE__*/ function(Difficulty) {
    Difficulty["EASY"] = "Dễ";
    Difficulty["MEDIUM"] = "Trung bình";
    Difficulty["HARD"] = "Khó";
    return Difficulty;
}({});
var Topic = /*#__PURE__*/ function(Topic) {
    Topic["GRAMMAR"] = "Ngữ pháp";
    Topic["VOCABULARY"] = "Từ vựng";
    Topic["READING"] = "Đọc hiểu";
    Topic["LISTENING"] = "Nghe hiểu";
    Topic["WRITING"] = "Viết";
    Topic["GENERAL"] = "Chủ đề chung";
    return Topic;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/SelectInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
;
;
/**
 * SelectInput Component
 * 
 * @param label - Nhãn hiển thị phía trên dropdown.
 * @param options - Một mảng các chuỗi (string) để hiển thị trong các thẻ <option>.
 * @param props - Các props chuẩn của thẻ <select> (ví dụ: value, onChange).
 * 
 * @description
 * Component này tạo ra một dropdown (thẻ select) với giao diện được chuẩn hóa.
 * Nó được sử dụng cho cả "Độ khó" và "Chủ đề" trong sidebar, thể hiện tính tái sử dụng.
 * 
 * Lợi ích:
 * - **Nhất quán:** Đảm bảo tất cả các dropdown trong ứng dụng có cùng một giao diện.
 * - **Gói gọn:** HTML và CSS cho một dropdown được gói gọn ở một nơi, làm sạch component cha.
 * - **Dễ bảo trì:** Thay đổi style ở một nơi, áp dụng cho tất cả.
 */ const SelectInput = ({ label, options, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-bold text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SelectInput.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        ...props,
                        className: "w-full appearance-none rounded-lg border border-gray-200 bg-gray-50 p-3 pr-8 text-base focus:border-[#2b8cee] focus:ring-1 focus:ring-[#2b8cee] transition-all cursor-pointer",
                        children: options.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: opt,
                                children: opt
                            }, opt, false, {
                                fileName: "[project]/src/components/ui/SelectInput.tsx",
                                lineNumber: 35,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SelectInput.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        size: 18,
                        className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/SelectInput.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/SelectInput.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SelectInput.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SelectInput;
const __TURBOPACK__default__export__ = SelectInput;
var _c;
__turbopack_context__.k.register(_c, "SelectInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/TagInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
/**
 * TagInput Component
 * 
 * @param tags - Mảng các tag hiện tại.
 * @param setTags - Hàm để cập nhật mảng tag.
 * 
 * @description
 * Component này cung cấp một trường nhập liệu cho phép người dùng thêm và xóa các "tag" (thẻ).
 * Nó đóng gói hoàn toàn logic: nhập text, nhấn Enter để thêm, và nhấn nút X để xóa.
 * 
 * Lợi ích:
 * - **Đóng gói Logic:** Component cha không cần quan tâm đến cách tag được thêm/xóa.
 * - **Tái sử dụng:** Có thể dễ dàng sử dụng ở bất kỳ đâu cần chức năng nhập tag.
 * - **Tương tác người dùng tốt hơn:** Cung cấp phản hồi tức thì khi thêm/xóa tag.
 */ const TagInput = ({ tags, setTags })=>{
    _s();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && inputValue.trim()) {
            e.preventDefault();
            if (!tags.includes(inputValue.trim())) {
                setTags([
                    ...tags,
                    inputValue.trim()
                ]);
            }
            setInputValue('');
        }
    };
    const removeTag = (tagToRemove)=>{
        setTags(tags.filter((tag)=>tag !== tagToRemove));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "text-sm font-bold text-gray-700",
                children: "Thẻ (Tags)"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/TagInput.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 p-2",
                children: [
                    tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-1.5 rounded bg-[#2b8cee]/10 px-2 py-1 text-xs font-medium text-[#2b8cee]",
                            children: [
                                tag,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>removeTag(tag),
                                    className: "hover:text-red-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/TagInput.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/TagInput.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, tag, true, {
                            fileName: "[project]/src/components/ui/TagInput.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: inputValue,
                        onChange: (e)=>setInputValue(e.target.value),
                        onKeyDown: handleKeyDown,
                        className: "flex-1 bg-transparent p-1 text-sm placeholder-gray-400 focus:outline-none min-w-[120px]",
                        placeholder: tags.length === 0 ? "Nhập tag và nhấn Enter..." : "Thêm tag...",
                        type: "text"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TagInput.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/TagInput.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/TagInput.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TagInput, "SORcW8kVWUa8fZ+un8oXhp/OLnk=");
_c = TagInput;
const __TURBOPACK__default__export__ = TagInput;
var _c;
__turbopack_context__.k.register(_c, "TagInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/questions/CreateQuestionSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/definitions.ts [app-client] (ecmascript)"); // Import từ file definitions tập trung
// Import các component UI đã tách nhỏ
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SelectInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SelectInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TagInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TagInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
/**
 * CreateQuestionSidebar Component
 *
 * @description
 * Component này đóng vai trò là cột sidebar trong trang tạo câu hỏi. Nó chứa các chức năng
 * để phân loại (độ khó, chủ đề, tag) và các hành động chính (lưu, hủy).
 * 
 * Nó được xây dựng bằng cách lắp ráp các component UI nhỏ hơn (`SelectInput`, `TagInput`, `Button`),
 * thể hiện rõ nguyên tắc phân tách và tái sử dụng.
 */ const CreateQuestionSidebar = ({ difficulty, setDifficulty, topic, setTopic, tags, setTags, onSave, onSaveAndContinue, onCancel })=>{
    return(// Sử dụng lại Card component để có giao diện nhất quán
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        as: "aside",
        className: "sticky top-8 flex flex-col gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold border-b border-gray-200 pb-4 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                        size: 22,
                        className: "text-[#2b8cee]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Phân loại & Hành động"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SelectInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Độ khó",
                        options: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Difficulty"]),
                        value: difficulty,
                        onChange: (e)=>setDifficulty(e.target.value),
                        disabled: !difficulty
                    }, void 0, false, {
                        fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SelectInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        label: "Chủ đề",
                        options: Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Topic"]),
                        value: topic,
                        onChange: (e)=>setTopic(e.target.value),
                        disabled: !topic
                    }, void 0, false, {
                        fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TagInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        tags: tags,
                        setTags: setTags
                    }, void 0, false, {
                        fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-6 border-t border-gray-200 flex flex-col gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onSave,
                        className: "w-full justify-center text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Lưu câu hỏi"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onSaveAndContinue,
                        variant: "secondary",
                        className: "w-full justify-center text-base border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                                size: 18
                            }, void 0, false, {
                                fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Lưu & Tiếp tục"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                        lineNumber: 84,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        onClick: onCancel,
                        variant: "secondary",
                        className: "w-full justify-center text-red-500 hover:bg-red-50 hover:border-red-500/0 text-base",
                        children: "Hủy bỏ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/questions/CreateQuestionSidebar.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_c = CreateQuestionSidebar;
const __TURBOPACK__default__export__ = CreateQuestionSidebar;
var _c;
__turbopack_context__.k.register(_c, "CreateQuestionSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/dashboard/teacher/questions/data:2b6562 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateQuestionWithAI",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"408b76bee2e24fd79af8a8a6bd23be9451d3ab4774":"generateQuestionWithAI"},"src/app/dashboard/teacher/questions/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("408b76bee2e24fd79af8a8a6bd23be9451d3ab4774", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "generateQuestionWithAI");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJ0AvbGliL2RlZmluaXRpb25zJztcblxuLy8gLS0tIENPTkZJR1VSQVRJT04gLS0tXG4vLyBM4bqleSBVUkwgY+G7p2EgQVBJIGJhY2tlbmQgdOG7qyBiaeG6v24gbcO0aSB0csaw4budbmcsIHbhu5tpIG3hu5l0IGdpw6EgdHLhu4sgZOG7sSBwaMOybmcgY2hvIG3DtGkgdHLGsOG7nW5nIGRldi5cbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5CQUNLRU5EX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGknO1xuXG4vKipcbiAqIEjDoG0gaGVscGVyIMSR4buDIHRo4buxYyBoaeG7h24gY8OhYyBjdeG7mWMgZ+G7jWkgQVBJIMSRw6MgxJHGsOG7o2MgeMOhYyB0aOG7sWMgxJHhur9uIGJhY2tlbmQuXG4gKiBIw6BtIG7DoHkgdOG6rXAgdHJ1bmcgaMOzYSBsb2dpYyBmZXRjaCwgY+G6pXUgaMOsbmggaGVhZGVyLCB2w6AgeOG7rSBsw70gbOG7l2kuXG4gKiBcbiAqIEBwYXJhbSBlbmRwb2ludCAtIEVuZHBvaW50IGPhu6dhIEFQSSAodsOtIGThu6U6ICcvcXVlc3Rpb25zJykuXG4gKiBAcGFyYW0gbWV0aG9kIC0gUGjGsMahbmcgdGjhu6ljIEhUVFAgKCdHRVQnLCAnUE9TVCcsIC4uLikuXG4gKiBAcGFyYW0gYm9keSAtIEThu68gbGnhu4d1IEpTT04gY2hvIHJlcXVlc3QuXG4gKiBAcmV0dXJucyAtIE3hu5l0IG9iamVjdCBjaOG7qWEgZOG7ryBsaeG7h3UgaG/hurdjIHRow7RuZyBiw6FvIGzhu5dpLlxuICovXG5hc3luYyBmdW5jdGlvbiBjYWxsQXBpKGVuZHBvaW50OiBzdHJpbmcsIG1ldGhvZDogJ1BPU1QnIHwgJ0dFVCcgfCAnUEFUQ0gnIHwgJ0RFTEVURScsIGJvZHk/OiBhbnkpIHtcbiAgY29uc3QgZnVsbFVybCA9IGAke0FQSV9VUkx9JHtlbmRwb2ludH1gO1xuXG4gIC8vICEhISBRVUFOIFRS4buMTkc6IMSQw6J5IGzDoCBwbGFjZWhvbGRlciBjaG8gbG9naWMgeMOhYyB0aOG7sWMgY+G7p2EgYuG6oW4uXG4gIC8vIELhuqFuIGPhuqduIHRoYXkgdGjhur8gYuG6sW5nIGPDoWNoIGzhuqV5IHRva2VuIGPhu6dhIG5nxrDhu51pIGTDuW5nICh2w60gZOG7pTogdOG7qyBzZXNzaW9uIGhv4bq3YyBjb29raWUpLlxuICBjb25zdCBhdXRoVG9rZW4gPSAnWU9VUl9IQVJEQ09ERURfQVVUSF9UT0tFTl9GT1JfTk9XJzsgXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZ1bGxVcmwsIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoVG9rZW59YCxcbiAgICAgIH0sXG4gICAgICBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiB1bmRlZmluZWQsXG4gICAgICAvLyBMdcO0biBraMO0bmcgY2FjaGUgY8OhYyB5w6p1IGPhuqd1IHThu6sgc2VydmVyIGFjdGlvbiDEkeG7gyDEkeG6o20gYuG6o28gZOG7ryBsaeG7h3UgbeG7m2kgbmjhuqV0LlxuICAgICAgY2FjaGU6ICduby1zdG9yZScsXG4gICAgfSk7XG5cbiAgICAvLyBMdcO0biBj4buRIGfhuq9uZyBwYXJzZSBib2R5IGPhu6dhIHJlc3BvbnNlLCBuZ2F5IGPhuqMga2hpIHJlc3BvbnNlLm9rIGzDoCBmYWxzZS5cbiAgICBjb25zdCByZXNwb25zZUJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBM4buXaSBBUEkgdOG6oWkgJHttZXRob2R9ICR7ZnVsbFVybH06YCwgcmVzcG9uc2VCb2R5KTtcbiAgICAgIC8vIMavdSB0acOqbiBz4butIGThu6VuZyBtZXNzYWdlIGzhu5dpIHThu6sgYmFja2VuZC5cbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZUJvZHkubWVzc2FnZSB8fCBgWcOqdSBj4bqndSBBUEkgdGjhuqV0IGLhuqFpIHbhu5tpIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG5cbiAgICAvLyBCYWNrZW5kIGPhu6dhIGLhuqFuIHRy4bqjIHbhu4EgZOG7ryBsaeG7h3UgdHJvbmcgbeG7mXQga2V5ICdkYXRhJywgdGEgc+G6vSB0csOtY2ggeHXhuqV0IG7DsyDhu58gxJHDonkuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzcG9uc2VCb2R5LmRhdGEgfTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEzhu5dpIGZldGNoIHRyb25nIFNlcnZlciBBY3Rpb24gxJHhur9uICR7ZnVsbFVybH06YCwgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ8SQw6MgY8OzIGzhu5dpIGtow7RuZyB4w6FjIMSR4buLbmgg4bufIHNlcnZlci4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3JNZXNzYWdlIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uIMSR4buDIHThuqFvIGPhuqV1IHRyw7pjIGPDonUgaOG7j2kgdOG7qyB0ZXh0IHRow7QgYuG6sW5nIGThu4tjaCB24bulIEFJLlxuICogQWN0aW9uIG7DoHkgxJHGsOG7o2MgZ+G7jWkgdOG7qyBmb3JtIHBow61hIGNsaWVudC5cbiAqIFxuICogQHBhcmFtIHJhd1RleHQgLSBE4buvIGxp4buHdSB0ZXh0IGNoxrBhIGPDsyBj4bqldSB0csO6YyB04burIG5nxrDhu51pIGTDuW5nLlxuICogQHJldHVybnMgLSBE4buvIGxp4buHdSBjw6J1IGjhu49pIGPDsyBj4bqldSB0csO6YyB04burIEFJIGhv4bq3YyBs4buXaS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb25XaXRoQUkocmF3VGV4dDogc3RyaW5nKSB7XG4gIGlmICghcmF3VGV4dCB8fCB0eXBlb2YgcmF3VGV4dCAhPT0gJ3N0cmluZycgfHwgIXJhd1RleHQudHJpbSgpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnROG7ryBsaeG7h3UgxJHhuqd1IHbDoG8ga2jDtG5nIGjhu6NwIGzhu4cuJyB9O1xuICB9XG5cbiAgY29uc29sZS5sb2coYFtBY3Rpb25dIMSQYW5nIHThuqFvIGPDonUgaOG7j2kgdOG7qyB0ZXh0OiBcIiR7cmF3VGV4dC5zdWJzdHJpbmcoMCwgNTApfS4uLlwiYCk7XG4gIHJldHVybiBjYWxsQXBpKCcvcXVlc3Rpb25zL2dlbmVyYXRlUXVlc3Rpb24nLCAnUE9TVCcsIHsgcmF3UXVlc3Rpb25UZXh0OiByYXdUZXh0IH0pO1xufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb24gxJHhu4MgdOG6oW8gbeG7mXQgY8OidSBo4buPaSBt4bubaSB0cm9uZyBkYXRhYmFzZS5cbiAqIMSQxrDhu6NjIGfhu41pIGtoaSBuZ8aw4budaSBkw7luZyBuaOG6pW4gbsO6dCBcIkzGsHVcIi5cbiAqIFxuICogQHBhcmFtIHF1ZXN0aW9uRGF0YSAtIE9iamVjdCBRdWVzdGlvbiBob8OgbiBjaOG7iW5oLCDEkcOjIGPDsyBj4bqldSB0csO6Yy5cbiAqIEByZXR1cm5zIC0gS+G6v3QgcXXhuqMgY+G7p2EgaMOgbmggxJHhu5luZyB04bqhbyBt4bubaS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uQWN0aW9uKHF1ZXN0aW9uRGF0YTogUXVlc3Rpb24pIHtcbiAgY29uc29sZS5sb2coJ1tBY3Rpb25dIMSQYW5nIGzGsHUgY8OidSBo4buPaSBt4bubaTonLCBxdWVzdGlvbkRhdGEuc3ViUXVlc3Rpb25zWzBdPy5jb250ZW50KTtcbiAgXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNhbGxBcGkoJy9xdWVzdGlvbnMnLCAnUE9TVCcsIHF1ZXN0aW9uRGF0YSk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5sb2coJ1tBY3Rpb25dIFJldmFsaWRhdGluZyDEkcaw4budbmcgZOG6q246IC9kYXNoYm9hcmQvdGVhY2hlci9xdWVzdGlvbnMnKTtcbiAgICAvLyBO4bq/dSBsxrB1IHRow6BuaCBjw7RuZywgcmV2YWxpZGF0ZSBjYWNoZSBj4bunYSB0cmFuZyBkYW5oIHPDoWNoIGPDonUgaOG7j2kuXG4gICAgLy8gxJBp4buBdSBuw6B5IMSR4bqjbSBi4bqjbyBjw6J1IGjhu49pIG3hu5tpIHPhur0geHXhuqV0IGhp4buHbiBuZ2F5IGzhuq1wIHThu6ljLlxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3RlYWNoZXIvcXVlc3Rpb25zJyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5VEErRHNCLG1NQUFBIn0=
}),
"[project]/src/app/dashboard/teacher/questions/data:834f63 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createQuestionAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40250f17555b511966689cc0bf9757be8e299f5b86":"createQuestionAction"},"src/app/dashboard/teacher/questions/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40250f17555b511966689cc0bf9757be8e299f5b86", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createQuestionAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcic7XG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gJ0AvbGliL2RlZmluaXRpb25zJztcblxuLy8gLS0tIENPTkZJR1VSQVRJT04gLS0tXG4vLyBM4bqleSBVUkwgY+G7p2EgQVBJIGJhY2tlbmQgdOG7qyBiaeG6v24gbcO0aSB0csaw4budbmcsIHbhu5tpIG3hu5l0IGdpw6EgdHLhu4sgZOG7sSBwaMOybmcgY2hvIG3DtGkgdHLGsOG7nW5nIGRldi5cbmNvbnN0IEFQSV9VUkwgPSBwcm9jZXNzLmVudi5CQUNLRU5EX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGknO1xuXG4vKipcbiAqIEjDoG0gaGVscGVyIMSR4buDIHRo4buxYyBoaeG7h24gY8OhYyBjdeG7mWMgZ+G7jWkgQVBJIMSRw6MgxJHGsOG7o2MgeMOhYyB0aOG7sWMgxJHhur9uIGJhY2tlbmQuXG4gKiBIw6BtIG7DoHkgdOG6rXAgdHJ1bmcgaMOzYSBsb2dpYyBmZXRjaCwgY+G6pXUgaMOsbmggaGVhZGVyLCB2w6AgeOG7rSBsw70gbOG7l2kuXG4gKiBcbiAqIEBwYXJhbSBlbmRwb2ludCAtIEVuZHBvaW50IGPhu6dhIEFQSSAodsOtIGThu6U6ICcvcXVlc3Rpb25zJykuXG4gKiBAcGFyYW0gbWV0aG9kIC0gUGjGsMahbmcgdGjhu6ljIEhUVFAgKCdHRVQnLCAnUE9TVCcsIC4uLikuXG4gKiBAcGFyYW0gYm9keSAtIEThu68gbGnhu4d1IEpTT04gY2hvIHJlcXVlc3QuXG4gKiBAcmV0dXJucyAtIE3hu5l0IG9iamVjdCBjaOG7qWEgZOG7ryBsaeG7h3UgaG/hurdjIHRow7RuZyBiw6FvIGzhu5dpLlxuICovXG5hc3luYyBmdW5jdGlvbiBjYWxsQXBpKGVuZHBvaW50OiBzdHJpbmcsIG1ldGhvZDogJ1BPU1QnIHwgJ0dFVCcgfCAnUEFUQ0gnIHwgJ0RFTEVURScsIGJvZHk/OiBhbnkpIHtcbiAgY29uc3QgZnVsbFVybCA9IGAke0FQSV9VUkx9JHtlbmRwb2ludH1gO1xuXG4gIC8vICEhISBRVUFOIFRS4buMTkc6IMSQw6J5IGzDoCBwbGFjZWhvbGRlciBjaG8gbG9naWMgeMOhYyB0aOG7sWMgY+G7p2EgYuG6oW4uXG4gIC8vIELhuqFuIGPhuqduIHRoYXkgdGjhur8gYuG6sW5nIGPDoWNoIGzhuqV5IHRva2VuIGPhu6dhIG5nxrDhu51pIGTDuW5nICh2w60gZOG7pTogdOG7qyBzZXNzaW9uIGhv4bq3YyBjb29raWUpLlxuICBjb25zdCBhdXRoVG9rZW4gPSAnWU9VUl9IQVJEQ09ERURfQVVUSF9UT0tFTl9GT1JfTk9XJzsgXG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGZ1bGxVcmwsIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthdXRoVG9rZW59YCxcbiAgICAgIH0sXG4gICAgICBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkoYm9keSkgOiB1bmRlZmluZWQsXG4gICAgICAvLyBMdcO0biBraMO0bmcgY2FjaGUgY8OhYyB5w6p1IGPhuqd1IHThu6sgc2VydmVyIGFjdGlvbiDEkeG7gyDEkeG6o20gYuG6o28gZOG7ryBsaeG7h3UgbeG7m2kgbmjhuqV0LlxuICAgICAgY2FjaGU6ICduby1zdG9yZScsXG4gICAgfSk7XG5cbiAgICAvLyBMdcO0biBj4buRIGfhuq9uZyBwYXJzZSBib2R5IGPhu6dhIHJlc3BvbnNlLCBuZ2F5IGPhuqMga2hpIHJlc3BvbnNlLm9rIGzDoCBmYWxzZS5cbiAgICBjb25zdCByZXNwb25zZUJvZHkgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBM4buXaSBBUEkgdOG6oWkgJHttZXRob2R9ICR7ZnVsbFVybH06YCwgcmVzcG9uc2VCb2R5KTtcbiAgICAgIC8vIMavdSB0acOqbiBz4butIGThu6VuZyBtZXNzYWdlIGzhu5dpIHThu6sgYmFja2VuZC5cbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZUJvZHkubWVzc2FnZSB8fCBgWcOqdSBj4bqndSBBUEkgdGjhuqV0IGLhuqFpIHbhu5tpIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG5cbiAgICAvLyBCYWNrZW5kIGPhu6dhIGLhuqFuIHRy4bqjIHbhu4EgZOG7ryBsaeG7h3UgdHJvbmcgbeG7mXQga2V5ICdkYXRhJywgdGEgc+G6vSB0csOtY2ggeHXhuqV0IG7DsyDhu58gxJHDonkuXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogcmVzcG9uc2VCb2R5LmRhdGEgfTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoYEzhu5dpIGZldGNoIHRyb25nIFNlcnZlciBBY3Rpb24gxJHhur9uICR7ZnVsbFVybH06YCwgZXJyb3IpO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogJ8SQw6MgY8OzIGzhu5dpIGtow7RuZyB4w6FjIMSR4buLbmgg4bufIHNlcnZlci4nO1xuICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3JNZXNzYWdlIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTZXJ2ZXIgQWN0aW9uIMSR4buDIHThuqFvIGPhuqV1IHRyw7pjIGPDonUgaOG7j2kgdOG7qyB0ZXh0IHRow7QgYuG6sW5nIGThu4tjaCB24bulIEFJLlxuICogQWN0aW9uIG7DoHkgxJHGsOG7o2MgZ+G7jWkgdOG7qyBmb3JtIHBow61hIGNsaWVudC5cbiAqIFxuICogQHBhcmFtIHJhd1RleHQgLSBE4buvIGxp4buHdSB0ZXh0IGNoxrBhIGPDsyBj4bqldSB0csO6YyB04burIG5nxrDhu51pIGTDuW5nLlxuICogQHJldHVybnMgLSBE4buvIGxp4buHdSBjw6J1IGjhu49pIGPDsyBj4bqldSB0csO6YyB04burIEFJIGhv4bq3YyBs4buXaS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb25XaXRoQUkocmF3VGV4dDogc3RyaW5nKSB7XG4gIGlmICghcmF3VGV4dCB8fCB0eXBlb2YgcmF3VGV4dCAhPT0gJ3N0cmluZycgfHwgIXJhd1RleHQudHJpbSgpKSB7XG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiAnROG7ryBsaeG7h3UgxJHhuqd1IHbDoG8ga2jDtG5nIGjhu6NwIGzhu4cuJyB9O1xuICB9XG5cbiAgY29uc29sZS5sb2coYFtBY3Rpb25dIMSQYW5nIHThuqFvIGPDonUgaOG7j2kgdOG7qyB0ZXh0OiBcIiR7cmF3VGV4dC5zdWJzdHJpbmcoMCwgNTApfS4uLlwiYCk7XG4gIHJldHVybiBjYWxsQXBpKCcvcXVlc3Rpb25zL2dlbmVyYXRlUXVlc3Rpb24nLCAnUE9TVCcsIHsgcmF3UXVlc3Rpb25UZXh0OiByYXdUZXh0IH0pO1xufVxuXG4vKipcbiAqIFNlcnZlciBBY3Rpb24gxJHhu4MgdOG6oW8gbeG7mXQgY8OidSBo4buPaSBt4bubaSB0cm9uZyBkYXRhYmFzZS5cbiAqIMSQxrDhu6NjIGfhu41pIGtoaSBuZ8aw4budaSBkw7luZyBuaOG6pW4gbsO6dCBcIkzGsHVcIi5cbiAqIFxuICogQHBhcmFtIHF1ZXN0aW9uRGF0YSAtIE9iamVjdCBRdWVzdGlvbiBob8OgbiBjaOG7iW5oLCDEkcOjIGPDsyBj4bqldSB0csO6Yy5cbiAqIEByZXR1cm5zIC0gS+G6v3QgcXXhuqMgY+G7p2EgaMOgbmggxJHhu5luZyB04bqhbyBt4bubaS5cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVF1ZXN0aW9uQWN0aW9uKHF1ZXN0aW9uRGF0YTogUXVlc3Rpb24pIHtcbiAgY29uc29sZS5sb2coJ1tBY3Rpb25dIMSQYW5nIGzGsHUgY8OidSBo4buPaSBt4bubaTonLCBxdWVzdGlvbkRhdGEuc3ViUXVlc3Rpb25zWzBdPy5jb250ZW50KTtcbiAgXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGNhbGxBcGkoJy9xdWVzdGlvbnMnLCAnUE9TVCcsIHF1ZXN0aW9uRGF0YSk7XG5cbiAgaWYgKHJlc3VsdC5zdWNjZXNzKSB7XG4gICAgY29uc29sZS5sb2coJ1tBY3Rpb25dIFJldmFsaWRhdGluZyDEkcaw4budbmcgZOG6q246IC9kYXNoYm9hcmQvdGVhY2hlci9xdWVzdGlvbnMnKTtcbiAgICAvLyBO4bq/dSBsxrB1IHRow6BuaCBjw7RuZywgcmV2YWxpZGF0ZSBjYWNoZSBj4bunYSB0cmFuZyBkYW5oIHPDoWNoIGPDonUgaOG7j2kuXG4gICAgLy8gxJBp4buBdSBuw6B5IMSR4bqjbSBi4bqjbyBjw6J1IGjhu49pIG3hu5tpIHPhur0geHXhuqV0IGhp4buHbiBuZ2F5IGzhuq1wIHThu6ljLlxuICAgIHJldmFsaWRhdGVQYXRoKCcvZGFzaGJvYXJkL3RlYWNoZXIvcXVlc3Rpb25zJyk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1VEErRXNCLGlNQUFBIn0=
}),
"[project]/src/app/dashboard/teacher/questions/create/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript) <export default as Wand2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileEdit$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen.js [app-client] (ecmascript) <export default as FileEdit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-client] (ecmascript)");
// --- UI & TYPE IMPORTS ---
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnswerInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/AnswerInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/FileUpload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$questions$2f$CreateQuestionSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/questions/CreateQuestionSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/definitions.ts [app-client] (ecmascript)"); // Assuming full Question type is defined
// --- SERVER ACTIONS ---
// Correcting the import path to go one level up.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$data$3a$2b6562__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/teacher/questions/data:2b6562 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$data$3a$834f63__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/dashboard/teacher/questions/data:834f63 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
const CreateQuestionPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isExtracting, startExtractTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [isSaving, startSaveTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    // State for the AI input
    const [rawInput, setRawInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // This state will hold the full, structured question data after AI generation or manual input
    const [questionData, setQuestionData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        category: 'TOEIC',
        part: 5,
        topic: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Topic"].GRAMMAR,
        format: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestionFormat"].MULTIPLE_CHOICE,
        subQuestions: [
            {
                content: '',
                options: [
                    '',
                    '',
                    '',
                    ''
                ],
                correctAnswer: [],
                explanation: '',
                tags: []
            }
        ],
        metadata: {
            level: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Difficulty"].MEDIUM
        }
    });
    // Helper for easy access to the first sub-question
    const subQuestion = questionData.subQuestions?.[0];
    const handleAiExtract = ()=>{
        if (!rawInput.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Vui lòng nhập nội dung câu hỏi thô.");
            return;
        }
        startExtractTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$data$3a$2b6562__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["generateQuestionWithAI"])(rawInput);
            if (result.success && result.data) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('AI đã phân tích câu hỏi thành công!');
                const aiData = result.data;
                // Update the main state with the AI-generated data
                setQuestionData(aiData);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.error || 'AI không thể xử lý yêu cầu này.');
            }
        });
    };
    // Function to update the main question data state
    const updateQuestionField = (field, value)=>{
        setQuestionData((prev)=>({
                ...prev,
                subQuestions: [
                    {
                        ...prev.subQuestions?.[0] || {},
                        [field]: value
                    }
                ]
            }));
    };
    const updateOption = (idx, val)=>{
        const newOptions = [
            ...subQuestion?.options || []
        ];
        newOptions[idx] = val;
        updateQuestionField('options', newOptions);
    };
    const setCorrectAnswer = (optionText)=>{
        updateQuestionField('correctAnswer', [
            optionText
        ]);
    };
    // --- HANDLER CHO VIỆC LƯU TRỮ ---
    const handleSave = async (andContinue = false)=>{
        // Basic validation
        if (!subQuestion?.content?.trim()) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error("Nội dung câu hỏi không được để trống.");
        }
        startSaveTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$data$3a$834f63__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createQuestionAction"])(questionData);
            if (result.success) {
                if (andContinue) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Đã lưu! Sẵn sàng cho câu hỏi tiếp theo.');
                    // Reset state
                    setRawInput('');
                    setQuestionData({
                        category: 'TOEIC',
                        part: 5,
                        topic: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Topic"].GRAMMAR,
                        format: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuestionFormat"].MULTIPLE_CHOICE,
                        subQuestions: [
                            {
                                content: '',
                                options: [
                                    '',
                                    '',
                                    '',
                                    ''
                                ],
                                correctAnswer: [],
                                explanation: '',
                                tags: []
                            }
                        ],
                        metadata: {
                            level: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Difficulty"].MEDIUM
                        }
                    });
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].success('Câu hỏi đã được lưu thành công!');
                    router.push('/dashboard/teacher/questions');
                }
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].error(result.error || 'Không thể lưu câu hỏi.');
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto w-full px-4 md:px-6 py-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                as: "section",
                className: "mb-8 !p-8 shadow-xl border-2 border-[#2b8cee]/30 relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 right-0 p-4 opacity-10 pointer-events-none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                            size: 160,
                            className: "text-[#2b8cee]"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                            lineNumber: 145,
                            columnNumber: 85
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                        lineNumber: 145,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex flex-col gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-3 rounded-lg bg-gradient-to-br from-[#2b8cee] to-blue-400 text-white shadow-md",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 112
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 148,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-bold text-gray-900",
                                                children: "Tạo nhanh với AI"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                lineNumber: 150,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Dán nội dung từ Word, PDF hoặc Website vào đây."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 149,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                lineNumber: 147,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: rawInput,
                                onChange: (e)=>setRawInput(e.target.value),
                                className: "min-h-[180px] !p-6 text-base placeholder:text-gray-400",
                                placeholder: "Ví dụ: The new regulations will be _______ to all employees starting next month. A) applied B) apply C) applying D) application"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                lineNumber: 155,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-sm text-gray-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Đính kèm hình ảnh/âm thanh bên dưới nếu cần"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: handleAiExtract,
                                        disabled: isExtracting || !rawInput.trim(),
                                        className: "bg-gradient-to-br from-[#2b8cee] to-blue-400 ai-glow hover:scale-[1.02] active:scale-[0.98] text-white px-8 py-4 rounded-xl font-bold text-base flex items-center gap-3 transition-all shadow-lg disabled:opacity-70 disabled:cursor-not-allowed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wand2$3e$__["Wand2"], {
                                                size: 24,
                                                className: isExtracting ? 'animate-spin' : 'animate-pulse'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                lineNumber: 172,
                                                columnNumber: 16
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            isExtracting ? 'Đang phân tích...' : 'Phân tích với AI'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                lineNumber: 162,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                        lineNumber: 146,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-10 gap-8 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "lg:col-span-7 flex flex-col gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-sm font-bold uppercase tracking-wider text-gray-500 mb-4",
                                        children: "Tài liệu đính kèm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 33
                                                }, void 0),
                                                name: "imageFile",
                                                accept: "image/*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$FileUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"], {
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 33
                                                }, void 0),
                                                name: "audioFile",
                                                accept: "audio/*"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                lineNumber: 187,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileEdit$3e$__["FileEdit"], {
                                            size: 22,
                                            className: "text-[#2b8cee]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                            lineNumber: 192,
                                            columnNumber: 26
                                        }, void 0),
                                        children: "Nội dung câu hỏi chính xác"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: subQuestion?.content || '',
                                        onChange: (e)=>updateQuestionField('content', e.target.value),
                                        className: "min-h-[120px]",
                                        placeholder: "AI sẽ tự động điền vào đây sau khi trích xuất..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckSquare$3e$__["CheckSquare"], {
                                                    size: 22,
                                                    className: "text-[#2b8cee]"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                    lineNumber: 203,
                                                    columnNumber: 28
                                                }, void 0),
                                                children: "Danh sách đáp án"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                lineNumber: 203,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full",
                                                children: "Chọn vào ô để xác định đáp án đúng"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                lineNumber: 204,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: subQuestion?.options.map((opt, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$AnswerInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                index: i,
                                                option: opt,
                                                isChecked: subQuestion.correctAnswer?.[0] === opt,
                                                onCheck: ()=>setCorrectAnswer(opt),
                                                onUpdate: (value)=>updateOption(i, value)
                                            }, i, false, {
                                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                                lineNumber: 208,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                            size: 22,
                                            className: "text-[#2b8cee]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 26
                                        }, void 0),
                                        children: "Lời giải thích của AI"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        value: subQuestion?.explanation || '',
                                        onChange: (e)=>updateQuestionField('explanation', e.target.value),
                                        className: "min-h-[140px]",
                                        placeholder: "Giải thích chi tiết về ngữ pháp/từ vựng của câu hỏi..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                        lineNumber: 182,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        className: "lg:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$questions$2f$CreateQuestionSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            difficulty: questionData.metadata?.level || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Difficulty"].MEDIUM,
                            setDifficulty: (val)=>setQuestionData((prev)=>({
                                        ...prev,
                                        metadata: {
                                            ...prev.metadata,
                                            level: val
                                        }
                                    })),
                            topic: questionData.topic || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$definitions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Topic"].GRAMMAR,
                            setTopic: (val)=>setQuestionData((prev)=>({
                                        ...prev,
                                        topic: val
                                    })),
                            tags: subQuestion?.tags || [],
                            setTags: (val)=>updateQuestionField('tags', val),
                            onSave: ()=>handleSave(false),
                            onSaveAndContinue: ()=>handleSave(true),
                            onCancel: ()=>router.push('/dashboard/teacher/questions'),
                            isSaving: isSaving
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                            lineNumber: 233,
                            columnNumber: 12
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/teacher/questions/create/page.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CreateQuestionPage, "CMU5ObRQvFiVGxLf+L+WQ2JrB00=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = CreateQuestionPage;
const __TURBOPACK__default__export__ = CreateQuestionPage;
var _c;
__turbopack_context__.k.register(_c, "CreateQuestionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Sparkles
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
            key: "1s2grr"
        }
    ],
    [
        "path",
        {
            d: "M20 2v4",
            key: "1rf3ol"
        }
    ],
    [
        "path",
        {
            d: "M22 4h-4",
            key: "gwowj6"
        }
    ],
    [
        "circle",
        {
            cx: "4",
            cy: "20",
            r: "2",
            key: "6kqj1y"
        }
    ]
];
const Sparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("sparkles", __iconNode);
;
 //# sourceMappingURL=sparkles.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sparkles",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Brain
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 18V5",
            key: "adv99a"
        }
    ],
    [
        "path",
        {
            d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",
            key: "1e3is1"
        }
    ],
    [
        "path",
        {
            d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",
            key: "1gqd8o"
        }
    ],
    [
        "path",
        {
            d: "M17.997 5.125a4 4 0 0 1 2.526 5.77",
            key: "iwvgf7"
        }
    ],
    [
        "path",
        {
            d: "M18 18a4 4 0 0 0 2-7.464",
            key: "efp6ie"
        }
    ],
    [
        "path",
        {
            d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",
            key: "1gq6am"
        }
    ],
    [
        "path",
        {
            d: "M6 18a4 4 0 0 1-2-7.464",
            key: "k1g0md"
        }
    ],
    [
        "path",
        {
            d: "M6.003 5.125a4 4 0 0 0-2.526 5.77",
            key: "q97ue3"
        }
    ]
];
const Brain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("brain", __iconNode);
;
 //# sourceMappingURL=brain.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Brain",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>WandSparkles
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
            key: "ul74o6"
        }
    ],
    [
        "path",
        {
            d: "m14 7 3 3",
            key: "1r5n42"
        }
    ],
    [
        "path",
        {
            d: "M5 6v4",
            key: "ilb8ba"
        }
    ],
    [
        "path",
        {
            d: "M19 14v4",
            key: "blhpug"
        }
    ],
    [
        "path",
        {
            d: "M10 2v2",
            key: "7u0qdc"
        }
    ],
    [
        "path",
        {
            d: "M7 8H3",
            key: "zfb6yr"
        }
    ],
    [
        "path",
        {
            d: "M21 16h-4",
            key: "1cnmox"
        }
    ],
    [
        "path",
        {
            d: "M11 3H9",
            key: "1obp7u"
        }
    ]
];
const WandSparkles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("wand-sparkles", __iconNode);
;
 //# sourceMappingURL=wand-sparkles.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript) <export default as Wand2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Wand2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wand$2d$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wand-sparkles.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Image
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "18",
            x: "3",
            y: "3",
            rx: "2",
            ry: "2",
            key: "1m3agn"
        }
    ],
    [
        "circle",
        {
            cx: "9",
            cy: "9",
            r: "2",
            key: "af1f0g"
        }
    ],
    [
        "path",
        {
            d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
            key: "1xmnt7"
        }
    ]
];
const Image = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("image", __iconNode);
;
 //# sourceMappingURL=image.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageIcon",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Mic
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 19v3",
            key: "npa21l"
        }
    ],
    [
        "path",
        {
            d: "M19 10v2a7 7 0 0 1-14 0v-2",
            key: "1vc78b"
        }
    ],
    [
        "rect",
        {
            x: "9",
            y: "2",
            width: "6",
            height: "13",
            rx: "3",
            key: "s6n7sd"
        }
    ]
];
const Mic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("mic", __iconNode);
;
 //# sourceMappingURL=mic.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript) <export default as Mic>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-pen.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FilePen
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34",
            key: "o6klzx"
        }
    ],
    [
        "path",
        {
            d: "M14 2v5a1 1 0 0 0 1 1h5",
            key: "wfsgrz"
        }
    ],
    [
        "path",
        {
            d: "M10.378 12.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z",
            key: "zhnas1"
        }
    ]
];
const FilePen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("file-pen", __iconNode);
;
 //# sourceMappingURL=file-pen.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-pen.js [app-client] (ecmascript) <export default as FileEdit>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileEdit",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-pen.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>SquareCheckBig
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",
            key: "2acyp4"
        }
    ],
    [
        "path",
        {
            d: "m9 11 3 3L22 4",
            key: "1pflzl"
        }
    ]
];
const SquareCheckBig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("square-check-big", __iconNode);
;
 //# sourceMappingURL=square-check-big.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript) <export default as CheckSquare>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckSquare",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-check-big.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Lightbulb
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
            key: "1gvzjb"
        }
    ],
    [
        "path",
        {
            d: "M9 18h6",
            key: "x1upvd"
        }
    ],
    [
        "path",
        {
            d: "M10 22h4",
            key: "ceow96"
        }
    ]
];
const Lightbulb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("lightbulb", __iconNode);
;
 //# sourceMappingURL=lightbulb.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript) <export default as Lightbulb>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lightbulb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Paperclip
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
            key: "1miecu"
        }
    ]
];
const Paperclip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("paperclip", __iconNode);
;
 //# sourceMappingURL=paperclip.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Paperclip",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Settings
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
            key: "1i5ecw"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("settings", __iconNode);
;
 //# sourceMappingURL=settings.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Settings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Save
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
            key: "1c8476"
        }
    ],
    [
        "path",
        {
            d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
            key: "1ydtos"
        }
    ],
    [
        "path",
        {
            d: "M7 3v4a1 1 0 0 0 1 1h7",
            key: "t51u73"
        }
    ]
];
const Save = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("save", __iconNode);
;
 //# sourceMappingURL=save.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Save",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CirclePlus
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M8 12h8",
            key: "1wcyev"
        }
    ],
    [
        "path",
        {
            d: "M12 8v8",
            key: "napkw2"
        }
    ]
];
const CirclePlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-plus", __iconNode);
;
 //# sourceMappingURL=circle-plus.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript) <export default as PlusCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlusCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
]);

//# sourceMappingURL=_3d93ef95._.js.map