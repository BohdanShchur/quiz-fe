import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { useTranslation } from "react-i18next";
import { LanguagesAnswer, LanguagesPageTraslations } from "../../types";

const Languages: React.FC = () => {
    const navigate = useNavigate();
    const { saveStore } = useStore();
    const { t, i18n } = useTranslation();
    const pageData = t('languages', { returnObjects: true }) as LanguagesPageTraslations;
    
    const handleLanguageSelection = (language: LanguagesAnswer) => {
        saveStore('selectedLanguage', language.name)
        i18n.changeLanguage(language.code)
        localStorage.setItem('langCode', language.code)
        navigate("/quiz/gender");
    };


    return (
        <div className="w-full p-4">
            <div className="text-center">
                <h3 className="text-lg font-semibold">{pageData.title}</h3>
                <em className="text-gray-400">{pageData.description}</em>
            </div>
            <div className="grid grid-cols-1 gap-3 mt-4">
                {pageData.answers.map((lang) => (
                    <div
                        key={lang.code}
                        className="w-full bg-purple-950 text-center rounded-xl p-4 cursor-pointer 
                                   transition-all hover:bg-purple-900 active:scale-95"
                        onClick={() => handleLanguageSelection(lang)}
                    >
                        <span className="text-white font-medium">{lang.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Languages;
