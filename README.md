# count-me-in

- GitHub profile: https://github.com/Greduan/
- GitHub repo: https://github.com/Greduan/count-me-in/
- Gratipay: https://gratipay.com/Greduan/
- Twitter: https://twitter.com/EduanLavaque/

This project may only be useful to me, but I'm sharing it because it may be
useful to someone else.

Basically it's a counter.  You call it, give it a file and it adds a number to
whatever the number on that file is.  I usually count stuff by hand on a piece
of paper, but sometimes I don't have that and I still need to count stuff, so
I'm making this.

It has one counter per file, I'll probably make it fancy and add stuff where it
keeps track of the date when that was counted, be able to count more than one
digit at a time, list the total count nicely, etc.

## Installation

You can get the latest stable and/or development version from the GitHub
repo. <https://github.com/Greduan/count-me-in>

To install simply clone this repo somewhere, install npm packages `npm install`
and add an alias to your shell that points to the location of this repo's
`bin/cmi`.  Something like this:

    alias cmi='/home/greduan/dev/count-me-in/bin/cmi'

Of course replacing that with your actual location.

You can also now install it with NPM, using `npm install -g count-me-in`. :)

## Usage

    Usage: cmi [-d DIR] [-r] NAME [(NUM | --set NUM)]

    Options:
      -h --help     Show this screen.
      -v --version  Output software version.
      -r            NUM decreases the counter instead of increasing it.
      --set NUM     When used it sets the count to NUM.
      -d DIR        Directory where to store counter(s) relative to current directory. [default: .cmi]

## License

    Copyright (c) 2014, Greduan <eduan@websharks-inc.com>

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted, provided that the above
    copyright notice and this permission notice appear in all copies.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
    SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
    OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
    CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

## Author(s) and contributors

Check the CONTRIBUTORS file for contributors to this project.

For instructions and/or guidelines on contributing check the CONTRIBUTING.md
file.
