import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { useTranslation } from "react-i18next";
import { CommonTranslations, HatesPageTraslations } from "../../types";
import Button from "../../components/Button";

const Hates: React.FC = () => {
    const navigate = useNavigate();
    const { store, saveStore } = useStore();
    const [ checkedOptions, setCheckedOptions ] = useState(() => store.selectedHates || [])
    const { t } = useTranslation();
    const pageData = t('hates', { returnObjects: true }) as HatesPageTraslations;
    const buttonText = t('common', { returnObjects: true }) as CommonTranslations;

    console.log(checkedOptions)
    const handleSelect = (option: string) => {
        const exist = checkedOptions.includes(option)
        const newOptions = exist ? checkedOptions.filter((opt: string) => opt !== option) : [...checkedOptions, option]
        setCheckedOptions(newOptions)
    }

    const handleNextButton = () => {
        saveStore('selectedHates', checkedOptions)
        navigate("/quiz/favorites");
    }

    return (
        <div className="w-full h-full flex flex-col p-4">
            <div className="flex-grow">
                <div className="text-center">
                    <h3 className="text-lg font-semibold">{pageData.title}</h3>
                </div>
                <div className="flex flex-col gap-3 mt-4">
                    {pageData.answers.map((option) => (
                        <div
                        key={option}
                        className={`w-full flex justify-between rounded-xl p-4 cursor-pointer 
                        transition-all active:scale-95 border-2 ${
                          checkedOptions.includes(option)
                            ? 'bg-pink-500/20 border-pink-500 text-white'
                            : 'bg-purple-950 border-transparent hover:bg-purple-900'  
                        }`}
                        onClick={() => handleSelect(option)}
                      >
                        <span className="font-medium">{option}</span>
                        <input 
                          className="w-5 h-5 appearance-none border-2 border-pink-500 rounded-md 
                          checked:bg-pink-500 checked:border-transparent relative transition-all cursor-pointer 
                          before:absolute before:content-['✔'] before:text-white before:text-xs before:font-bold 
                          before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
                          before:opacity-0 checked:before:opacity-100"
                          type="checkbox" 
                          checked={checkedOptions.includes(option)}
                          readOnly
                        />
                      </div>
                      
                    ))}
                </div>
            </div>
            <Button
                text={buttonText.nextButton}
                handleClick={handleNextButton}
                disabled={checkedOptions.length === 0}
            />
        </div>
    );
};

export default Hates
