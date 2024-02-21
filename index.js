document.getElementsByTagName('meta').namedItem ('mini').setAttribute ('content','https://melnikandres.github.io/pages-test/circulo.jpg')
const element = document.head.appendChild(document.createElement('meta'))
element.setAttribute('property','og:description')
element.setAttribute('content','Success')

fetch('https://script.google.com/macros/s/AKfycbyjA0rpGlaA_JmH7Y5-weMVIQAuVuwWvw71mUtEONllW90W0i4V-eQV0Ix0XQoMr5LFog/exec',
{
    method: 'GET',
}
).then(response => response.json()).then(data => console.log(data))