# Neural Notes

A simple, elegant markdown-based note-taking app inspired by Obsidian. Built with vanilla HTML, CSS, and JavaScript.

## 🎯 Version 1.0 - Initial Release

A modern, minimalist note-taking application developed from scratch. Inspired by Obsidian, designed to provide a user-friendly and powerful experience.

### 🚀 Features Developed in V1.0

The following features were fully implemented in this first version:

**🏗️ Core Architecture:**
- Clean code architecture with modern ES6+ JavaScript class structure
- Responsive design with CSS Grid and Flexbox
- Semantic HTML5 structure
- Client-side data persistence with LocalStorage

**💻 User Interface:**
- Clean and minimal Obsidian-style design
- Smooth animations and micro-interactions
- Light/Dark mode toggle system
- Mobile-first responsive approach

**📝 Note Management:**
- Markdown parsing and real-time preview
- Internal linking system ([[note name]] syntax)
- Auto-save functionality (2-second debounce)
- CRUD operations (Create, Read, Update, Delete)

**🔍 Search and Navigation:**
- Real-time search functionality
- Note cards with grid layout
- Smart timestamp formatting
- Keyboard shortcuts support

## 🌟 Main Features

- Create, edit, and delete notes
- All notes saved in your browser (no server)
- Instant search by title and content
- Markdown support with live preview
- Internal note linking
- Dark/Light mode with preference saving
- Fully responsive for desktop, tablet, and mobile
- Auto-save as you type
- Minimal, distraction-free interface
- Keyboard shortcuts
- Word counter
- Human-readable timestamps
- Edit/Preview tabs
- Modern UI with smooth effects
- Note previews in grid
- Floating action button for new notes
- Toast notifications for actions

## 🚀 Getting Started

1. Download or clone the project files:
   - `index.html` - Main app structure
   - `styles.css` - All styles and themes
   - `script.js` - App functionality
2. Open `index.html` in your browser
3. Click the + button to create your first note

## 📝 Usage

### Creating Notes
- Click the + button or press Ctrl/Cmd + N
- Enter a title and write in markdown
- Notes auto-save every 2 seconds
- Press Ctrl/Cmd + S to save manually

### Organizing Notes
- Notes appear in a responsive grid
- Most recently modified notes appear first
- Use the search bar to find notes
- Click a note card to edit

### Internal Linking
- Link to other notes with `[[Note Title]]`
- Links are highlighted and clickable
- Clicking a non-existent link creates a new note

### Markdown Support
- Headers: `# H1`, `## H2`, `### H3`
- Bold: `**bold text**`
- Italic: `*italic text*`
- Code: `` `inline code` `` or ``` code blocks ```
- Lists: `-` or `1.`
- Blockquotes: `> quoted text`
- Links: `[text](url)`

### Themes
- Click the moon/sun icon to toggle theme
- Preference is saved automatically
- Dark mode: slate colors
- Light mode: clean whites and grays

## ⌨️ Keyboard Shortcuts

| Shortcut              | Action                |
|----------------------|-----------------------|
| Ctrl/Cmd + N         | New note              |
| Ctrl/Cmd + S         | Save note             |
| Ctrl/Cmd + K         | Focus search bar      |
| Ctrl/Cmd + Shift + D | Toggle dark/light     |
| Escape               | Close note editor     |

## 📱 Responsive Design

- Desktop: Full-width layout, large cards
- Tablet: Responsive grid, medium cards
- Mobile: Single column, touch-friendly
- Small mobile: Optimized for smallest screens

## 🛠️ Technical Details

- HTML5, CSS3 (Grid, Flexbox)
- Vanilla JavaScript
- Marked.js for markdown parsing
- Font Awesome for icons
- Inter font from Google Fonts

### Browser Support
- Chrome 88+, Firefox 85+, Safari 14+, Edge 90+

### Data Storage
- All notes in `localStorage`
- Storage key: `neuralNotes_notes`
- Theme preference: `neuralNotes_theme`
- No data sent to any server

## 🎨 Customization

Uses CSS variables for easy theming. Example:
```css
:root {
  --accent-primary: #3b82f6;
  --bg-primary: #fff;
  --text-primary: #1e293b;
}
```

## 🔒 Privacy & Security

- 100% local: all data stays in your browser
- No tracking or analytics
- Works offline
- Only you can access your notes

## 🚧 Limitations

- Storage limited by browser (~5-10MB)
- No sync across devices
- No collaboration
- No advanced organization

## 📄 License

MIT License

---

**Happy Note Taking! 🧠✨** 