/*
ACLARACIONES
Cada Seccion tiene su declaracion de variables al principio y su console.log al final.
Para poder apreciar el funcionamiento de cada metodo deben descomentarse las declaraciones y el console.log y aparte, el metodo particular que se quiera implementar.
*/

/*
//DOCUMENT // ELEMENT
//ACCEDER Y MODIFICAR ELEMNTOS DEL DOM

//Acceder y modificar elementos por id
const tittle = document.getElementById('tittle')
tittle.textContent = 'DOM accediendo a nodos'

//Declaraciones.
const paragraph = document.querySelector('.paragraph')

//Selecciona el primer elemnento con selector Css. Class.
document.querySelector('.paragraph')
console.log(paragraph)

//Selecciona todos los elementos seleccionados. Devuelve NodeList
document.querySelectorAll('.paragraph')
console.log(paragraph)

//Acceder al contenido un elemento dentro de otro. Class.
const span = paragraph.querySelector('span')
console.log(span.textContent)


//Acceder al contenido un elemento dentro de otro. Id.
const span = document.getElementById('tittle').querySelector('span')
console.log(span.textContent)


//Para seleccionar todos los elementos
document.querySelectorAll('.paragraph')

//Seleccionar un elemento en particular y aplicar estilos en linea
paragraph[0].style.color = 'red'
paragraph[1].style.color = 'blue'
paragraph[2].style.color = 'green'

//Pruebas
console.log(paragraph)


//A) Atributos

//Declaraciones
const name = document.getElementById('name')

//Seleccionar atributos de las etiquetas
console.log(name.getAttribute('type'))
console.log(name)

//Modificar atributos en el DOM
console.log(name)
console.log(name.setAttribute('type','date'))


//B) Clases

//Declaraciones. 
const tittle = document.getElementById('tittle')

//Agregar clases
tittle.classList.add('main-tittle', 'other-tittle')

//Eliminar clases
tittle.classList.remove('other-tittle')

//Comprueba si esa clase existe.
if(tittle.classList.contains('other-tittle')) console.log('Tittle tiene la clase -other-tittle')
else console.log('Tittle no tiene la clase other-tittle')

//Reemplazar una clase por otra
tittle.classList.replace('titulo', 'main-tittle')

//Pruebas
console.log(tittle)


//C) ID

//Declaraciones. 
const tittle = document.getElementById('tittle')
const name = document.getElementById('name')

//Acceder al Id directamente
console.log(tittle.id)

//Acceder al contenido interpretado
console.log(tittle.textContent)

//Acceder al contenido considerando las etiquetas
console.log(tittle.innerHTML)

//Acceder al valor
console.log(name.value)

//Para saber si hay algo dentro o no. Validacion de formularios
console.log(name.value.length)

*/

