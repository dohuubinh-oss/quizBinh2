module.exports = [
"[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40124d32255656dec15a6f4dc359ba202fd7a656fe":"extractQuestionFromText"},"",""] */ __turbopack_context__.s([
    "extractQuestionFromText",
    ()=>extractQuestionFromText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
async function extractQuestionFromText(formData) {
    // ====================================================================
    // !!! QUAN TRỌNG: ĐÂY LÀ ENDPOINT API BACKEND CỦA BẠN !!!
    // Vui lòng xác nhận hoặc thay đổi đường dẫn này cho đúng.
    const API_ENDPOINT = '/api/ai/extract-question';
    // ====================================================================
    try {
        console.log(`Chuyển tiếp FormData đến API: ${API_ENDPOINT}`);
        // Khi body của fetch là một FormData, trình duyệt/Node sẽ tự động 
        // đặt header 'Content-Type' thành 'multipart/form-data' với boundary phù hợp.
        // KHÔNG cần đặt header 'Content-Type' thủ công.
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            body: formData
        });
        if (!response.ok) {
            const errorBody = await response.text();
            console.error(`Lỗi API - Status: ${response.status}, Body: ${errorBody}`);
            throw new Error(`API trả về lỗi: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("API trả về dữ liệu thành công:", data);
        // Tùy chọn: Revalidate đường dẫn nếu cần cập nhật cache sau khi tạo
        // revalidatePath('/dashboard/teacher/questions');
        return {
            success: true,
            data
        };
    } catch (error) {
        console.error("Lỗi khi gọi Server Action 'extractQuestionFromText':", error);
        if (error instanceof Error) {
            return {
                success: false,
                error: error.message
            };
        }
        return {
            success: false,
            error: 'An unknown error occurred.'
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    extractQuestionFromText
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(extractQuestionFromText, "40124d32255656dec15a6f4dc359ba202fd7a656fe", null);
}),
"[project]/.next-internal/server/app/dashboard/teacher/questions/create/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/dashboard/teacher/questions/create/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40124d32255656dec15a6f4dc359ba202fd7a656fe",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["extractQuestionFromText"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$create$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/teacher/questions/create/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=_1b2542c6._.js.map