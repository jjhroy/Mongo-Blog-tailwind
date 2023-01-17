import { http } from "@/request/request";
import { loginParams } from "@/types/api/auth"
//设置为form-data的数据请求格式
const config = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    transformRequest: [function (data: any) {
        let ret = '';
        let num = 1;
        for (let it in data) {
            if (Object.keys(data).length === num) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]);
            } else {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            num++;
        }
        return ret;
    }]
}

//用户登录
export const userLogin = (params: loginParams) =>
    http.post("/api/login", params, config);
