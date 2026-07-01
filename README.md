# VITRINE — site web

Site statique multi-pages pour l'offre VITRINE (Strawberry Production).
VITRINE intègre désormais **l'Arsenal** (ex-GISANT / ARSENAL, le toolkit de la méthode
S.T.R.A.W.) comme second étage de l'offre, et fait le pont vers Strawberry Production
comme troisième. Une seule marque, une seule méthode, trois manières d'y entrer — sans dilution.

## Structure

```
.
├── index.html          # Accueil — repositionnement "radar" + échelle d'offre (VITRINE / Arsenal / Strawberry)
├── bibliotheque.html   # Fiche complète nommée (Sézane) + bibliothèque de fiches réelles
├── methode.html        # Grille + 2 études de cas déroulées (Typology, Qonto) + les 5 modules de l'Arsenal
├── abonnement.html     # L'échelle complète : abonnement 15€ / Arsenal 147–197€ / Strawberry ~4500€ + FAQ
├── 404.html            # Page introuvable (sur le système visuel)
├── styles.css          # Feuille de style partagée
├── script.js           # i18n FR/EN + nav mobile + a11y + interactions
├── vercel.json         # Config de déploiement Vercel
├── favicon.svg         # Favicon vectoriel (mark "V.")
├── favicon-32.png      # Fallback favicon
├── apple-touch-icon.png
├── icon-512.png
└── og-image.png        # Image de partage Open Graph / Twitter (1200×630)
```

Site 100% statique (HTML + CSS + JS vanilla, aucune dépendance, aucun build).

## ⚠️ À FAIRE AVANT MISE EN LIGNE

1. **Domaine.** Toutes les URL absolues (`canonical`, `hreflang`, `og:url`, `og:image`)
   utilisent le placeholder `https://vitrine.gostrawberryprod.com`.
   Remplacer par le domaine réel dans les 4 pages HTML avant déploiement :
   ```bash
   grep -rl "vitrine.gostrawberryprod.com" *.html
   # puis sed -i 's#https://vitrine.gostrawberryprod.com#https://TON-DOMAINE#g' *.html
   ```
2. **Checkout / capture email.** Les boutons "S'abonner" et "Obtenir l'Arsenal" pointent
   encore vers `href="#"`. Aucun Stripe ni capture email n'a été câblé (hors périmètre de
   cette itération). À brancher avant toute prise de paiement.
3. **Pont Strawberry.** Les CTA "Travailler avec Strawberry" pointent vers
   `https://gostrawberryprod.com` — ajuster si l'URL de contact diffère.

## Déployer

Import du dépôt sur Vercel (framework "Other" / static), Deploy. Vercel sert `404.html`
automatiquement. Chaque `git push` sur `main` redéploie.

## Modifier le contenu

Tout le texte visible est piloté par le dictionnaire i18n dans `script.js`
(clés `data-i18n`). Pour éditer un texte, modifier la valeur `fr` **et** `en` de la clé
correspondante. Les couleurs et polices sont centralisées en haut de `styles.css`.

## Note éditoriale

Les analyses de marques (Sézane, Typology, Qonto, Asphalte, Diptyque, Big Mamma, La Vie,
Le Slip Français) sont des lectures de positionnement indépendantes et éditoriales, basées
sur des éléments publics. VITRINE n'est affilié à aucune de ces marques.
