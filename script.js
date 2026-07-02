/* =========================================================
   RADAR — script.js
   i18n (FR/EN) + nav mobile + a11y + interactions
   ========================================================= */

(function () {

  /* ---------- 1. DICTIONNAIRE DE TRADUCTION ---------- */
  const I18N = {

    // NAV
    "nav.home":         { fr: "Accueil",        en: "Home" },
    "nav.library":      { fr: "Bibliothèque",   en: "Library" },
    "nav.method":       { fr: "Méthode",        en: "Method" },
    "nav.pricing":      { fr: "Abonnement",     en: "Pricing" },
    "nav.cta":          { fr: "S'abonner",      en: "Subscribe" },

    // TITLES + META DESCRIPTIONS (per page)
    "title.index":      { fr: "RADAR — La lecture du marché, chaque jour", en: "RADAR — The read on the market, every day" },
    "meta.index":       { fr: "Un abonnement où chaque jour une marque réelle est disséquée : ce qui marche, ce qui est flou, comment la repositionner. Un radar de positionnement, pas un cours.", en: "A subscription where every day a real brand is dissected: what works, what's blurry, how to reposition it. Positioning radar, not a course." },
    "title.library":    { fr: "Bibliothèque — RADAR", en: "Library — RADAR" },
    "meta.library":     { fr: "La bibliothèque cumulée des fiches RADAR, marques réelles décortiquées, triable par secteur.", en: "The cumulative library of RADAR sheets, real brands taken apart, sortable by sector." },
    "title.method":     { fr: "Méthode — RADAR", en: "Method — RADAR" },
    "meta.method":      { fr: "La grille de lecture utilisée dans chaque fiche RADAR, déroulée sur des cas réels.", en: "The reading grid used in every RADAR sheet, worked through on real cases." },
    "title.pricing":    { fr: "Abonnement — RADAR", en: "Pricing — RADAR" },
    "meta.pricing":     { fr: "S'abonner à RADAR : une fiche d'analyse de marque par jour, 15 à 25€ par mois. Sans engagement.", en: "Subscribe to RADAR: one brand-analysis sheet per day, €15 to €25 a month. No commitment." },
    "title.404":        { fr: "Page introuvable — RADAR", en: "Page not found — RADAR" },

    // INDEX
    "idx.kicker1":      { fr: "Une publication de Strawberry Production", en: "A Strawberry Production publication" },
    "idx.kicker2":      { fr: "Paris — édition quotidienne", en: "Paris — daily edition" },
    "idx.h1":           { fr: "Ce que je vois<br>quand je regarde<br>une marque.", en: "What I see<br>when I look at<br>a brand." },
    "idx.baseline":     { fr: "Chaque jour, une marque réelle disséquée en public — ce qui marche, ce qui est flou, comment je la repositionnerais. Ce n'est pas un cours : c'est un radar. La lecture du marché que tes concurrents n'ont pas, jour après jour.", en: "Every day, a real brand dissected in public — what works, what's blurry, how I'd reposition it. This isn't a course: it's radar. The read on the market your competitors don't have, day after day." },
    "idx.cta1":         { fr: "S'abonner — 15€/mois", en: "Subscribe — €15/mo" },
    "idx.cta2":         { fr: "Voir la fiche du jour", en: "See today's sheet" },

    "idx.cube.f1.tag":  { fr: "Secteur", en: "Sector" },
    "idx.cube.f1":      { fr: "DNVB", en: "DNVB" },
    "idx.cube.f2.tag":  { fr: "Secteur", en: "Sector" },
    "idx.cube.f2":      { fr: "SaaS B2B", en: "B2B SaaS" },
    "idx.cube.f3.tag":  { fr: "Secteur", en: "Sector" },
    "idx.cube.f3":      { fr: "Luxe", en: "Luxury" },
    "idx.cube.f4.tag":  { fr: "Secteur", en: "Sector" },
    "idx.cube.f4":      { fr: "Food", en: "Food" },
    "idx.cube.f5.tag":  { fr: "Secteur", en: "Sector" },
    "idx.cube.f5":      { fr: "Hospitalité", en: "Hospitality" },
    "idx.cube.f6.tag":  { fr: "Fiche", en: "Sheet" },
    "idx.cube.f6":      { fr: "N°014", en: "No.014" },

    "idx.s1.num":       { fr: "01", en: "01" },
    "idx.s1.title":     { fr: "Le principe", en: "The principle" },
    "idx.s1.l1":        { fr: "Ce n'est pas un blog", en: "This isn't a blog" },
    "idx.s1.p1":        { fr: "RADAR n'enseigne rien frontalement. C'est une écoute du marché en direct : chaque fiche analyse une marque publique, pas un client, avec la même grille que celle utilisée pour les case studies Strawberry.", en: "RADAR doesn't teach anything head-on. It's a live read of the market: each sheet analyzes a public brand, never a client, using the same grid as Strawberry's case studies." },
    "idx.s1.l2":        { fr: "Ce que ça installe", en: "What it installs" },
    "idx.s1.p2":        { fr: "Un radar qui ne s'éteint plus. À mesure que la bibliothèque s'épaissit, tu lis le positionnement d'une marque en quelques secondes — là où le marché met des mois. Ce n'est pas un savoir qu'on termine ; c'est un angle mort en moins, à vie.", en: "A radar that never switches off. As the library thickens, you read a brand's positioning in seconds — where the market takes months. It's not knowledge you finish; it's one blind spot fewer, for good." },

    "idx.s2.num":       { fr: "02", en: "02" },
    "idx.s2.title":     { fr: "La fiche du jour", en: "Today's sheet" },
    "idx.s2.p":         { fr: "Format fixe, lecture courte. La structure ne change jamais — seule la marque change. Celle-ci est en accès libre.", en: "Fixed format, short read. The structure never changes — only the brand does. This one is free to read." },

    "idx.s3.num":       { fr: "03", en: "03" },
    "idx.s3.title":     { fr: "Pour qui", en: "Who it's for" },
    "idx.s3.l1":        { fr: "Fondateurs et marketeurs qui veulent lire le positionnement d'un concurrent avant lui — et arbitrer plus vite.", en: "Founders and marketers who want to read a competitor's positioning before they do — and decide faster." },
    "idx.s3.l2":        { fr: "Consultants et freelances en branding qui veulent une référence externe pour calibrer leur propre regard sur chaque dossier.", en: "Branding consultants and freelancers who want an outside reference to calibrate their own read on every case." },
    "idx.s3.l3":        { fr: "Quiconque construit une marque et refuse d'avoir un temps de retard sur ce qui se joue vraiment dans son marché.", en: "Anyone building a brand who refuses to be a step behind what's actually happening in their market." },

    "idx.stat1":        { fr: "par mois", en: "per month" },
    "idx.stat2":        { fr: "nouvelle fiche", en: "new sheet" },
    "idx.stat3":        { fr: "bibliothèque cumulée", en: "cumulative library" },

    // FICHE COMMON (real, named — Sézane)
    "fiche.tag":        { fr: "Fiche n°014 — 11 min de lecture", en: "Sheet No.014 — 11 min read" },
    "fiche.brand":      { fr: "Sézane", en: "Sézane" },
    "fiche.sector":     { fr: "Secteur · Mode / DNVB", en: "Sector · Fashion / DNVB" },
    "fiche.works":      { fr: "Ce qui marche", en: "What works" },
    "fiche.works.p":    { fr: "Un « premium accessible » made-in-France tenu sans dévier : récit d'atelier, rareté orchestrée, retail expérientiel (l'Appartement) et mission (la fondation DEMAIN) cousus dans la marque, pas collés dessus.", en: "An 'accessible premium', made in France, held without wavering: workshop narrative, orchestrated scarcity, experiential retail (l'Appartement) and mission (the DEMAIN foundation) sewn into the brand, not glued on." },
    "fiche.blurry":     { fr: "Ce qui est flou", en: "What's blurry" },
    "fiche.blurry.p":   { fr: "La promesse de rareté et de pièce « qui dure » cohabite mal avec une cadence de sorties très soutenue. Plus les drops s'enchaînent, plus « spécial » glisse vers « disponible ».", en: "The promise of scarcity and a piece 'that lasts' sits awkwardly with a very high release cadence. The more the drops stack up, the more 'special' slides toward 'available'." },
    "fiche.reposition": { fr: "Repositionnement", en: "Repositioning" },
    "fiche.reposition.p": { fr: "Trancher : soit ralentir et éditorialiser la cadence pour honorer la rareté, soit l'assumer et déplacer la promesse de « rareté » vers « constance de style ». L'entre-deux use la valeur perçue.", en: "Settle it: either slow down and editorialize the cadence to honor scarcity, or own it and shift the promise from 'scarcity' to 'consistency of style'. The in-between erodes perceived value." },

    // STRAWBERRY BRIDGE (shared)
    "bridge.kicker":    { fr: "En privé", en: "In private" },
    "bridge.title":     { fr: "Cette lecture, sur ta marque.", en: "This read, on your brand." },
    "bridge.p":         { fr: "RADAR dissèque des marques publiques. Quand c'est la tienne, ça se passe en commission privée : Strawberry Production applique la même méthode S.T.R.A.W. en profondeur — audit, repositionnement, direction de marque.", en: "RADAR dissects public brands. When it's yours, it happens under private commission: Strawberry Production applies the same S.T.R.A.W. method in depth — audit, repositioning, brand direction." },
    "bridge.cta":       { fr: "Travailler avec Strawberry →", en: "Work with Strawberry →" },

    // DISCLAIMER
    "disclaimer":       { fr: "Analyses indépendantes. RADAR n'est lié à aucune des marques citées, qui n'ont pas commandé ces lectures.", en: "Independent analyses. RADAR is not affiliated with any brand mentioned; none commissioned these reads." },

    // FOOTER
    "footer.brand":     { fr: "Strawberry Production", en: "Strawberry Production" },
    "footer.tag":       { fr: "RADAR — base de données d'analyses de marques", en: "RADAR — brand analysis database" },

    // LIBRARY PAGE
    "lib.kicker1":      { fr: "Bibliothèque", en: "Library" },
    "lib.kicker2":      { fr: "Triable par secteur", en: "Sortable by sector" },
    "lib.h1":           { fr: "Chaque marque<br>déjà décortiquée.", en: "Every brand,<br>already taken apart." },
    "lib.baseline":     { fr: "L'accumulation des fiches forme une bibliothèque consultable. Plus un abonné rejoint tard, plus elle est dense — c'est le cœur de RADAR.", en: "The accumulation of sheets forms a browsable library. The later a subscriber joins, the denser it is — that's the heart of RADAR." },

    "lib.s1.num":       { fr: "01", en: "01" },
    "lib.s1.title":     { fr: "Fiche complète — en accès libre", en: "Full sheet — free to read" },
    "lib.fiche.tag":    { fr: "Fiche n°014 — publiée aujourd’hui", en: "Sheet No.014 — published today" },
    "libf.verdict.l":   { fr: "Le verdict", en: "The verdict" },
    "libf.verdict.p":   { fr: "Une des marques françaises les mieux tenues de sa génération — à un cheveu de diluer ce qui la rend désirable. Le risque n'est pas la qualité, c'est le rythme.", en: "One of the best-held French brands of its generation — a hair away from diluting what makes it desirable. The risk isn't quality, it's pace." },

    "lib.s2.num":       { fr: "02", en: "02" },
    "lib.s2.title":     { fr: "Les fiches précédentes", en: "Previous sheets" },
    "lib.s2.p":         { fr: "Aperçu des fiches déjà publiées. Le corps complet de chacune est réservé aux abonnés ; la bibliothèque est triable par secteur.", en: "A preview of sheets already published. The full body of each is subscribers-only; the library is sortable by sector." },

    "lib.row13.name":   { fr: "Asphalte — Mode homme / DNVB", en: "Asphalte — Menswear / DNVB" },
    "lib.row13.desc":   { fr: "La pré-commande érigée en manifeste anti-gaspillage — limpide. Mais le récit produit s'éparpille à mesure que le catalogue s'élargit.", en: "Pre-order raised into an anti-waste manifesto — crystal clear. But the product story scatters as the catalog widens." },
    "lib.row13.sector": { fr: "Mode", en: "Fashion" },

    "lib.row12.name":   { fr: "Qonto — Fintech / SaaS B2B", en: "Qonto — Fintech / B2B SaaS" },
    "lib.row12.desc":   { fr: "« La banque pro qui fait gagner du temps » : nette en landing, diluée dès que l'empilement de features prend le dessus sur la promesse.", en: "'The business account that saves you time': sharp on the landing page, diluted the moment feature-stacking overtakes the promise." },
    "lib.row12.sector": { fr: "SaaS", en: "SaaS" },

    "lib.row11.name":   { fr: "Typology — Beauté / DNVB", en: "Typology — Beauty / DNVB" },
    "lib.row11.desc":   { fr: "Transparence radicale et minimalisme design, très forts. La tension jamais tranchée : laboratoire clinique ou marque lifestyle ?", en: "Radical transparency and minimal design, very strong. The tension never settled: clinical lab or lifestyle brand?" },
    "lib.row11.sector": { fr: "Beauté", en: "Beauty" },

    "lib.row10.name":   { fr: "Diptyque — Luxe / Maison", en: "Diptyque — Luxury / Home" },
    "lib.row10.desc":   { fr: "Un récit de maison parisienne rare et cohérent — parfois raconté, en digital, avec un vocabulaire trop startup pour son rang.", en: "A rare, coherent Parisian maison narrative — sometimes told, on digital, in vocabulary too startup for its standing." },
    "lib.row10.sector": { fr: "Luxe", en: "Luxury" },

    "lib.row09.name":   { fr: "Big Mamma — Hospitalité", en: "Big Mamma — Hospitality" },
    "lib.row09.desc":   { fr: "Énergie trattoria festive et accessible, magistralement mise en scène — avec un ticket réel qui crée un écart d'attente à l'addition.", en: "Festive, accessible trattoria energy, masterfully staged — with a real check that creates an expectation gap at the bill." },
    "lib.row09.sector": { fr: "Hospitalité", en: "Hospitality" },

    "lib.row08.name":   { fr: "La Vie — Food / Plant-based", en: "La Vie — Food / Plant-based" },
    "lib.row08.desc":   { fr: "Une mission claire (bien-être animal + goût) et un design superbe — au point, parfois, de passer devant la preuve produit.", en: "A clear mission (animal welfare + taste) and superb design — sometimes to the point of stepping in front of the product proof." },
    "lib.row08.sector": { fr: "Food", en: "Food" },

    "lib.row07.name":   { fr: "Le Slip Français — Mode / DNVB", en: "Le Slip Français — Fashion / DNVB" },
    "lib.row07.desc":   { fr: "Le made-in-France en étendard, porté par un humour de marque redoutable — qui a parfois éclipsé la montée en gamme réelle.", en: "Made-in-France as a banner, carried by formidable brand humor — which has at times eclipsed the real move upmarket." },
    "lib.row07.sector": { fr: "Mode", en: "Fashion" },

    "lib.s3.num":       { fr: "03", en: "03" },
    "lib.s3.title":     { fr: "Pourquoi la bibliothèque compose", en: "Why the library compounds" },
    "lib.s3.p":         { fr: "Un nouvel abonné en mois 12 paie le même prix qu'un abonné du mois 1 — mais reçoit douze fois plus de valeur accumulée. C'est la seule offre de Strawberry Production qui s'épaissit dans le temps : chaque fiche ajoute de la matière à la précédente.", en: "A new subscriber in month 12 pays the same price as a month-1 subscriber — but receives twelve times more accumulated value. It's the only Strawberry Production offer that thickens over time: each sheet adds to the last." },

    "lib.cta":          { fr: "Accéder à la bibliothèque complète", en: "Access the full library" },

    // METHOD PAGE
    "meth.kicker1":     { fr: "Méthode", en: "Method" },
    "meth.kicker2":     { fr: "La grille de lecture", en: "The reading grid" },
    "meth.h1":          { fr: "La même grille,<br>appliquée chaque<br>jour.", en: "The same grid,<br>applied every<br>day." },
    "meth.baseline":    { fr: "RADAR n'enseigne rien frontalement. La grille s'installe par répétition : la même structure, sur des marques différentes, jour après jour — jusqu'à ce que tu ne puisses plus regarder une marque sans elle.", en: "RADAR doesn't teach anything head-on. The grid installs itself through repetition: the same structure, on different brands, day after day — until you can't look at a brand without it." },

    "meth.s1.num":      { fr: "01", en: "01" },
    "meth.s1.title":    { fr: "Trois questions, toujours les mêmes", en: "Three questions, always the same" },
    "meth.t1.b":        { fr: "Ce qui marche.", en: "What works." },
    "meth.t1.p":        { fr: " Le point de positionnement réellement net — la chose que la marque a tranchée, et qu'elle tient sans dévier.", en: " The genuinely clear positioning point — the thing the brand has committed to, and holds without wavering." },
    "meth.t2.b":        { fr: "Ce qui est flou.", en: "What's blurry." },
    "meth.t2.p":        { fr: " La contradiction ou la zone non résolue : ce que la marque dit d'un côté, et contredit de l'autre.", en: " The contradiction or unresolved zone: what the brand says on one side, and undercuts on the other." },
    "meth.t3.b":        { fr: "Comment je repositionnerais.", en: "How I'd reposition it." },
    "meth.t3.p":        { fr: " Une direction tranchée — pas une liste de recommandations, une seule décision nette.", en: " One decisive direction — not a list of recommendations, a single clear call." },

    "meth.s2.num":      { fr: "02", en: "02" },
    "meth.s2.title":    { fr: "Pourquoi ce format, et pas un autre", en: "Why this format, and not another" },
    "meth.l1":          { fr: "Pas un audit complet", en: "Not a full audit" },
    "meth.p1":          { fr: "Une fiche RADAR n'a pas l'exhaustivité d'un audit de marque payant. Elle prend dix minutes à lire et laisse une impression nette — c'est la clarté du regard qui compte, pas la couverture du sujet.", en: "A RADAR sheet doesn't have the exhaustiveness of a paid brand audit. It takes ten minutes to read and leaves a clear impression — clarity of perspective matters more than coverage." },
    "meth.l2":          { fr: "Pas un cours", en: "Not a course" },
    "meth.p2":          { fr: "Aucune fiche n'explique la méthode en théorie — et c'est voulu. Un cours se termine ; RADAR, non. Tu ne « finis » pas la grille : tu la gardes allumée.", en: "No sheet explains the method in theory — by design. A course ends; RADAR doesn't. You don't 'finish' the grid: you keep it running." },

    "meth.s3.num":      { fr: "03", en: "03" },
    "meth.s3.title":    { fr: "D'où vient cette grille", en: "Where this grid comes from" },
    "meth.s3.p":        { fr: "C'est la même méthodologie que celle utilisée dans les missions Strawberry Production — la méthode S.T.R.A.W., appliquée habituellement à des marques clientes en commission privée. RADAR l'applique en public, à des marques que vous connaissez déjà, sans qu'aucune d'elles n'ait commandé l'analyse.", en: "It's the same methodology used in Strawberry Production engagements — the S.T.R.A.W. method, normally applied to client brands under private commission. RADAR applies it in public, to brands you already know, none of which commissioned the analysis." },

    // METHOD — CASE STUDIES (section 04)
    "meth.s4.num":      { fr: "04", en: "04" },
    "meth.s4.title":    { fr: "Deux cas, déroulés en entier", en: "Two cases, worked in full" },
    "meth.s4.p":        { fr: "Pas des extraits. La grille appliquée jusqu'à la décision.", en: "Not excerpts. The grid applied all the way to the decision." },

    "cs.a.brand":       { fr: "Typology", en: "Typology" },
    "cs.a.sector":      { fr: "Beauté / DNVB", en: "Beauty / DNVB" },
    "cs.a.works.p":     { fr: "La transparence est le produit autant que la crème : formules courtes, INCI assumés, sourcing nommé, design blanc de laboratoire. Peu de marques beauté tiennent une promesse de clarté aussi loin dans le détail.", en: "Transparency is the product as much as the cream: short formulas, INCI owned, sourcing named, lab-white design. Few beauty brands hold a clarity promise this far into the detail." },
    "cs.a.blurry.p":    { fr: "Le corps de marque hésite entre deux mondes. Le ton laboratoire promet la preuve et l'efficacité ; l'esthétique et le rythme de lancement promettent le lifestyle et la nouveauté. Les deux publics ne veulent pas la même chose — l'un veut des résultats mesurés, l'autre veut désirer.", en: "The brand body hesitates between two worlds. The lab tone promises proof and efficacy; the aesthetic and launch rhythm promise lifestyle and novelty. The two audiences don't want the same thing — one wants measured results, the other wants to desire." },
    "cs.a.reposition.p": { fr: "Choisir la preuve. Faire de l'efficacité démontrée le centre de gravité — tests, avant/après sobres, mécanisme d'action expliqué — et laisser l'esthétique servir cette promesse au lieu de la concurrencer. La clarté est déjà l'ADN ; il suffit de la pousser du flacon jusqu'au résultat.", en: "Choose proof. Make demonstrated efficacy the center of gravity — tests, sober before/after, mechanism explained — and let the aesthetic serve that promise instead of competing with it. Clarity is already the DNA; just push it from the bottle through to the result." },
    "cs.a.verdict":     { fr: "Verdict — une marque de clarté qui n'a pas encore tranché ce qu'elle veut prouver.", en: "Verdict — a brand of clarity that hasn't yet settled what it wants to prove." },

    "cs.b.brand":       { fr: "Qonto", en: "Qonto" },
    "cs.b.sector":      { fr: "Fintech / SaaS B2B", en: "Fintech / B2B SaaS" },
    "cs.b.works.p":     { fr: "La promesse d'origine est imbattable de netteté : la gestion bancaire des pros, sans la banque. Rapidité, interface, support — un « gain de temps » que la cible ressent dès la première minute d'onboarding.", en: "The original promise is unbeatably sharp: business banking, without the bank. Speed, interface, support — a 'time saved' the target feels within the first minute of onboarding." },
    "cs.b.blurry.p":    { fr: "En grandissant, le discours s'alourdit. Comptes, cartes, compta, facturation, financement : chaque brique est légitime, mais empilées sur la même page elles noient la promesse simple sous une liste de fonctionnalités. Le prospect ne sait plus quel problème unique la marque résout.", en: "As it grows, the messaging thickens. Accounts, cards, accounting, invoicing, financing: each block is legitimate, but stacked on the same page they drown the simple promise under a feature list. The prospect no longer knows which single problem the brand solves." },
    "cs.b.reposition.p": { fr: "Réancrer sur le temps, pas sur les fonctions. Garder « le temps rendu au dirigeant » comme colonne vertébrale, et présenter chaque feature comme une heure regagnée, pas comme une case cochée. La largeur de l'offre devient une preuve de la promesse au lieu de la diluer.", en: "Re-anchor on time, not on features. Keep 'time given back to the founder' as the spine, and present each feature as an hour reclaimed, not a box ticked. The breadth of the offer becomes proof of the promise instead of diluting it." },
    "cs.b.verdict":     { fr: "Verdict — une promesse limpide, menacée par son propre succès fonctionnel.", en: "Verdict — a crystal-clear promise, threatened by its own functional success." },

    "cs.works":         { fr: "Ce qui marche", en: "What works" },
    "cs.blurry":        { fr: "Ce qui est flou", en: "What's blurry" },
    "cs.reposition":    { fr: "Repositionnement", en: "Repositioning" },

    "meth.cta":         { fr: "Voir la bibliothèque", en: "See the library" },

    // PRICING PAGE
    "pr.kicker1":       { fr: "Abonnement", en: "Subscription" },
    "pr.kicker2":       { fr: "Sans engagement", en: "No commitment" },
    "pr.h1":            { fr: "Rejoindre<br>la bibliothèque.", en: "Join<br>the library." },
    "pr.baseline":      { fr: "Un prix fondateur, pour les premiers abonnés — verrouillé tant que l'abonnement reste actif.", en: "A founder price, for the first subscribers — locked in as long as the subscription stays active." },

    "pr.s1.num":        { fr: "01", en: "01" },
    "pr.s1.title":      { fr: "Le tarif", en: "Pricing" },
    "pr.badge":         { fr: "Prix fondateur — 50 places", en: "Founder price — 50 spots" },
    "pr.label":         { fr: "RADAR", en: "RADAR" },
    "pr.amount.sub":    { fr: "/ mois", en: "/ month" },
    "pr.note":          { fr: "Tarif standard ensuite : 25€/mois. Verrouillé à vie pour les 50 premiers abonnés.", en: "Standard price afterwards: €25/month. Locked in for life for the first 50 subscribers." },
    "pr.f1":            { fr: "Une fiche d'analyse par jour", en: "One analysis sheet per day" },
    "pr.f2":            { fr: "Accès complet à la bibliothèque cumulée", en: "Full access to the cumulative library" },
    "pr.f3":            { fr: "Filtrage par secteur", en: "Sector filtering" },
    "pr.f4":            { fr: "Sans engagement, résiliable à tout moment", en: "No commitment, cancel anytime" },
    "pr.subscribe":     { fr: "S'abonner maintenant", en: "Subscribe now" },

    "pr.s2.num":        { fr: "04", en: "04" },
    "pr.s2.title":      { fr: "Ce que vous recevez", en: "What you get" },
    "pr.r1":            { fr: "Une nouvelle fiche chaque jour, livrée par email et disponible dans la bibliothèque en ligne.", en: "A new sheet every day, delivered by email and available in the online library." },
    "pr.r2":            { fr: "L'accès rétroactif à toutes les fiches déjà publiées, dès le premier jour d'abonnement.", en: "Retroactive access to every sheet already published, from day one of your subscription." },
    "pr.r3":            { fr: "Une bibliothèque triable par secteur, qui s'épaissit chaque jour sans surcoût.", en: "A library sortable by sector, thickening every day at no extra cost." },

    "pr.s3.num":        { fr: "05", en: "05" },
    "pr.s3.title":      { fr: "Questions fréquentes", en: "Frequently asked questions" },
    "pr.q1":            { fr: "Les marques analysées sont-elles mes clients ?", en: "Are the brands analyzed my clients?" },
    "pr.a1":            { fr: "Non. RADAR analyse exclusivement des marques publiques, jamais des clients de Strawberry Production. C'est une écoute du marché, pas un audit commandé.", en: "No. RADAR only analyzes public brands, never Strawberry Production clients. It's a read on the market, not a commissioned audit." },
    "pr.q2":            { fr: "Puis-je suggérer une marque à analyser ?", en: "Can I suggest a brand to analyze?" },
    "pr.a2":            { fr: "Oui, les abonnés peuvent proposer des marques. La sélection finale reste éditoriale, pour garder une diversité de secteurs dans la bibliothèque.", en: "Yes, subscribers can suggest brands. Final selection stays editorial, to keep a diversity of sectors in the library." },
    "pr.q3":            { fr: "Que se passe-t-il si je résilie ?", en: "What happens if I cancel?" },
    "pr.a3":            { fr: "Vous perdez l'accès à la bibliothèque à la fin de la période déjà payée. Le prix fondateur n'est pas garanti en cas de réabonnement ultérieur.", en: "You lose access to the library at the end of the period already paid for. The founder price isn't guaranteed if you resubscribe later." },
    "pr.q4":            { fr: "Le rythme est-il vraiment quotidien ?", en: "Is the pace really daily?" },
    "pr.a4":            { fr: "L'objectif est une fiche chaque jour ouvré, avec une tolérance annoncée à l'avance en cas de cadence ajustée.", en: "The goal is one sheet every business day, with advance notice if the pace ever needs to adjust." },

    // 404
    "nf.kicker1":       { fr: "Erreur 404", en: "Error 404" },
    "nf.kicker2":       { fr: "Page introuvable", en: "Page not found" },
    "nf.h1":            { fr: "Cette fiche<br>n'existe pas.", en: "This sheet<br>doesn't exist." },
    "nf.p":             { fr: "La page que vous cherchez a été déplacée, ou n'a jamais été publiée. La bibliothèque, elle, est toujours là.", en: "The page you're looking for has moved, or was never published. The library, though, is still here." },
    "nf.cta1":          { fr: "Retour à l'accueil", en: "Back to home" },
    "nf.cta2":          { fr: "Voir la bibliothèque", en: "See the library" },

    // ===== L'ARSENAL (toolkit intégré à l'offre RADAR) =====
    "nav.arsenal":      { fr: "L'Arsenal", en: "The Arsenal" },
    "ars.brand":        { fr: "L'Arsenal", en: "The Arsenal" },

    // INDEX — l'offre en trois temps
    "idx.s4.num":       { fr: "04", en: "04" },
    "idx.s4.title":     { fr: "L'offre, en trois temps", en: "The offer, in three moves" },
    "idx.s4.p":         { fr: "Un même regard, trois manières d'y entrer — du plus léger au plus engageant. Rien de dilué : une seule méthode, S.T.R.A.W., déclinée selon ce dont tu as besoin.", en: "One eye, three ways in — from the lightest to the most committed. Nothing diluted: a single method, S.T.R.A.W., in the form you need." },
    "idx.ladder1.k":    { fr: "01 · Le regard", en: "01 · The eye" },
    "idx.ladder1.t":    { fr: "RADAR — l'abonnement", en: "RADAR — the subscription" },
    "idx.ladder1.p":    { fr: "Une marque disséquée chaque jour. Le radar qui s'installe et ne s'éteint plus.", en: "A brand dissected every day. The radar that installs itself and never switches off." },
    "idx.ladder1.price": { fr: "15€ / mois", en: "€15 / mo" },
    "idx.ladder2.k":    { fr: "02 · Les instruments", en: "02 · The instruments" },
    "idx.ladder2.t":    { fr: "L'Arsenal — le toolkit", en: "The Arsenal — the toolkit" },
    "idx.ladder2.p":    { fr: "Les cinq instruments exacts de la méthode, pour faire tourner la grille sur ta propre marque.", en: "The five exact instruments of the method, to run the grid on your own brand." },
    "idx.ladder2.price": { fr: "147€ one-shot", en: "€147 one-time" },
    "idx.ladder3.k":    { fr: "03 · L'exécution", en: "03 · The execution" },
    "idx.ladder3.t":    { fr: "Strawberry — la commission", en: "Strawberry — the commission" },
    "idx.ladder3.p":    { fr: "Quand c'est ta marque, faite en entier, par l'œil qui a construit la méthode.", en: "When it's your brand, done in full, by the eye that built the method." },
    "idx.ladder3.price": { fr: "sur commande", en: "on commission" },
    "idx.ladder.cur":   { fr: "actuel", en: "current" },

    // METHOD — section L'Arsenal (les instruments)
    "meth.s5.num":      { fr: "05", en: "05" },
    "meth.s5.title":    { fr: "L'Arsenal — les instruments", en: "The Arsenal — the instruments" },
    "meth.s5.lead":     { fr: "RADAR entraîne l'œil par répétition. L'Arsenal, lui, te met la structure entre les mains : les cinq instruments exacts que j'utilise en commission, pour faire tourner la grille sur ta propre marque. L'un sans l'autre est incomplet — l'œil sans structure hésite, la structure sans œil s'applique à l'aveugle.", en: "RADAR trains the eye through repetition. The Arsenal puts the structure in your hands: the five exact instruments I use in commissions, to run the grid on your own brand. Either without the other is incomplete — the eye without structure hesitates, structure without the eye applies itself blind." },
    "ars.m1.t":         { fr: "Differentiation Diagnostic", en: "Differentiation Diagnostic" },
    "ars.m1.d":         { fr: "Isoler ce qui distingue réellement la marque.", en: "Isolate what actually sets the brand apart." },
    "ars.m2.t":         { fr: "Narrative Platform", en: "Narrative Platform" },
    "ars.m2.d":         { fr: "Construire le récit de marque.", en: "Build the brand's core narrative." },
    "ars.m3.t":         { fr: "Language System", en: "Language System" },
    "ars.m3.d":         { fr: "Ton, lexique, règles d'écriture.", en: "Tone, lexicon, writing rules." },
    "ars.m4.t":         { fr: "Deployment Kit", en: "Deployment Kit" },
    "ars.m4.d":         { fr: "Déploiement sur les supports.", en: "Deployment across touchpoints." },
    "ars.m5.t":         { fr: "Coherence Guide", en: "Coherence Guide" },
    "ars.m5.d":         { fr: "Cohérence globale — la vérification finale avant déploiement.", en: "Global coherence — the final check before deployment." },
    "ars.deal.l":       { fr: "Ce que ça transmet", en: "What it transmits" },
    "ars.deal.p":       { fr: "La structure exacte suivie en commission : frameworks, cas anonymisés, questions d'onboarding. Pas l'œil — ça, c'est RADAR qui l'installe, jour après jour.", en: "The exact structure followed in commissions: frameworks, anonymized cases, onboarding questions. Not the eye — that's what RADAR installs, day after day." },
    "meth.s5.cta":      { fr: "Obtenir l'Arsenal →", en: "Get the Arsenal →" },

    // PRICING — l'échelle complète
    "pr.h1b":           { fr: "Entrer dans<br>la méthode.", en: "Step into<br>the method." },
    "pr.baseline2":     { fr: "Trois manières d'entrer, une seule méthode. Du radar quotidien à l'exécution complète — sans jamais diluer.", en: "Three ways in, one method. From the daily radar to full execution — never diluted." },

    "pr.ars.num":       { fr: "02", en: "02" },
    "pr.ars.title":     { fr: "L'Arsenal — le toolkit", en: "The Arsenal — the toolkit" },
    "pr.ars.lead":      { fr: "La structure, une fois pour toutes. Un paiement, pas un abonnement. Les cinq instruments de la méthode, prêts à tourner sur ta marque.", en: "The structure, once and for all. One payment, not a subscription. The five instruments of the method, ready to run on your brand." },
    "pr.ars.t1.badge":  { fr: "Toolkit", en: "Toolkit" },
    "pr.ars.t1.f1":     { fr: "Les 5 modules complets", en: "All 5 full modules" },
    "pr.ars.t1.f2":     { fr: "Frameworks vides + cas anonymisés", en: "Empty frameworks + anonymized cases" },
    "pr.ars.t1.f3":     { fr: "Questions exactes d'onboarding", en: "Exact onboarding questions" },
    "pr.ars.t1.f4":     { fr: "Format Notion + PDF", en: "Notion + PDF format" },
    "pr.ars.t2.badge":  { fr: "Toolkit + diagnostic", en: "Toolkit + diagnostic" },
    "pr.ars.t2.f1":     { fr: "Tout le contenu du toolkit seul", en: "Everything in the toolkit-only tier" },
    "pr.ars.t2.f2":     { fr: "Module 5 enrichi d'une checklist d'auto-évaluation", en: "Module 5 enriched with a self-assessment checklist" },
    "pr.ars.t2.f3":     { fr: "Accès aux mises à jour du toolkit", en: "Access to toolkit updates" },
    "pr.ars.t2.f4":     { fr: "Format Notion + PDF + Figma (option visuelle)", en: "Notion + PDF + Figma format (visual option)" },
    "pr.ars.buy":       { fr: "Obtenir l'Arsenal", en: "Get the Arsenal" },

    "pr.str.num":       { fr: "03", en: "03" },
    "pr.str.title":     { fr: "Strawberry — la commission", en: "Strawberry — the commission" },
    "pr.str.lead":      { fr: "Le haut de l'échelle : ta marque, faite en entier. La structure ET l'œil, appliqués en privé.", en: "The top of the ladder: your brand, done in full. Structure AND the eye, applied privately." },
    "pr.str.amount":    { fr: "~4500€", en: "~€4,500" },
    "pr.str.f1":        { fr: "Exécution complète par Strawberry Production", en: "Full execution by Strawberry Production" },
    "pr.str.f2":        { fr: "L'œil et l'expérience qu'aucun toolkit ne transmet", en: "The eye and experience no toolkit transmits" },
    "pr.str.f3":        { fr: "Commissions limitées par trimestre", en: "Commissions limited per quarter" },
    "pr.str.cta":       { fr: "Travailler avec Strawberry →", en: "Work with Strawberry →" },

    "pr.q5":            { fr: "Quelle différence entre l'abonnement RADAR et l'Arsenal ?", en: "What's the difference between the RADAR subscription and the Arsenal?" },
    "pr.a5":            { fr: "RADAR, c'est le regard : une marque disséquée chaque jour, pour installer la grille dans ton œil. L'Arsenal, c'est la structure : les instruments pour faire tourner cette grille sur ta propre marque, quand tu veux. L'abonnement forme le réflexe ; le toolkit donne l'outil. Beaucoup prennent les deux.", en: "RADAR is the eye: a brand dissected every day, to install the grid in your eye. The Arsenal is the structure: the instruments to run that grid on your own brand, whenever you want. The subscription builds the reflex; the toolkit gives the tool. Many take both." },

    // A11Y
    "a11y.menu":        { fr: "Ouvrir le menu", en: "Open menu" },
    "a11y.fr":          { fr: "Français", en: "French" },
    "a11y.en":          { fr: "Anglais", en: "English" }
  };

  const LANGS = ["fr", "en"];

  /* ---------- 2. LANGUE : url ?lang= > localStorage > fr ---------- */
  function getLang() {
    const p = new URLSearchParams(window.location.search).get("lang");
    if (p && LANGS.includes(p)) return p;
    const s = localStorage.getItem("radar_lang");
    if (s && LANGS.includes(s)) return s;
    return "fr";
  }

  function setLang(lang) {
    if (!LANGS.includes(lang)) lang = "fr";
    localStorage.setItem("radar_lang", lang);
    document.documentElement.setAttribute("lang", lang);

    // texte visible
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const entry = I18N[el.getAttribute("data-i18n")];
      if (entry && entry[lang] != null) el.innerHTML = entry[lang];
    });
    // attribut content (meta description)
    document.querySelectorAll("[data-i18n-content]").forEach(el => {
      const entry = I18N[el.getAttribute("data-i18n-content")];
      if (entry && entry[lang] != null) el.setAttribute("content", entry[lang]);
    });
    // attribut aria-label
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      const entry = I18N[el.getAttribute("data-i18n-aria")];
      if (entry && entry[lang] != null) el.setAttribute("aria-label", entry[lang]);
    });

    // toggle langue : état visuel + accessible
    document.querySelectorAll(".lang-toggle button").forEach(btn => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    // garder l'URL cohérente avec hreflang, sans recharger
    try {
      const u = new URL(window.location.href);
      u.searchParams.set("lang", lang);
      window.history.replaceState({}, "", u);
    } catch (e) { /* no-op */ }
  }

  function initLangToggle() {
    document.querySelectorAll(".lang-toggle button").forEach(btn => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
    setLang(getLang());
  }

  /* ---------- 3. NAV MOBILE (hamburger) ---------- */
  function initMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const inner = document.querySelector(".topnav-inner");
    if (!toggle || !inner) return;

    const close = () => {
      inner.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    };
    toggle.addEventListener("click", () => {
      const open = inner.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // fermer au clic sur un lien, à Échap, ou au redimensionnement desktop
    inner.querySelectorAll(".nav-collapse a").forEach(a => a.addEventListener("click", close));
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 680) close(); });
  }

  /* ---------- 4. SCROLL REVEAL ---------- */
  const REDUCE = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (REDUCE || !("IntersectionObserver" in window) || items.length === 0) {
      items.forEach(el => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(el => io.observe(el));
  }

  /* ---------- 5. TILT 3D AU SURVOL (cartes) ---------- */
  function initTilt() {
    if (REDUCE) return; // respect du mouvement réduit
    document.querySelectorAll(".tilt").forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateZ(0)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateY(0deg) rotateX(0deg)";
      });
    });
  }

  /* ---------- 6. FIL DE SIGNAL (narration au scroll) ----------
     Rail fixe en marge (grands écrans) qui trace la progression
     dans la page comme un signal radar, section par section. */
  function initSignalRail() {
    const sections = Array.from(document.querySelectorAll(".sec")).filter(s => s.querySelector(".sec-num"));
    if (sections.length < 3 || !("IntersectionObserver" in window)) return;

    const rail = document.createElement("nav");
    rail.className = "signal-rail";
    rail.setAttribute("aria-label", document.documentElement.getAttribute("lang") === "en" ? "Page sections" : "Sommaire de la page");

    const track = document.createElement("div");
    track.className = "rail-track";
    const fill = document.createElement("div");
    fill.className = "rail-fill";
    track.appendChild(fill);
    rail.appendChild(track);

    const entries = sections.map(sec => {
      const num = sec.querySelector(".sec-num").textContent.trim();
      const titleEl = sec.querySelector(".sec-title");
      const title = titleEl ? titleEl.textContent.trim() : num;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = num;
      btn.setAttribute("aria-label", title);
      btn.addEventListener("click", () => {
        sec.scrollIntoView({ behavior: REDUCE ? "auto" : "smooth", block: "start" });
      });
      rail.appendChild(btn);
      return { sec, btn };
    });

    document.body.appendChild(rail);

    const io = new IntersectionObserver((obs) => {
      obs.forEach(entry => {
        const match = entries.find(e => e.sec === entry.target);
        if (!match || !entry.isIntersecting) return;
        entries.forEach(e => e.btn.classList.remove("active"));
        match.btn.classList.add("active");
      });
    }, { threshold: 0.5, rootMargin: "-15% 0px -50% 0px" });
    sections.forEach(s => io.observe(s));

    const startY = sections[0].offsetTop;
    const last = sections[sections.length - 1];
    const endY = last.offsetTop + last.offsetHeight;

    function updateFill() {
      const mid = window.scrollY + window.innerHeight / 2;
      let pct = (mid - startY) / Math.max(1, endY - startY);
      pct = Math.max(0, Math.min(1, pct));
      fill.style.height = (pct * 100) + "%";
    }
    window.addEventListener("scroll", updateFill, { passive: true });
    window.addEventListener("resize", updateFill);
    updateFill();
  }

  /* ---------- 7. INIT ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initLangToggle();
    initMobileNav();
    initReveal();
    initTilt();
    initSignalRail();
  });

})();
