const product = { id: 'SFW-001', name: 'Premium Smart Fitness Watch', price: 2999, originalPrice: 4999, image: 'https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=300&q=80' };
let quantity = 1;
let cart = JSON.parse(localStorage.getItem('pulseOneCart') || '[]');
const $ = (selector, parent = document) => parent.querySelector(selector);
const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
const money = value => `₹${value.toLocaleString('en-IN')}`;

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
  if (!cart.length) { items.innerHTML = '<div class="empty-cart">Your bag is waiting.<br><small>Add Pulse One to get started.</small></div>'; }
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
$('.cart-trigger').addEventListener('click', openCart);
$('.drawer-close').addEventListener('click', closeCart);
$('.cart-overlay').addEventListener('click', closeCart);
renderCart();

function openCheckout() { $('.modal-backdrop').hidden = false; document.body.style.overflow = 'hidden'; closeCart(); }
function closeCheckout() { $('.modal-backdrop').hidden = true; document.body.style.overflow = ''; }
$$('.buy-now').forEach(button => button.addEventListener('click', openCheckout));
$('.modal-close').addEventListener('click', closeCheckout);
$('.modal-backdrop').addEventListener('click', event => { if (event.target === $('.modal-backdrop')) closeCheckout(); });
$('#checkout-form').addEventListener('submit', event => { event.preventDefault(); $('.form-message').textContent = 'Thank you. Your demo order has been received.'; event.target.reset(); });
$('#review-track').insertAdjacentHTML('beforeend', '<article class="review-card"><span class="quote">“</span><p>I bought it for the battery life and stayed for the beautifully simple app. It gives me useful information without making me obsess over numbers.</p><footer><img src="https://i.pravatar.cc/80?img=25" alt="Kabir Sethi"><span><strong>Kabir Sethi</strong><small>Verified buyer · 19 May 2025</small></span><b>★★★★★</b></footer></article><article class="review-card"><span class="quote">“</span><p>Light enough to forget, smart enough to help. The gentle reminders and recovery score have changed how I plan my week.</p><footer><img src="https://i.pravatar.cc/80?img=5" alt="Ishita Rao"><span><strong>Ishita Rao</strong><small>Verified buyer · 10 May 2025</small></span><b>★★★★★</b></footer></article>');

$('.menu-toggle').addEventListener('click', event => { const isOpen = $('.main-nav').classList.toggle('open'); event.currentTarget.setAttribute('aria-expanded', isOpen); });
$$('.main-nav a').forEach(link => link.addEventListener('click', () => $('.main-nav').classList.remove('open')));
$$('.tab-button').forEach(button => button.addEventListener('click', () => { $$('.tab-button').forEach(item => item.classList.remove('active')); $$('.tab-panel').forEach(item => item.classList.remove('active')); button.classList.add('active'); $(`#${button.dataset.tab}`).classList.add('active'); }));

let reviewIndex = 0;
function moveReviews(direction) { const reviews = $$('.review-card'); reviewIndex = (reviewIndex + direction + reviews.length) % reviews.length; $('#review-track').style.transform = `translateX(-${reviewIndex * 100}%)`; }
$('#prev-review').addEventListener('click', () => moveReviews(-1));
$('#next-review').addEventListener('click', () => moveReviews(1));
setInterval(() => moveReviews(1), 7000);

document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeCart(); closeCheckout(); } });
