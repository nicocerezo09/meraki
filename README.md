# Meraki
Es un proyecto creado para navegar entre las distintas opciones y adquirir el producto que deseas.

## Clonar proyecto
Ejecutar en la consola `git clone https://github.com/nicocerezo09/meraki`

## Configuracion de entorno
- Correr en la terminal integrada del proyecto con el comando `nmp install`
- Crear un archivo .env en la carpeta raiz del proyecto y cargar lo siguiente:
  - REACT_APP_apiKey=AIzaSyA61U06sumcKMuA0LNxGFvuoLC_TIv7sf4
  - REACT_APP_authDomain=meraki-7db96.firebaseapp.com
  - REACT_APP_projectId=meraki-7db96
  - REACT_APP_storageBucket= meraki-7db96.appspot.com
  - REACT_APP_messagingSenderId=481458385972
  - REACT_APP_appId=1:481458385972:web:e90b77e0168cebbad80661

## Ejecutar aplicacion
Ejecutar en la consola el comando `nmp start`

## Tecnologias aplicadas

:point_right: React js

:point_right: HTML

:point_right: CSS

:point_right: JavasCript

:point_right: Firebase (como base de datos)

## Librerias utilizadas

:blue_book: Bootstrap

:closed_book: React-icons

:green_book: Sweetalert2

:orange_book: React-router-dom

:ledger: React-toastify

## Funcionamiento de los componentes

Lo primero que veremos al entrar en Meraki es el ***NarBar*** este se encarga de filtar las diferentes categorias (solo 2 por el momento) y tambien se muestra el
***CartWidget*** que se encarga de mostrar la cantidad (numerica) de objetos seleccionados para la compra. Desde el mismo menu tambien podras acceder a los
diferentes productos contenidos en ***ItemListContainer*** que a su vez contiene a ***ItemList*** que a su vez contiene tambien a ***Item*** luego desde aqui podras
acceder al detalle y compra de los productos a traves de ***ItemDetailContainer*** que contiene a su vez a ***ItemDetail***. Luego se podra acceder ***Login*** o 
***Register*** dependiendo si ya estas registrado o no dentro de la base de datos (utilize firebase auth), ambos a su vez utilizan ***UserProvider***
Tanto las opciones como turno, servicios y el logo llevan al home inicial

Luego por debajo del menu veremos el ***Carousel*** que simplemente esta hecho con bootstrap y muestra 3 fotos aleatorias sobre diferentes cortes realizados

Al hacer click en el ***CartWidget*** te llevara al resumen de tus compras realizadas hasta el momento, que es traido por el ***Cart**** que a su vez contiene al
***ItemCart*** usando su ***CartContext***

Para finalizar el proceso de compra se requiere completar un ***Form*** el cual nos dara un ID unica para el seguimiento de nuestro producto

Por ultimo debajo de todo se visualiza el ***Footer*** que solo tiene informacion extra como redes sociales, formas de pago, etc

## Previsualizacion

![Alt text](https://github.com/nicocerezo09/meraki/blob/master/preview/gifMeraki.gif)