import { reactive } from 'vue';

export const store = reactive({
  mainTitle: '~ Rick & Morty ~',
  apiUrl: 'https://rickandmortyapi.com/api/character',
  characterUrl: 'https://rickandmortyapi.com/api/character',
  cardsList: [],
  characterList: [],
  errorString: '',
  queryParams: {
    num: 20,
    offset: 0,
    language: 'en',
  }
})
