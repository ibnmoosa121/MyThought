const https = require('https');
const urls = [
    "https://images.unsplash.com/photo-1565514020176-dbf227747053?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
];

console.log("Checking images...");

urls.forEach((url, index) => {
    const req = https.get(url, (res) => {
        console.log(`Image ${index + 1}: Status ${res.statusCode}`);
        res.resume();
    }).on('error', (e) => {
        console.log(`Image ${index + 1}: Error - ${e.message}`);
    });
});
