import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirs = [
  path.join(__dirname, 'src', 'components', 'sections'),
  path.join(__dirname, 'src', 'components', 'common'),
  path.join(__dirname, 'src', 'pages')
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

  files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Backgrounds
    content = content.replace(/bg-deepblue-900/g, 'bg-black');
    content = content.replace(/bg-deepblue-800/g, 'bg-[#0a0a0a]');
    content = content.replace(/bg-spheris-black/g, 'bg-black');
    content = content.replace(/bg-spheris-purple(?:\/[0-9]+)?/g, 'bg-zinc-800');
    content = content.replace(/bg-spheris-lavender(?:\/[0-9]+)?/g, 'bg-white');
    content = content.replace(/bg-glass(?:Border)?/g, 'bg-[#0a0a0a]');
    content = content.replace(/glassmorphism/g, 'bg-[#0a0a0a] border border-zinc-800');
    
    // Borders
    content = content.replace(/border-glassBorder(?:\/[0-9]+)?/g, 'border-zinc-800');
    content = content.replace(/border-(?:neonpurple|emerald|blue|amber|rose|indigo|spheris-purple)-[0-9]+(?:\/[0-9]+)?/g, 'border-zinc-800');
    
    // Text colors
    content = content.replace(/text-slate-[345]00/g, 'text-zinc-400');
    content = content.replace(/text-(?:neonpurple|emerald|blue|amber|rose|indigo)-[0-9]+/g, 'text-zinc-300');
    content = content.replace(/text-spheris-(?:purple|lavender)(?:\/[0-9]+)?/g, 'text-zinc-300');
    content = content.replace(/text-gradient/g, 'text-white');
    
    // Remove glowing / coloring / gradients
    content = content.replace(/(?:\s|^)bg-(?:neonpurple|emerald|blue|amber|rose|indigo)-[0-9]+(?:\/[0-9]+)?/g, ' bg-zinc-800');
    content = content.replace(/(?:\s|^)bg-gradient-to-[a-z]+/g, '');
    content = content.replace(/(?:\s|^)from-(?:deepblue|neonpurple|blue|emerald|amber|rose|indigo|black|transparent|spheris-(?:lavender|purple))(?:-[0-9]+)?(?:\/[0-9]+)?/g, '');
    content = content.replace(/(?:\s|^)via-(?:deepblue|neonpurple|blue|emerald|amber|rose|indigo|black|transparent|spheris-(?:lavender|purple))(?:-[0-9]+)?(?:\/[0-9]+)?/g, '');
    content = content.replace(/(?:\s|^)to-(?:deepblue|neonpurple|blue|emerald|amber|rose|indigo|black|transparent|spheris-(?:lavender|purple))(?:-[0-9]+)?(?:\/[0-9]+)?/g, '');
    
    // Shadows
    content = content.replace(/shadow-\[[^\]]+\]/g, '');
    content = content.replace(/shadow-2xl/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
  });
});

console.log('All legacy components converted to strictly monochrome Apple UI.');
