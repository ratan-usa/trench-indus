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

const folders = ['images', 'Videos', 'video', 'glbs', 'video_riser', 'ANIMATION', 'Catch_Basin', 'Tree_Grates', 'Trench_Grate'];
const foldersPattern = folders.join('|');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // We want to prepend ${process.env.NEXT_PUBLIC_R2_BUCKET_URL} to these folders if they don't already have it.
    
    // Pattern 1: JSX src="/Tree_Grates/..." or image: "/Tree_Grates/..."
    // Wait, the safest way is to find `/"(images|Tree_Grates|...)\/([^'"`\s]+)` and replace.
    // If it's already got process.env.NEXT_PUBLIC_R2_BUCKET_URL, we shouldn't add it again.
    
    // First, let's fix any `\\$\\{` if they exist (just in case)
    content = content.replace(/\\\$\\\{process\.env\.NEXT_PUBLIC_R2_BUCKET_URL\\\}/g, '${process.env.NEXT_PUBLIC_R2_BUCKET_URL}');

    // Replace in JSX: src="/Tree_Grates/..." -> src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Tree_Grates/...`}
    const regex1 = new RegExp(`src=(['"])\/(${foldersPattern})\/(.*?)\\1`, 'g');
    content = content.replace(regex1, 'src={`\\$\\{process.env.NEXT_PUBLIC_R2_BUCKET_URL\\}/$2/$3`}');
    
    // Replace Regular string "/Tree_Grates/..." -> `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Tree_Grates/...`
    // negative lookbehind `(?<![A-Za-z0-9_])` to ensure we don't match something in the middle of a string.
    const regex2 = new RegExp(`(?<![A-Za-z0-9_])(['"])\/(${foldersPattern})\/(.*?)\\1`, 'g');
    content = content.replace(regex2, '`\\$\\{process.env.NEXT_PUBLIC_R2_BUCKET_URL\\}/$2/$3`');
    
    // Template string `/Tree_Grates/...` -> `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/Tree_Grates/...`
    const regex3 = new RegExp(`(?<!\\$\\{process\\.env\\.NEXT_PUBLIC_R2_BUCKET_URL\\})\`\\/(${foldersPattern})\\/(.*?)\``, 'g');
    content = content.replace(regex3, '`\\$\\{process.env.NEXT_PUBLIC_R2_BUCKET_URL\\}/$1/$2`');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated R2 Prefix in ' + file);
    }
});
