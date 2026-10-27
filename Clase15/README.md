# Clase 15 - Leer código y cambiar una regla

El objetivo es practicar una skill que vamos a usar al trabajar con código propio, de otras personas o generado por AI: entender rápido qué hace. Identificá los datos, seguí las conditions y explicá qué se renderiza antes de ejecutar. La velocidad viene de comprender bien las reglas.

Dos desafíos principales para los 30 minutos de práctica. El 3 y el 4 quedan como extensiones. No hay entrega ni PR.

El código inicial ya funciona. Cada component separa Datos, Reglas y UI. Primero leelo y anticipá qué muestra; después ejecutalo y modificá la regla pedida. No hace falta empezar una app de cero.

## Inicio
Necesitás Node.js 22.14 o una versión compatible más reciente. Desde la raíz del repo:

```powershell
cd Clase15
npm ci
npm run dev
```

Si ya estás dentro de Clase15, salteá el primer comando. Abrí la dirección que muestra la terminal y dejala ejecutándose mientras trabajás.

Para elegir otro desafío, cambiá solo el import de src/App.jsx:

```jsx
import Exercise from "./ejercicios/02-resultados.jsx";
```

Conservá el resto de App. Los buttons solo representan condiciones: no tienen acciones de click. Cambiá las constants y guardá para probar cada caso. Se supone que los conteos son enteros mayores o iguales a cero.

## 1. Inscripción con cupos - principal, 15 minutos
Archivo: src/ejercicios/01-inscripcion.jsx.

Leé el component sin ejecutarlo. Para cada caso, anticipá el texto de cupos, si aparece Inscripción cerrada, el texto del button, su disabled y la class del article.

| registrationOpen | seatsLeft |
| --- | --- |
| true | 3 |
| false | 3 |
| true | 0 |
| false | 0 |

Después comprobá tus predicciones. ¿Por qué registrationOpen=true no alcanza para habilitar el button? ¿Qué partes de la UI cambian al pasar de seatsLeft=3 a 0?

### Nueva regla
Agregá la constant isSubmitting. Mientras sea true, el button debe estar deshabilitado y decir Enviando..., aunque haya cupos y la inscripción esté abierta. Cuando sea false, debe conservar el comportamiento inicial. La class available solo se aplica cuando realmente se puede inscribir.

Probá isSubmitting=true con inscripción abierta y cerrada, y con cupos en 3 y 0. Los mensajes de cupos y de inscripción cerrada siguen dependiendo de sus datos originales.

## 2. Resultados con prioridades - principal, 15 minutos
Archivo: src/ejercicios/02-resultados.jsx.

Antes de ejecutar, anticipá qué h2 y qué paragraph se ven en cada caso. Incluí los casos en que no aparece ningún paragraph.

| isLoading | hasError | resultCount |
| --- | --- | --- |
| true | true | 4 |
| true | false | 0 |
| false | true | 4 |
| false | false | 4 |
| false | false | 0 |

Comprobá por qué Cargando gana cuando isLoading y hasError son true. ¿Se evalúa el return final después de ejecutar el primer return?

### Nueva regla
Agregá isOffline. Si es true, el component debe mostrar únicamente un section con el h2 Sin conexión. Tiene prioridad sobre loading, error y resultados. Si es false, el resto del comportamiento queda igual. Probá el caso isOffline=true, isLoading=true, hasError=true y resultCount=4.

## 3. Descarga pública o privada - extensión
Archivo: src/ejercicios/03-descarga.jsx.

Anticipá si se puede descargar, qué avisos se ven y si aparece el contador. Después comprobalo.

| hasFile | isPrivate | hasAccess | downloadCount |
| --- | --- | --- | --- |
| true | false | false | 0 |
| true | true | false | 0 |
| true | true | true | 3 |
| false | true | true | 3 |
| false | true | false | 0 |

¿Por qué un archivo público puede descargarse con hasAccess=false? El contador es un dato de práctica independiente de la disponibilidad actual del archivo.

### Nueva regla
Agregá isBlocked. Con true, la descarga queda deshabilitada y aparece Archivo bloqueado. El bloqueo tiene que ganar aunque el archivo sea público. Los demás avisos y el contador mantienen sus reglas; pueden coexistir. No debe quedar un 0 suelto.

## 4. Ticket urgente, cerrado o archivado - extensión
Archivo: src/ejercicios/04-ticket.jsx.

Anticipá el estado, responsable, aviso y class del article.

| isClosed | isUrgent | ownerName |
| --- | --- | --- |
| false | true | "" |
| false | false | "Ana" |
| true | true | "Ana" |
| true | false | "" |

¿Por qué un ticket cerrado no muestra el aviso aunque isUrgent sea true? ¿Qué nombre se muestra si ownerName es un string vacío?

### Nueva regla
Agregá isArchived. Con true, el component no debe producir content visible. Con false conserva su comportamiento. Probá un ticket archivado que también sea urgente y no tenga responsable.

## Regla de lectura
Usá nombres que expliquen la intención, conditions separadas y returns fáciles de seguir. No hace falta usar nested ternaries, hooks, events, APIs ni arrays. No cambies las constants dentro de una misma prueba para forzar el resultado esperado.

## Comprobar el proyecto
```powershell
npm run lint
npm run build
```

Compará además la pantalla con cada caso. Un build correcto no demuestra que las reglas estén bien.
