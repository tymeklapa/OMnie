# OMnie – strona Tymona

Osobista strona wędkarza. Czysty HTML + CSS + trochę JS, bez budowania i bez zależności.

Po wdrożeniu strona jest dostępna pod adresem:
**https://tymeklapa.github.io/OMnie/**

## Struktura

```
index.html   – treść strony
style.css    – wygląd
script.js    – powiększanie zdjęć (lightbox)
images/      – zdjęcia
.github/workflows/pages.yml – automatyczne wdrożenie na GitHub Pages
```

## Podgląd lokalnie

Wystarczy otworzyć `index.html` w przeglądarce.

## Wdrożenie (jednorazowa konfiguracja)

1. Wypchnij kod na GitHub (gałąź `main`).
2. W repozytorium: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Od teraz każdy `git push` na `main` sam publikuje stronę (zakładka **Actions** pokazuje postęp).

## Edycja

- Teksty: `index.html`
- Kolory: zmienne na górze `style.css` (`:root`)
- Nowe zdjęcie: wrzuć do `images/` i dodaj `<figure>` w sekcji `.gallery`
