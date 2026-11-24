import { englishSlug } from './urls';

export const productionUrl = (slug: string) => `/manufacturing/${englishSlug(slug)}/`;
