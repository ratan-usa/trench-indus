const fs = require('fs');
const path = require('path');

const newImages = [
    'TI-010.JPG',
    'pre-trench-06.JPG',
    'pre-trench-04.jpg',
    'TI-006.JPG',
    'trench-grate-horizontal-view_(12).jpeg',
    'trench-grates-img-diagonal-view_(5).jpeg',
    'trench-grates-img-diagonal-view_(8).jpeg',
    'TRENCH_GRATES_001_(4).jpeg',
    'Skype_Picture_2024_12_27T12_12_04_319Z.jpeg',
    'Skype_Picture_2024_12_27T12_12_17_880Z.jpeg',
    'Skype_Picture_2024_12_27T18_45_49_105Z.jpeg',
    'Skype_Picture_2025_01_02T12_56_56_434Z.jpeg'
];

const newVideos = [
    '1_to_23.2400.mp4',
    '10-36_NEW_GRATE_ANIAMTION_normal.5110.mp4',
    '48-48_1.2053.mp4',
    'catch_basin_dxf.2445.mp4',
    'dxf_tree_grate.2293.mp4',
    'Flexible_Tree_Grate.mp4',
    'GRATE_IMAGES.504.mp4',
    'untitled.2296.avi'
];

let imgIdx = 0;
let vidIdx = 0;

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
const publicDir = path.join(__dirname, 'public');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Match patterns like /images/some/path.png 
    // Wait, the regex needs to find the exact filename part and check if it exists in public
    const mediaRegex = /\/(images|Videos|video|glbs|video_riser)\/([^'"`\s]+)/g;

    content = content.replace(mediaRegex, (match, folder, subPath) => {
        // e.g. folder="images", subPath="Manhole_riser/Adjustbale_riser_coated_finish.808.png"
        // Sometimes the codebase uses "Videos" or "video", we should check public/Videos or public/images
        let checkFolder = folder;
        if (folder === 'video' || folder === 'video_riser') checkFolder = 'Videos';
        if (folder === 'images' && subPath.includes('standards/')) {
            // standard logos might not exist in public, but let's see. If they don't, we shouldn't replace them with trench grates.
            // Wait, standards logos were 1.png to 13.png
            return match; // keep as is
        }
        
        const localPath = path.join(publicDir, checkFolder, subPath);
        
        // Check if file exists locally
        if (fs.existsSync(localPath)) {
            // It exists! Keep it (with the correct capitalization if needed, but match is fine)
            return match; 
        } else {
            // Missing! Replace it.
            if (folder === 'images') {
                const replacement = newImages[imgIdx % newImages.length];
                imgIdx++;
                return `/images/${replacement}`;
            } else if (folder === 'Videos' || folder === 'video' || folder === 'video_riser') {
                const replacement = newVideos[vidIdx % newVideos.length];
                vidIdx++;
                return `/Videos/${replacement}`;
            } else {
                return match; // keep glbs as is for now unless they want that changed
            }
        }
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed missing assets in ' + file);
    }
});
