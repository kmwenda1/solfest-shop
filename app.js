// Sol Fest Store Recreation State & Logic

const STORE_DATA = {
  hustle: {
    title: "Sol Fest",
    handle: "@solfestafrica",
    phone: "741492515",
    currency: "KES",
    currencySymbol: "KES ",
  },
  events: [
    {
      id: "sol-fest-2026-vip-show",
      title: "SOL FEST 2026 | VIP SHOW",
      shortDesc: "Experience the energy, glamour, and electrifying performances of the Solfest 2026 VIP Show. Following the resounding success of our 2025 VIP Party—hai...",
      fullDesc: "Experience the energy, glamour, and electrifying performances of the Solfest 2026 VIP Show. Following the resounding success of our 2025 VIP Party—hailed by partners and fans as 'incredibly well-organized' and 'an investment worth every cent'\nT&C's Apply",
      dateStr: "Thu, Dec 17 – 4:00 PM",
      endDateStr: "End: Fri, Dec 18 – 3:00 AM",
      month: "DEC",
      day: "17",
      dateSort: "2026-12-17",
      venue: "Nairobi, Kenya",
      priceFrom: 12026.00,
      image: "./assets/vip-show.png",
      tiers: [
        {
          id: "tier-vip-wave-3",
          title: "Sol Fest 2026. VIP SHOW | Early Bird | Wave Three",
          desc: "Experience the energy, glamour, and electrifying performances of the Solfest 2026 VIP Show. Following the resounding success of our 2025 VIP Party—hai...",
          price: 25026.00,
          soldOut: false,
          stock: 444
        },
        {
          id: "tier-vip-die-hard",
          title: "Sol Fest 2026. VIP Show. Die Hard",
          desc: "Experience the energy, glamour, and electrifying performances of the Solfest 2026 VIP Show. Following the resounding success of our 2025 VIP Party—hai...",
          price: 12026.00,
          soldOut: true,
          stock: 0
        },
        {
          id: "tier-vip-wave-1",
          title: "Sol Fest 2026. VIP SHOW | Early Bird | Wave One",
          desc: "Experience the energy, glamour, and electrifying performances of the Solfest 2026 VIP Show. Following the resounding success of our 2025 VIP Party—hai...",
          price: 15026.00,
          soldOut: true,
          stock: 0
        },
        {
          id: "tier-vip-wave-2",
          title: "Sol Fest 2026. VIP SHOW | Early Bird | Wave Two",
          desc: "Experience the energy, glamour, and electrifying performances of the Solfest 2026 VIP Show. Following the resounding success of our 2025 VIP Party—hai...",
          price: 20026.00,
          soldOut: true,
          stock: 0
        }
      ]
    },
    {
      id: "sol-fest-2026-safari-oontz",
      title: "SOL FEST 2026 | SAFARI OONTZ",
      shortDesc: "Safari Oontz at Sol Fest",
      fullDesc: "Safari Oontz at Sol Fest. Immersive electronic, house and afro-tech soundscapes featuring elite resident DJs and guest acts across multiple stages at Uhuru Gardens. T&C's Apply",
      dateStr: "Fri, Dec 18 – 4:00 PM",
      endDateStr: "End: Sat, Dec 19 – 4:00 AM",
      month: "DEC",
      day: "18",
      dateSort: "2026-12-18",
      venue: "Uhuru Gardens Nairobi, Kenya",
      priceFrom: 1500.00,
      image: "./assets/safari-oontz.png",
      tiers: [
        {
          id: "tier-oontz-advance",
          title: "Safari Oontz | Advance Ticket",
          desc: "General admission entry to Safari Oontz electronic arena at Uhuru Gardens.",
          price: 1500.00,
          soldOut: false,
          stock: 850
        },
        {
          id: "tier-oontz-early",
          title: "Safari Oontz | Early Bird",
          desc: "Limited early bird allocation for electro & afro-house lovers.",
          price: 1000.00,
          soldOut: true,
          stock: 0
        },
        {
          id: "tier-oontz-vip",
          title: "Safari Oontz | VIP Lounge",
          desc: "Elevated viewing deck, private bar service, and express venue entry.",
          price: 4500.00,
          soldOut: false,
          stock: 120
        }
      ]
    },
    {
      id: "sol-fest-2026-fan-show",
      title: "SOL FEST 2026 | FAN SHOW",
      shortDesc: "Get ready to dance together again. Following the monumental success of Solfest 2025, we are thrilled to announce the official ticket drop for the 202...",
      fullDesc: "Get ready to dance together again. Following the monumental success of Solfest 2025, we are thrilled to announce the official ticket drop for the 2026 Fan Show. East Africa's biggest music party returns to celebrate authentic sound, community, and energy. T&C's Apply",
      dateStr: "Sat, Dec 19 – 4:00 PM",
      endDateStr: "End: Sun, Dec 20 – 5:00 AM",
      month: "DEC",
      day: "19",
      dateSort: "2026-12-19",
      venue: "Nairobi, Kenya",
      priceFrom: 2026.00,
      image: "./assets/fan-show.png",
      tiers: [
        {
          id: "tier-fan-advance",
          title: "Sol Fest 2026. Fan Show | Advance Ticket",
          desc: "Full day pass to the official Sol Fest Saturday Fan Show main event.",
          price: 3526.00,
          soldOut: false,
          stock: 4500
        },
        {
          id: "tier-fan-die-hard",
          title: "Sol Fest 2026. Fan Show | Die Hard",
          desc: "Die-hard early ticket tier for dedicated supporters.",
          price: 2026.00,
          soldOut: true,
          stock: 0
        },
        {
          id: "tier-fan-golden",
          title: "Sol Fest 2026. Fan Show | Golden Circle",
          desc: "Front-of-stage standing area right next to the performance catwalk.",
          price: 7526.00,
          soldOut: false,
          stock: 350
        }
      ]
    }
  ]
};

