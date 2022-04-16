/// <reference types="react-scripts" />

// 解决scss文件作为模块引入typescript报错的问题
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}
