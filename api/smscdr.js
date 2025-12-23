export default async function handler(req, res) {
  const url =
    "http://109.236.84.81/ints/agent/res/data_smscdr.php?" +
    "fdate1=2025-12-23%2000:00:00&" +
    "fdate2=2025-12-23%2023:59:59&" +
    "fg=0&sEcho=1&iDisplayStart=0&iDisplayLength=10";

  const response = await fetch(url, {
    headers: {
      "Accept": "application/json, text/javascript, */*; q=0.01",
      "X-Requested-With": "XMLHttpRequest",
      "Cookie": "PHPSESSID=fjk3uhnje6frcek2cbb9t1jrq3",
      "User-Agent": "Mozilla/5.0"
    }
  });

  const data = await response.text();
  res.status(200).send(data);
}
