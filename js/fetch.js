async function fetchData(url) {
  let response = await fetch(url);
  let data = response.json();
  return data;
}
