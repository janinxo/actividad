// Cargar cuando la página esté lista
document.addEventListener("DOMContentLoaded", function() {
    
    // Datos de las noticias
    var noticias = [
        {
            titulo: "Campaña de Recolección de Alimentos 2025",
            fecha: "15 de agosto, 2025",
            descripcion: "Iniciamos nuestra campaña anual para recolectar alimentos y ayudar a familias necesitadas.",
            icono: "fas fa-shopping-basket"
        },
        {
            titulo: "Nueva Alianza con Empresas Locales", 
            fecha: "10 de agosto, 2025",
            descripcion: "Firmamos convenios con 12 empresas locales para programas de responsabilidad social.",
            icono: "fas fa-handshake"
        },
        {
            titulo: "Programa de Becas Estudiantiles",
            fecha: "5 de agosto, 2025", 
            descripcion: "Lanzamos becas para estudiantes de bajos recursos, cubriendo útiles y uniformes.",
            icono: "fas fa-graduation-cap"
        },
        {
            titulo: "Jornada Médica Gratuita",
            fecha: "28 de julio, 2025",
            descripcion: "Realizamos jornadas médicas que beneficiaron a más de 200 personas.",
            icono: "fas fa-stethoscope"
        }
    ];

    // Función para mostrar las noticias
    function cargarNoticias() {
        var container = document.getElementById("news-container");
        var loading = document.getElementById("loading");
        
        // Mostrar loading
        loading.style.display = "block";
        
        // Esperar un poco para simular carga
        setTimeout(function() {
            loading.style.display = "none";
            
            // Crear cada noticia
            for(var i = 0; i < noticias.length; i++) {
                var noticia = noticias[i];
                
                // Crear elementos
                var col = document.createElement("div");
                col.className = "col-md-6";
                
                var card = document.createElement("div");
                card.className = "news-card";
                
                // Contenido de la tarjeta
                card.innerHTML = 
                    '<div class="news-date">' +
                        '<i class="fas fa-calendar me-1"></i>' + noticia.fecha +
                    '</div>' +
                    '<h4 class="news-title">' +
                        '<i class="' + noticia.icono + ' news-icon"></i>' + noticia.titulo +
                    '</h4>' +
                    '<p>' + noticia.descripcion + '</p>';
                
                col.appendChild(card);
                container.appendChild(col);
            }
        }, 800);
    }

    // Validación del formulario
    var form = document.getElementById("contact-form");
    
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Obtener valores
        var nombre = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var mensaje = document.getElementById("message").value;
        
        // Variables para validar
        var esValido = true;
        
        // Limpiar errores anteriores
        document.getElementById("name-error").style.display = "none";
        document.getElementById("email-error").style.display = "none";
        document.getElementById("message-error").style.display = "none";
        
        // Validar nombre
        if(nombre.trim() == "" || nombre.length < 2) {
            document.getElementById("name-error").style.display = "block";
            esValido = false;
        }
        
        // Validar email
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            document.getElementById("email-error").style.display = "block";
            esValido = false;
        }
        
        // Validar mensaje
        if(mensaje.trim() == "" || mensaje.length < 5) {
            document.getElementById("message-error").style.display = "block";
            esValido = false;
        }
        
        // Si todo está bien
        if(esValido) {
            // Mostrar mensaje de éxito
            var successMsg = document.getElementById("success-msg");
            successMsg.style.display = "block";
            
            // Limpiar formulario
            form.reset();
            
            // Ocultar mensaje después de 4 segundos
            setTimeout(function() {
                successMsg.style.display = "none";
            }, 4000);
        }
    });

    // Cargar las noticias al inicio
    cargarNoticias();
});

// Navegación suave (básica)
function scrollToSection(sectionId) {
    var element = document.getElementById(sectionId);
    if(element) {
        element.scrollIntoView({behavior: 'smooth'});
    }
}