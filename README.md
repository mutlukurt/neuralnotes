# Neural Notes

A simple, elegant markdown-based note-taking app inspired by Obsidian. Built with vanilla HTML, CSS, and JavaScript - no frameworks required!

## 🎯 Version 1.0 - Initial Release

Bu ilk versiyonda, modern ve minimalist bir not alma uygulaması tamamen sıfırdan geliştirildi. Obsidian'dan ilham alınarak, kullanıcı dostu ve güçlü bir deneyim sunmak hedeflendi.

### 🚀 V1.0'da Geliştirilen Özellikler

Bu ilk versiyonda aşağıdaki özellikler tamamen implement edildi:

**🏗️ Temel Mimari:**
- Modern ES6+ JavaScript sınıf yapısı ile clean code architecture
- CSS Grid ve Flexbox ile responsive design
- Semantic HTML5 yapısı
- LocalStorage ile client-side data persistence

**💻 Kullanıcı Arayüzü:**
- Obsidian tarzı temiz ve minimal tasarım
- Smooth animations ve micro-interactions
- Light/Dark mode toggle sistemi
- Mobile-first responsive approach

**📝 Not Yönetimi:**
- Markdown parsing ve real-time preview
- Internal linking sistemi ([[note name]] syntax)
- Auto-save functionality (2 saniye debounce)
- CRUD operations (Create, Read, Update, Delete)

**🔍 Arama ve Navigasyon:**
- Real-time search functionality
- Grid layout ile note cards
- Smart timestamp formatting
- Keyboard shortcuts desteği

## 🌟 Features

### Core Functionality
- ✍️ **Create, Edit, Delete Notes** - Full CRUD operations for your notes
- 💾 **Local Storage** - All notes are saved in your browser's localStorage (no server needed)
- 🔍 **Real-time Search** - Search through note titles and content instantly
- 📝 **Markdown Support** - Write in markdown with live preview
- 🔗 **Internal Linking** - Link between notes using `[[note name]]` syntax
- 🌙 **Dark/Light Mode** - Toggle between themes with preference saving

### User Experience
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Auto-save** - Notes are automatically saved as you type (2-second delay)
- 🎯 **Minimal Design** - Clean, distraction-free interface
- ⌨️ **Keyboard Shortcuts** - Power user-friendly shortcuts
- 📊 **Word Counter** - Live word count in the editor
- 🕒 **Smart Timestamps** - Human-readable "Today", "Yesterday", "3 days ago" format

### Advanced Features
- 🔄 **Edit/Preview Tabs** - Switch between editing and preview modes
- 🎨 **Modern UI** - Soft shadows, smooth animations, and hover effects
- 📄 **Note Previews** - See a snippet of each note in the grid view
- 🎯 **Floating Action Button** - Quick access to create new notes
- 🔔 **Toast Notifications** - Feedback for save/delete actions

## 🚀 Getting Started

1. **Clone or Download** the project files:
   - `index.html` - Main application structure
   - `styles.css` - All styling and themes
   - `script.js` - Complete functionality

2. **Open `index.html`** in any modern web browser

3. **Start Taking Notes!** Click the floating + button to create your first note

## 📝 How to Use

### Creating Notes
- Click the **floating + button** (bottom right) or press **Ctrl/Cmd + N**
- Enter a title and start writing in markdown
- Notes auto-save every 2 seconds while typing
- Press **Ctrl/Cmd + S** to save manually

### Organizing Notes
- All notes appear in a responsive grid layout
- Most recently modified notes appear first
- Use the search bar to find specific notes
- Click any note card to edit it

### Internal Linking
- Link to other notes using `[[Note Title]]` syntax
- Links appear highlighted in blue
- Click a link to navigate to that note
- If the linked note doesn't exist, clicking creates it automatically

### Markdown Support
- **Headers**: `# H1`, `## H2`, `### H3`
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Code**: `` `inline code` `` or ``` code blocks ```
- **Lists**: Use `-` or `1.` for bullet/numbered lists
- **Blockquotes**: `> quoted text`
- **Links**: `[text](url)`

### Themes
- Click the **moon/sun icon** in the header to toggle themes
- Your preference is automatically saved
- Dark mode uses a beautiful slate color scheme
- Light mode features clean whites and soft grays

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + N` | Create new note |
| `Ctrl/Cmd + S` | Save current note |
| `Ctrl/Cmd + K` | Focus search bar |
| `Ctrl/Cmd + Shift + D` | Toggle dark/light mode |
| `Escape` | Close note editor |

## 📱 Responsive Design

Neural Notes adapts perfectly to all screen sizes:

- **Desktop (1200px+)**: Full-width layout with large note cards
- **Tablet (768px-1199px)**: Responsive grid with medium-sized cards
- **Mobile (480px-767px)**: Single-column layout with touch-friendly buttons
- **Small Mobile (<480px)**: Optimized for the smallest screens

## 🛠️ Technical Details

### Built With
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No frameworks or dependencies
- **Marked.js** - Markdown parsing library (loaded from CDN)
- **Font Awesome** - Icons (loaded from CDN)
- **Inter Font** - Modern typography (loaded from Google Fonts)

### Browser Support
- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 90+

### Data Storage
- All notes are stored in `localStorage`
- Storage key: `neuralNotes_notes`
- Theme preference: `neuralNotes_theme`
- No data is sent to any server

## 🎨 Customization

The app uses CSS custom properties (variables) for easy theming. Key variables include:

```css
:root {
  --accent-primary: #3b82f6;    /* Blue accent color */
  --bg-primary: #ffffff;        /* Main background */
  --text-primary: #1e293b;      /* Primary text */
  /* ... and many more */
}
```

## 🔒 Privacy & Security

- **100% Local**: All data stays in your browser
- **No Tracking**: No analytics or data collection
- **No Network**: Works completely offline
- **Your Data**: Only you have access to your notes

## 🚧 Limitations

- Storage is limited by browser's localStorage (typically ~5-10MB)
- Notes are not synchronized across devices
- No collaborative editing features
- No note organization beyond search and chronological order

## 📄 License

This project is open source and available under the MIT License.

---

**Happy Note Taking! 🧠✨** 