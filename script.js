const emprendimientos = [
{
  nombre: "🌸 Florecer Infinito - @florecerinfinito.mnzl ",
  descripcion: "Regalos hermosos, eternamente tuyos.",
  descripcionLarga: `
<p>📲 <strong>3103832455</strong></p>
<p>Creamos regalos infinitamente hermosos, eternamente tuyos.</p>

<ul>
  <li>🎁 Cajas de regalo personalizadas</li>
  <li>🍽️ Desayunos sorpresa</li>
  <li>🌹 Ramos de rosas eternas</li>
  <li>✨ ¡Y mucho más!</li>
</ul>

<p><em>Detalles hechos con amor para toda ocasión 💖</em></p>
`
  ,
  palabrasClave: ["regalos", "rosas", "sorpresas", "amor"],
  categoria: "Arte",
  imagenes: [
  "assets/emp1/florecer1.jpeg",
  "assets/emp1/florecer2.jpeg",
  "assets/emp1/florecer3.jpeg",
  "assets/emp1/florecer4.jpeg",
  "assets/emp1/florecer5.jpeg",
  "assets/emp1/florecer6.jpeg",
  "assets/emp1/florecer7.jpeg",
  "assets/emp1/florecer8.jpeg",
  "assets/emp1/florecer9.jpeg",
  "assets/emp1/florecer10.jpeg",
  "assets/emp1/florecer11.jpeg",
  "assets/emp1/florecer12.jpeg",
  "assets/emp1/florecer13.jpeg",
  "assets/emp1/florecer14.jpeg",
  "assets/emp1/florecer15.jpeg",
  "assets/emp1/florecer16.jpeg"
],

  telefono: "3103832455"
},
{
  nombre: "La Luna del Sandwich 🥪",
  descripcion: "Sandwiches sabrosos y adaptadores para cargar tu día.",
  descripcionLarga: `
<strong>La luna del sandwich te ofrece:</strong><br>
<b>Sandwich</b>: pollo, pavo, salami, lechuga y salsa de la casa. <strong>$6.000</strong><br>
<b>Atundwich</b>: atún, ensalada y salsa de la casa. <strong>$4.500</strong><br>
<b>Sandwichito</b>: pan tajado, pollo, pavo, lechuga y salsa de la casa. <strong>$4.500</strong><br><br>

<strong>Adaptadores de carga</strong> para esos días donde dejas tu cargador o no encuentras el que necesitas. Tenemos:<br>
<ul>
  <li>Tipo C - micro USB</li>
  <li>Micro USB - Tipo C</li>
  <li>Lightning - Tipo C</li>
  <li>Lightning - micro USB</li>
</ul>

<p><strong>Horario:</strong> De lunes a jueves te estaremos esperando en la Universidad Nacional, sede Manizales, campus La Nubia, más exactamente en el mall.</p>
<p>¡Te estaremos esperando!</p>
`,

  palabrasClave: ["sandwich", "comida", "adaptadores", "tecnología"],
  categoria: "Comida",
  imagenes: ["assets/emp2/laluna1.jpeg", "assets/emp2/laluna2.jpeg", "assets/emp2/laluna3.jpeg", "assets/emp2/laluna4.jpeg"],
  telefono: "3007435621" // colócale el número real si lo tienes
},
{
  nombre: "🥪 Delicias GTS - @deliciasgts.mzls",
  descripcion: "Sabores que enamoran, detalles que conquistan.",
  descripcionLarga: `
<p>📲 <strong>3008836495</strong></p>

<p>✨ <strong>Sabores que enamoran, detalles que conquistan</strong></p>
<p>En <strong>Delicias GTS</strong> creamos momentos deliciosos para compartir y regalar.</p>

<ul>
  <li>🥪 Sándwiches artesanales con el toque único GTS</li>
  <li>🍱 Combos individuales y para compartir</li>
  <li>🌯 Burritos llenos de sabor</li>
  <li>🥗 Ensaladas frescas y postres irresistibles</li>
  <li>✨ ¡Y más delicias listas para sorprender!</li>
</ul>

<p>📦 También elaboramos pedidos al por mayor para eventos, reuniones y celebraciones especiales.</p>
<p><em>Porque cada bocado cuenta y cada detalle se hace con amor. 💛</em></p>
`
  ,
  palabrasClave: ["sándwich", "burrito", "postres", "eventos"],
  categoria: "Comida",
  imagenes: [
  "assets/emp3/gts1.jpeg",
  "assets/emp3/gts2.jpeg",
  "assets/emp3/gts3.jpeg",
  "assets/emp3/gts4.jpeg",
  "assets/emp3/gts5.jpeg",
  "assets/emp3/gts6.jpeg",
  "assets/emp3/gts7.jpeg",
  "assets/emp3/gts8.jpeg",
  "assets/emp3/gts9.jpeg",
  "assets/emp3/gts10.jpeg",
  "assets/emp3/gts11.jpeg",
  "assets/emp3/gts12.jpeg",
  "assets/emp3/gts13.jpeg",
  "assets/emp3/gts14.jpeg"
],

  telefono: "3008836495"
}

];


  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  const contenedor = document.getElementById('emprendimientosContainer');
  const inputBusqueda = document.getElementById('searchInput');
  
