const BLOB_URL = 'https://jsonblob.com/api/jsonBlob/019cf321-4aac-7cfe-97bb-17a60c175d94';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const response = await fetch(BLOB_URL, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.json();
    return res.status(200).json(data);
  }

  // GET
  const response = await fetch(BLOB_URL);
  const data = await response.json();
  return res.status(200).json(data);
}
