# Neural Notes

A simple, elegant markdown-based note-taking app inspired by Obsidian. Built with vanilla HTML, CSS, and JavaScript – no frameworks required!

## 🎯 Version 1.0 – Initial Release

This first version was built completely from scratch as a modern, minimalist note-taking app. Inspired by Obsidian, the goal was to deliver a user-friendly yet powerful experience.

### 🚀 Features Introduced in V1.0

The following features were fully implemented in this initial version:

**🏗️ Core Architecture:**
- Clean code architecture using modern ES6+ JavaScript classes
- Responsive design with CSS Grid and Flexbox
- Semantic HTML5 structure
- Client-side data persistence via LocalStorage

**💻 User Interface:**
- Obsidian-style clean and minimal layout
- Smooth animations and micro-interactions
- Light/Dark mode toggle system
- Mobile-first responsive approach

**📝 Note Management:**
- Markdown parsing with real-time preview
- Internal linking system using `[[note name]]` syntax
- Auto-save functionality with 2-second debounce
- Full CRUD operations (Create, Read, Update, Delete)

**🔍 Search and Navigation:**
- Real-time search functionality
- Grid layout with note cards
- Smart timestamp formatting
- Keyboard shortcuts support

## 🌟 Features

### Core Functionality
- ✍️ **Create, Edit, Delete Notes** – Full CRUD support
- 💾 **Local Storage** – Notes are stored in your browser (no server required)
- 🔍 **Real-time Search** – Instantly search notes by title or content
- 📝 **Markdown Support** – Write using markdown with live preview
- 🔗 **Internal Linking** – Use `[[note name]]` to link between notes
- 🌙 **Dark/Light Mode** – Switch themes with saved preferences

### User Experience
- 📱 **Fully Responsive** – Works great on all devices
- ⚡ **Auto-save** – Notes are saved automatically (2s delay)
- 🎯 **Minimal Design** – Clean and focused writing environment
- ⌨️ **Keyboard Shortcuts** – Productivity-focused interaction
- 📊 **Word Counter** – Live word count in the editor
- 🕒 **Smart Timestamps** – “Today”, “Yesterday”, “3 days ago” display

### Advanced Features
- 🔄 **Edit/Preview Tabs** – Toggle between editor and preview mode
- 🎨 **Modern UI** – Soft shadows, animations, hover effects
- 📄 **Note Previews** – Grid view shows note snippets
- 🎯 **Floating Action Button** – Quick access to create new notes
- 🔔 **Toast Notifications** – Feedback for saving/deleting notes

## 🚀 Getting Started

1. **Clone or Download** the project files:
   - `index.html` – Main app structure
   - `styles.css` – All theming and layout styles
   - `script.js` – JavaScript functionality

2. **Open `index.html`** in your preferred browser

3. **Start Taking Notes!** Use the + button to add your first note

## 📝 How to Use

### Creating Notes
- Click the **+ button** or press **Ctrl/Cmd + N**
- Add a title and begin writing in markdown
- Notes are auto-saved every 2 seconds
- Use **Ctrl/Cmd + S** to save manually

### Organizing Notes
- All notes are displayed in a responsive grid
- Most recently updated notes appear first
- Use the search bar to find any note
- Click any note card to edit

### Internal Linking
- Use `[[Note Title]]` to link to another note
- Links appear in blue
- Click to navigate, or create if the note doesn’t exist

### Markdown Support
- **Headers**: `#`, `##`, `###`
- **Bold**: `**bold**`
- **Italic**: `*italic*`
- **Code**: `` `inline` `` or ``` code blocks ```
- **Lists**: `-` or `1.` for bullet/numbered
- **Blockquotes**: `> quote`
- **Links**: `[text](url)`

### Themes
- Use the **moon/sun icon** to toggle themes
- Preference is saved to localStorage
- Dark mode: sleek slate palette
- Light mode: clean whites & soft grays

## ⌨️ Keyboard Shortcuts

| Shortcut              | Action                      |
|-----------------------|-----------------------------|
| `Ctrl/Cmd + N`        | Create a new note           |
| `Ctrl/Cmd + S`        | Save current note           |
| `Ctrl/Cmd + K`        | Focus the search bar        |
| `Ctrl/Cmd + Shift + D`| Toggle dark/light mode      |
| `Escape`              | Close the note editor       |

## 📱 Responsive Design

Neural Notes is optimized for all screen sizes:

- **Desktop (1200px+)** – Full-width layout with large cards
- **Tablet (768–1199px)** – Medium card grid
- **Mobile (480–767px)** – Single-column with touch support
- **Small Mobile (<480px)** – Optimized for smallest screens

## 🛠️ Technical Details

### Built With
- **HTML5** – Semantic and accessible markup
- **CSS3** – Responsive design using Grid/Flexbox
- **Vanilla JavaScript** – No frameworks or libraries
- **Marked.js** – Markdown parser (CDN)
- **Font Awesome** – Icons (CDN)
- **Inter Font** – Google Fonts (CDN)

### Browser Compatibility
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 90+

### Data Storage
- Notes: `localStorage` under `neuralNotes_notes`
- Theme: stored in `neuralNotes_theme`
- Works 100% client-side with no backend

## 🎨 Customization

CSS variables make customization easy. Example:

```css
:root {
  --accent-primary: #3b82f6;
  --bg-primary: #ffffff;
  --text-primary: #1e293b;
  /* ...and more */
}
