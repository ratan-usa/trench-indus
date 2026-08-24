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

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Fix the mistakenly escaped characters from the previous script
    content = content.replace(/\\\$\\\{process\.env\.NEXT_PUBLIC_R2_BUCKET_URL\\\}/g, '${process.env.NEXT_PUBLIC_R2_BUCKET_URL}');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed ' + file);
    }
});
