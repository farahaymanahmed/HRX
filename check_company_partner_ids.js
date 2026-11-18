import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env from the root directory
dotenv.config({ path: path.resolve(__dirname, './.env') });

const ODOO_URL      = (process.env.ODOO_URL || '').replace(/\/$/, '');
const ODOO_DB       = process.env.ODOO_DB       || '';
const ODOO_USERNAME = process.env.ODOO_USERNAME || '';
const ODOO_PASSWORD = process.env.ODOO_PASSWORD || '';

console.log('CREDENTIALS:');
console.log('URL:', ODOO_URL);
console.log('DB:', ODOO_DB);
console.log('USERNAME:', ODOO_USERNAME);
console.log('PASSWORD:', ODOO_PASSWORD);

async function callOdooJsonRpc(payload) {
  const url = `${ODOO_URL}/jsonrpc`;
  const resp = await axios.post(url, payload, {
    headers: { 'Content-Type': 'application/json' },
    timeout: 10000
  });
  return resp.data;
}

async function run() {
  if (!ODOO_URL || !ODOO_DB || !ODOO_USERNAME || !ODOO_PASSWORD) {
    console.error('Credentials missing!');
    return;
  }
  
  try {
    // Login
    const loginPayload = {
      jsonrpc: '2.0',
      method: 'call',
      id: Date.now(),
      params: {
        service: 'common',
        method: 'login',
        args: [ODOO_DB, ODOO_USERNAME, ODOO_PASSWORD],
      },
    };
    const loginData = await callOdooJsonRpc(loginPayload);
    console.log('LOGIN RESULT:', loginData);
    
    const uid = loginData.result;
    if (!uid) return;
    
    // Fetch all res.company records
    const payload = {
      jsonrpc: '2.0',
      method: 'call',
      id: Date.now(),
      params: {
        service: 'object',
        method: 'execute_kw',
        args: [
          ODOO_DB,
          uid,
          ODOO_PASSWORD,
          'res.company',
          'search_read',
          [[]],
          {
            fields: ['id', 'name', 'partner_id'],
            limit: 100
          }
        ]
      }
    };
    
    const res = await callOdooJsonRpc(payload);
    console.log('COMPANIES IN ODOO:');
    console.log(JSON.stringify(res.result, null, 2));
  } catch (err) {
    console.error('ERROR:', err.message);
  }
}

run();
