
# Test Technique

Ce projet contient deux applications :  
1. **Next.js** (pour le frontend)  
2. **FastAPI** (pour le backend)
## Demo


https://github.com/user-attachments/assets/64676625-5c42-4151-b68f-c4a39e2d1da8


## Prérequis

Assurez-vous d'avoir les outils suivants installés :
- **Node.js** (pour Next.js)
- **Python 3** et **pip** (pour FastAPI)
- **Docker** et **Docker Compose** (optionnel, pour lancer les services dans des conteneurs)

---

## Cloner le Projet

Clonez ce dépôt et accédez au répertoire du projet :

```bash
git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo
```

---

## Lancer l'Application Next.js (Frontend)

1. Accédez au répertoire `show-planner` :

    ```bash
    cd show-planner
    ```

2. Installez les dépendances du projet :

    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    # ou
    bun install
    ```

3. Lancez le serveur de développement Next.js :

    ```bash
    npm run dev
    # ou
    yarn dev
    # ou
    pnpm dev
    # ou
    bun dev
    ```

4. Accédez à l'application via [http://localhost:3000](http://localhost:3000).

---

## Lancer l'Application FastAPI (Backend)

1. Accédez au répertoire `fast-api` :

    ```bash
    cd fast-api
    ```

2. Créez et activez un environnement virtuel Python :

    ```bash
    python -m venv env
    source env/bin/activate  # Sur Windows, utilisez `env\Scriptsctivate`
    ```

3. Installez les dépendances FastAPI :

    ```bash
    pip install -r requirements.txt
    ```

4. Lancez l'application FastAPI :

    ```bash
    uvicorn main:app --reload --host 0.0.0.0 --port 9000
    ```

5. Accédez à l'API via [http://localhost:9000](http://localhost:9000).

---

## Lancer les Applications avec Docker Compose

Si vous préférez utiliser **Docker** pour lancer les deux applications dans des conteneurs, suivez ces étapes :

1. Assurez-vous d'avoir **Docker** et **Docker Compose** installés sur votre machine.

2. Depuis le répertoire racine du projet, lancez les services définis dans le fichier `docker-compose.yml` :

    ```bash
    docker-compose up --build
    ```

3. Accédez aux applications :
    - **Next.js** : [http://localhost:3000](http://localhost:3000)
    - **FastAPI** : [http://localhost:9000](http://localhost:9000)

---

## Dépannage

- Si vous rencontrez des problèmes de permission ou de configuration avec Docker, essayez de vérifier les logs et assurez-vous que les ports 3000 et 9000 sont libres sur votre machine.
- Si l'application FastAPI ne démarre pas, assurez-vous que toutes les dépendances Python sont installées dans l'environnement virtuel.
