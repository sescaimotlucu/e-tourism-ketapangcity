
import { idTranslations } from './id';
import { enTranslations } from './en';
import { myTranslations } from './my';

export const translations = {
  ID: idTranslations,
  EN: enTranslations,
  MY: myTranslations,
};

export type TranslationKey = keyof typeof idTranslations;
