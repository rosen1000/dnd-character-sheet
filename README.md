# DnD Character Sheet Generator
## Import for TypeScript
```ts
import { Character } from "dist/Character";
```
## Require for JavaScript
```js
const Character = require("dist/Character");
```
- Depends on where you install the package
## Image details
- **DO NOT** move, rename or delete `template.png`, `Acme-Regular.ttf` unless you know what you are doing or you don't want to generate charater sheet, which is the whole point of the project (Changing template.png doesn't auto allign with the code)
- `avatar.png` is an example, you can change it with your avatar (Thank you u/B7197 for the amazing artwork!)
- Image handling is about to change so keep that in mind.
- Currently only parses this template, so navigate to src/Generate.ts:142:16 and adjust
## Building
Build with preset script
```sh
npm run build
```
## Requirements
- Install typescript globaly
```sh
npm i -g typescript
```
- Note: Linux will require sudo previleges to run
- Install dependencies
```sh
npm i
```
## Contributions:
I don't mind if anyone wants to help, even if I made a typo somewhere or if some of the data is wrong. First usability, then speed.
## Last Notes:
- Index.ts is only for demonstration purposes
- Generate.ts uses `template.png` to generate the charater sheet named `out.png`
- Have fun using this tool! :)