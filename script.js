const productImages = [
  'https://www.ikea.com/au/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1354033_pe952442_s5.jpg?f=xl',
  'https://www.ikea.com/au/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1341641_pe948861_s5.jpg?f=xl',
  'https://www.ikea.com/au/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1337612_pe947946_s5.jpg?f=xl',
  'https://www.ikea.com/au/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1337619_pe947958_s5.jpg?f=xl',
  'https://www.ikea.com/au/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1337629_pe947966_s5.jpg?f=xl',
  'https://www.ikea.com/au/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1337650_pe947988_s5.jpg?f=xl',
  'https://www.ikea.com/au/en/images/products/ribbenas-french-door-fridge-freezer-ikea-700-freestanding-black-stainless-steel__1337638_pe947974_s5.jpg?f=xl'
];
const productImage = productImages[0];
const product = { id: '00580773', name: 'RIBBENÅS French door fridge/freezer', price: 1614.15, originalPrice: 1614.15, image: productImage };
let quantity = 1;
let cart = JSON.parse(localStorage.getItem('pulseOneCart') || '[]');
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const money = value => `$${value.toLocaleString('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

function applyProductContent() {
  document.title = 'RIBBENÅS French Door Fridge/Freezer | IKEA 700';
  const image = $('#main-product-image');
  image.src = productImage;
  image.alt = 'RIBBENÅS black stainless steel French door fridge/freezer';
  $$('.thumb').forEach((thumb, index) => { thumb.dataset.image = productImages[index % productImages.length]; thumb.querySelector('img').src = productImages[index % productImages.length]; thumb.querySelector('img').alt = `RIBBENÅS product view ${index + 1}`; });
  $('.announcement > span:first-child').textContent = 'New lower price · Delivery and collection options available';
  $$('.logo').forEach(logo => { logo.innerHTML = '<span class="logo-mark">I</span>IKEA'; logo.setAttribute('aria-label', 'IKEA home'); });
  $('.site-footer > div:first-child p').innerHTML = 'Thoughtful design<br>for everyday life.';
  $('.hero-copy .eyebrow').textContent = '01 / Kitchen intelligence';
  $('.hero-copy h1').innerHTML = 'A better way<br><em>to keep</em><br>fresh.';
  $('.hero-lede').textContent = 'A spacious French door fridge/freezer designed for easy access, calm organisation and food that stays fresher for longer.';
  $('.text-link').innerHTML = 'Discover the details <span>↘</span>';
  $('.image-label').textContent = 'RIBBENÅS / 005.807.73';
  $('.purchase-panel .eyebrow').textContent = 'IKEA 700 series';
  $('.purchase-panel h2').innerHTML = 'RIBBENÅS<br>French door fridge/freezer';
  $('.price').innerHTML = `<del>${money(product.originalPrice)}</del> <strong>${money(product.price)}</strong> <span>NEW LOWER PRICE</span>`;
  $('.stock').innerHTML = '<i></i> Available to order <small>• 5-year guarantee</small>';
  $('.product-desc').textContent = 'This black stainless steel fridge/freezer caters to food lovers and large households. Great overview and easy reach, with no-frost technology and an integrated display.';
  $('.promise-grid').innerHTML = '<div>⌁ <span>Delivery<br><small>To your door</small></span></div><div>▣ <span>Click & collect<br><small>Available options</small></span></div><div>↩ <span>5-year guarantee<br><small>Terms apply</small></span></div>';
  $('.feature-strip .eyebrow').textContent = 'The RIBBENÅS promise';
  $('.feature-strip h2').innerHTML = 'Room for your<br><em>whole</em> life.';
  const features = $$('.feature-grid article');
  [['✦', 'French door access', 'Two wide doors make everyday ingredients easy to reach.'], ['↗', 'Spacious storage', '347 L fridge space plus a 169 L freezer for larger households.'], ['⌁', 'No-frost cooling', 'Prevents frost and ice build-up inside the fridge and freezer.'], ['◷', '5-year guarantee', 'Designed for everyday use with a 5-year guarantee.']].forEach((feature, index) => { features[index].innerHTML = `<span>${feature[0]}</span><h3>${feature[1]}</h3><p>${feature[2]}</p>`; });
  $('.details .section-heading .eyebrow').textContent = '02 / In the details';
  $('.details .section-heading h2').innerHTML = 'Everything in its place.<br><em>Freshness, made simple.</em>';
  $('.detail-intro > p').textContent = 'RIBBENÅS gives food lovers a clear overview and easy reach. Thoughtful storage, LED lighting and adaptable cooling make a busy kitchen feel beautifully considered.';
  const benefits = $$('.benefit-list > div');
  [['01', 'See it all', 'LED lights illuminate every corner of the spacious interior.'], ['02', 'Keep it fresh', 'Cooling adapts to help food stay fresh for longer.'], ['03', 'Reach with ease', 'French doors and full-width drawers make organising simple.']].forEach((benefit, index) => { benefits[index].innerHTML = `<b>${benefit[0]}</b><span><strong>${benefit[1]}</strong>${benefit[2]}</span>`; });
  $('#specs').innerHTML = '<div><span>Fridge volume</span><b>347 l</b></div><div><span>Freezer volume</span><b>169 l</b></div><div><span>Width</span><b>833 mm</b></div><div><span>Depth</span><b>653 mm</b></div><div><span>Height</span><b>1898 mm</b></div><div><span>Colour</span><b>Black stainless steel</b></div>';
  $('#included').innerHTML = '<p>RIBBENÅS fridge/freezer, adjustable shelves and storage compartments, LED interior lighting and integrated display.</p>';
  $('#warranty').innerHTML = '<p>Includes a 5-year guarantee. Read the terms and conditions on IKEA Australia for full details.</p>';
  $('.how .section-heading .eyebrow').textContent = '03 / Simple by design';
  $('.how .section-heading h2').innerHTML = 'A better kitchen<br><em>in three steps.</em>';
  const steps = $$('.steps article');
  [['Choose your space', 'Measure your kitchen and check the product dimensions.'], ['Check availability', 'Review delivery or collection options on IKEA Australia.'], ['Bring it home', 'Order RIBBENÅS and organise your kitchen with more room.']].forEach((step, index) => { steps[index].querySelector('h3').textContent = step[0]; steps[index].querySelector('p').textContent = step[1]; });
  $('.cta h2').innerHTML = 'Bring home<br><em>more room.</em>';
  $('.cta p:not(.eyebrow)').textContent = 'Order the RIBBENÅS French door fridge/freezer for a calmer, better organised kitchen.';
  const mobilePrice = $('.mobile-buy-bar strong');
  if (mobilePrice) mobilePrice.textContent = money(product.price);
  $('.review-summary h2').innerHTML = 'Built for<br><em>everyday kitchens.</em>';
  $('.big-rating').innerHTML = '<strong>347 L</strong><span><small>fridge volume<br>169 L freezer volume</small></span>';
  $$('.review-card > p').forEach((review, index) => { review.textContent = ['Plenty of room for a large family, and the French doors make it much easier to see everything at a glance.', 'The freezer drawers are genuinely useful, and no-frost cooling means one less chore to think about.', 'It looks excellent in the kitchen, and the interior lighting makes finding ingredients quick.'][index % 3]; });
  $$('.faq-list details').forEach((item, index) => { const answers = ['Delivery and collection options depend on your location and stock availability. Check IKEA Australia at checkout for current options.', 'Delivery fees vary by location and order size. Collection options may also be available.', 'Payment options are shown during checkout and may include card, PayPal and other local methods.', 'Returns are subject to IKEA Australia terms. Keep your order details and contact IKEA customer service for help.', 'This product includes a 5-year guarantee. Terms and conditions apply.', 'Order and delivery updates are provided through your IKEA account or order confirmation email.']; item.querySelector('summary').firstChild.textContent = ['How is the fridge/freezer delivered?', 'What are the delivery costs?', 'What payment methods are accepted?', 'Can I return the product?', 'Is there a guarantee?', 'How can I track my order?'][index]; item.querySelector('p').textContent = answers[index]; });
  const footerContact = $('.site-footer > div:nth-child(4)');
  if (footerContact) footerContact.innerHTML = '<h3>IKEA Australia</h3><a href="https://www.ikea.com/au/en/" target="_blank" rel="noopener">ikea.com/au</a><a href="https://www.ikea.com/au/en/customer-service/contact-us/" target="_blank" rel="noopener">Customer service</a><div class="socials"><a href="#" aria-label="Instagram">◎</a><a href="#" aria-label="Facebook">f</a></div>';
}
applyProductContent();

// Offer countdown resets to a three-day window after it expires.
let offerEnds = Number(localStorage.getItem('pulseOneOfferEnds')) || Date.now() + 3 * 24 * 60 * 60 * 1000;
if (offerEnds < Date.now()) { offerEnds = Date.now() + 3 * 24 * 60 * 60 * 1000; localStorage.setItem('pulseOneOfferEnds', offerEnds); }
function updateCountdown() {
  const remaining = Math.max(0, offerEnds - Date.now());
  const values = [Math.floor(remaining / 86400000), Math.floor(remaining / 3600000) % 24, Math.floor(remaining / 60000) % 60, Math.floor(remaining / 1000) % 60];
  ['days', 'hours', 'minutes', 'seconds'].forEach((id, index) => { const element = document.getElementById(id); if (element) element.textContent = String(values[index]).padStart(2, '0'); });
}
updateCountdown();
setInterval(updateCountdown, 1000);

$$('.thumb').forEach(button => button.addEventListener('click', () => {
  const image = $('#main-product-image');
  image.style.opacity = '0';
  setTimeout(() => { image.src = button.dataset.image; image.style.opacity = '1'; }, 180);
  $$('.thumb').forEach(item => item.classList.remove('active'));
  button.classList.add('active');
}));

function setQuantity(value) {
  quantity = Math.max(1, Math.min(10, value));
  $('#product-quantity').textContent = quantity;
  $$('.mobile-quantity').forEach(element => element.textContent = quantity);
}
$$('.quantity-plus').forEach(button => button.addEventListener('click', () => setQuantity(quantity + 1)));
$$('.quantity-minus').forEach(button => button.addEventListener('click', () => setQuantity(quantity - 1)));

function saveCart() { localStorage.setItem('pulseOneCart', JSON.stringify(cart)); }
function addToCart() {
  const existing = cart.find(item => item.id === product.id);
  if (existing) existing.quantity += quantity;
  else cart.push({ ...product, quantity });
  saveCart();
  renderCart();
  openCart();
}
$$('.add-to-cart').forEach(button => button.addEventListener('click', addToCart));
function cartTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = cart.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0);
  return { subtotal, discount, total: subtotal };
}
function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  $('#cart-count').textContent = count;
  $('#drawer-count').textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
  const items = $('#cart-items');
  if (!cart.length) { items.innerHTML = '<div class="empty-cart">Your cart is waiting.<br><small>Add RIBBENÅS to get started.</small></div>'; }
  else items.innerHTML = cart.map(item => `<div class="cart-item"><img src="${item.image}" alt="${item.name}"><div><h3>${item.name}</h3><p>${money(item.price)}</p><div class="quantity"><button class="cart-minus" data-id="${item.id}" aria-label="Decrease quantity">−</button><span>${item.quantity}</span><button class="cart-plus" data-id="${item.id}" aria-label="Increase quantity">+</button></div><button class="remove" data-id="${item.id}">Remove</button></div><b>${money(item.price * item.quantity)}</b></div>`).join('');
  const totals = cartTotals();
  $('#cart-subtotal').textContent = money(totals.subtotal);
  $('#cart-discount').textContent = `−${money(totals.discount)}`;
  $('#cart-total').textContent = money(totals.total);
  $$('.cart-plus').forEach(button => button.addEventListener('click', () => changeCartQuantity(button.dataset.id, 1)));
  $$('.cart-minus').forEach(button => button.addEventListener('click', () => changeCartQuantity(button.dataset.id, -1)));
  $$('.remove').forEach(button => button.addEventListener('click', () => { cart = cart.filter(item => item.id !== button.dataset.id); saveCart(); renderCart(); }));
}
function changeCartQuantity(id, change) { const item = cart.find(entry => entry.id === id); if (item) item.quantity = Math.max(0, item.quantity + change); cart = cart.filter(item => item.quantity > 0); saveCart(); renderCart(); }
function openCart() { $('.cart-drawer').classList.add('open'); $('.cart-drawer').setAttribute('aria-hidden', 'false'); $('.cart-overlay').hidden = false; }
function closeCart() { $('.cart-drawer').classList.remove('open'); $('.cart-drawer').setAttribute('aria-hidden', 'true'); $('.cart-overlay').hidden = true; }
if ($('.cart-trigger')) $('.cart-trigger').addEventListener('click', openCart);
if ($('.drawer-close')) $('.drawer-close').addEventListener('click', closeCart);
if ($('.cart-overlay')) $('.cart-overlay').addEventListener('click', closeCart);
if ($('#cart-items')) renderCart();

function openCheckout() { $('.modal-backdrop').hidden = false; document.body.style.overflow = 'hidden'; closeCart(); }
function closeCheckout() { $('.modal-backdrop').hidden = true; document.body.style.overflow = ''; }
$$('.buy-now').forEach(button => button.addEventListener('click', openCheckout));
if ($('.modal-close')) $('.modal-close').addEventListener('click', closeCheckout);
if ($('.modal-backdrop')) $('.modal-backdrop').addEventListener('click', event => { if (event.target === $('.modal-backdrop')) closeCheckout(); });
if ($('#checkout-form')) $('#checkout-form').addEventListener('submit', event => { event.preventDefault(); $('.form-message').textContent = 'Thank you. Your demo order has been received.'; event.target.reset(); });
$('#review-track').insertAdjacentHTML('beforeend', '<article class="review-card"><span class="quote">“</span><p>The storage is thoughtfully laid out, and the freezer drawers make weekly shopping much easier to organise.</p><footer><img src="https://i.pravatar.cc/80?img=25" alt="Kabir Sethi"><span><strong>Kabir Sethi</strong><small>Verified buyer · 19 May 2025</small></span><b>★★★★★</b></footer></article><article class="review-card"><span class="quote">“</span><p>A great fit for our kitchen. It is quiet, bright inside and the black stainless steel finish feels properly considered.</p><footer><img src="https://i.pravatar.cc/80?img=5" alt="Ishita Rao"><span><strong>Ishita Rao</strong><small>Verified buyer · 10 May 2025</small></span><b>★★★★★</b></footer></article>');

$('.menu-toggle').addEventListener('click', event => { const isOpen = $('.main-nav').classList.toggle('open'); event.currentTarget.setAttribute('aria-expanded', isOpen); });
$$('.main-nav a').forEach(link => link.addEventListener('click', () => $('.main-nav').classList.remove('open')));
$$('.tab-button').forEach(button => button.addEventListener('click', () => { $$('.tab-button').forEach(item => item.classList.remove('active')); $$('.tab-panel').forEach(item => item.classList.remove('active')); button.classList.add('active'); $(`#${button.dataset.tab}`).classList.add('active'); }));

let reviewIndex = 0;
function moveReviews(direction) { const reviews = $$('.review-card'); reviewIndex = (reviewIndex + direction + reviews.length) % reviews.length; $('#review-track').style.transform = `translateX(-${reviewIndex * 100}%)`; }
$('#prev-review').addEventListener('click', () => moveReviews(-1));
$('#next-review').addEventListener('click', () => moveReviews(1));
setInterval(() => moveReviews(1), 7000);

document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeCart(); closeCheckout(); } });
