export type LanguagesAnswer = {
    name: string
    code: string
}

export type GenderAnswer = {
    name: string
    emoji: string
}

export type LanguagesPageTraslations = {
    title: string
    description: string
    answers: LanguagesAnswer[]
}

export type GenderPageTraslations = {
    title: string
    description: string
    answers: GenderAnswer[]
}

export type AgePageTraslations = {
    title: string
    description: string
    answers: string[]
}

export type HatesPageTraslations = {
    title: string
    description: string
    answers: string[]
}

export type FavoritesPageTraslations = {
    title: string
    description: string
    answers: GenderAnswer[]
}

export type ThankPageTranslations = {
    title: string,
    description: string,
}

export type CommonTranslations = {
    nextButton: string,
    downloadButton: string,
    retakeButton: string,
    loader: string
}

export type EmailPageTranslations = {
        title: string,
        description: string,
        terms: string,
        errorMessage: string
}

export type Store = {
    selectedLanguage: string,
    selectedGender: string,
    selectedAge: string,
    selectedHates: string[],
    selectedFavorites: string[],
    email: string,
    langCode: string
}