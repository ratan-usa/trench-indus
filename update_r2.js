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

    // JSX src="/images/..." -> src={`${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/...`}
    content = content.replace(/src=(['"])\/(images|Videos|video|glbs|video_riser)\/(.*?)\1/g, 'src={`\\$\\{process.env.NEXT_PUBLIC_R2_BUCKET_URL\\}/$2/$3`}');
    
    // Regular string "/images/..." -> `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/...`
    content = content.replace(/(?<![A-Za-z0-9_])(['"])\/(images|Videos|video|glbs|video_riser)\/(.*?)\1/g, '`\\$\\{process.env.NEXT_PUBLIC_R2_BUCKET_URL\\}/$2/$3`');
    
    // Template string `/images/...` -> `${process.env.NEXT_PUBLIC_R2_BUCKET_URL}/images/...`
    // but ignoring if it already has NEXT_PUBLIC_R2_BUCKET_URL right before it.
    content = content.replace(/(?<!\$\{process\.env\.NEXT_PUBLIC_R2_BUCKET_URL\})`\/(images|Videos|video|glbs|video_riser)\/(.*?)`/g, '`\\$\\{process.env.NEXT_PUBLIC_R2_BUCKET_URL\\}/$1/$2`');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Updated ' + file);
    }
});
