# Navigation responsive — nav_37

Un de mes premiers essais de barre de navigation : fond vert, barre blanche arrondie sur grand écran et menu repliable sur mobile. Cette version reprend les interactions pour pouvoir partager l’exercice dans mon Labo.

## Essayer

Depuis le dossier parent `tutos/` :

```sh
npm run dev
```

Ouvrir http://127.0.0.1:5187/nav_37/. Le serveur utilise uniquement les modules intégrés de Node.js : rien à installer. On peut également ouvrir `index.html` directement dans un navigateur.

## Comportement

- Au-dessus de 900 px : liens et boutons visibles dans la barre.
- À 900 px et en dessous : bouton d’ouverture et fermeture du menu.
- Entrée et Espace activent le bouton ; Échap ferme le menu et y ramène le focus.
- Le menu se ferme après un lien, au clic extérieur et quand le focus quitte la navigation.
- Les éléments du menu fermé sont masqués et inaccessibles au clavier.
- Un changement de largeur réinitialise le menu et conserve un point de focus accessible.
- Sans JavaScript, les liens restent visibles sur mobile ; les actions de compte restent inactives.
- Le mouvement réduit demandé dans le système est respecté.

Les liens déplacent vers des sections explicatives. Les boutons S’inscrire et Connexion affichent un message de simulation : aucune authentification, collecte ou requête réseau n’est branchée.

## Fichiers

- `index.html` : navigation et page de démonstration.
- `styles.css` : styles utilisés directement par le navigateur.
- `styles.scss` : même source, conservée en syntaxe compatible SCSS. Garder les deux fichiers synchronisés si tu modifies les styles.
- `script.js` : ouverture, fermeture et navigation au clavier.
- `assets/` : logo, icônes et police locale.

## Réutiliser l’exemple

Copier la navigation, les styles correspondants et le script. Remplacer les destinations de démonstration, les actions de compte et le logo par ceux du projet. Garder les identifiants cohérents avec `aria-controls` et les sélecteurs JavaScript. Le script suppose une seule navigation de ce type par page.

Poppins est incluse avec sa licence SIL Open Font License dans `assets/fonts/OFL.txt`. Le logo Brescibidi n’est pas un logo générique à réutiliser. Aucune licence générale de redistribution du composant n’est définie à ce stade ; elle reste à choisir avant de le proposer comme ressource librement réutilisable.

## Fiche Labo suggérée

**Catégorie :** Expérimentations

**Titre :** Une navigation responsive en HTML, CSS et JavaScript

**Précision :** Composant UI · Navigation

**Version :** Démo

Une petite barre de navigation que j’avais faite en HTML, CSS et JavaScript. Une forme arrondie sur grand écran, puis un menu qui se replie sur mobile. Je l’ai reprise pour pouvoir la partager ici, avec une ouverture au clavier et une fermeture avec Échap ou au clic extérieur.

La date de création d’origine reste à renseigner si elle est connue. Publier des captures desktop et mobile ouvert, puis ajouter les URL réelles de démo et de dépôt une fois disponibles.
