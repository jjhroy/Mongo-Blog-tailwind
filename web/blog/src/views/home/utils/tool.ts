/*转换base64*/
export const ToBase64 = (img: any) => {
    const imgFile = new FileReader()
    imgFile.readAsDataURL(img)
    imgFile.onload = function () {
        const imgData = this.result?.toString() //base64数据
    }
}