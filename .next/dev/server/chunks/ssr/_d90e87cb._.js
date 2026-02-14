module.exports = [
"[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40250f17555b511966689cc0bf9757be8e299f5b86":"createQuestionAction","408b76bee2e24fd79af8a8a6bd23be9451d3ab4774":"generateQuestionWithAI"},"",""] */ __turbopack_context__.s([
    "createQuestionAction",
    ()=>createQuestionAction,
    "generateQuestionWithAI",
    ()=>generateQuestionWithAI
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
// --- CONFIGURATION ---
// Lấy URL của API backend từ biến môi trường, với một giá trị dự phòng cho môi trường dev.
const API_URL = process.env.BACKEND_API_URL || 'http://localhost:5000/api';
/**
 * Hàm helper để thực hiện các cuộc gọi API đã được xác thực đến backend.
 * Hàm này tập trung hóa logic fetch, cấu hình header, và xử lý lỗi.
 * 
 * @param endpoint - Endpoint của API (ví dụ: '/questions').
 * @param method - Phương thức HTTP ('GET', 'POST', ...).
 * @param body - Dữ liệu JSON cho request.
 * @returns - Một object chứa dữ liệu hoặc thông báo lỗi.
 */ async function callApi(endpoint, method, body) {
    const fullUrl = `${API_URL}${endpoint}`;
    // !!! QUAN TRỌNG: Đây là placeholder cho logic xác thực của bạn.
    // Bạn cần thay thế bằng cách lấy token của người dùng (ví dụ: từ session hoặc cookie).
    const authToken = 'YOUR_HARDCODED_AUTH_TOKEN_FOR_NOW';
    try {
        const response = await fetch(fullUrl, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            body: body ? JSON.stringify(body) : undefined,
            // Luôn không cache các yêu cầu từ server action để đảm bảo dữ liệu mới nhất.
            cache: 'no-store'
        });
        // Luôn cố gắng parse body của response, ngay cả khi response.ok là false.
        const responseBody = await response.json();
        if (!response.ok) {
            console.error(`Lỗi API tại ${method} ${fullUrl}:`, responseBody);
            // Ưu tiên sử dụng message lỗi từ backend.
            throw new Error(responseBody.message || `Yêu cầu API thất bại với status ${response.status}`);
        }
        // Backend của bạn trả về dữ liệu trong một key 'data', ta sẽ trích xuất nó ở đây.
        return {
            success: true,
            data: responseBody.data
        };
    } catch (error) {
        console.error(`Lỗi fetch trong Server Action đến ${fullUrl}:`, error);
        const errorMessage = error instanceof Error ? error.message : 'Đã có lỗi không xác định ở server.';
        return {
            success: false,
            error: errorMessage
        };
    }
}
async function generateQuestionWithAI(rawText) {
    if (!rawText || typeof rawText !== 'string' || !rawText.trim()) {
        return {
            success: false,
            error: 'Dữ liệu đầu vào không hợp lệ.'
        };
    }
    console.log(`[Action] Đang tạo câu hỏi từ text: "${rawText.substring(0, 50)}..."`);
    return callApi('/questions/generateQuestion', 'POST', {
        rawQuestionText: rawText
    });
}
async function createQuestionAction(questionData) {
    console.log('[Action] Đang lưu câu hỏi mới:', questionData.subQuestions[0]?.content);
    const result = await callApi('/questions', 'POST', questionData);
    if (result.success) {
        console.log('[Action] Revalidating đường dẫn: /dashboard/teacher/questions');
        // Nếu lưu thành công, revalidate cache của trang danh sách câu hỏi.
        // Điều này đảm bảo câu hỏi mới sẽ xuất hiện ngay lập tức.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/dashboard/teacher/questions');
    }
    return result;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    generateQuestionWithAI,
    createQuestionAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(generateQuestionWithAI, "408b76bee2e24fd79af8a8a6bd23be9451d3ab4774", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createQuestionAction, "40250f17555b511966689cc0bf9757be8e299f5b86", null);
}),
"[project]/.next-internal/server/app/dashboard/teacher/questions/create/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/.next-internal/server/app/dashboard/teacher/questions/create/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "40250f17555b511966689cc0bf9757be8e299f5b86",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createQuestionAction"],
    "408b76bee2e24fd79af8a8a6bd23be9451d3ab4774",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateQuestionWithAI"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$create$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/dashboard/teacher/questions/create/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$teacher$2f$questions$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/teacher/questions/actions.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_d90e87cb._.js.map