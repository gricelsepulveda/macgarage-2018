/**
 * Obtiene las imágenes de instagram del cliente en base a un script PHP alojado en el servidor
 * @param {string} container seleccionador CSS de/los contenedor/es donde se colocarán las imágenes
 * @param {string} imgClass conjunto de nombres de clases para colocar a la imágen generada
 */
var obtenerImagenes = function(container, imgClass) {
    $.ajax({
        url: "/ajax-instagram.php",
        success: function ($jxhq) {

            $jxhq.data.forEach(function(element) {
                // Inicialización de elementos
                if(element.caption === null)
                    element.caption = '';

                // Generación de elemento img
                var $img = $("<img>", { class: imgClass, src: element.images.standard_resolution.url , alt: element.caption.text, name: element.link, style: 'display:none'});  
                $(container).append($img);
                
            }, this);
        }
    });
};