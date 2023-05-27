## Veterinaria
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Requerimientos

1. Node JS version 18 y npm versión 9, se puede descargar desde la página oficial de [Node JS](https://nodejs.org/es/).

## Instalación

Ejecutar desde consola `npm install` en la carpeta raíz del proyecto para instalar las dependencias.

## Ejecución

1. Ejecutar desde consola `npm run dev` en la carpeta raíz del proyecto para iniciar el servidor de desarrollo.
2. Abrir en el navegador la dirección [http://localhost:3000](http://localhost:3000) para acceder a la aplicación.

## Nomenclatura

Para `imágenes` y `carpetas` debe de ser kebab case, por ejemplo: `nombre-de-la-imagen.png` o `nueva-carpeta` <br>
Para `archivos` y `funciones` debe de ser camel case, por ejemplo: `nombreDelComponente.jsx` o `nuevaFuncion()` <br>

## Estructura del proyecto

### Páginas

La carpeta `/src/app` contiene todas las páginas de la aplicación, cada carpeta creada dentro de `app` con un archivo
llamado `page.jsx` representa una
nueva página. <br>
Por ejemplo, la carpeta `/app/autos/page.jsx` representaría la
ruta [http://localhost:3000/autos](http://localhost:3000/autos) de la aplicación. <br>
Ejemplo de un archivo `page.jsx`:

```js
export default function NombreDeLaPagina() {
  return <div>Página</div>
}
```

### Componentes

La carpeta `/src/components` contiene los componentes de la aplicación, se debe crear una carpeta con el nombre del
componente y dentro un archivo llamado `index.js` que exportará el componente de la siguiente forma:

```js
export default function NombreDelComponente() {
  return <div>Componente</div>
}
```

### Imágenes

La carpeta `/public` tendrá los archivos estáticos de la aplicación, por ejemplo, imágenes, archivos PDF, etc. <br>
Un ejemplo de uso de una imagen en la carpeta `/public`:

```js
import Image from "next/image";

export default function NombreDelComponente() {
  return (
    <div>
      <Image
        src="/nombre-de-la-imagen.png"
        width={500}
        height={500}
        alt="Descripción de la imagen"
        className="object-contain aspect-square rounded-2xl mb-5 lg:mb-0"
      />
    </div>
  )
}
```

## Estilos CSS

NOTA: El archivo `/src/app/globals.css` no se debe modificar. <br>
Utilizar `módulos CSS` o `Tailwind CSS` para estilar componentes. <br>

### Módulos CSS

Una página llamada `autos` en `/src/app/autos` tendría el archivo `styles.module.css` con los estilos css:

```css
.titulo {
    color: red;
}

.parrafo {
  color: green;
}
```

Y en el componente se importa el archivo `styles.module.css` y se aplica la clase creada:
```js
import styles from './styles.module.css';

export default function NombreDelComponente() {
  return (
    // Se aplican las clases creadas con módulos CSS
    <section>
      <h1 className={styles.titulo}>Título</h1>
      <p className={styles.parrafo}>Lorem ipsum dolor sit amet</p>
    </section>
  )
}
```

### Tailwind CSS

Utilizar los nombres de las clases de css auxiliares de Tailwind CSS directamente en los componentes, por ejemplo:

```js
export default function NombreDelComponente() {
  return (
    // Se aplica un border rojo y texto blanco
    <div className="bg-red-500 text-white">
      Componente
    </div>
  )
}
```

## Documentación

Pueden encontrar la documentación de los paquetes utilizados en el proyecto en los siguientes enlaces:

- [Next.js](https://nextjs.org/docs), framework para construir aplicaciones web con React.
- [React](https://react.dev/learn), librería para construir interfaces de usuario.
- [Módulos CSS](https://nextjs.org/docs/app/building-your-application/styling/css-modules), hojas CSS que evitan
  colisiones en los nombres de clases.
- [Tailwind CSS](https://tailwindcss.com/docs/utility-first), framework de CSS con clases predefinidas
  sin escribir CSS directamente en una hoja de estilos.
- [Heroicons](https://heroicons.com/), librería de iconos SVG.
- [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction), librería de componentes usando React.
- [SwiperJS](https://swiperjs.com/element#usage-with-react), librería para crear carruseles.
- [PlanetScale](https://docs.planetscale.com/), base de datos MySQL en la nube.
- [Vercel](https://vercel.com/docs), plataforma para desplegar la página web una vez terminada.
