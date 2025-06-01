addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = 'https://raw.githubusercontent.com/mtbunrieuu/pizza-order-site/main/index.html'
  const resp = await fetch(url)
  const text = await resp.text()
  return new Response(text, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    }
  })
}
