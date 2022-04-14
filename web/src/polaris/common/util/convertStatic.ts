export const convertStatic = (url: string) => {
  const basePath = process.env.BASE_PATH
  if (!basePath) {
    return url
  }
  if(url.startsWith("/")){
    return `${basePath}${url}`
  }else{
    return `${basePath}/${url}`
  }
}
