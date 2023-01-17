import { http } from "@/request/request";
import { condition } from "@/types/api/article"
import { articles } from '@/types/api/article'

//获取文章列表
export const getArticleList = (page: number, type: number) =>
    http.get<articles[]>("/api/articles", { params: { current: page, type: type } });

//获取文章详情
export const getArticleDetail = (params: string) => http.get(`/api${params}`);

//搜索
export const searchArticle = (params: string) =>
    http.get("/api/articles/search", {
        params: { current: 1, keywords: params },
    });