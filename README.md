# README

## Introduction

Ce projet a été réalisé dans le cadre d'un test avant embauche. Il s'agit d'une application de gestion de TODOs, construite avec **React**, **Apollo Client** pour l'intégration avec une API **GraphQL**, et **Emotion** pour la gestion des styles via `CSS-in-JS`. L'application permet d'ajouter, de visualiser, de filtrer, et de mettre à jour des TODOs, tout en proposant une architecture propre et modulaire.

## Architecture

L'architecture de ce projet est pensée pour séparer les responsabilités tout en favorisant la réutilisabilité des composants et des logiques de données. Voici un aperçu des éléments clés :

### 1. Composants
Les composants sont répartis en deux catégories principales :
- **Composants de pages** : Ils regroupent la logique principale de chaque page (ex. : TodoListPage, TodoDetailPage).
- **Composants unitaires** : Petites unités fonctionnelles et réutilisables comme `TodoItem`, `Filters`, et `TodoDetail`.

Les styles sont centralisés dans des **containers** séparés utilisant Emotion. Cela permet de garder les fichiers de composants légers tout en facilitant la gestion globale des styles.

### 2. Hooks personnalisés
Le projet utilise plusieurs hooks personnalisés, notamment :
- **useTodos** : Permet de récupérer la liste des TODOs en fonction des filtres appliqués.
- **useTodo** : Récupère un TODO spécifique pour la page de détails.
- **useUpdateTodo** : Gère la mutation GraphQL pour mettre à jour le statut d'un TODO.

Ces hooks sont utilisés dans les composants pour découpler la logique de récupération des données des composants visuels.

### 3. Gestion du contexte
L'application utilise le **contexte React** pour gérer l'état global des filtres (ex. : types de TODOs, statut de completion, ordre de tri). Cela permet d'avoir une gestion centralisée des filtres et d'éviter la remontée d'état inutile entre les composants.

Le contexte est implémenté dans le fichier `TodoContext.js`, qui expose à la fois les valeurs et les actions permettant de modifier ces valeurs via `setFilters`.

### 4. Gestion du cache Apollo après un update
Lorsqu'un TODO est mis à jour (via le bouton qui modifie son statut), le cache d'Apollo est automatiquement mis à jour. Cela est géré par la mutation `useUpdateTodo`. Apollo met à jour le cache local grâce à la fonction `update`, où nous remplaçons l'ancien TODO dans la liste avec le nouveau, ce qui garantit que l'interface utilisateur reste synchronisée avec le serveur sans requêtes supplémentaires.

### 5. Thème global et styles
L'application utilise **Emotion** pour la gestion des styles via `CSS-in-JS` ([Documentation officielle d'Emotion](https://emotion.sh/docs/introduction)). Cela permet de créer des composants stylés de manière dynamique, avec des thèmes et des styles réutilisables tout au long de l'application.

Nous avons mis en place un **thème global** centralisé, accessible à tous les composants. Ce thème définit notamment des couleurs spécifiques pour différents états comme "alert", "valid", et "disabled". Chaque composant stylé, tel que `Button`, utilise des flags pour ajuster son apparence en fonction de ces états. Cela garantit une cohérence visuelle sur toute l'application.

Par ailleurs, nous avons développé des **containers stylés réutilisables** qui peuvent être partagés et utilisés dans plusieurs composants. Ces containers se trouvent dans le dossier `styles/containers` et facilitent la gestion des styles globaux.


## Mise à jour

### 1. Composants
Pour ajouter ou modifier des composants :
1. Créez un fichier dans le répertoire `components/` pour le nouveau composant.
2. Importez les styles depuis `styles/containers` pour garder une cohérence dans l'application.
3. Utilisez des hooks personnalisés ou des données du contexte si nécessaire pour manipuler les données de manière propre.

### 2. Hooks personnalisés
Les hooks sont localisés dans le répertoire `hooks/`. Chaque hook est indépendant et peut être testé séparément. Pour en ajouter un nouveau, il suffit de créer un fichier suivant la convention `useNomDuHook.js`.

### 3. Gestion du contexte
Pour ajouter de nouveaux éléments au contexte, il faut :
1. Modifier les valeurs initiales dans `TodoContext.js`.
2. Ajouter les actions correspondantes pour mettre à jour ces valeurs avec `setFilters` ou d'autres setters.

### 4. Gestion du cache Apollo
Si une nouvelle mutation est ajoutée, assurez-vous de bien configurer l'option `update` dans Apollo Client pour maintenir la cohérence entre les données locales et celles du serveur.

Voici le paragraphe ajouté concernant les tests unitaires :

---

### 5. Tests unitaires

Le projet inclut des tests unitaires placés dans le dossier `__tests__` et utilise **Jest** comme framework de tests. Quatre tests principaux ont été mis en place pour illustrer comment tester certaines parties de l'application :

- **App.test.js** : Vérifie le bon fonctionnement de l'application principale.
- **TodoDetail.test.js** : Teste l'affichage et le comportement du composant de détail d'un TODO.
- **TodoList.test.js** : S'assure que la liste des TODOs s'affiche correctement avec les filtres.
- **TodoListPage.test.js** : Vérifie la logique globale et l'affichage de la page qui liste les TODOs.

Ces tests servent d'exemples et couvrent une petite partie des scénarios de tests possibles. D'autres tests peuvent être ajoutés pour améliorer la couverture et garantir la stabilité de l'application à plus grande échelle.

## Lancer le projet
La bonne execusion de l'application exige la version V18 de node, pour ne pas dépendre d'une configuation local, le projet vous offre la possibilité de lancer l'application dans un conteneur docker. 
### 1. Environnement Local
#### a- Installation des dépendances
```bash
npm install
```

#### b- Lancer le projet en mode développement
```bash
npm start
```

#### c- Lancer les tests
```bash
npm test
```

### 2. Environnement Docker
#### Construire et exécuter les services
Dans le terminal à la racine de votre projet, exécutez la commande suivante :

```bash
docker-compose up --build
```
Cela construira l'image et démarrera le conteneur pour l'application. Pour exécuter les tests, vous pouvez lancer :

```bash
docker-compose run test
```
#### Utilisation des arguments
l'URL de l'API (fourni pour le test technique) est définit comme variabled'envioronement dans le fichier .env que vous pouvez éditer en cas de besoin, comme vous pouvez le passer comme argument lors de l'exécution, vous pouvez utiliser la commande suivante en ligne de commande :

```bash
REACT_APP_API_URL=http://localhost:4000 docker-compose up
```

### 3. Accéder à l'application
Vous devriez pouvoir accéder à votre application à l'adresse http://localhost:3000.

---

Ce projet est conçu pour être maintenable, évolutif et facilement extensible avec une architecture claire et modulaire.