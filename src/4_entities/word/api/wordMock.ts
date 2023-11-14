import { IWord } from '../model/types';

export const wordMock: IWord = {
	id: 1,
	slug: 'word1',
	created: '2022-01-01',
	modified: '2022-03-02',
	translations_count: 1,
	favorite: false,
	types: [0, 1],
	text: 'textWord1',
	language: 'en',
	activity: 'ACTIVE',
	translations: [
		{
			id: 243432,
			text: 'textTranslation1',
		},
	],
	examples_count: 0,
	examples: [],
	definitions: [
		{
			id: 1245,
			author: 'Mike',
			text: 'Spring',
			translation: 'Весна',
			popularity: 'high',
			created: '2023-11-13T09:03:15.483Z',
			modified: '2023-11-13T09:03:15.483Z',
		},
		{
			id: 224,
			author: 'Jane',
			text: 'To come to know by chance, or by study or other application',
			translation: 'Весна',
			popularity: 'low',
			created: '2023-11-13T09:03:15.483Z',
			modified: '2023-11-13T09:03:15.483Z',
		},
		{
			id: 2247,
			author: 'Iren',
			text: 'To come to know by chance, or by study or other application',
			translation: 'Весна',
			popularity: 'low',
			created: '2023-11-13T09:03:15.483Z',
			modified: '2023-11-13T09:03:15.483Z',
		},
	],
	tags: [],
	is_problematic: false,
	synonyms: [],
	antonyms: [],
	forms: [],
	similars: [],
	notes: [],
};
