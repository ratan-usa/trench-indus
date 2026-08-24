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
    { regex: /road overlays/gi, replacement: 'stormwater management' },
    { regex: /asphalt resurfacing/gi, replacement: 'drainage infrastructure' },
    { regex: /street resurfacing/gi, replacement: 'streetscaping' },
    { regex: /resurfacing requires accommodating road crown/gi, replacement: 'infrastructure requires accommodating high water volume' },
    { regex: /adjusting trenches to street grade/gi, replacement: 'heavy-duty trench installations' },
    { regex: /paving crews/gi, replacement: 'infrastructure crews' },
    { regex: /asphalt/gi, replacement: 'infrastructure' },
    { regex: /roadwork/gi, replacement: 'municipal drainage' },
    { regex: /avoid excavation/gi, replacement: 'ensure robust drainage' },
    { regex: /resurfacing/gi, replacement: 'streetscaping' },
    { regex: /road overlays,/gi, replacement: 'stormwater management,' },
    { regex: /overlay/gi, replacement: 'stormwater system' },
    { regex: /road overlay/gi, replacement: 'stormwater system' },
    { regex: /paving operations/gi, replacement: 'trenching operations' },
    { regex: /adjusting trenches to grade/gi, replacement: 'installing heavy-duty drainage' },
    { regex: /without digging up the street/gi, replacement: 'with superior load-bearing capacity' },
    { regex: /avoid digging up the street/gi, replacement: 'ensure robust drainage systems' },
    { regex: /paving/gi, replacement: 'trenching' }, // Catch-all for paving, but might have been replaced before
    { regex: /Paving/g, replacement: 'Trenching' },
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Rewrote content in ' + file);
    }
});
