# Copy Open Files With Paths

## Overview

Copy Open Files is a VS Code extension that allows you to quickly copy the contents of all open files in your editor. This is particularly useful for pasting large amounts of code or text into ChatGPT, Claude, and etc.

## Features

- Copies content from all open tabs in VS Code
- Uses relative file paths when possible
- Combines all content into a single document for easy copying
- Ideal for sharing multiple files with AI assistants

## How to Use

1. Install the extension from the VS Code Marketplace
2. Open the files you want to copy in VS Code tabs
3. Run the command "Copy Open Files" from the Command Palette (Ctrl+Shift+P or Cmd+Shift+P)
4. A new document will open containing the contents of all open files
5. Copy the content of this new document and paste it into your AI assistant of choice

## Example

Let's say you have three files open in VS Code:

1. `src/main.js`
2. `src/utils/helper.js`
3. `test/test.js`

After running the "Copy Open Files" command, you'll get a new document with content similar to this:

```
// File contents:

// src/main.js

import { helper } from './utils/helper.js';

function main() {
    console.log(helper());
}

main();

// src/utils/helper.js

export function helper() {
    return "Hello from helper!";
}

// test/test.js

import { helper } from '../src/utils/helper.js';

test('helper function', () => {
    expect(helper()).toBe("Hello from helper!");
});
```

You can now easily copy this entire content and paste it into an AI assistant for analysis, questions, or modifications.

## Requirements

No special requirements or dependencies. Works with any files that can be opened in VS Code.

## Known Issues

Currently none. Please report any issues you encounter on our GitHub page.

## Release Notes

### 1.0.0

Initial release of Copy Open Files.

---

**Enjoy using Copy Open Files to streamline your interactions with AI and LLMs!**
