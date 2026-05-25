# Aplicación del Clima (Weather App)

Este repositorio contiene una aplicación web interactiva que consulta y muestra información meteorológica en tiempo real. El proyecto fue desarrollado como parte de las prácticas del Bootcamp de Desarrollo Web Full Stack.

## Descripción del Proyecto
El objetivo principal de este proyecto fue aprender a conectar una aplicación frontend con un servicio externo (API) de clima. La aplicación permite al usuario buscar una ciudad y obtener datos actuales como la temperatura, la humedad y las condiciones climáticas de manera instantánea.

## Estructura del Proyecto y Tecnologías
* **React**: Biblioteca principal utilizada para construir la interfaz de usuario basada en componentes y gestionar los estados de la aplicación.
* **Consumo de API (`Fetch` / `Axios`)**: Implementación de peticiones asíncronas en JavaScript para conectar la aplicación con un servicio meteorológico externo y recibir datos en formato JSON.
* **JavaScript (ES6)**: Lógica para manejar las respuestas de la API, el control de errores (por si una ciudad no existe) y la actualización del estado de la pantalla.
* **HTML5 / CSS3**: Diseño limpio y adaptativo para garantizar una correcta visualización tanto en computadoras como en dispositivos móviles.

## Funcionalidades Clave del Código
1. **Peticiones Asíncronas**: Uso de funciones de JavaScript para realizar consultas en segundo plano sin necesidad de recargar la página web.
2. **Manejo de Estados Dinámicos**: Actualización inmediata de la interfaz (cambio de textos, iconos del clima o temperaturas) una vez que el servidor externo responde con los datos.
3. **Formularios e Interacción**: Captura de datos ingresados por el usuario en la barra de búsqueda para realizar consultas personalizadas por ciudad.
