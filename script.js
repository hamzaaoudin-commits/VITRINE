/* =========================================================
   VITRINE — script.js
   i18n (FR/EN) + interactions 3D / scroll reveal
   ========================================================= */

(function () {

  /* ---------- 1. DICTIONNAIRE DE TRADUCTION ---------- */
  const I18N = {

    // NAV
    "nav.home":        { fr: "Accueil",        en: "Home" },
    "nav.library":      { fr: "Bibliothèque",   en: "Library" },
    "nav.method":       { fr: "Méthode",        en: "Method" },
    "nav.pricing":      { fr: "Abonnement",     en: "Pricing" },
    "nav.cta":          { fr: "S'abonner",      en: "Subscribe" },

    // INDEX
    "idx.kicker1":      { fr: "Une publication de Strawberry Production", en: "A Strawberry Production publication" },
    "idx.kicker2":      { fr: "Paris — édition hebdomadaire", en: "Paris — weekly edition" },
    "idx.h1":           { fr: "Ce que je vois<br>quand je regarde<br>une marque.", en: "What I see<br>when I look at<br>a brand." },
    "idx.baseline":     { fr: "Chaque semaine, une marque réelle, décortiquée publiquement — ce qui marche, ce qui est flou, comment je la repositionnerais. Pas un cours. Une grille de lecture, appliquée en direct, semaine après semaine.", en: "Every week, a real brand, taken apart in public — what works, what's blurry, how I'd reposition it. Not a course. A reading grid, applied live, week after week." },
    "idx.cta1":         { fr: "S'abonner — 15€/mois", en: "Subscribe — €15/mo" },
    "idx.cta2":         { fr: "Voir un exemple de fiche", en: "See a sample sheet" },

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
    "idx.s1.p1":        { fr: "VITRINE n'enseigne rien frontalement. C'est une écoute du marché en direct : chaque fiche analyse une marque publique, pas un client, avec la même grille que celle utilisée pour les case studies Strawberry.", en: "VITRINE doesn't teach anything head-on. It's a live read of the market: each sheet analyzes a public brand, never a client, using the same grid as Strawberry's case studies." },
    "idx.s1.l2":        { fr: "Ce que ça construit", en: "What it builds" },
    "idx.s1.p2":        { fr: "Une bibliothèque qui s'épaissit chaque semaine — et qui apprend, sans jamais l'expliquer, à voir une marque comme je la vois.", en: "A library that thickens every week — teaching you, without ever spelling it out, to see a brand the way I see it." },

    "idx.s2.num":       { fr: "02", en: "02" },
    "idx.s2.title":     { fr: "Une fiche, en exemple", en: "A sample sheet" },
    "idx.s2.p":         { fr: "Format fixe, lecture courte. La structure ne change jamais — seule la marque change.", en: "Fixed format, short read. The structure never changes — only the brand does." },

    "idx.s3.num":       { fr: "03", en: "03" },
    "idx.s3.title":     { fr: "Pour qui", en: "Who it's for" },
    "idx.s3.l1":        { fr: "Fondateurs et marketeurs qui veulent affiner leur œil sur le positionnement, fiche après fiche.", en: "Founders and marketers who want to sharpen their eye for positioning, one sheet at a time." },
    "idx.s3.l2":        { fr: "Consultants et freelances en branding qui veulent une référence externe pour calibrer leurs propres analyses.", en: "Branding consultants and freelancers who want an outside reference to calibrate their own analyses." },
    "idx.s3.l3":        { fr: "Quiconque veut comprendre comment une marque se construit — ou se trahit — sans suivre une formation.", en: "Anyone who wants to understand how a brand is built — or betrays itself — without taking a course." },

    "idx.stat1":        { fr: "par mois", en: "per month" },
    "idx.stat2":        { fr: "nouvelle fiche", en: "new sheet" },
    "idx.stat3":        { fr: "bibliothèque cumulée", en: "cumulative library" },

    // FICHE COMMON
    "fiche.tag":        { fr: "Fiche n°014 — 12 min de lecture", en: "Sheet No.014 — 12 min read" },
    "fiche.brand":      { fr: "Marque analysée", en: "Brand analyzed" },
    "fiche.sector":     { fr: "Secteur · DNVB", en: "Sector · DNVB" },
    "fiche.works":      { fr: "Ce qui marche", en: "What works" },
    "fiche.works.p":    { fr: "Le point de positionnement net, identifié et nommé.", en: "The one clear positioning point, identified and named." },
    "fiche.blurry":     { fr: "Ce qui est flou", en: "What's blurry" },
    "fiche.blurry.p":   { fr: "La contradiction ou la zone non résolue du discours de marque.", en: "The contradiction or unresolved zone in the brand's discourse." },
    "fiche.reposition": { fr: "Repositionnement", en: "Repositioning" },
    "fiche.reposition.p": { fr: "Comment je trancherais, en une direction nette.", en: "How I'd settle it, in one clear direction." },

    // FOOTER
    "footer.brand":     { fr: "Strawberry Production", en: "Strawberry Production" },
    "footer.tag":       { fr: "VITRINE — base de données d'analyses de marques", en: "VITRINE — brand analysis database" },

    // LIBRARY PAGE
    "lib.kicker1":      { fr: "Bibliothèque", en: "Library" },
    "lib.kicker2":      { fr: "Triable par secteur", en: "Sortable by sector" },
    "lib.h1":           { fr: "Chaque marque<br>déjà décortiquée.", en: "Every brand,<br>already taken apart." },
    "lib.baseline":     { fr: "L'accumulation des fiches forme une bibliothèque consultable. Plus un abonné rejoint tard, plus elle est dense — c'est le cœur de VITRINE.", en: "The accumulation of sheets forms a browsable library. The later a subscriber joins, the denser it is — that's the heart of VITRINE." },

    "lib.s1.num":       { fr: "01", en: "01" },
    "lib.s1.title":     { fr: "Fiche complète — exemple", en: "Full sheet — example" },
    "lib.fiche.tag":    { fr: "Fiche n°014 — publiée cette semaine", en: "Sheet No.014 — published this week" },

    "lib.s2.num":       { fr: "02", en: "02" },
    "lib.s2.title":     { fr: "Les fiches précédentes", en: "Previous sheets" },
    "lib.s2.p":         { fr: "Réservé aux abonnés. Aperçu de la structure de la bibliothèque, triable par secteur.", en: "Subscribers only. A preview of the library's structure, sortable by sector." },

    "lib.row13.name":   { fr: "Marque — Mode & accessoires", en: "Brand — Fashion & accessories" },
    "lib.row13.desc":   { fr: "Un positionnement premium affirmé, contredit par une distribution de masse.", en: "A confidently premium positioning, undercut by mass-market distribution." },
    "lib.row13.sector": { fr: "Mode", en: "Fashion" },

    "lib.row12.name":   { fr: "Marque — SaaS B2B", en: "Brand — B2B SaaS" },
    "lib.row12.desc":   { fr: "Une promesse claire en landing page, diluée dès le second niveau de navigation.", en: "A clear promise on the landing page, diluted by the second level of navigation." },
    "lib.row12.sector": { fr: "SaaS", en: "SaaS" },

    "lib.row11.name":   { fr: "Marque — Food & beverage", en: "Brand — Food & beverage" },
    "lib.row11.desc":   { fr: "Un récit fondateur fort, jamais réinjecté dans le packaging.", en: "A strong founding story, never carried through to the packaging." },
    "lib.row11.sector": { fr: "Food", en: "Food" },

    "lib.row10.name":   { fr: "Marque — Luxe / Maison", en: "Brand — Luxury / Home" },
    "lib.row10.desc":   { fr: "Une histoire d'artisanat réelle, racontée avec le vocabulaire d'une startup.", en: "A genuine craftsmanship story, told in the vocabulary of a startup." },
    "lib.row10.sector": { fr: "Luxe", en: "Luxury" },

    "lib.row09.name":   { fr: "Marque — Hospitalité", en: "Brand — Hospitality" },
    "lib.row09.desc":   { fr: "Un service haut de gamme, positionné comme accessible — et qui perd les deux publics.", en: "A high-end service positioned as accessible — losing both audiences." },
    "lib.row09.sector": { fr: "Hospitalité", en: "Hospitality" },

    "lib.s3.num":       { fr: "03", en: "03" },
    "lib.s3.title":     { fr: "Pourquoi la bibliothèque compose", en: "Why the library compounds" },
    "lib.s3.p":         { fr: "Un nouvel abonné en mois 12 paie le même prix qu'un abonné du mois 1 — mais reçoit douze fois plus de valeur accumulée. C'est la seule offre de Strawberry Production qui s'épaissit dans le temps : chaque fiche ajoute de la matière à la précédente, et la rétention monte avec l'âge du produit.", en: "A new subscriber in month 12 pays the same price as a month-1 subscriber — but receives twelve times more accumulated value. It's the only Strawberry Production offer that thickens over time: each sheet adds to the last, and retention rises with the product's age." },

    "lib.cta":          { fr: "Accéder à la bibliothèque complète", en: "Access the full library" },

    // METHOD PAGE
    "meth.kicker1":     { fr: "Méthode", en: "Method" },
    "meth.kicker2":     { fr: "La grille de lecture", en: "The reading grid" },
    "meth.h1":          { fr: "La même grille,<br>appliquée chaque<br>semaine.", en: "The same grid,<br>applied every<br>week." },
    "meth.baseline":    { fr: "VITRINE n'enseigne rien frontalement. La méthode se transmet par répétition : la même structure, appliquée à des marques différentes, semaine après semaine.", en: "VITRINE doesn't teach anything head-on. The method spreads through repetition: the same structure, applied to different brands, week after week." },

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
    "meth.p1":          { fr: "Une fiche VITRINE n'a pas l'exhaustivité d'un audit de marque payant. Elle prend dix minutes à lire et laisse une impression nette — c'est la clarté du regard qui compte, pas la couverture du sujet.", en: "A VITRINE sheet doesn't have the exhaustiveness of a paid brand audit. It takes ten minutes to read and leaves a clear impression — clarity of perspective matters more than coverage." },
    "meth.l2":          { fr: "Pas un cours", en: "Not a course" },
    "meth.p2":          { fr: "Aucune fiche n'explique la méthode en théorie. Elle l'applique, point. C'est en la voyant tourner sur des dizaines de cas que la grille de lecture s'installe chez le lecteur.", en: "No sheet explains the method in theory. It just applies it. Seeing it run on dozens of cases is what installs the reading grid in the reader." },

    "meth.s3.num":      { fr: "03", en: "03" },
    "meth.s3.title":    { fr: "D'où vient cette grille", en: "Where this grid comes from" },
    "meth.s3.p":        { fr: "C'est la même méthodologie que celle utilisée dans les missions Strawberry Production — la méthode S.T.R.A.W., appliquée habituellement à des marques clientes en commission privée. VITRINE l'applique en public, à des marques que vous connaissez déjà, sans qu'aucune d'elles n'ait commandé l'analyse.", en: "It's the same methodology used in Strawberry Production engagements — the S.T.R.A.W. method, normally applied to client brands under private commission. VITRINE applies it in public, to brands you already know, none of which commissioned the analysis." },

    "meth.cta":         { fr: "Voir la méthode en action", en: "See the method in action" },

    // PRICING PAGE
    "pr.kicker1":       { fr: "Abonnement", en: "Subscription" },
    "pr.kicker2":       { fr: "Sans engagement", en: "No commitment" },
    "pr.h1":            { fr: "Rejoindre<br>la bibliothèque.", en: "Join<br>the library." },
    "pr.baseline":      { fr: "Un prix fondateur, pour les premiers abonnés — verrouillé tant que l'abonnement reste actif.", en: "A founder price, for the first subscribers — locked in as long as the subscription stays active." },

    "pr.s1.num":        { fr: "01", en: "01" },
    "pr.s1.title":      { fr: "Le tarif", en: "Pricing" },
    "pr.badge":         { fr: "Prix fondateur — 50 places", en: "Founder price — 50 spots" },
    "pr.label":         { fr: "VITRINE", en: "VITRINE" },
    "pr.amount.sub":    { fr: "/ mois", en: "/ month" },
    "pr.note":          { fr: "Tarif standard ensuite : 25€/mois. Verrouillé à vie pour les 50 premiers abonnés.", en: "Standard price afterwards: €25/month. Locked in for life for the first 50 subscribers." },
    "pr.f1":            { fr: "Une fiche d'analyse par semaine", en: "One analysis sheet per week" },
    "pr.f2":            { fr: "Accès complet à la bibliothèque cumulée", en: "Full access to the cumulative library" },
    "pr.f3":            { fr: "Filtrage par secteur", en: "Sector filtering" },
    "pr.f4":            { fr: "Sans engagement, résiliable à tout moment", en: "No commitment, cancel anytime" },
    "pr.subscribe":     { fr: "S'abonner maintenant", en: "Subscribe now" },

    "pr.s2.num":        { fr: "02", en: "02" },
    "pr.s2.title":      { fr: "Ce que vous recevez", en: "What you get" },
    "pr.r1":            { fr: "Une nouvelle fiche chaque semaine, livrée par email et disponible dans la bibliothèque en ligne.", en: "A new sheet every week, delivered by email and available in the online library." },
    "pr.r2":            { fr: "L'accès rétroactif à toutes les fiches déjà publiées, dès le premier jour d'abonnement.", en: "Retroactive access to every sheet already published, from day one of your subscription." },
    "pr.r3":            { fr: "Une bibliothèque triable par secteur, qui s'épaissit chaque semaine sans surcoût.", en: "A library sortable by sector, thickening every week at no extra cost." },

    "pr.s3.num":        { fr: "03", en: "03" },
    "pr.s3.title":      { fr: "Questions fréquentes", en: "Frequently asked questions" },
    "pr.q1":            { fr: "Les marques analysées sont-elles mes clients ?", en: "Are the brands analyzed my clients?" },
    "pr.a1":            { fr: "Non. VITRINE analyse exclusivement des marques publiques, jamais des clients de Strawberry Production. C'est une écoute du marché, pas un audit commandé.", en: "No. VITRINE only analyzes public brands, never Strawberry Production clients. It's a read on the market, not a commissioned audit." },
    "pr.q2":            { fr: "Puis-je suggérer une marque à analyser ?", en: "Can I suggest a brand to analyze?" },
    "pr.a2":            { fr: "Oui, les abonnés peuvent proposer des marques. La sélection finale reste éditoriale, pour garder une diversité de secteurs dans la bibliothèque.", en: "Yes, subscribers can suggest brands. Final selection stays editorial, to keep a diversity of sectors in the library." },
    "pr.q3":            { fr: "Que se passe-t-il si je résilie ?", en: "What happens if I cancel?" },
    "pr.a3":            { fr: "Vous perdez l'accès à la bibliothèque à la fin de la période déjà payée. Le prix fondateur n'est pas garanti en cas de réabonnement ultérieur.", en: "You lose access to the library at the end of the period already paid for. The founder price isn't guaranteed if you resubscribe later." },
    "pr.q4":            { fr: "Le rythme est-il vraiment hebdomadaire ?", en: "Is the pace really weekly?" },
    "pr.a4":            { fr: "L'objectif est une fiche par semaine, avec une tolérance annoncée à l'avance en cas de cadence ajustée à deux semaines.", en: "The goal is one sheet per week, with advance notice if the pace ever shifts to every two weeks." }
  };

  /* ---------- 2. APPLICATION DE LA LANGUE ---------- */
  function getLang() {
    return localStorage.getItem("vitrine_lang") || "fr";
  }

  function setLang(lang) {
    localStorage.setItem("vitrine_lang", lang);
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const entry = I18N[key];
      if (entry && entry[lang]) {
        el.innerHTML = entry[lang];
      }
    });
    document.querySelectorAll(".lang-toggle button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  function initLangToggle() {
    document.querySelectorAll(".lang-toggle button").forEach(btn => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
    setLang(getLang());
  }

  /* ---------- 3. SCROLL REVEAL ---------- */
  function initReveal() {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || items.length === 0) {
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

  /* ---------- 4. TILT 3D AU SURVOL (cartes) ---------- */
  function initTilt() {
    const cards = document.querySelectorAll(".tilt");
    cards.forEach(card => {
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

  /* ---------- 5. INIT ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    initLangToggle();
    initReveal();
    initTilt();
  });

})();
