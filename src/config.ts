import * as dotenv from 'dotenv';
import { z } from 'zod';


// Définition du schéma Zod pour les variables d'environnement
const envSchema = z.object({
  INPUT_PASSWORD: z.string(),
  INPUT_LOGIN: z.string()
});

// Charger les variables d'environnement à partir du fichier .env
dotenv.config();

// Valider et parser les variables d'environnement
export const Config = envSchema.parse(process.env);

// Récupérer les valeurs PASSWORD et LOGIN en tant que chaînes de caractères
const password: string = Config.INPUT_PASSWORD;
const login: string = Config.INPUT_LOGIN;

// Afficher les variables en tant que chaînes de caractères
console.log('LOGIN:', login);
console.log('PASSWORD:', password);