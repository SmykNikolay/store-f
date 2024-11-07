// shared/config/env.ts
import { z } from "zod";

// Константы для значений по умолчанию
const DEFAULT_ENV = {
  NODE_ENV: "development" as const,
  VITE_API_URL: "http://localhost:3000",
  VITE_DB_PORT: 5432,
  VITE_FEATURE_NEW_UI: false,
  VITE_FEATURE_BETA: false,
} as const;

const envSchema = z.object({
  VITE_API_KEY: z.string().min(1),
  VITE_API_URL: z.string().url().default(DEFAULT_ENV.VITE_API_URL),
  VITE_DB_HOST: z.string(),
  VITE_DB_PORT: z.number().int().positive().default(DEFAULT_ENV.VITE_DB_PORT),
  VITE_DB_USER: z.string(),
  VITE_DB_PASSWORD: z.string(),
  VITE_FEATURE_NEW_UI: z.boolean().default(DEFAULT_ENV.VITE_FEATURE_NEW_UI),
  VITE_FEATURE_BETA: z.boolean().default(DEFAULT_ENV.VITE_FEATURE_BETA),
  VITE_APP_NAME: z.string(),
  VITE_APP_VERSION: z.string(),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default(DEFAULT_ENV.NODE_ENV),
});

export type Env = z.infer<typeof envSchema>;

class EnvironmentService {
  private static _instance: EnvironmentService;
  private _env: Env | null = null;

  private constructor() {}

  public static getInstance(): EnvironmentService {
    if (!this._instance) {
      this._instance = new EnvironmentService();
    }
    return this._instance;
  }

  private _validateEnv(): Env {
    if (this._env) return this._env;

    try {
      const parsedEnv = envSchema.safeParse({
        VITE_API_KEY: import.meta.env.VITE_API_KEY,
        VITE_API_URL: import.meta.env.VITE_API_URL,
        VITE_DB_HOST: import.meta.env.VITE_DB_HOST,
        VITE_DB_PORT: Number(import.meta.env.VITE_DB_PORT),
        VITE_DB_USER: import.meta.env.VITE_DB_USER,
        VITE_DB_PASSWORD: import.meta.env.VITE_DB_PASSWORD,
        VITE_FEATURE_NEW_UI: import.meta.env.VITE_FEATURE_NEW_UI === "true",
        VITE_FEATURE_BETA: import.meta.env.VITE_FEATURE_BETA === "true",
        VITE_APP_NAME: import.meta.env.VITE_APP_NAME,
        VITE_APP_VERSION: import.meta.env.VITE_APP_VERSION,
        NODE_ENV: import.meta.env.NODE_ENV || DEFAULT_ENV.NODE_ENV,
      });

      if (!parsedEnv.success) {
        const missingVars = parsedEnv.error.issues.map((issue) =>
          issue.path.join("."),
        );
        throw new Error(
          `Отсутствуют обязательные переменные окружения: ${missingVars.join(", ")}`,
        );
      }

      this._env = parsedEnv.data;
      return this._env;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(
          `Ошибка валидации переменных окружения: ${error.message}`,
        );
      }
      throw error;
    }
  }

  public getEnv(): Env {
    return this._validateEnv();
  }
}

export const env = EnvironmentService.getInstance().getEnv();
