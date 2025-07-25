+++
title = "Vi Documentation"
template = "page.html"
+++

# Vi Documentation

*Note: The original vi.html file appears to contain Firefox content instead of vi documentation. This is a placeholder for actual vi/vim documentation.*

## Basic Vi Commands

### Mode Switching
- `i` - Enter insert mode before cursor
- `a` - Enter insert mode after cursor
- `o` - Open new line below and enter insert mode
- `O` - Open new line above and enter insert mode
- `ESC` - Return to normal mode

### Navigation
- `h` - Move left
- `j` - Move down
- `k` - Move up
- `l` - Move right
- `w` - Move to beginning of next word
- `b` - Move to beginning of previous word
- `0` - Move to beginning of line
- `$` - Move to end of line
- `gg` - Go to first line
- `G` - Go to last line

### Editing
- `x` - Delete character under cursor
- `dd` - Delete entire line
- `yy` - Copy (yank) entire line
- `p` - Paste after cursor
- `P` - Paste before cursor
- `u` - Undo
- `Ctrl+r` - Redo

### Search and Replace
- `/pattern` - Search forward for pattern
- `?pattern` - Search backward for pattern
- `n` - Next search result
- `N` - Previous search result
- `:s/old/new/g` - Replace all occurrences in current line
- `:%s/old/new/g` - Replace all occurrences in file

### File Operations
- `:w` - Save file
- `:q` - Quit
- `:wq` or `:x` - Save and quit
- `:q!` - Quit without saving

### Visual Mode
- `v` - Enter visual mode (character selection)
- `V` - Enter visual line mode
- `Ctrl+v` - Enter visual block mode

This is a basic reference. For complete vi/vim documentation, consult the manual with `:help` within vim or `man vi` from the command line.