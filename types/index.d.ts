declare module "*.gif" {
  const src: string
  export default src
}

declare module "*.jpg" {
  const src: string
  export default src
}

declare module "*.jpeg" {
  const src: string
  export default src
}

declare module "*.png" {
  const src: string
  export default src
}

declare module "*.webp" {
  const src: string
  export default src
}

declare module "*.svg" {
  const ReactComponent: (props: SVGProps<SVGElement>) => ReactElement
  const content: string

  export { ReactComponent }
  export default content
}

declare module "*.module.css" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.module.sass" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.module.scss" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.module.pcss" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.module.sss" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.module.less" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.module.styl" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.module.stylus" {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module "*.css"
declare module "*.sass"
declare module "*.scss"
declare module "*.pcss"
declare module "*.sss"
declare module "*.less"
declare module "*.styl"
declare module "*.stylus"
