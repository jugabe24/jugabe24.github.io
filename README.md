# Portfolio · Juan Antonio Galindo Benítez

Web estática (HTML + CSS + JS, sin dependencias) para GitHub Pages.

## Antes de publicar: qué personalizar

Busca los comentarios `TODO` en `index.html`:

- **Skills**: añade tus lenguajes y herramientas reales.
- **Proyectos**: sustituye las 3 tarjetas por tus repos.
- **Contacto**: cambia `TU_CORREO@ejemplo.com`, `TU_USUARIO` y `TU_PERFIL`.
- **CV**: guarda tu PDF como `cv.pdf` en la raíz (el botón de descarga apunta ahí).

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub. Si quieres la URL `tuusuario.github.io`, llámalo exactamente `tuusuario.github.io`.
2. Sube estos archivos:
   ```bash
   git init
   git add .
   git commit -m "Portfolio inicial"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. En el repo: **Settings → Pages → Build and deployment**, elige *Deploy from a branch*, rama `main`, carpeta `/ (root)`.

## Dominio .dev propio

1. Compra el dominio (por ejemplo `juangalindo.dev`) en el registrador que prefieras.
2. Crea un archivo `CNAME` en la raíz con una sola línea: `juangalindo.dev`
3. En el DNS del dominio añade:
   - Cuatro registros `A` para `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Un `CNAME` para `www` apuntando a `TU_USUARIO.github.io`
4. En **Settings → Pages**, escribe el dominio en *Custom domain* y activa **Enforce HTTPS**. Los `.dev` exigen HTTPS, así que es obligatorio.

Comprueba las IPs en la documentación oficial de GitHub Pages por si cambian.
