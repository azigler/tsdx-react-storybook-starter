import React, { FC } from "react"

import cssModule from "./HelloWorld.module.css"
import lessModule from "./HelloWorld.module.less"
import sassModule from "./HelloWorld.module.sass"
import scssModule from "./HelloWorld.module.scss"
import stylModule from "./HelloWorld.module.styl"

import gifUrl from "./tsdx.gif"
import jpgUrl from "./tsdx.jpg"
import pngUrl from "./tsdx.png"
import svgUrl, { ReactComponent as SvgComponent } from "./tsdx.svg"
import webpUrl from "./tsdx.webp"

export interface HelloWorldProps {
  /** Greeting phrase */
  greeting?: string
  /** Target of the greeting */
  greeted?: string
  /** String appended to the greeting */
  appended?: string
  /** Alt text for the logo  */
  logoAlt?: string
  /** How the logo is rendered  */
  logoRender?: "gif" | "jpg" | "png" | "svgComponent" | "svgUrl" | "webp"
  /** CSS Module type used */
  cssModuleType?: "css" | "less" | "sass" | "scss" | "styl"
}

export const HelloWorld: FC<HelloWorldProps> = ({
  greeting = "Hello",
  greeted = "world",
  appended = "👋",
  logoAlt = "TSDX Logo",
  logoRender = "svgComponent",
  cssModuleType = "css"
}) => {
  let logo

  switch (logoRender) {
    case "gif":
      logo = <img src={gifUrl} alt={logoAlt} />
      break
    case "jpg":
      logo = <img src={jpgUrl} alt={logoAlt} />
      break
    case "png":
      logo = <img src={pngUrl} alt={logoAlt} />
      break
    case "svgComponent":
      logo = SvgComponent
        ? /* istanbul ignore next */
          (logo = <SvgComponent title={logoAlt} />)
        : (logo = <img src={svgUrl} alt={logoAlt} />)
      break
    case "svgUrl":
      logo = <img src={svgUrl} alt={logoAlt} />
      break
    case "webp":
      logo = <img src={webpUrl} alt={logoAlt} />
      break
  }

  let styles

  switch (cssModuleType) {
    case "css":
      styles = cssModule
      break
    case "less":
      styles = lessModule
      break
    case "sass":
      styles = sassModule
      break
    case "scss":
      styles = scssModule
      break
    case "styl":
      styles = stylModule
  }

  return (
    <div className={styles.helloWorld}>
      {greeting} <span className="span">{greeted}</span>! {appended}
      {logo}
    </div>
  )
}
