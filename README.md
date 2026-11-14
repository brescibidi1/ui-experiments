# UI Experiments

Mes petits essais de composants d’interface. Chaque exemple garde son dossier, ses fichiers et sa démo. La collection commence avec une navigation responsive ; les autres exercices présents dans ce dossier seront préparés progressivement.

## Lancer la collection

Node.js 20 ou plus, sans dépendance à installer :

```sh
npm run dev
```

Ouvrir http://127.0.0.1:5187/. Le serveur reste local et expose seulement le catalogue et `nav_37/`. Les autres exercices ne sont pas servis.

Pour un autre port sous PowerShell : `$env:PORT = 5188` puis `npm run dev`.

## Premier exemple disponible

[Navigation responsive](./nav_37/README.md) — HTML, CSS, JavaScript ; fonctionnement sans service externe.

## Organisation

Chaque exemple a son HTML, ses styles, ses ressources et son README. Un seul dépôt GitHub peut héberger cette collection sous le nom `ui-experiments`. Les créations indépendantes comme les portfolios gardent leurs propres dépôts.

Les dossiers `draft`, `button_01` et les autres exercices n’ont pas encore été préparés pour publication. Le `dist/` déjà présent provient d’un ancien build de Bycecomx : il ne fait pas partie de la collection et reste ignoré par Git.

## Publier

Exécuter `npm run build` pour préparer `site/`. Cette sortie contient uniquement le catalogue, le HTML/CSS/JS et les ressources de `nav_37/`. Les autres exercices, la documentation, les fichiers SCSS et les sorties anciennes sont exclus. Vercel utilise cette configuration via `vercel.json`. Il n’y a pas de formulaire connecté, de base de données ou de variable secrète à configurer.

Dépôt : https://github.com/brescibidi1/ui-experiments

Les publications utilisent la branche `main`. La configuration Vercel est prête ; la création du projet d’hébergement reste à finaliser.

## Crédits

Chaque exemple précise ses dépendances et les éléments repris. Poppins est distribuée avec sa licence OFL dans le premier exemple. Les logos et images ne sont pas des éléments génériques à réutiliser. La licence générale du code reste à choisir avant une diffusion comme ressource librement réutilisable.
