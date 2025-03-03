import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useStore } from '../../hooks/useStore'
import { useTranslation } from 'react-i18next'
import { GenderPageTraslations } from '../../types'

const Gender:React.FC = () => {
    const navigate = useNavigate()
    const {saveStore} = useStore()
    
    const { t } = useTranslation();
    const pageData = t('gender', { returnObjects: true }) as GenderPageTraslations;

    const handleGenderSelection = (gender: string) => {
        saveStore('selectedGender', gender)
        navigate("/quiz/age");
    };

  return (
    <div className="w-full p-4">
            <div className="text-center">
                <h3 className="text-lg font-semibold">{pageData.title}</h3> 
                <em className="text-gray-400">{pageData.description}</em>
            </div>
            <div className="flex gap-4 justify-center mt-4">
                {pageData.answers.map((gender) => (
                    <div
                        key={gender.name}
                        className="w-32 bg-purple-950 text-center rounded-xl p-4 cursor-pointer 
                                   flex flex-col items-center gap-2 transition-all 
                                   hover:bg-purple-900 active:scale-95"
                        onClick={() => handleGenderSelection(gender.name)}
                    >
                       <span className="text-4xl">{gender.emoji}</span>
                        <span className="text-white font-medium">{gender.name}</span>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Gender