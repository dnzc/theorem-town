# notes.danielc.rocks

This is the source code for [notes.danielc.rocks](https://notes.danielc.rocks), which contains my notes on mathematical topics. It includes a custom static-site generator built from scratch because I'm extra like that. The website design is original.

### How the SSG works

1. Reads Markdown files from source/
2. Processes them with a custom [mistune](https://github.com/lepture/mistune) processor, that handles custom markdown features like math tags
3. Injects the result into custom jinja templates
4. Wraps in boilerplate React to generate Next.js pages, and writes to the standalone Next.js app

- Also uses react-svg to custom compile svgs into inline react components so they can be given variable colours

### Running locally

```bash
cd ssg
pip install -r requirements.txt
python3 run.py
cd next-app && npm run dev
```

### Vercel Deployment

A Vercel project listens to this repository and has `next-app/` as the project root. The SSG runs automatically during deployment, via the configuration in `next-app/vercel.json`. `next-app/app` is not tracked in git - instead it is built fresh on each deployment.

### Markdown Custom Features

- Custom tags e.g. `<CopyButton>`
- Math tags: Defn, Thm, Lemma, Proof, Example, KeyIdea, Warning, Quiz (look for examples in source to see how they are used)
    - Each of these comes with defaults, can specify e.g. "unbolded", "unquoted"
    - Write text on same line as opening tag to make that sentence inline with the declaration text
- Ease-of-use components: Spoiler, ProminentLink, DiscreetLink, MailLink, Badge, CopyButton, IncompleteMessage
- AUTOSVG tag: put instead of img/Image tag to be converted to inline svg with dynamic theme colours using svgr
    - All fonts in the svg should be Fira Code (automatically converts to match page font) (Fira Code chosen as default since it's the widest)
    - The following colours are replaced:
        - black   #000000 -> Svg-text
        - white   #ffffff -> background (use for negative text outlines)
        - 50%gray #808080 -> Svg-gray
        - blue    #0000ff -> Svg-text-highlight
        - green   #00ff00 -> Svg-line-highlight-1
        - cyan    #00ffff -> Svg-line-highlight-2
        - red     #ff0000 -> Svg-fill-highlight-1
        - pink    #ff00ff -> Svg-fill-highlight-2
        - yellow  #ffff00 -> Svg-fill-highlight-3
- Frontmatter for metadata
- Mark a code block with ":::COPIABLE" on the previous line, to add a copy button to the block

### Content Organization

- Books: Folders starting with `[BOOK]` are marked as books/courses (nested books not allowed)
- Book homepages: Add `README.md` to book folders to appear on site homepage with metadata
- Webpage titles: Use `pagename` frontmatter attribute. If not provided, it's auto-generated from filename:
    - "and" → "&" (case-insensitive)  
    - Dashes → spaces
    - Original case preserved
- URL slugs: Lowercase version of filename
- Folder descriptions: Optional `README.md` files provide folder overviews
- Naming convention: Alphanumeric + dashes only, words separated by dashes

## Changelog

### 11/12/25

#### Changed

- Smaller line length for readability
- Homepage revamp

### 22/08/25

#### Added

- Better site homepage + description, more friendly to new users; focus on interactivity

### 28/06/25

#### Added

- Selectable colour schemes:
  - [sanctum](https://github.com/jdanielmourao/obsidian-sanctum/tree/main) (adapted)
  - [catppuccin](https://catppuccin.com/palette/)
  - [gruvbox](https://github.com/morhetz/gruvbox?tab=readme-ov-file#palette)

#### Changed

- Homepage revamp:
  - New "hero" section (different for different themes)
  - "About" section -> FAQ section
- New domain

### 19/12/24

#### Changed

- primary purpose of the site is now storage of course notes
- Consistent styling of theorems, defns, examples etc
- Replace dark theme with light theme for easier readability

### 08/07/24

#### Added

- Highlighting in search results
- Copy buttons for code
- Button to copy article plaintext

### 12/06/24

#### Added

- This changelog
- List of recent articles
- Search and filetree modals
- Keyboard shortcuts

#### Changed

- Sidebar now toggleable
- Site more responsively designed and mobile-friendly

### 11/07/23

#### Added

- This website

## License

This project uses dual licensing:

- **Code**: All source code (Next.js app, Python SSG, components, etc.) is licensed under the [MIT License](LICENSE)
- **Content**: The educational content in `/source/` and all generated derived content displayed on the website is licensed under [CC BY 4.0](LICENSE-CONTENT)

The opengraph image is adapted from [Artist's blossom]("https://inkscape.org/~Inkonic/%E2%98%85inkscapes-path-artists-blossom") by Inkonic, licensed under [CC BY-SA 4.0]("https://creativecommons.org/licenses/by-sa/4.0/").