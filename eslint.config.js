import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

// پلاگین Prettier برای جلوگیری از تداخل قوانین
import prettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),
  {
    ignores: ['**/dist/**', '**/node_modules/**'],
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      // ⚠️ هشدار در زمان استفاده از console.log به جای ارور دادن
      'no-console': 'warn',
      // ❌ جلوگیری کامل از وجود متغیرهایی که تعریف شده‌اند اما استفاده نشده‌اند
      '@typescript-eslint/no-unused-vars': 'error',
      // اجبار به استفاده از let یا const و جلوگیری از var
      'no-var': 'error',
      // هشدار در صورت استفاده نکردن از await درون توابع async
      'require-await': 'warn',
      // فعال‌سازی خطای رعایت قوانین هوک‌ها (عدم استفاده در شرط و حلقه)
      'react-hooks/rules-of-hooks': 'error',
      // هشدار برای جا انداختن وابستگی‌ها در آرایه useEffect
      'react-hooks/exhaustive-deps': 'error',
      // جلوگیری قطعی از استفاده از کلمه کلیدی any در کدها
      '@typescript-eslint/no-explicit-any': 'error',
      // اجبار به مشخص کردن نوع خروجی توابع
      '@typescript-eslint/explicit-function-return-type': 'warn',
    },
  },
  prettier,
]);
