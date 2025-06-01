const url = 'https://raw.githubusercontent.com/mtbunrieuu/pizza-order-site/main/index.html';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const response = await fetch(url);
  const text = await response.text();
  return new Response(text, {
    headers: { 'Content-Type': 'text/html' },
  });
}
