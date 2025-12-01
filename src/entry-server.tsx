// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossorigin=""
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
            rel="stylesheet"
          />
          <script
            innerHTML={`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "ucbe1gfmtu");
            `}
          />
          <script
            innerHTML={`
            (function () {
                var STORAGE_KEY = "theme";

                function getPreferredTheme() {
                  try {
                    var stored = localStorage.getItem(STORAGE_KEY);
                    if (stored === "light" || stored === "dark") return stored;
                  } catch (e) {}

                  if (window.matchMedia &&
                      window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    return "dark";
                  }
                  return "light";
                }

                var theme = getPreferredTheme();
                var root = document.documentElement;

                root.dataset.theme = theme;
                root.classList.toggle("dark", theme === "dark");
              })();
            `}
          />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
