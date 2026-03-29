// ===== WAIT FOR DOM — fixes GitHub Pages loading issues =====
document.addEventListener('DOMContentLoaded', function () {

// ===== MODAL FUNCTIONS =====
function openModal(type) {
  document.getElementById(type + 'Modal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(type) {
  document.getElementById(type + 'Modal').classList.remove('active');
  document.body.style.overflow = '';
}

function switchModal(from, to) {
  closeModal(from);
  openModal(to);
}

// Expose modal functions globally so onclick="" in HTML still works
window.openModal   = openModal;
window.closeModal  = closeModal;
window.switchModal = switchModal;

// Close modal when clicking outside
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// ===== SERVICES DATA =====
const services = [
  {
    category: "Home Repairs",
    icon: "fa-solid fa-house-chimney-crack",
    desc: "Plumbing, electrical, carpentry & more",
    roles: [
      { role: "Plumber", icon: "fa-solid fa-wrench", providers: [
        {name:"Ravi Kumar",location:"Bhimavaram",rating:4.5},
        {name:"Ajay Reddy",location:"Eluru",rating:4.2},
        {name:"Kiran Babu",location:"Rajahmundry",rating:4.6},
        {name:"Sandeep Rao",location:"Vijayawada",rating:4.3},
        {name:"Manoj Varma",location:"Guntur",rating:4.4}
      ]},
      { role: "Electrician", icon: "fa-solid fa-bolt", providers: [
        {name:"Suresh Naidu",location:"Hyderabad",rating:4.7},
        {name:"Rahul Krishna",location:"Vizag",rating:4.3},
        {name:"Naresh Goud",location:"Kakinada",rating:4.5},
        {name:"Vamsi Tej",location:"Nellore",rating:4.2},
        {name:"Teja Sai",location:"Tirupati",rating:4.6}
      ]},
      { role: "Carpenter", icon: "fa-solid fa-hammer", providers: [
        {name:"Balu Reddy",location:"Vijayawada",rating:4.4},
        {name:"Nani Kumar",location:"Guntur",rating:4.3},
        {name:"Ramu Naidu",location:"Vizag",rating:4.6},
        {name:"Chandu Rao",location:"Nellore",rating:4.2},
        {name:"Prasad Varma",location:"Tirupati",rating:4.5}
      ]}
    ]
  },
  {
    category: "AC & Appliances",
    icon: "fa-solid fa-snowflake",
    desc: "AC service, washing machine, fridge repair",
    roles: [
      { role: "AC Technician", icon: "fa-solid fa-snowflake", providers: [
        {name:"Arun Srinivas",location:"Bhimavaram",rating:4.5},
        {name:"Ramesh Babu",location:"Vizag",rating:4.4},
        {name:"Charan Tej",location:"Guntur",rating:4.6},
        {name:"Dinesh Kumar",location:"Hyderabad",rating:4.3},
        {name:"Surya Teja",location:"Eluru",rating:4.2}
      ]},
      { role: "Washing Machine", icon: "fa-solid fa-jug-detergent", providers: [
        {name:"Sunil Naidu",location:"Vijayawada",rating:4.4},
        {name:"Harish Rao",location:"Kakinada",rating:4.3},
        {name:"Madhu Babu",location:"Rajahmundry",rating:4.5},
        {name:"Pavan Reddy",location:"Nellore",rating:4.2},
        {name:"Srinu Kumar",location:"Tirupati",rating:4.6}
      ]},
      { role: "Refrigerator Repair", icon: "fa-solid fa-temperature-low", providers: [
        {name:"Vijay Reddy",location:"Guntur",rating:4.5},
        {name:"Amar Krishna",location:"Vizag",rating:4.3},
        {name:"Ravi Shankar",location:"Eluru",rating:4.4},
        {name:"Kiran Kumar",location:"Hyderabad",rating:4.6},
        {name:"Siva Naidu",location:"Kakinada",rating:4.2}
      ]}
    ]
  },
  {
    category: "Cleaning Services",
    icon: "fa-solid fa-broom",
    desc: "Home, sofa, carpet & deep cleaning",
    roles: [
      { role: "Home Cleaning", icon: "fa-solid fa-broom", providers: [
        {name:"Anil Kumar",location:"Bhimavaram",rating:4.4},
        {name:"Raju Babu",location:"Eluru",rating:4.3},
        {name:"Karthik Rao",location:"Guntur",rating:4.5},
        {name:"Naveen Reddy",location:"Vizag",rating:4.6},
        {name:"Siva Goud",location:"Hyderabad",rating:4.2}
      ]},
      { role: "Sofa Cleaning", icon: "fa-solid fa-couch", providers: [
        {name:"Pavan Tej",location:"Vijayawada",rating:4.3},
        {name:"Lokesh Babu",location:"Rajahmundry",rating:4.4},
        {name:"Tarun Sai",location:"Nellore",rating:4.5},
        {name:"Ajith Kumar",location:"Kakinada",rating:4.2},
        {name:"Deepak Reddy",location:"Tirupati",rating:4.6}
      ]},
      { role: "Deep Cleaning", icon: "fa-solid fa-spray-can-sparkles", providers: [
        {name:"Madhu Reddy",location:"Hyderabad",rating:4.7},
        {name:"Sunil Varma",location:"Guntur",rating:4.4},
        {name:"Ravi Naidu",location:"Vijayawada",rating:4.5},
        {name:"Charan Kumar",location:"Vizag",rating:4.3},
        {name:"Balu Rao",location:"Eluru",rating:4.2}
      ]}
    ]
  },
  {
    category: "Tech Repairs",
    icon: "fa-solid fa-laptop",
    desc: "Mobile, laptop, computer & TV repair",
    roles: [
      { role: "Mobile Repair", icon: "fa-solid fa-mobile-screen", providers: [
        {name:"Rohit Kumar",location:"Bhimavaram",rating:4.5},
        {name:"Vikram Naidu",location:"Hyderabad",rating:4.6},
        {name:"Akash Reddy",location:"Vizag",rating:4.3},
        {name:"Nikhil Babu",location:"Guntur",rating:4.4},
        {name:"Praveen Rao",location:"Eluru",rating:4.2}
      ]},
      { role: "Laptop Repair", icon: "fa-solid fa-laptop", providers: [
        {name:"Sanjay Varma",location:"Vijayawada",rating:4.6},
        {name:"Mahesh Reddy",location:"Rajahmundry",rating:4.3},
        {name:"Vinay Kumar",location:"Nellore",rating:4.4},
        {name:"Kishore Babu",location:"Kakinada",rating:4.5},
        {name:"Harsha Naidu",location:"Tirupati",rating:4.2}
      ]},
      { role: "TV Repair", icon: "fa-solid fa-tv", providers: [
        {name:"Ramu Goud",location:"Hyderabad",rating:4.5},
        {name:"Sai Reddy",location:"Guntur",rating:4.4},
        {name:"Krishna Varma",location:"Vizag",rating:4.6},
        {name:"Balu Naidu",location:"Eluru",rating:4.3},
        {name:"Raghu Kumar",location:"Vijayawada",rating:4.5}
      ]}
    ]
  },
  {
    category: "Bike Services",
    icon: "fa-solid fa-motorcycle",
    desc: "Bike repair, servicing & tyre change",
    roles: [
      { role: "Bike Repair", icon: "fa-solid fa-motorcycle", providers: [
        {name:"Ravi Srinivas",location:"Bhimavaram",rating:4.5},
        {name:"Ajay Babu",location:"Eluru",rating:4.2},
        {name:"Kiran Reddy",location:"Rajahmundry",rating:4.6},
        {name:"Sandeep Kumar",location:"Vijayawada",rating:4.3},
        {name:"Manoj Naidu",location:"Guntur",rating:4.4}
      ]},
      { role: "Bike Servicing", icon: "fa-solid fa-oil-can", providers: [
        {name:"Surya Varma",location:"Hyderabad",rating:4.6},
        {name:"Teja Babu",location:"Vizag",rating:4.3},
        {name:"Vamsi Reddy",location:"Kakinada",rating:4.5},
        {name:"Chandu Kumar",location:"Nellore",rating:4.4},
        {name:"Harish Goud",location:"Tirupati",rating:4.2}
      ]},
      { role: "Tyre Change", icon: "fa-solid fa-circle-dot", providers: [
        {name:"Siva Naidu",location:"Guntur",rating:4.4},
        {name:"Ramu Reddy",location:"Vijayawada",rating:4.5},
        {name:"Balu Babu",location:"Rajahmundry",rating:4.3},
        {name:"Pavan Sai",location:"Eluru",rating:4.6},
        {name:"Anil Varma",location:"Hyderabad",rating:4.2}
      ]}
    ]
  },
  {
    category: "Beauty & Wellness",
    icon: "fa-solid fa-scissors",
    desc: "Haircut, facial, massage at home",
    roles: [
      { role: "Home Haircut", icon: "fa-solid fa-scissors", providers: [
        {name:"Divya Reddy",location:"Vijayawada",rating:4.7},
        {name:"Priya Lakshmi",location:"Guntur",rating:4.5},
        {name:"Sravani Rao",location:"Vizag",rating:4.6},
        {name:"Kavya Naidu",location:"Hyderabad",rating:4.4},
        {name:"Mounika Babu",location:"Eluru",rating:4.3}
      ]},
      { role: "Facial & Skincare", icon: "fa-solid fa-spa", providers: [
        {name:"Swathi Kumar",location:"Nellore",rating:4.6},
        {name:"Keerthi Reddy",location:"Tirupati",rating:4.5},
        {name:"Bhavana Sai",location:"Rajahmundry",rating:4.4},
        {name:"Pooja Varma",location:"Kakinada",rating:4.3},
        {name:"Anusha Goud",location:"Bhimavaram",rating:4.7}
      ]},
      { role: "Body Massage", icon: "fa-solid fa-hand-sparkles", providers: [
        {name:"Raji Kumari",location:"Hyderabad",rating:4.5},
        {name:"Nandini Babu",location:"Vizag",rating:4.4},
        {name:"Tejaswi Rao",location:"Guntur",rating:4.6},
        {name:"Deepthi Kumar",location:"Vijayawada",rating:4.3},
        {name:"Sirisha Reddy",location:"Nellore",rating:4.5}
      ]}
    ]
  },
  {
    category: "Pest Control",
    icon: "fa-solid fa-bug-slash",
    desc: "Cockroach, termite & mosquito control",
    roles: [
      { role: "Cockroach Control", icon: "fa-solid fa-bug", providers: [
        {name:"Nagaraju Reddy",location:"Vijayawada",rating:4.5},
        {name:"Suri Babu",location:"Guntur",rating:4.4},
        {name:"Ramana Kumar",location:"Vizag",rating:4.6},
        {name:"Sunil Naidu",location:"Hyderabad",rating:4.3},
        {name:"Chandu Rao",location:"Eluru",rating:4.2}
      ]},
      { role: "Termite Control", icon: "fa-solid fa-bug-slash", providers: [
        {name:"Bhaskar Reddy",location:"Nellore",rating:4.6},
        {name:"Gopal Kumar",location:"Tirupati",rating:4.5},
        {name:"Manohar Babu",location:"Rajahmundry",rating:4.4},
        {name:"Venkat Rao",location:"Kakinada",rating:4.3},
        {name:"Srinivas Varma",location:"Bhimavaram",rating:4.7}
      ]},
      { role: "Mosquito Fogging", icon: "fa-solid fa-spray-can", providers: [
        {name:"Balaji Reddy",location:"Hyderabad",rating:4.4},
        {name:"Phani Kumar",location:"Vijayawada",rating:4.5},
        {name:"Sekhar Rao",location:"Guntur",rating:4.3},
        {name:"Uday Babu",location:"Vizag",rating:4.6},
        {name:"Mohan Naidu",location:"Nellore",rating:4.2}
      ]}
    ]
  },
  {
    category: "Painting",
    icon: "fa-solid fa-paint-roller",
    desc: "Interior, exterior & texture painting",
    roles: [
      { role: "Interior Painting", icon: "fa-solid fa-paint-roller", providers: [
        {name:"Ajay Painters",location:"Vijayawada",rating:4.5},
        {name:"Raju Reddy",location:"Guntur",rating:4.4},
        {name:"Suresh Babu",location:"Vizag",rating:4.6},
        {name:"Dinesh Rao",location:"Hyderabad",rating:4.3},
        {name:"Prabhu Kumar",location:"Eluru",rating:4.5}
      ]},
      { role: "Exterior Painting", icon: "fa-solid fa-house", providers: [
        {name:"Hari Reddy",location:"Nellore",rating:4.4},
        {name:"Surya Babu",location:"Tirupati",rating:4.5},
        {name:"Kiran Varma",location:"Rajahmundry",rating:4.3},
        {name:"Teja Naidu",location:"Kakinada",rating:4.6},
        {name:"Venu Rao",location:"Bhimavaram",rating:4.2}
      ]},
      { role: "Texture / Design", icon: "fa-solid fa-fill-drip", providers: [
        {name:"Sai Kiran",location:"Hyderabad",rating:4.7},
        {name:"Mahesh Reddy",location:"Vijayawada",rating:4.5},
        {name:"Naveen Kumar",location:"Guntur",rating:4.6},
        {name:"Rohit Babu",location:"Vizag",rating:4.3},
        {name:"Arjun Rao",location:"Nellore",rating:4.4}
      ]}
    ]
  },
  {
    category: "Vehicle Care",
    icon: "fa-solid fa-car",
    desc: "Car wash, car service & denting",
    roles: [
      { role: "Car Wash", icon: "fa-solid fa-car-side", providers: [
        {name:"Auto Fresh",location:"Vijayawada",rating:4.5},
        {name:"Shine Cars",location:"Guntur",rating:4.4},
        {name:"Quick Wash",location:"Vizag",rating:4.6},
        {name:"Sparkling Auto",location:"Hyderabad",rating:4.3},
        {name:"Bright Wash",location:"Nellore",rating:4.5}
      ]},
      { role: "Car Servicing", icon: "fa-solid fa-gear", providers: [
        {name:"Expert Motors",location:"Eluru",rating:4.6},
        {name:"Prime Service",location:"Tirupati",rating:4.4},
        {name:"Auto Point",location:"Rajahmundry",rating:4.5},
        {name:"Service Pro",location:"Kakinada",rating:4.3},
        {name:"Car Care",location:"Bhimavaram",rating:4.7}
      ]},
      { role: "Denting & Painting", icon: "fa-solid fa-wrench", providers: [
        {name:"Dent Masters",location:"Hyderabad",rating:4.5},
        {name:"Auto Body",location:"Vijayawada",rating:4.4},
        {name:"Shine Works",location:"Guntur",rating:4.6},
        {name:"Panel Care",location:"Vizag",rating:4.3},
        {name:"Fix Dent",location:"Nellore",rating:4.2}
      ]}
    ]
  }
];

// ===== RENDER LOGIC =====
const container = document.getElementById('service-container');
const breadcrumb = document.getElementById('breadcrumb');
let currentService = null;

function cleanBackBtn() {
  const existing = container.previousElementSibling;
  if (existing && existing.classList.contains('back-btn')) {
    existing.remove();
  }
}

function renderCategories() {
  currentService = null;
  cleanBackBtn();
  breadcrumb.style.display = 'none';
  container.className = 'service-grid';
  container.innerHTML = '';

  services.forEach(function(s) {
    var div = document.createElement('div');
    div.className = 's-card';
    div.innerHTML =
      '<div class="s-card-icon"><i class="' + s.icon + '"></i></div>' +
      '<h3>' + s.category + '</h3>' +
      '<p>' + s.desc + '</p>';
    div.addEventListener('click', function() { renderRoles(s); });
    container.appendChild(div);
  });
}
// expose globally for breadcrumb onclick=""
window.renderCategories = renderCategories;

function renderRoles(service) {
  currentService = service;
  cleanBackBtn();
  breadcrumb.style.display = 'flex';
  breadcrumb.innerHTML =
    '<span onclick="renderCategories()">All Services</span>' +
    '<span class="sep">›</span>' +
    '<span class="active">' + service.category + '</span>';

  container.className = 'service-grid';
  container.innerHTML = '';

  var back = document.createElement('button');
  back.className = 'back-btn';
  back.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Back';
  back.addEventListener('click', renderCategories);
  container.parentNode.insertBefore(back, container);

  service.roles.forEach(function(role) {
    var div = document.createElement('div');
    div.className = 's-card';
    div.innerHTML =
      '<div class="s-card-icon"><i class="' + role.icon + '"></i></div>' +
      '<h3>' + role.role + '</h3>' +
      '<p>' + role.providers.length + ' providers available</p>';
    div.addEventListener('click', function() { renderProviders(role, service); });
    container.appendChild(div);
  });
}
window.renderRoles = renderRoles;

function renderProviders(role, service) {
  cleanBackBtn();
  breadcrumb.style.display = 'flex';
  breadcrumb.innerHTML =
    '<span onclick="renderCategories()">All Services</span>' +
    '<span class="sep">›</span>' +
    '<span onclick="renderRoles(currentService)">' + service.category + '</span>' +
    '<span class="sep">›</span>' +
    '<span class="active">' + role.role + '</span>';

  container.className = 'provider-grid';
  container.innerHTML = '';

  var back = document.createElement('button');
  back.className = 'back-btn';
  back.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Back to Roles';
  back.addEventListener('click', function() { renderRoles(service); });
  container.parentNode.insertBefore(back, container);

  role.providers.forEach(function(p) {
    var div = document.createElement('div');
    div.className = 'provider-card';
    div.innerHTML =
      '<div class="provider-avatar">' + p.name.charAt(0) + '</div>' +
      '<h4>' + p.name + '</h4>' +
      '<div class="loc"><i class="fa-solid fa-location-dot" style="color:var(--accent);margin-right:4px;"></i>' + p.location + '</div>' +
      '<div class="rating-row">' +
        '<span class="stars">' + '★'.repeat(Math.floor(p.rating)) + '</span>' +
        '<span class="rating-num">' + p.rating + '</span>' +
      '</div>' +
      '<button class="book-btn" onclick="openModal(\'signup\')">Book Now</button>';
    container.appendChild(div);
  });
}



// ===== SEARCH — now attached to the services section search bar =====
var searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', function() {
    var q = this.value.toLowerCase().trim();
    if (!q) {
      renderCategories();
      return;
    }
    cleanBackBtn();
    breadcrumb.style.display = 'none';
    container.className = 'service-grid';
    container.innerHTML = '';

    services.forEach(function(s) {
      s.roles.forEach(function(role) {
        if (role.role.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)) {
          var div = document.createElement('div');
          div.className = 's-card';
          div.innerHTML =
            '<div class="s-card-icon"><i class="' + role.icon + '"></i></div>' +
            '<h3>' + role.role + '</h3>' +
            '<p>' + s.category + '</p>';
          div.addEventListener('click', function() { renderProviders(role, s); });
          container.appendChild(div);
        }
      });
    });

    if (!container.children.length) {
      container.innerHTML = '<p style="color:var(--muted);text-align:center;grid-column:1/-1;padding:40px 0;">No services found for "' + q + '"</p>';
    }
  });
}

// ===== INIT =====
renderCategories();

}); // end DOMContentLoaded