/*
//EVENTOS DEL DOM

//Definicion

//Evento es cualquier cosa que sucede en el documento
//El contenido se ha leido
//El contenido se ha cargado
//El usuario mueve el raton
//El usuario pulsa una tecla
//La ventana se ha cerrado
//Un largo etc
//Sintaxis de todos los eventos
//Element.addEventListener('event', callback () => {...})


//A) Eventos de raton


//Declaraciones
const button = document.getElementById('button')
const box = document.getElementById('box')

//Click
button.addEventListener('click', () => {
  console.log('CLICK')
})

//DoubleClick
button.addEventListener('dblclick', () => {
  console.log('DOBLE CLICK')
})

//Mouseenter. Cuando entramos a la zona que tiene el evento.
box.addEventListener('mouseenter', () => {
  box.classList.replace('red', 'green')
})

//Mouseleave. Cuando salimos de la zona que tiene el evento.
box.addEventListener('mouseleave', () => {
  box.classList.replace('green', 'red')
})

//Mousedown. Cuando pulsamos el boton izq del raton.
box.addEventListener('mousedown', () => {
  console.log('HAS PULSADO EN LA CAJA')
})

//Mouseup. Cuando soltamos el boton izq del raton.
box.addEventListener('mouseup', () => {
  console.log('HAS SOLTADO EL BOTON IZQ EN LA CAJA')
})

//Mousemove. Cuando nos movemos dentro de la caja
box.addEventListener('mousemove', () => {
  console.log('ESTAS MOVIENDO EL RATON EN LA CAJA')
})


//B) Eventos de teclado


//Declaraciones
const input = document.getElementById('input')

//Keydown. Cuando presiono y no suelto.
input.addEventListener('keydown', () => {
  console.log('HAS PULSADO UNA TECLA')
})

//Keydown. Cuando suelto la tecla
input.addEventListener('keyup', () => {
  console.log('HAS SOLTADO UNA TECLA')
})

//Keydown. Cuando presiono y no suelto.
input.addEventListener('keypress', () => {
  console.log('ESTAS PULSANDO UNA TECLA')
})



//C) Objeto Evento. Event. Importante.


//Nos da TODA la info sobre como, cuando, donde,etc se ejecuto el evento. 

//Declaraciones
const form = document.getElementById("form");
const input = document.getElementById("name");
const button = document.getElementById("button");
const gallery = document.getElementById("gallery");


//En window
addEventListener('click', (event) => {
  console.log(event)
})

//Dentro de un input. Teclado.
input.addEventListener('keyup', (event) => {
  console.log(event)
})

//Dentro de un input. Mousse.
input.addEventListener('click', (event) => {
  console.log(event)
})

//Para trabajar con Apis y eventos. Para ingresar en una cadena de prop.
input.addEventListener('keyup', (event) => {
  console.log(event.explicitOriginalTarget.attributes[0].nodeValue)
})

//Target tiene casi toda la informacion importante
button.addEventListener('click', (e) => {
  console.log(e.target)
})

//Con el objeto event podemos acceder a los valores de diferentes elementos con una sola linea.
//gallery.addEventListener('click', (e) => {
  //console.log(e.target.textContent)
//})

//Modificamos el style de cuando hacemos click para muchos elementos al mismo tiempo en una sola linea.
//gallery.addEventListener("click", (e) => {
  //e.target.classList.add("pink");
//});

//PreventDefault para hacer que un evento NO reinicie la pagina. O sea que no se ejecute por completo.
//Para localizar el evennto submit antess de que se envia un formulario.
//Hacemos que el formulario NO haga lo que tiene prederminado hacer
//Si es un linck impide que se pueda presionar hasta que suceda otra cosa
//form.addEventListener("submit", (e) => {
  //e.preventDefault();
  //console.log("El formulario no se ha enviado");
//});

//Muy util para buscar la tecla que estamos pulsando
//input.addEventListener("keyup", (e) => {
  //console.log(e.key);
//});

//Para detectar el texto del punto donde se hizo click
//gallery.addEventListener('click', (e) => {
  //console.log(e.target.textContent)
//}) 

//Los eventos los podemos forzar a que el evento se dispare
button.click()


// //Pruebas
console.log(input)
console.log(form)
console.log(button)
console.log(gallery)



//CREANDO ELEMENTOS EN EL DOM

//Declaraciones
const element = document.getElementById('ul')
const fragment = document.createDocumentFragment()
const select = document.getElementById('select')
const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo', 'Valor extra', 'Otro valor']

//A) Creando una lista 

// Usando bucle for of

// for (const day of days){
//   const itemList = document.createElement('LI')
//   itemList.textContent = day
//   fragment.appendChild(itemList)
// }

// console.log(fragment)

// Usando bucle forEach

// days.forEach(function(day) {
//   var li = document.createElement('li');
//   li.textContent = day;
//   fragment.appendChild(li);
// });

// //Con una unica inyeccion de codigo conseguimos recorrer todo el array
// ul.appendChild(fragment)
// element.appendChild(fragment);


//B) Insertar elementos en select

for(const day of days){
  //Creo el elemento item
  const selectItem = document.createElement('OPTION')
  //Lo paso a minuscula
  selectItem.setAttribute('value', day.toLowerCase())
  //A cada item le agrego un valor day
  selectItem.textContent = day
  
  fragment.appendChild(selectItem)
  
}
//Ya tengo el select creado. Finalmente inserto los valores dentro. Las opciones. Si llegara a agregar 'valor extra dentro de mi array se agregaria automaticamente.
select.appendChild(fragment)

//Pruebas
//console.log(element)
//console.log(fragment)
console.log(select)



//DOM TRAVERSING.

//Atravesar el DOM. Lo que hacemos es situarnos en un nodo parent y movernos hacia arriba y hacia abajo en funcion de ese nodo que usamos como referencia. Siempre nos ubicamos primero en el padre. En este caso el elem ul.

//Declaraciones
const parent = document.getElementById("parent");

//A) Padres / Parent

// parentElement - Devuelve al nodo el elemnto padre
console.log(parent.parentElement);

//Si quiero subir otro nivel
console.log(parent.parentElement.parentElement);

//Y otro. Subimos tres niveles
console.log(parent.parentElement.parentElement.parentElement);

//Si lo hago una vez mas llego a null porquee s el punto mas alto del documento. Ya no puedo seguir avanzando
console.log(parent.parentElement.parentElement.parentElement.parentElement);

//Tambien puedo acceder directamente a ese punto haciendo:
console.log(document.parentElement);

//B) Hijos / Children

// parent.childNodes - Devuelve una NodeList que contiene todos los nodos hijos, incluyendo los nodos de texto y los nodos de elemento.
const childNodes = parent.childNodes;
console.log(childNodes);

// parent.children - Devuelve una HTMLCollection que contiene solo los nodos de elemento hijos.
const children = parent.children;
console.log(children);

// parent.firstChild - Devuelve el primer nodo hijo, incluyendo los nodos de texto y los nodos de elemento.
const firstChild = parent.firstChild;
console.log(firstChild);

// parent.firstElementChild - Devuelve el primer nodo de elemento hijo.
const firstElementChild = parent.firstElementChild;
console.log(firstElementChild);

//C) Hermanos / Sibling

//Declaraciones
const lastChild = parent.lastChild;

// node.nextSibling - Devuelve el siguiente nodo hermano, incluyendo los nodos de texto y los nodos de elemento.
console.log(firstChild.nextSibling);
console.log(firstChild.nextSibling.nextSibling);

// node.nextElementSibling - Devuelve el siguiente nodo de elemento hermano.
console.log(firstChild.nextElementSibling);

// node.previousSibling - Devuelve el nodo hermano anterior, incluyendo los nodos de texto y los nodos de elemento.
console.log(lastChild.previousSibling); // Elemeno anterior
console.log(lastChild.previousSibling.previousSibling); // Segundo elemento

// node.previousElementSibling - Devuelve el nodo de elemento hermano anterior.
console.log(lastChild.previousElementSibling);

//D) Cercano / Closest

// node.parentNode - Devuelve el nodo padre de un nodo.
const secondli = document.getElementsByTagName("ul")[1];
console.log(secondli.parentNode);
console.log(parent.parentNode);

// node.closest(selector) - Devuelve el nodo más cercano que coincide con un selector dado.
const li = document.querySelector("li");
console.log(li.closest("ul"));
const inner = document.querySelector("ul");
console.log(inner.closest("ul"));

// node.contains(otherNode) - Devuelve true si el nodo contiene otro nodo y false si no lo contiene.
console.log(parent.contains(secondli)); // true
console.log(parent.contains(inner)); // true
console.log(inner.contains(parent)); // false



//INSERTAR Y ELIMINAR ELEMENTOS 2


//Declaraciones
const list = document.getElementById('list')
const newElement = document.createElement('li')
newElement.textContent = 'Im a new element'

//Siempre se va a mantener por debajo. Por mas que agregue elementos.
//list.appendChild(newElement)

//Para insertar elementos en una posicion especifica por posicion
//list.insertBefore(newElement, list.children[1])

//1) SOPORTE TOTAL DE NAVEGADORES

//a) Agregar un elemento gusrdandolo en una variable


//insertAdjacentElement - En un lugar especifico de la lista
//list.children[0].insertAdjacentElement('beforebegin', newElement)

//beforebegin - antes de la lista en posicion especifica
//list.insertAdjacentElement('beforebegin', newElement)

//afterbegin - Despues de que empiece (Primer hijo)
//list.insertAdjacentElement('afterbegin', newElement)

//beforeend - Antes de que acabe (Ultimo hijo) Parte de la lista
//list.insertAdjacentElement('beforeend', newElement)

//afterend - despues de que se acabe (Hermano siguiente). Despues de terminada la lista
//list.insertAdjacentElement('afterend', newElement)


//b) Agregar elemento de HTML


//insertAdjacentElement - En un lugar especifico de la lista
//list.children[1].insertAdjacentHTML('beforebegin', '<li>Agregar elemento con elemento HTML</li>')

//beforebegin - antes de la lista en posicion especifica
//list.insertAdjacentHTML('beforebegin', '<li>Agregar elemento con elemento HTML</li>')

//afterbegin - Despues de que empiece (Primer hijo)
//list.insertAdjacentHTML('afterbegin', '<li>Agregar elemento con elemento HTML</li>')

//beforeend - Antes de que acabe (Ultimo hijo) Parte de la lista
//list.insertAdjacentHTML('beforeend', '<li>Agregar elemento con elemento HTML</li>')

//afterend - despues de que se acabe (Hermano siguiente). Despues de terminada la lista
//list.insertAdjacentHTML('afterend', '<li>Agregar elemento con elemento HTML</li>')

//reemplazar un hijo por otro
//list.replaceChild(newElement, list.children[0]);
//list.replaceChild(newElement, list.children[1]);


//2) SOPORTE DE NAVEGADORES ACTUALES. JQUERY. SON MAS FACILES DE UTILIZAR.


//a) Positions

//parent.before() Antes de que empiece (Hermano anterior)
//list.children[0].before(newElement);

//parent.prepend() Despues de que empiece (Primer hijo)
//list.prepend(newElement)

//parent.append() Antes de que acabe (Ultimo hijo)
//list.append(newElement)


//parent.after() Despues de que acabe (Hermano siguiente)
//list.children[1].after(newElement)


//child.replace(newChild) Reemplazar un hijo por otro
//document.getElementById('replace-child').replaceWhit(newElement)


//b) Clonar y eliminar elementos

//element.cloneNode(true || false) Clona el nodo. Si le pasamos true clona todo el elemento con sus hijos. Si le pasamos false clona solo el elemento sin hijos.
//console.log(list.cloneNode(false))
//console.log(list.cloneNode(true))

//Para generar una copia exacta de la lista, se duplica. Si agrego hijos la copia se clona con los elem nuevos sin problemas.
//list.after(list.cloneNode(true))

//element.remove() Elimina el nodo del DOM
//list.remove()

//element.removeChild(child) Elimina un nodo en particular
//list.removeChild(list.children[0])

*/