// Global App State
let currentActiveEvent = null;
let currentModalQuantities = {};
let cartItems = []; // Array of { eventId, eventTitle, tierId, tierTitle, price, quantity, image }

// DOM Elements
const eventsGrid = document.getElementById("eventsGrid");
const noEventsState = document.getElementById("noEventsState");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const resetSearchBtn = document.getElementById("resetSearchBtn");
const sortSelect = document.getElementById("sortSelect");

const tabEvents = document.getElementById("tabEvents");
const tabProducts = document.getElementById("tabProducts");
const eventsSection = document.getElementById("eventsSection");
const productsSection = document.getElementById("productsSection");
const eventsCountBadge = document.getElementById("eventsCountBadge");

const bioShort = document.getElementById("bioShort");
const bioFull = document.getElementById("bioFull");
const bioToggleBtn = document.getElementById("bioToggleBtn");

const ticketModal = document.getElementById("ticketModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalContinueBtn = document.getElementById("modalContinueBtn");
const modalBuyNowBtn = document.getElementById("modalBuyNowBtn");
const modalEventTitle = document.getElementById("modalEventTitle");
const modalEventDesc = document.getElementById("modalEventDesc");
const modalDateMonth = document.getElementById("modalDateMonth");
const modalDateDay = document.getElementById("modalDateDay");
const modalDateStart = document.getElementById("modalDateStart");
const modalDateEnd = document.getElementById("modalDateEnd");
const modalLocation = document.getElementById("modalLocation");
const modalFlyerImg = document.getElementById("modalFlyerImg");
const ticketTiersGrid = document.getElementById("ticketTiersGrid");
const modalTotalAmount = document.getElementById("modalTotalAmount");
const modalShareBtn = document.getElementById("modalShareBtn");
const modalShareIconBtn = document.getElementById("modalShareIconBtn");

const cartBtn = document.getElementById("cartBtn");
const cartCountBadge = document.getElementById("cartCountBadge");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutBtn = document.getElementById("closeCheckoutBtn");
const cartItemsList = document.getElementById("cartItemsList");
const checkoutTotalAmount = document.getElementById("checkoutTotalAmount");
const payNowBtn = document.getElementById("payNowBtn");
const payBtnText = document.getElementById("payBtnText");

const successModal = document.getElementById("successModal");
const closeSuccessBtn = document.getElementById("closeSuccessBtn");
const confirmedEmail = document.getElementById("confirmedEmail");
const confirmedRef = document.getElementById("confirmedRef");
const confirmedAmount = document.getElementById("confirmedAmount");

const toast = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");
const whatsappFloatingBtn = document.getElementById("whatsappFloatingBtn");

// Helper: Format KES Currency
function formatKES(amount) {
  return "KES " + Number(amount).toLocaleString("en-KE", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// Show Toast
function showToast(msg) {
  toastMsg.textContent = msg;
  toast.classList.remove("hidden");
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3000);
}

// Render Event Cards
function renderEvents() {
  const query = searchInput.value.trim().toLowerCase();
  const sort = sortSelect.value;

  let filtered = STORE_DATA.events.filter(e => {
    return e.title.toLowerCase().includes(query) ||
           e.shortDesc.toLowerCase().includes(query) ||
           e.venue.toLowerCase().includes(query);
  });

  // Sorting
  if (sort === "price-asc") {
    filtered.sort((a, b) => a.priceFrom - b.priceFrom);
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.priceFrom - a.priceFrom);
  } else if (sort === "date-asc") {
    filtered.sort((a, b) => a.dateSort.localeCompare(b.dateSort));
  }

  eventsCountBadge.textContent = filtered.length;

  if (filtered.length === 0) {
    eventsGrid.innerHTML = "";
    noEventsState.classList.remove("hidden");
    return;
  }

  noEventsState.classList.add("hidden");

  eventsGrid.innerHTML = filtered.map(ev => {
    return `
      <div class="bg-[#eaeff2] border border-[#d6dfe6] rounded-2xl p-5 hover:shadow-lg transition-all flex flex-col justify-between group">
        <div>
          <!-- Top Row: Info + Card Flyer Thumbnail -->
          <div class="flex items-start justify-between gap-4">
            
            <div class="flex-1 space-y-2">
              <h3 class="text-base sm:text-lg font-extrabold text-gray-900 group-hover:text-brand-red transition-colors leading-snug cursor-pointer" onclick="openTicketModal('${ev.id}')">
                ${ev.title}
              </h3>

              <p class="text-xs text-gray-600 leading-relaxed">
                <span class="card-desc-short" id="desc-short-${ev.id}">${ev.shortDesc}</span>
                <span class="card-desc-full hidden" id="desc-full-${ev.id}">${ev.fullDesc}</span>
                <button class="text-brand-red font-semibold hover:underline ml-1" onclick="toggleCardDesc('${ev.id}', event)">See More</button>
              </p>

              <!-- Date & Venue info -->
              <div class="pt-2 space-y-1.5 text-xs text-gray-600">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span>${ev.dateStr}</span>
                </div>

                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>${ev.venue}</span>
                </div>
              </div>
            </div>

            <!-- Thumbnail Flyer (right side of card, matching screenshot 0) -->
            <div class="w-28 sm:w-36 aspect-square rounded-xl overflow-hidden flex-shrink-0 border border-gray-200/60 bg-black cursor-pointer shadow-sm" onclick="openTicketModal('${ev.id}')">
              <img src="${ev.image}" alt="${ev.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>

          </div>
        </div>

        <!-- Card Bottom Row: Price Pill + Buy Ticket Button -->
        <div class="pt-4 mt-4 border-t border-gray-300/40 flex items-center justify-between gap-3">
          <span class="inline-block bg-[#dfe8ed] text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg">
            From ${formatKES(ev.priceFrom)}
          </span>

          <button onclick="openTicketModal('${ev.id}')" class="px-5 py-2 bg-brand-red hover:bg-brand-redHover text-white text-xs font-bold rounded-lg transition shadow-sm hover:shadow active:scale-95">
            Buy ticket
          </button>
        </div>

      </div>
    `;
  }).join("");
}

// Toggle Event Description in Card
window.toggleCardDesc = function(id, e) {
  e.stopPropagation();
  const shortEl = document.getElementById(`desc-short-${id}`);
  const fullEl = document.getElementById(`desc-full-${id}`);
  const btn = e.target;

  if (fullEl.classList.contains("hidden")) {
    fullEl.classList.remove("hidden");
    shortEl.classList.add("hidden");
    btn.textContent = "See Less";
  } else {
    fullEl.classList.add("hidden");
    shortEl.classList.remove("hidden");
    btn.textContent = "See More";
  }
};

// Open Ticket Selector Modal (Exact replica of Screenshots 1, 2, 3)
window.openTicketModal = function(eventId) {
  const ev = STORE_DATA.events.find(e => e.id === eventId);
  if (!ev) return;

  currentActiveEvent = ev;
  currentModalQuantities = {};
  ev.tiers.forEach(t => {
    currentModalQuantities[t.id] = 0;
  });

  // Populate Modal Fields
  modalEventTitle.textContent = ev.title;
  modalEventDesc.innerHTML = `
    <span id="modalDescShort">${ev.shortDesc}</span>
    <span id="modalDescFull" class="hidden">${ev.fullDesc.replace(/\n/g, '<br>')}</span>
    <button id="modalDescToggle" class="text-brand-red font-semibold hover:underline ml-1" onclick="toggleModalDesc()">See More</button>
  `;
  modalDateMonth.textContent = ev.month;
  modalDateDay.textContent = ev.day;
  modalDateStart.textContent = ev.dateStr;
  modalDateEnd.textContent = ev.endDateStr;
  modalLocation.textContent = ev.venue;
  modalFlyerImg.src = ev.image;

  renderModalTiers();
  updateModalTotal();

  ticketModal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
};

// Toggle Modal Description
window.toggleModalDesc = function() {
  const shortEl = document.getElementById("modalDescShort");
  const fullEl = document.getElementById("modalDescFull");
  const btn = document.getElementById("modalDescToggle");
  if (!shortEl || !fullEl || !btn) return;

  if (fullEl.classList.contains("hidden")) {
    fullEl.classList.remove("hidden");
    shortEl.classList.add("hidden");
    btn.textContent = "See Less";
  } else {
    fullEl.classList.add("hidden");
    shortEl.classList.remove("hidden");
    btn.textContent = "See More";
  }
};

// Render Ticket Tiers inside Modal
function renderModalTiers() {
  if (!currentActiveEvent) return;

  ticketTiersGrid.innerHTML = currentActiveEvent.tiers.map(tier => {
    const qty = currentModalQuantities[tier.id] || 0;
    const isSoldOut = tier.soldOut;

    return `
      <div class="bg-gray-50 border ${isSoldOut ? 'border-gray-200 opacity-70' : 'border-gray-200 hover:border-gray-300'} rounded-2xl p-4 flex flex-col justify-between transition-all">
        <div>
          <!-- Title & Sold Out Badge -->
          <div class="flex items-start justify-between gap-2 mb-1.5">
            <h4 class="text-xs font-bold text-gray-900 leading-snug">
              ${tier.title}
            </h4>
            ${isSoldOut ? `
              <span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-badgeSoldOut text-brand-soldOutText uppercase tracking-wider flex-shrink-0">
                Sold out
              </span>
            ` : ''}
          </div>

          <!-- Description -->
          <p class="text-[11px] text-gray-500 mb-3 leading-relaxed">
            ${tier.desc}
          </p>
        </div>

        <!-- Price & Quantity Selector -->
        <div class="pt-3 border-t border-gray-200/60 flex items-center justify-between">
          <span class="text-xs font-extrabold text-gray-900">
            ${formatKES(tier.price)}
          </span>

          <!-- Counter Controls -->
          <div class="flex items-center gap-2">
            ${isSoldOut ? `
              <div class="flex items-center gap-2 text-gray-400">
                <button disabled class="w-6 h-6 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center cursor-not-allowed">
                  -
                </button>
                <span class="text-xs font-bold w-4 text-center">0</span>
                <button disabled class="w-6 h-6 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center cursor-not-allowed">
                  +
                </button>
              </div>
            ` : `
              <div class="flex items-center gap-2">
                <button 
                  onclick="changeTierQty('${tier.id}', -1)" 
                  class="w-6 h-6 rounded-full ${qty > 0 ? 'bg-gray-200 hover:bg-gray-300 text-gray-800' : 'bg-gray-100 text-gray-300 cursor-not-allowed'} flex items-center justify-center text-sm font-bold transition"
                  ${qty === 0 ? 'disabled' : ''}
                >
                  &minus;
                </button>
                <span class="text-xs font-bold text-gray-900 w-4 text-center">${qty}</span>
                <button 
                  onclick="changeTierQty('${tier.id}', 1)" 
                  class="w-6 h-6 rounded-full bg-brand-red hover:bg-brand-redHover text-white flex items-center justify-center text-sm font-bold shadow-sm transition active:scale-95"
                >
                  &#43;
                </button>
              </div>
            `}
          </div>
        </div>

      </div>
    `;
  }).join("");
}

// Increment / Decrement Quantity
window.changeTierQty = function(tierId, delta) {
  if (!currentActiveEvent) return;
  const current = currentModalQuantities[tierId] || 0;
  const next = Math.max(0, current + delta);
  currentModalQuantities[tierId] = next;
  renderModalTiers();
  updateModalTotal();
};

// Update Modal Total & Buy Now button
function updateModalTotal() {
  let total = 0;
  let totalCount = 0;

  if (currentActiveEvent) {
    currentActiveEvent.tiers.forEach(t => {
      const q = currentModalQuantities[t.id] || 0;
      total += q * t.price;
      totalCount += q;
    });
  }

  modalTotalAmount.textContent = formatKES(total);
  modalBuyNowBtn.disabled = totalCount === 0;
}

// Close Ticket Modal
function closeTicketModal() {
  ticketModal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

// Add Modal Quantities to Cart and Open Checkout
modalBuyNowBtn.addEventListener("click", () => {
  if (!currentActiveEvent) return;

  currentActiveEvent.tiers.forEach(t => {
    const q = currentModalQuantities[t.id] || 0;
    if (q > 0) {
      // Check if already in cart
      const existing = cartItems.find(item => item.tierId === t.id);
      if (existing) {
        existing.quantity += q;
      } else {
        cartItems.push({
          eventId: currentActiveEvent.id,
          eventTitle: currentActiveEvent.title,
          tierId: t.id,
          tierTitle: t.title,
          price: t.price,
          quantity: q,
          image: currentActiveEvent.image
        });
      }
    }
  });

  updateCartBadge();
  closeTicketModal();
  openCheckoutModal();
});

modalContinueBtn.addEventListener("click", closeTicketModal);
closeModalBtn.addEventListener("click", closeTicketModal);

// Close on background click
ticketModal.addEventListener("click", (e) => {
  if (e.target === ticketModal) {
    closeTicketModal();
  }
});

// Update Top Navbar Cart Badge
function updateCartBadge() {
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  cartCountBadge.textContent = totalCount;
  if (totalCount > 0) {
    cartCountBadge.classList.add("scale-110");
    setTimeout(() => cartCountBadge.classList.remove("scale-110"), 200);
  }
}

// Open Checkout Modal
function openCheckoutModal() {
  if (cartItems.length === 0) {
    showToast("Your cart is empty. Please select tickets first!");
    return;
  }

  renderCartItems();
  checkoutModal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

function closeCheckoutModal() {
  checkoutModal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

cartBtn.addEventListener("click", openCheckoutModal);
closeCheckoutBtn.addEventListener("click", closeCheckoutModal);

checkoutModal.addEventListener("click", (e) => {
  if (e.target === checkoutModal) {
    closeCheckoutModal();
  }
});

// Render Cart Items inside Checkout
function renderCartItems() {
  let total = 0;

  if (cartItems.length === 0) {
    cartItemsList.innerHTML = `<p class="text-xs text-gray-500 py-3 text-center">Your cart is empty.</p>`;
    checkoutTotalAmount.textContent = formatKES(0);
    payNowBtn.disabled = true;
    return;
  }

  payNowBtn.disabled = false;

  cartItemsList.innerHTML = cartItems.map((item, idx) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    return `
      <div class="flex items-center justify-between gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
        <div class="flex items-center gap-3">
          <img src="${item.image}" alt="${item.tierTitle}" class="w-12 h-12 rounded-lg object-cover bg-black flex-shrink-0">
          <div>
            <h5 class="text-xs font-bold text-gray-900">${item.tierTitle}</h5>
            <p class="text-[11px] text-gray-500">${item.eventTitle}</p>
            <p class="text-xs font-extrabold text-brand-red">${formatKES(item.price)} &times; ${item.quantity}</p>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <button onclick="updateCartItemQty(${idx}, -1)" class="w-6 h-6 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 font-bold text-xs flex items-center justify-center">
            &minus;
          </button>
          <span class="text-xs font-bold w-4 text-center">${item.quantity}</span>
          <button onclick="updateCartItemQty(${idx}, 1)" class="w-6 h-6 rounded-md bg-brand-red text-white hover:bg-brand-redHover font-bold text-xs flex items-center justify-center">
            &#43;
          </button>
          <button onclick="removeCartItem(${idx})" class="text-gray-400 hover:text-red-500 p-1 ml-1" title="Remove">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join("");

  checkoutTotalAmount.textContent = formatKES(total);
}

// Modify Cart Quantity
window.updateCartItemQty = function(idx, delta) {
  if (!cartItems[idx]) return;
  cartItems[idx].quantity += delta;
  if (cartItems[idx].quantity <= 0) {
    cartItems.splice(idx, 1);
  }
  updateCartBadge();
  renderCartItems();
};

window.removeCartItem = function(idx) {
  cartItems.splice(idx, 1);
  updateCartBadge();
  renderCartItems();
};

// Payment Method Switcher
document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    // update border styles
    document.querySelectorAll('.payment-option').forEach(l => {
      l.classList.remove('border-brand-red', 'bg-brand-red/5');
      l.classList.add('border-gray-200');
    });
    e.target.closest('label').classList.add('border-brand-red', 'bg-brand-red/5');
    e.target.closest('label').classList.remove('border-gray-200');

    if (e.target.value === 'mpesa') {
      payBtnText.textContent = "Pay Now via M-PESA";
    } else {
      payBtnText.textContent = "Pay Now via Card";
    }
  });
});

// Checkout Simulation
payNowBtn.addEventListener("click", () => {
  const name = document.getElementById("custName").value.trim();
  const email = document.getElementById("custEmail").value.trim();
  const phone = document.getElementById("custPhone").value.trim();

  if (!email || !email.includes("@")) {
    showToast("Please enter a valid email address for tickets delivery");
    return;
  }

  // Simulate payment processing
  payNowBtn.disabled = true;
  payBtnText.textContent = "Processing payment...";

  setTimeout(() => {
    const totalPaid = checkoutTotalAmount.textContent;
    const ref = "HS-" + Math.random().toString(36).substring(2, 9).toUpperCase();

    confirmedEmail.textContent = email;
    confirmedRef.textContent = ref;
    confirmedAmount.textContent = totalPaid;

    // Reset cart
    cartItems = [];
    updateCartBadge();

    closeCheckoutModal();
    payNowBtn.disabled = false;
    payBtnText.textContent = "Pay Now via M-PESA";

    // Show Success Modal
    successModal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }, 1200);
});

closeSuccessBtn.addEventListener("click", () => {
  successModal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  showToast("Thank you for booking with Sol Fest!");
});

// Bio Read More Toggle
bioToggleBtn.addEventListener("click", () => {
  if (bioFull.classList.contains("hidden")) {
    bioFull.classList.remove("hidden");
    bioShort.classList.add("hidden");
    bioToggleBtn.textContent = "See Less";
  } else {
    bioFull.classList.add("hidden");
    bioShort.classList.remove("hidden");
    bioToggleBtn.textContent = "See More";
  }
});

// Tab Buttons Switching
tabEvents.addEventListener("click", () => {
  tabEvents.classList.add("bg-brand-red", "text-white", "shadow-sm");
  tabEvents.classList.remove("bg-gray-100", "text-gray-700");

  tabProducts.classList.remove("bg-brand-red", "text-white", "shadow-sm");
  tabProducts.classList.add("bg-gray-100", "text-gray-700");

  eventsSection.classList.remove("hidden");
  productsSection.classList.add("hidden");
});

tabProducts.addEventListener("click", () => {
  tabProducts.classList.add("bg-brand-red", "text-white", "shadow-sm");
  tabProducts.classList.remove("bg-gray-100", "text-gray-700");

  tabEvents.classList.remove("bg-brand-red", "text-white", "shadow-sm");
  tabEvents.classList.add("bg-gray-100", "text-gray-700");

  eventsSection.classList.add("hidden");
  productsSection.classList.remove("hidden");
});

// Search functionality
searchInput.addEventListener("input", (e) => {
  if (e.target.value.length > 0) {
    clearSearchBtn.classList.remove("hidden");
  } else {
    clearSearchBtn.classList.add("hidden");
  }
  renderEvents();
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  clearSearchBtn.classList.add("hidden");
  renderEvents();
});

resetSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  sortSelect.value = "all";
  clearSearchBtn.classList.add("hidden");
  renderEvents();
});

sortSelect.addEventListener("change", renderEvents);

// Share buttons
function shareProduct() {
  const url = window.location.href;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast("Link copied to clipboard!");
    });
  } else {
    showToast("Link: " + url);
  }
}

modalShareBtn.addEventListener("click", shareProduct);
modalShareIconBtn.addEventListener("click", shareProduct);

// WhatsApp Floating Button Click
whatsappFloatingBtn.addEventListener("click", () => {
  const phone = "254741492515";
  const text = encodeURIComponent("Hello Sol Fest support, I have an inquiry regarding tickets.");
  window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
});

// Initial Render
renderEvents();
updateCartBadge();
