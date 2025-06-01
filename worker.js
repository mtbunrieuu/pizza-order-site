const url = "https://raw.githubusercontent.com/mtbunrieuu/pizza-order-site/main/index.html";

addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const res = await fetch(url);
  const html = await res.text();
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}
