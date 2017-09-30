# Tienda Don Pepe

Proyecto prueba desarrollado para Anda Perú.
Muestra el horario de atención, direcciones, el stock por producto y permite comprar online.

## Requerimientos:

- Javascript
- CSS

## Descripcion General

- Se desarrolló como aplicación web del tipo single-page application (SPA) utilizando Javascript nativo y Jquery.
- Para aplicar estilos se utilizó CSS y el framework Materialize.
- La API se provee de Firebase para traer y sincronizar datos desde la nube a través de un objeto JSON en tiempo real.

## Desarrollo

- El usuario puede acceder desde un móvil u ordenador, bajo la portada se encuentra la sección consultar stock donde puede buscar tiendas por distrito, acceder a la información de esa tienda y sus productos disponibles, con el metodo filter obtenemos el objeto tienda que corresponde y renderizamos una sección con la data en tiempo real.

- Con Materialize se agregaron modals para mostrar zoom de las imagenes por producto.

- Si se selecciona tienda virtual se muestan los productos con un boton call to action habilitado para agregar al carrito de compras, si el usuario no está sesionado se abre un modal para autenticarse antes de continuar, se validan los campos con condicionales y se habilita el carrito, que a nivel de código es un arreglo de objetos.

- Cuando se agrega un prdoucto el carrito muesta un marcador con la cantidad de productos agregados, si un producto se repitiera, no lo vuelve a agregar, sino que se almacena el número de veces que fue agregado y realiza un recálculo del precio por la cantidad de unidades.

- El carrito muestra una lista de productos y el precio total, también se puede modificar la cantidad de unidades por un producto y actualizar el precio.

- Se puede vaciar el carrito y regresar nuevamente a la pantalla de inicio.

- Se ha manejado una condicional switch para mostrar las pantallas segun el comportamiento del usuario.


