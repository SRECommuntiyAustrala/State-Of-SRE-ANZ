export default async function handler(req, res) {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQrCvf_jf36nB41KsjdV8BoxMuurdapjUzUWHeiNZ01Sby77bBe1v5ahuNn2_sc6c3g1icZXz4f5ZUE/pub?gid=397480170&single=true&output=csv';
  const response = await fetch(url);
  const text = await response.text();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/csv');
  res.status(200).send(text);
