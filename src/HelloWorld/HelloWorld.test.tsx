import React from "react"
import { createRoot } from "react-dom/client"
import { act } from "react-dom/test-utils"
import { HelloWorld } from ".."

describe("HelloWorld component", () => {
  it("can use CSS Modules in CSS", () => {
    const container = document.createElement("main")
    const root = createRoot(container)
    act(() => {
      root.render(<HelloWorld />)
    })
    expect(container).toMatchSnapshot()
  })
  it("can use CSS Modules in LESS", () => {
    const container = document.createElement("main")
    const root = createRoot(container)
    act(() => {
      root.render(<HelloWorld cssModuleType="less" />)
    })
    expect(container).toMatchSnapshot()
  })
  it("can use CSS Modules in SASS", () => {
    const container = document.createElement("main")
    const root = createRoot(container)
    act(() => {
      root.render(<HelloWorld cssModuleType="sass" />)
    })
    expect(container).toMatchSnapshot()
  })
  it("can use CSS Modules in SCSS", () => {
    const container = document.createElement("main")
    const root = createRoot(container)
    act(() => {
      root.render(<HelloWorld cssModuleType="scss" />)
    })
    expect(container).toMatchSnapshot()
  })
  it("can use CSS Modules in Stylus", () => {
    const container = document.createElement("main")
    const root = createRoot(container)
    act(() => {
      root.render(<HelloWorld cssModuleType="styl" />)
    })
    expect(container).toMatchSnapshot()
  })
  it("can use GIFs", () => {
    const container = document.createElement("main")
    const root = createRoot(container)
    act(() => {
      root.render(<HelloWorld logoRender={"gif"} />)
    })
    expect(container).toMatchSnapshot()
  })
  it("can use JPGs", () => {
    const container = document.createElement("main")
    const root = createRoot(container)
    act(() => {
      root.render(<HelloWorld logoRender={"jpg"} />)
    })
    expect(container).toMatchSnapshot()
  })
  it("can use PNGs", () => {
    const container = document.createElement("main")
    const root = createRoot(container)
    act(() => {
      root.render(<HelloWorld logoRender={"png"} />)
    })
    expect(container).toMatchSnapshot()
  })
  it("can use SVG components", () => {
    const container = document.createElement("main")
    const root = createRoot(container)
    act(() => {
      root.render(<HelloWorld logoRender={"svgComponent"} />)
    })
    expect(container).toMatchSnapshot()
  })
  it("can use SVG URLs", () => {
    const container = document.createElement("main")
    const root = createRoot(container)
    act(() => {
      root.render(<HelloWorld logoRender={"svgUrl"} />)
    })
    expect(container).toMatchSnapshot()
  })
  it("can use WEBPs", () => {
    const container = document.createElement("main")
    const root = createRoot(container)
    act(() => {
      root.render(<HelloWorld logoRender={"webp"} />)
    })
    expect(container).toMatchSnapshot()
  })
})
