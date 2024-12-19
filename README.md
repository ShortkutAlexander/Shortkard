# Génération de vCard avec image encodée
Ce projet fournit une approche clé en main pour générer une vCard (fichier .vcf) à partir des données présentes dans le DOM, tout en incluant l’image de profil au format Base64. Il s’agit d’un processus entièrement automatisé, pertinent lorsqu’on souhaite distribuer des cartes de contacts numériques contenant photo, coordonnées, réseaux sociaux, etc.

## Fonctionnalités principales
- **Encodage d’image en Base64 :
L’image identifiée par #profile-pic est convertie directement dans le navigateur, aucune dépendance externe nécessaire.

- **Extraction des informations depuis le DOM :
Le script parcourt la page pour récupérer nom, prénom, titre, entreprise, téléphone, courriel, adresse, liens vers réseaux sociaux, etc.
Chaque information optionnelle est ajoutée si elle est trouvée; sinon, le champ est ignoré.

- **Construction dynamique de la vCard :
Un modèle de vCard VERSION:3.0 est utilisé comme base, puis complété à la volée avec les données.
Le résultat final est une vCard complète contenant toutes les infos nécessaires.

- **Téléchargement automatique :
Une fois construite, la vCard est encodée en Base64 et un lien de téléchargement est généré et cliqué automatiquement, permettant de récupérer le fichier contact.vcf sans interaction supplémentaire.

## Pré-requis techniques
Aucune librairie externe nécessaire (jQuery, etc.).
Compatible avec les navigateurs modernes (Chrome, Firefox, Safari, Edge).
Fichiers nécessaires :
Un fichier HTML contenant les éléments identifiés par des IDs (voir ci-dessous).
Le script script.js (fourni, ou à adapter selon vos besoins).
Intégration dans une page HTML
## Exemple minimal :

```html
Copy code
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Exemple vCard</title>
</head>
<body>
  <img id="profile-pic" src="profil.jpg" alt="Photo de profil">
  
  <div id="firstName">Jean</div>
  <div id="lastName">Dupont</div>
  <div id="title">Développeur Web</div>
  <div id="company">Mon Entreprise Inc.</div>
  <div id="phone">+1 (514) 555-1234</div>
  <div id="courriel">jean.dupont@example.com</div>
  <div id="adresse">123, rue Principale, Montréal, QC</div>
  <div id="website">https://monentreprise.com</div>
  <div id="linkedinLink">https://linkedin.com/in/jeandupont</div>
  <div id="facebookLink">https://facebook.com/jeandupont</div>
  <div id="instaLink">https://instagram.com/jeandupont</div>
  <div id="twitterLink">https://twitter.com/jeandupont</div>

  <script src="script.js"></script>
  <script>
    // Une fois la page chargée, on génère la vCard
    window.onload = () => {
      generateVCard();
    };
  </script>
</body>
</html>
```
## Champs disponibles
#firstName (Prénom)
#lastName (Nom)
#title (Titre professionnel)
#company (Entreprise)
#phone (Téléphone)
#courriel (Courriel)
#adresse (Adresse postale, au format "rue, ville, province")
#website (Site web)
#linkedinLink (URL du profil LinkedIn)
#facebookLink
#instaLink
#twitterLink
Tous sont optionnels. Si l’élément correspondant n’est pas présent, le champ ne sera pas ajouté à la vCard.

## Processus interne
Encodage de l’image :
La fonction encodeImg() :

## Récupère l’élément #profile-pic.
Crée un <canvas> temporaire en mémoire.
Dessine l’image dans ce canvas.
Convertit le canvas en DataURL Base64 (ici, format JPEG, qualité 0.5 configurable).
Retourne la chaîne Base64 pure (sans préfixe data:).
Génération de la vCard dans generateVCard() :

Débute avec un modèle vCard minimal :
makefile
Copy code
BEGIN:VCARD
VERSION:3.0
END:VCARD
Remplace la ligne END:VCARD par les champs disponibles, un par un, grâce à des replace() successifs (N, FN, TITLE, ORG, ADR, TEL, EMAIL, URL, PHOTO, etc.).
Ajoute la photo (encodée Base64) à la fin.
Téléchargement :

Une fois la vCard finalisée, le script la convertit en Base64.
Crée un lien <a> avec href="data:text/vcard;base64,..."
Simule un clic sur ce lien pour forcer le téléchargement.
Nettoie après l’opération (retire le lien du DOM).
Dépannage et astuces
Aucune image encodée?
Vérifier que #profile-pic pointe vers un fichier image valide.

Champs manquants :
S’assurer que l’ID existe dans la page et que l’élément contient du texte.
Ex: <div id="phone">+1 (514) 555-1234</div>

- **Nom du fichier :
Par défaut, link.download = 'contact.vcf';. Changer cette ligne si besoin.

- **Format d’image et qualité :
Le script utilise canvas.toDataURL('image/jpeg', 0.5) par défaut. Ajuster la valeur (entre 0 et 1) pour une meilleure qualité ou un poids réduit.
Pour du PNG, utiliser canvas.toDataURL('image/png').

- **Informations supplémentaires :
Vous pouvez ajouter d’autres champs à la vCard en suivant le même modèle (remplacer END:VCARD par LABEL:NouvelleInfo\nEND:VCARD, par exemple), à condition de respecter la spécification vCard.

## Conclusion
Ce script facilite la création de vCards personnalisées directement à partir des données affichées sur une page web. Il évite toute saisie manuelle, assure une expérience fluide, et intègre l’image du contact sans effort.

Pour l’équipe de développement interne, ce code pourra être réutilisé tel quel ou adapté selon les besoins spécifiques des projets. Toutes les modifications (ajout de champs, changement de format d’image, personnalisation du nom de fichier) sont simples et se font directement dans le script ou l’HTML.