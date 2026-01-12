const fs = require('fs');
const path = require('path');

const updateFile = (filePath, regex, replacement) => {
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        const newContent = content.replace(regex, replacement);
        if (content !== newContent) {
            fs.writeFileSync(fullPath, newContent, 'utf8');
            console.log(`Updated ${filePath}`);
        } else {
            console.log(`No changes needed for ${filePath}`);
        }
    } else {
        console.log(`File not found: ${filePath}`);
    }
};

// 1. About.tsx - Update cards to be transparent
// Regex to find bg-surface-card (not followed by /) and add transparency and blur
// We'll replace `bg-surface-card border` with `bg-surface-card/60 backdrop-blur-xl border`
// And `bg-surface-strong border` with `bg-surface-strong/60 backdrop-blur-xl border`

// About.tsx
updateFile('src/components/About.tsx', /bg-surface-card border/g, 'bg-surface-card/60 backdrop-blur-xl border');
updateFile('src/components/About.tsx', /bg-surface-strong border/g, 'bg-surface-strong/60 backdrop-blur-xl border');

// 2. Experience.tsx
// Line 175: className="bg-surface-card border border-border-subtle p-8 md:p-10 rounded-xl relative overflow-hidden shadow-lg"
updateFile('src/components/Experience.tsx', /bg-surface-card border/g, 'bg-surface-card/60 backdrop-blur-xl border');

// 3. Education.tsx
// Line 100: className="absolute inset-0 bg-surface-card border border-border-subtle rounded-2xl p-8 flex flex-col justify-between overflow-hidden shadow-xl"
updateFile('src/components/Education.tsx', /bg-surface-card border/g, 'bg-surface-card/60 backdrop-blur-xl border');

// 4. Projects.tsx
// Line 88: ... bg-surface-card border ...
updateFile('src/components/Projects.tsx', /bg-surface-card border/g, 'bg-surface-card/60 backdrop-blur-xl border');

// 5. Interests.tsx
// Line 102: activeTab.id === item.id ? 'bg-surface-card border
// Line 86: hover:bg-surface-card (keep as is or transparent? Let's make it transparent too for consistency)
// Line 86: hover:bg-surface-card -> hover:bg-surface-card/80
updateFile('src/components/Interests.tsx', /'bg-surface-card border/g, "'bg-surface-card/60 backdrop-blur-md border");
updateFile('src/components/Interests.tsx', /hover:bg-surface-card'/g, "hover:bg-surface-card/80'");

console.log('Class updates complete.');
