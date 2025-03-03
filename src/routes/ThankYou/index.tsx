import React from 'react';
import { useStore } from '../../hooks/useStore';
import { useNavigate } from 'react-router-dom';

import CheckmarkIcon from '../../assets/checkmark.svg'
import DownloadIcon from '../../assets/download.svg'
import useDownloadCSV, { transformToCSVData } from '../../hooks/useDownloadCSV';
import { useTranslation } from 'react-i18next';
import { CommonTranslations, ThankPageTranslations } from '../../types';
import Button from '../../components/Button';


const ThankYou: React.FC = () => {
    const { store, clearStore } = useStore();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const buttonText = t('common', { returnObjects: true }) as CommonTranslations;
    const pageData = t('thank-you', { returnObjects: true }) as ThankPageTranslations;

    const downloadAnswers = useDownloadCSV()

    const handleDownload = () => {
        const answersDTO = transformToCSVData(t, store);
        const headers = ['Orders', 'Title', 'Type', 'Answer']
        downloadAnswers(headers, answersDTO, 'answers.csv')
    }

    const handleNextButton = () => {
        clearStore()
        navigate('/quiz/languages')
    };

    return (
        <div className="w-full min-h-screen flex flex-col justify-between text-center p-6">
            <div className="w-full max-w-sm mx-auto flex flex-col items-center pt-10">
                <h3 className="text-3xl font-bold text-white">{pageData.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{pageData.description}</p>
                <img src={CheckmarkIcon} alt="Checkmark" className="mt-6 w-24 h-24" />
            </div>
            <div className="w-full fixed bottom-6 left-0 flex flex-col gap-5 px-6">
                 <button
                    className={`w-full h-12 flex items-center justify-center gap-2 rounded-full text-lg font-semibold transition-all bg-transparent text-white cursor-pointer`}
                    onClick={handleDownload}
                >
                    <img src={DownloadIcon} alt="Checkmark" className= "w-12 h-12" />
                    {buttonText.downloadButton}
                </button>
                <Button 
                    text={buttonText.retakeButton}
                    handleClick={handleNextButton}
                />
            </div>
        </div>
    );
};

export default ThankYou;
