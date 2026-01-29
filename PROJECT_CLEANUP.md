# Project Cleanup Review

## ✅ KEEP - Essential Files

### Core HTML Files
- `index.html` - Main homepage
- `pages/*.html` (15 files) - All active page templates
  - 404.html, 500.html, academics.html, article.html, contact.html
  - event-detail.html, events.html, landing.html, mission-vision.html
  - news.html, program-detail.html, programs.html, search.html
  - staff-directory.html, staff-profile.html

### Configuration Files
- `vercel.json` - Vercel deployment configuration (clean URLs, redirects)
- `js/tailwind-config.js` - Tailwind CSS configuration (centralized)

### Development Files
- `server.js` - Local development server (handles clean URLs for testing)

### Archive (Reference Only)
- `archive/` - Keep for reference but mark as archived
  - Contains old templates and reference documentation
  - Useful for comparing old vs new structure

---

## ❌ REMOVE - Unused/Empty Files & Folders

### Empty Directories
- `components/` - Contains `header.html` but it's NOT referenced anywhere
  - Header code is inline in all HTML files
  - **Action:** Remove entire `components/` folder
- `includes/trays/` - Empty directory
  - **Action:** Remove `includes/` folder (or keep if planning to use)
- `images/placeholders/` - Empty directory
  - **Action:** Remove if no placeholder images needed

### Archive Empty Folders
- `archive/pages/academics/programs/` - Empty
- `archive/pages/about-us/` - Empty  
- `archive/pages/contact-us/` - Empty
  - **Action:** Remove these empty folders

### Documentation (Optional)
- `BUILD_SPEC.md` - Build specification document
  - **Decision:** Keep if still referencing, remove if outdated
  - Contains design tokens and specifications

---

## 🤔 CONSIDER - May Need Later

### Archive Folder
- **Keep:** Contains reference templates and documentation
- **Consider:** Move to `.archive/` or mark clearly as reference-only
- **Files:**
  - `archive/_reference/` - Design system docs (useful reference)
  - `archive/_templates/` - Old template examples
  - `archive/pages/` - Old page structures
  - `archive/README.md` - Archive documentation
  - `archive/claude_code_html_tailwind_task_list.md` - Task list (historical)
  - `archive/Website_Database (1).xlsx` - Database file (may be needed)

---

## 📊 Summary

### Files to Remove:
1. `components/` folder (unused header.html)
2. `includes/trays/` empty folder
3. `images/placeholders/` empty folder (if not needed)
4. Empty archive subdirectories

### Files to Keep:
- All active HTML files (16 files)
- Configuration files (vercel.json, tailwind-config.js)
- server.js (for local development)
- Archive folder (for reference)

### Total Cleanup:
- **Remove:** ~3-4 empty directories
- **Keep:** All functional files
- **Result:** Cleaner project structure, easier to navigate

---

## 🎯 Recommended Actions

1. **Remove unused components folder**
   ```bash
   rm -rf components/
   ```

2. **Remove empty directories**
   ```bash
   rm -rf includes/trays/
   rm -rf images/placeholders/
   rm -rf archive/pages/academics/programs/
   rm -rf archive/pages/about-us/
   rm -rf archive/pages/contact-us/
   ```

3. **Keep archive for reference** (optional: rename to `.archive/` to hide it)

4. **Review BUILD_SPEC.md** - Keep if still using, remove if outdated
