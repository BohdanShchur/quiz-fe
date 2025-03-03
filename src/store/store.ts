export const getStore = () => localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store') || '{}') : {
    selectedLanguage: null,
    selectedGender: null,
    selectedAge: null,
    selectedHates: [],
    selectedFavorites: [],
    email: null,
    langCode: null
}
