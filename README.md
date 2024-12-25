# 3D Aizawa Attractor Vizualizáció

Ez a projekt egy interaktív 3D vizualizációt mutat be az Aizawa attraktorról, amely egy kaotikus rendszer három differenciálegyenlettel leírva. A vizualizáció Three.js és React segítségével készült.

## Funkciók

- 3D megjelenítés Three.js segítségével
- Interaktív kamera vezérlés (forgatás, nagyítás)
- Valós idejű részecske animáció
- Reszponzív felület

## Technológiák

- React
- TypeScript
- Three.js
- Tailwind CSS
- Vite

## Telepítés

1. Klónozd le a repozitóriumot:
```bash
git clone https://github.com/TTomas65/3D-Aizawa-Attractor.git
```

2. Navigálj a projekt könyvtárába:
```bash
cd 3D-Aizawa-Attractor
```

3. Telepítsd a függőségeket:
```bash
npm install
```

4. Indítsd el a fejlesztői szervert:
```bash
npm run dev
```

5. Nyisd meg a böngészőben: `http://localhost:5173`

## Használat

- Az egér bal gombjával forgathatod a 3D nézetet
- Az egér görgőjével nagyíthatsz/kicsinyíthetsz
- Az egér jobb gombjával mozgathatod a nézetet

## Aizawa Attraktor

Az Aizawa attraktor egy kaotikus rendszer, amelyet a következő differenciálegyenlet-rendszer ír le:

```
dx/dt = (z - b) * x - d * y
dy/dt = d * x + (z - b) * y
dz/dt = c + a * z - z³/3 - (x² + y²) * (1 + e * z) + f * z * x³
```

ahol az alapértelmezett paraméterek:
- a = 0.95
- b = 0.7
- c = 0.6
- d = 3.5
- e = 0.25
- f = 0.1

## Licensz

MIT License
