# AGENTS.md

Guidelines for Codex (the agent) working in this repository.

## 1. General Engineering Guidelines

- Before implementing:
  - State assumptions explicitly. If uncertain, ask.
  - If multiple interpretations exist, present them instead of silently picking one.
  - If a simpler approach exists, say so and push back when warranted.
  - If a decision involves tradeoffs, state them clearly up front
  - If something is unclear, stop. Name what is confusing, and ask.
- Simplicity first: Avoid over-engineering. Choose the most maintainable minimal approach first.

## 2. React / Typescript-Specific Guidelines

- React
  - Component name always use pascal casing.

## 3. Project Conventions

### 3.1 Naming Conventions

- Prefer singular directory names by default in frontend projects. For example, use `component` instead of `components`, and `context` instead of `contexts`.
- Avoid using dash or underscore in file name.
- Page / layout files
  - `.tsx` files that located in `ui` directory and filename ends with `.page.tsx` or `.layout.tsx` are page or layout file.
  - Page and layout files use camel case for name. Like `myPage.page.tsx`.
  - If a page/layout has local styles, `.scss` file that imported in each page or layout file shares same file name. Like `myPage.page.module.scss`.
- React component files
  - `.tsx` files that located in `component` directory, or located in `ui` directory and is not `Page / layout file`, are React component files.
  - `.tsx` file is usually placed in directory that has the same name with the component defined inside. For the simple logic-only components like context providers, it's allowed to be unwrapped in normal directory. But always keep consistency between components placed in same directory.
  - `.tsx` file has the same name with component defined inside.
  - If a component has local styles, place the SCSS module file in the same directory and use the same base name as the component (e.g. `MyComponent/MyComponent.module.scss`).
  - Good example:
    - `MyComponent`
      - `MyComponent.tsx`
      - `MyComponent.module.scss`
