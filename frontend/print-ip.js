const fs = require('fs');
const os = require('os');

const getLocalIpAddress = () => {
  const interfaces = os.networkInterfaces();
  for (const interfaceName in interfaces) {
    for (const iface of interfaces[interfaceName]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
};

const updateEnvFile = (ipAddress) => {
  const envPath = './.env';
  let envContent = fs.readFileSync(envPath, 'utf8');
  envContent = envContent.replace(/NEXT_PUBLIC_SUPABASE_URL=.*/, `NEXT_PUBLIC_SUPABASE_URL=http://${ipAddress}:54321`);
  fs.writeFileSync(envPath, envContent, 'utf8');
};

const ipAddress = getLocalIpAddress();
updateEnvFile(ipAddress);
console.log(`Updated .env with IP: ${ipAddress}`);
console.log(`Server live on http://${ipAddress}:3000`);