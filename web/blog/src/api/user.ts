import { http } from "@/request/request";

// 上传访客信息
export const uploadUserInfo = () => http.post("/api/report");


