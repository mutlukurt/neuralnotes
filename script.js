class NeuralNotes {
    constructor() {
        this.notes = this.loadNotes();
        this.currentNote = null;
        this.currentTab = 'edit';
        this.searchTerm = '';
        
        this.initializeElements();
        this.bindEvents();
        this.initializeTheme();
        this.renderNotes();
        this.updateWordCount();
    }

    // === INITIALIZATION === //
    initializeElements() {
        // Main elements
        this.notesGrid = document.getElementById('notesGrid');
        this.emptyState = document.getElementById('emptyState');
        this.searchInput = document.getElementById('searchInput');
        
        // Modal elements
        this.modalOverlay = document.getElementById('modalOverlay');
        this.noteTitle = document.getElementById('noteTitle');
        this.noteContent = document.getElementById('noteContent');
        this.notePreview = document.getElementById('notePreview');
        this.wordCount = document.getElementById('wordCount');
        this.lastModified = document.getElementById('lastModified');
        
        // Buttons
        this.newNoteBtn = document.getElementById('newNoteBtn');
        this.saveNoteBtn = document.getElementById('saveNote');
        this.deleteNoteBtn = document.getElementById('deleteNote');
        this.closeModalBtn = document.getElementById('closeModal');
        this.themeToggle = document.getElementById('themeToggle');
        
        // Tabs
        this.tabBtns = document.querySelectorAll('.tab-btn');
    }

    bindEvents() {
        // Main buttons
        this.newNoteBtn.addEventListener('click', () => this.createNewNote());
        this.saveNoteBtn.addEventListener('click', () => this.saveCurrentNote());
        this.deleteNoteBtn.addEventListener('click', () => this.deleteCurrentNote());
        this.closeModalBtn.addEventListener('click', () => this.closeModal());
        this.themeToggle.addEventListener('click', () => this.toggleTheme());

        // Search
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

        // Modal overlay click to close
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.closeModal();
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));

        // Tab switching
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Real-time content updates
        this.noteContent.addEventListener('input', () => {
            this.updateWordCount();
            if (this.currentTab === 'preview') {
                this.updatePreview();
            }
        });

        // Auto-save on input (debounced)
        let saveTimeout;
        this.noteContent.addEventListener('input', () => {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                if (this.currentNote) {
                    this.saveCurrentNote(false); // Silent save
                }
            }, 2000);
        });

        this.noteTitle.addEventListener('input', () => {
            clearTimeout(saveTimeout);
            saveTimeout = setTimeout(() => {
                if (this.currentNote) {
                    this.saveCurrentNote(false); // Silent save
                }
            }, 2000);
        });
    }

    // === THEME MANAGEMENT === //
    initializeTheme() {
        const savedTheme = localStorage.getItem('neuralNotes_theme') || 'light';
        this.setTheme(savedTheme);
    }

    toggleTheme() {
        const currentTheme = document.body.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('neuralNotes_theme', theme);
        
        const icon = this.themeToggle.querySelector('i');
        icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
    }

    // === STORAGE MANAGEMENT === //
    loadNotes() {
        try {
            const notes = localStorage.getItem('neuralNotes_notes');
            return notes ? JSON.parse(notes) : [];
        } catch (error) {
            console.error('Error loading notes:', error);
            return [];
        }
    }

    saveNotes() {
        try {
            localStorage.setItem('neuralNotes_notes', JSON.stringify(this.notes));
        } catch (error) {
            console.error('Error saving notes:', error);
            this.showNotification('Error saving notes', 'error');
        }
    }

    // === NOTE MANAGEMENT === //
    createNewNote() {
        const note = {
            id: this.generateId(),
            title: '',
            content: '',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        this.currentNote = note;
        this.openModal();
        this.noteTitle.focus();
    }

    editNote(noteId) {
        const note = this.notes.find(n => n.id === noteId);
        if (!note) return;

        this.currentNote = { ...note };
        this.noteTitle.value = note.title;
        this.noteContent.value = note.content;
        this.updateWordCount();
        this.updateLastModified();
        this.openModal();
    }

    saveCurrentNote(showNotification = true) {
        if (!this.currentNote) return;

        const title = this.noteTitle.value.trim() || 'Untitled Note';
        const content = this.noteContent.value.trim();

        // Update note data
        this.currentNote.title = title;
        this.currentNote.content = content;
        this.currentNote.updatedAt = new Date().toISOString();

        // Add to notes array if it's a new note
        const existingIndex = this.notes.findIndex(n => n.id === this.currentNote.id);
        if (existingIndex >= 0) {
            this.notes[existingIndex] = this.currentNote;
        } else {
            this.notes.unshift(this.currentNote);
        }

        this.saveNotes();
        this.renderNotes();
        this.updateLastModified();

        if (showNotification) {
            this.showNotification('Note saved successfully', 'success');
        }
    }

    deleteCurrentNote() {
        if (!this.currentNote || !this.currentNote.id) return;

        if (confirm('Are you sure you want to delete this note?')) {
            this.notes = this.notes.filter(n => n.id !== this.currentNote.id);
            this.saveNotes();
            this.renderNotes();
            this.closeModal();
            this.showNotification('Note deleted', 'success');
        }
    }

    // === MODAL MANAGEMENT === //
    openModal() {
        this.modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management
        setTimeout(() => {
            if (!this.noteTitle.value) {
                this.noteTitle.focus();
            } else {
                this.noteContent.focus();
            }
        }, 300);
    }

    closeModal() {
        this.modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset modal state
        this.currentNote = null;
        this.noteTitle.value = '';
        this.noteContent.value = '';
        this.notePreview.innerHTML = '';
        this.switchTab('edit');
        this.updateWordCount();
    }

    // === TAB MANAGEMENT === //
    switchTab(tabName) {
        this.currentTab = tabName;
        
        // Update tab buttons
        this.tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabName);
        });

        // Show/hide content
        if (tabName === 'edit') {
            this.noteContent.style.display = 'block';
            this.notePreview.classList.remove('active');
        } else {
            this.noteContent.style.display = 'none';
            this.notePreview.classList.add('active');
            this.updatePreview();
        }
    }

    // === MARKDOWN PROCESSING === //
    updatePreview() {
        const content = this.noteContent.value;
        const html = this.processMarkdown(content);
        this.notePreview.innerHTML = html;
    }

    processMarkdown(content) {
        if (!content.trim()) {
            return '<p class="text-muted">Nothing to preview yet...</p>';
        }

        // Process internal links first (before markdown)
        content = this.processInternalLinks(content);
        
        // Convert markdown to HTML using marked
        let html = marked.parse(content);
        
        return html;
    }

    processInternalLinks(content) {
        // Replace [[note name]] with clickable links
        return content.replace(/\[\[([^\]]+)\]\]/g, (match, noteName) => {
            const noteExists = this.notes.some(note => 
                note.title.toLowerCase() === noteName.toLowerCase()
            );
            
            const className = noteExists ? 'internal-link' : 'internal-link missing';
            return `<span class="${className}" data-note-name="${noteName}">${noteName}</span>`;
        });
    }

    // === SEARCH FUNCTIONALITY === //
    handleSearch(term) {
        this.searchTerm = term.toLowerCase();
        this.renderNotes();
    }

    filterNotes() {
        if (!this.searchTerm) return this.notes;
        
        return this.notes.filter(note => 
            note.title.toLowerCase().includes(this.searchTerm) ||
            note.content.toLowerCase().includes(this.searchTerm)
        );
    }

    // === RENDERING === //
    renderNotes() {
        const filteredNotes = this.filterNotes();
        
        if (filteredNotes.length === 0) {
            this.notesGrid.style.display = 'none';
            this.emptyState.style.display = 'block';
            
            if (this.searchTerm) {
                this.emptyState.innerHTML = `
                    <i class="fas fa-search"></i>
                    <h2>No notes found</h2>
                    <p>No notes match "${this.searchTerm}"</p>
                `;
            } else {
                this.emptyState.innerHTML = `
                    <i class="fas fa-sticky-note"></i>
                    <h2>No notes yet</h2>
                    <p>Create your first note to get started</p>
                `;
            }
        } else {
            this.notesGrid.style.display = 'grid';
            this.emptyState.style.display = 'none';
            
            this.notesGrid.innerHTML = filteredNotes.map(note => this.createNoteCard(note)).join('');
            
            // Bind click events to note cards
            this.notesGrid.querySelectorAll('.note-card').forEach(card => {
                card.addEventListener('click', () => {
                    const noteId = card.dataset.noteId;
                    this.editNote(noteId);
                });
            });

            // Bind internal link clicks
            this.notesGrid.querySelectorAll('.internal-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.handleInternalLink(link.dataset.noteName);
                });
            });
        }
    }

    createNoteCard(note) {
        const preview = this.createNotePreview(note.content);
        const formattedDate = this.formatDate(note.updatedAt);
        
        return `
            <div class="note-card" data-note-id="${note.id}">
                <div class="note-card-header">
                    <h3 class="note-title">${this.escapeHtml(note.title || 'Untitled Note')}</h3>
                    <span class="note-date">${formattedDate}</span>
                </div>
                <div class="note-preview">${preview}</div>
            </div>
        `;
    }

    createNotePreview(content) {
        if (!content.trim()) return '<em>Empty note</em>';
        
        // Process internal links for preview
        const processedContent = this.processInternalLinks(content);
        
        // Strip markdown syntax for clean preview
        let preview = processedContent
            .replace(/#{1,6}\s+/g, '') // Remove headers
            .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
            .replace(/\*(.*?)\*/g, '$1') // Remove italic
            .replace(/`(.*?)`/g, '$1') // Remove code
            .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
            .trim();
        
        return this.escapeHtml(preview.substring(0, 200)) + (preview.length > 200 ? '...' : '');
    }

    // === INTERNAL LINKS === //
    handleInternalLink(noteName) {
        const targetNote = this.notes.find(note => 
            note.title.toLowerCase() === noteName.toLowerCase()
        );
        
        if (targetNote) {
            this.editNote(targetNote.id);
        } else {
            // Create new note with the linked name
            const note = {
                id: this.generateId(),
                title: noteName,
                content: '',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            
            this.currentNote = note;
            this.noteTitle.value = noteName;
            this.noteContent.value = '';
            this.openModal();
        }
    }

    // === KEYBOARD SHORTCUTS === //
    handleKeyboardShortcuts(e) {
        // Ctrl/Cmd + N: New note
        if ((e.ctrlKey || e.metaKey) && e.key === 'n') {
            e.preventDefault();
            this.createNewNote();
        }
        
        // Ctrl/Cmd + S: Save note
        if ((e.ctrlKey || e.metaKey) && e.key === 's' && this.currentNote) {
            e.preventDefault();
            this.saveCurrentNote();
        }
        
        // Escape: Close modal
        if (e.key === 'Escape' && this.modalOverlay.classList.contains('active')) {
            this.closeModal();
        }
        
        // Ctrl/Cmd + K: Focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            this.searchInput.focus();
        }
        
        // Ctrl/Cmd + Shift + D: Toggle dark mode
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
            e.preventDefault();
            this.toggleTheme();
        }
    }

    // === UTILITY FUNCTIONS === //
    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
            return 'Today';
        } else if (diffDays === 2) {
            return 'Yesterday';
        } else if (diffDays <= 7) {
            return `${diffDays - 1} days ago`;
        } else {
            return date.toLocaleDateString('en-US');
        }
    }

    updateWordCount() {
        const content = this.noteContent.value;
        const words = content.trim() ? content.trim().split(/\s+/).length : 0;
        this.wordCount.textContent = `${words} word${words !== 1 ? 's' : ''}`;
    }

    updateLastModified() {
        if (this.currentNote && this.currentNote.updatedAt) {
            const formatted = this.formatDate(this.currentNote.updatedAt);
            this.lastModified.textContent = `Last modified: ${formatted}`;
        } else {
            this.lastModified.textContent = 'Not saved';
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check' : 'fa-exclamation-triangle'}"></i>
            ${message}
        `;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: type === 'success' ? 'var(--success)' : 'var(--danger)',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-lg)',
            zIndex: '10000',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '500',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease'
        });
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remove after delay
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.neuralNotes = new NeuralNotes();
}); 