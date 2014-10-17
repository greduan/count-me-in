# Changelog

All notable changes to this project will be documented in this file.

## 0.4.1 - 2014-10-17

### Fixed

- Moved `.npmignore` file from bin/ to repo root.  Oops. :P

## 0.4.0 - 2014-10-17

### Added

- The following functions in `lib/main.js`:
  - `main.getLastNumber(string)` (along with passing tests)
  - `main.newNumber(num, num, bool)` (along with passing tests)
  - `main.newLine(num)`
- The `bin/cmi` file which would be the main command provided by this module.
- `.npmignore` file.

### Changed

- `index.js` file now returns the `lib/main.js` file.
- Updates to README.md.  Including updated install instructions.  Now uses
  `npm link` instead of a shell alias.
- Default folder is now relative to the current directory and not in the home
  folder.
- File and folder is created if it doesn't exist.

## v0.0.0 to v0.3.0

Previous versions.  No incompatible change but the code was re-written so these
versions don't matter.  They also don't matter because this is a tiny app, not a
library of any sort.