function crearTarjeta({ nombre, descripcion, imagenes }, index) {
  const id = nombre.toLowerCase().replace(/\s+/g, "-"); // identificador único por nombre
  const esFavorito = favoritos.includes(id);

  return `
    <div class="card" data-id="${id}">
      <img src="${imagenes[0]}" alt="${nombre}">
      <div class="card-content">
        <h2>${nombre}</h2>
        <p>${descripcion}</p>
      </div>
      <div class="card-actions">
        <button class="whatsapp-btn" onclick="abrirModal(${index})">Ver más</button>
        <button class="fav-btn ${esFavorito ? 'activo' : ''}" onclick="toggleFavorito('${id}')">
  ${esFavorito ? '♥' : '♡'}
</button>

      </div>
    </div>
  `;
}

  
  
  function mostrarEmprendimientos(lista) {
    contenedor.innerHTML = lista.map(crearTarjeta).join('');
  }
  

  
  // Inicialización
  inputBusqueda.addEventListener('input', filtrarEmprendimientos);
  mostrarEmprendimientos(emprendimientos);
  
  
  let imagenIndex = 0;
let datosActuales = null;

let sliderInterval;

function abrirModal(index) {
  const data = emprendimientos[index];
  datosActuales = data;
  imagenIndex = 0;

  document.getElementById('modalTitle').textContent = data.nombre;
  // document.getElementById('modalDescription').textContent = data.descripcionLarga;
  document.getElementById('modalDescription').innerHTML = data.descripcionLarga;

  document.getElementById('modalTags').textContent = data.palabrasClave.join(", ");
  document.getElementById('modalWhatsapp').href = `https://wa.me/57${data.telefono}?text=Hola!%20Estoy%20interesado(a)%20en%20tu%20emprendimiento%20${data.nombre}`;
  document.getElementById('modalMainImage').src = data.imagenes[0];

  const thumbnails = data.imagenes.map((src, i) => `
  <img src="${src}" 
       data-index="${i}" 
       class="${i === 0 ? 'active' : ''}"
       onmouseenter="handleThumbnailHover(${i})"
       ontouchstart="handleThumbnailHover(${i})"
/>
`).join('');
document.getElementById('modalThumbnails').innerHTML = thumbnails;


  document.getElementById('modal').classList.remove('hidden');

  // iniciarSlider(); // ⏯️ Inicia auto-slider
}

function cambiarImagenModal(i) {
  imagenIndex = i;
  actualizarImagenPrincipal();
}

function actualizarImagenPrincipal() {
  const img = datosActuales.imagenes[imagenIndex];
  document.getElementById('modalMainImage').src = img;

  document.querySelectorAll('#modalThumbnails img').forEach((thumb, index) => {
    thumb.classList.toggle('active', index === imagenIndex);
  });
}
function handleThumbnailHover(i) {
  imagenIndex = i;
  actualizarImagenPrincipal();
}


// function iniciarSlider() {
//   clearInterval(sliderInterval);
//   sliderInterval = setInterval(() => {
//     imagenIndex = (imagenIndex + 1) % datosActuales.imagenes.length;
//     actualizarImagenPrincipal();
//   }, 3000); // 3 segundos por imagen
// }

function cerrarModal() {
  document.getElementById('modal').classList.add('hidden');
  // clearInterval(sliderInterval); // Elimínalo si ya no usas el slider automático
}

// Cerrar con la X
document.getElementById('closeModal').addEventListener('click', cerrarModal);

// Cerrar haciendo clic fuera del contenido
document.getElementById('modal').addEventListener('click', function (event) {
  const modalContent = document.querySelector('.modal-content');
  if (!modalContent.contains(event.target)) {
    cerrarModal();
  }
});


// document.getElementById('prevImage').addEventListener('click', () => {
//   if (!datosActuales) return;
//   imagenIndex = (imagenIndex - 1 + datosActuales.imagenes.length) % datosActuales.imagenes.length;
//   document.getElementById('modalImage').src = datosActuales.imagenes[imagenIndex];
// });

// document.getElementById('nextImage').addEventListener('click', () => {
//   if (!datosActuales) return;
//   imagenIndex = (imagenIndex + 1) % datosActuales.imagenes.length;
//   document.getElementById('modalImage').src = datosActuales.imagenes[imagenIndex];
// });


let categoriaSeleccionada = "Todos";

document.querySelectorAll('.categoria-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('activo'));
    btn.classList.add('activo');
    categoriaSeleccionada = btn.dataset.categoria;
    filtrarEmprendimientos();
  });
});

function filtrarEmprendimientos() {
  const texto = inputBusqueda.value.toLowerCase();

  const filtrados = emprendimientos.filter(e => {
    const coincideTexto =
      e.nombre.toLowerCase().includes(texto) ||
      e.descripcion.toLowerCase().includes(texto) ||
      e.palabrasClave.some(p => p.toLowerCase().includes(texto));

    const coincideCategoria =
      categoriaSeleccionada === "Todos" || e.categoria === categoriaSeleccionada;

    return coincideTexto && coincideCategoria;
  });

  mostrarEmprendimientos(filtrados);
}

// Manejo de favoritos


function toggleFavorito(id) {
  if (favoritos.includes(id)) {
    favoritos = favoritos.filter(f => f !== id);
  } else {
    favoritos.push(id);
  }
  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  filtrarEmprendimientos(); // volver a renderizar para reflejar el cambio
}

document.getElementById('btnFavoritos').addEventListener('click', () => {
  document.querySelectorAll('.categoria-btn').forEach(b => b.classList.remove('activo'));
  document.getElementById('btnFavoritos').classList.add('activo');

  const favoritosData = emprendimientos.filter(e => favoritos.includes(e.nombre.toLowerCase().replace(/\s+/g, "-")));
  mostrarEmprendimientos(favoritosData);
});

document.getElementById('toggleDarkMode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});


// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");

// Evento para cerrar
closeLightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Cerrar lightbox si se hace clic fuera de la imagen
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});
