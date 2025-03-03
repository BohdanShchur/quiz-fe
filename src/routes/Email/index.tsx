import React, { useRef, useState } from 'react';
import { useStore } from '../../hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CommonTranslations, EmailPageTranslations } from '../../types';
import Button from '../../components/Button';

const Email: React.FC = () => {
    const { saveStore } = useStore();
    const emailRef = useRef<HTMLInputElement>(null);
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const pageData = t('email', { returnObjects: true }) as EmailPageTranslations;
    const buttonText = t('common', { returnObjects: true }) as CommonTranslations;

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const onChangeInput = () => {
        const value = emailRef.current?.value || '';
        setEmail(value);
        setError(value.length > 0 && !validateEmail(value));
    };

    const handleNextButton = () => {
        if (validateEmail(email)) {
            saveStore('email', email);
            navigate('/thank-you')
        }
    };

    return (
        <div className="w-full h-[100dvh] p-8 self-center flex flex-col justify-between items-center container px-5">
            <div className="w-full text-center flex flex-col gap-2 items-center mt-8">
                <h3 className="text-3xl font-bold text-white">{pageData.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{pageData.description}</p>
                <div className="mt-6 w-full">
                    <input
                        ref={emailRef}
                        type="email"
                        className={`w-full h-12 rounded-lg bg-purple-900/20 text-white p-4 outline-none transition-all border-2 ${
                            error ? 'border-red-500' : 'border-transparent focus:border-pink-500'
                        }`}
                        placeholder="Your email"
                        onChange={onChangeInput}
                    />
                    {error && (
                        <p className="text-red-500 text-sm mt-1 text-left">{pageData.errorMessage}</p>
                    )}
                </div>

                <p className="text-sm text-gray-300 mt-6">
                    {pageData.terms}
                </p>
            </div>
            <Button 
                text={buttonText.nextButton}
                disabled={!email || error}
                handleClick={handleNextButton}
            />
        </div>
    );
};

export default Email;
