import { useCallback } from 'react';

import { TFunction } from "i18next";
import { Store } from '../types';

export const transformToCSVData = (t: TFunction, answers: Store): string[][] => {
    return [
        { order: 1, title: t("languages.title"), type: "single-select", answer: answers.selectedLanguage },
        { order: 2, title: t("gender.title"), type: "single-select-image", answer: answers.selectedGender },
        { order: 3, title: t("age.title"), type: "single-select", answer: answers.selectedAge },
        { order: 4, title: t("hates.title"), type: "multiple-select", answer: answers.selectedHates.join(", ") },
        { order: 5, title: t("favorites.title"), type: "bubble", answer: answers.selectedFavorites.join(", ") },
        { order: 6, title: t("email.title"), type: "email", answer: answers.email },
    ].map((item) => [item.order.toString(), item.title, item.type, item.answer]);
};

const useDownloadCSV = () => {
  const downloadCSV = useCallback((headers: string[], data: string[][], filename = 'data.csv') => {
    
    const csvContent = [headers, ...data]
      .map(row => row.join(',')) 
      .join('\n');

    const hiddenLink = document.createElement('a');
    hiddenLink.href = 'data:text/csv;charset=utf-8,' + encodeURI(csvContent);
    hiddenLink.target = '_blank';
    hiddenLink.download = filename;
    hiddenLink.click();

  }, []);

  return downloadCSV;
};

export default useDownloadCSV;
