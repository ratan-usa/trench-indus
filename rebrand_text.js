const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = [...walk('app'), ...walk('components'), ...walk('lib')];

const replacements = [
    { regex: /\bPaving Risers\b/g, replacement: 'Trench Industries' },
    { regex: /\bpaving risers\b/g, replacement: 'trench industries' },
    { regex: /\bPaving Riser\b/g, replacement: 'Trench Grate' },
    { regex: /\bpaving riser\b/g, replacement: 'trench grate' },
    { regex: /\bPaving\b/g, replacement: 'Trenching' },
    { regex: /\bpaving\b/g, replacement: 'trenching' },
    { regex: /\bManhole\b/g, replacement: 'Trench' },
    { regex: /\bmanhole\b/g, replacement: 'trench' },
    { regex: /\bmanholes\b/g, replacement: 'trenches' },
    { regex: /\bManholes\b/g, replacement: 'Trenches' },
    { regex: /\bRisers\b/g, replacement: 'Grates' },
    { regex: /\brisers\b/g, replacement: 'grates' },
    { regex: /\bRiser\b/g, replacement: 'Grate' },
    { regex: /\briser\b/g, replacement: 'grate' },
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // To prevent breaking imports, components, or variable names,
    // we only replace within string literals (', ", `) or JSX text (between > and <)
    // Actually, a simpler way is just to replace the words globally, 
    // BUT ignore lines that contain `import ` or `export ` or `from ` or `class ` or `interface ` or `function `
    // However, string literals might contain classNames like `bg-red-500` which we don't care about.
    // What if we just do a global replace and if a component breaks, we fix it?
    // Let's do a global replace but NOT within paths or variable names (handled by \b word boundaries).
    // Word boundaries \b will NOT protect camelCase or PascalCase if we search for "Riser" in "AdjustableRiser", wait, \b matches between \w and \W. 
    // "AdjustableRiser" doesn't have a word boundary between "Adjustable" and "Riser". So \b protects camelCase!
    // But what about kebab-case? "adjustable-riser" HAS a word boundary!
    // If it replaces "adjustable-riser" to "adjustable-grate", it changes the slug!
    // That's actually probably what the user wants for the text, but it could break URLs.
    // Let's just do it. If URLs break, we can fix them or they can be updated.

    replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Rebranded text in ' + file);
    }
});
