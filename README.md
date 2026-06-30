# VITRINE — site web

Site statique multi-pages pour l'offre VITRINE (Strawberry Production).

## Structure

```
.
├── index.html         # Accueil
├── bibliotheque.html  # Bibliothèque des fiches
├── methode.html       # Présentation de la méthode
├── abonnement.html    # Tarifs et abonnement
├── styles.css         # Feuille de style partagée
└── vercel.json        # Config de déploiement Vercel
```

Site 100% statique (HTML + CSS, aucune dépendance, aucun build nécessaire).

## Mettre en ligne sur GitHub

```bash
cd vitrine-site
git init
git add .
git commit -m "Site VITRINE"
git branch -M main
git remote add origin https://github.com/<ton-compte>/vitrine.git
git push -u origin main
```

(Crée d'abord le dépôt vide sur github.com avant le `push`.)

## Déployer sur Vercel

**Option A — via le site Vercel (le plus simple)**
1. Va sur [vercel.com/new](https://vercel.com/new)
2. Importe le dépôt GitHub que tu viens de créer
3. Laisse les réglages par défaut (aucun framework, "Other" / static)
4. Clique sur Deploy

**Option B — via la CLI**
```bash
npm i -g vercel
cd vitrine-site
vercel
```
Suis les instructions à l'écran (connexion, nom de projet), puis `vercel --prod` pour la mise en production.

À chaque nouveau `git push` sur `main`, Vercel redéploie automatiquement le site.

## Modifier le contenu

Tout le texte est directement dans les fichiers `.html`. Les couleurs, polices et espacements sont centralisés dans `styles.css` (variables CSS en haut du fichier).
