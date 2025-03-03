import React from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { useTranslation } from "react-i18next";
import { AgePageTraslations } from "../../types";

const Age: React.FC = () => {
    const navigate = useNavigate();
    const { saveStore } = useStore();
    const { t } = useTranslation();
    const pageData = t('age', { returnObjects: true }) as AgePageTraslations;

    const handleLanguageSelection = (age: string) => {
        saveStore('selectedAge', age)
        navigate("/quiz/hates");
    };

    return (
        <div className="w-full p-4">
            <div className="text-center">
                <h3 className="text-lg font-semibold">{pageData.title}</h3>
            </div>
            <div className="grid grid-cols-1 gap-3 mt-4">
                {pageData.answers.map((age) => (
                    <div
                        key={age}
                        className="w-full bg-purple-950 text-center rounded-xl p-4 cursor-pointer 
                                   transition-all hover:bg-purple-900 active:scale-95"
                        onClick={() => handleLanguageSelection(age)}
                    >
                        <span className="text-white font-medium">{age}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Age;