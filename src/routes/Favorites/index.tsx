import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { useStore } from "../../hooks/useStore";
import LoadingPage from "../../components/Loader";
import { useTranslation } from "react-i18next";
import { CommonTranslations, FavoritesPageTraslations } from "../../types";
import Button from "../../components/Button";

const Favorites: React.FC = () => {
  const navigate = useNavigate();
  const { store, saveStore } = useStore();
  const [selectedTopics, setSelectedTopics] = useState<string[]>(() => store.selectedFavorites || []);
  const [isLoading, setIsLoading] = useState(false);
	const { t } = useTranslation();
  const pageData = t('favorites', { returnObjects: true }) as FavoritesPageTraslations;
  const buttonText = t('common', { returnObjects: true }) as CommonTranslations;

  const handleSelect = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : prev.length < 3 ? [...prev, topic] : prev
    );
  };

  const handleNextButton = () => {
    saveStore("selectedFavorites", selectedTopics);
    setIsLoading(true);

    setTimeout(() => {
      navigate("/submit-form");
    }, 5000);
  };

  return (
		<>
      <div className="w-full h-full flex flex-col justify-between items-center text-white p-4">
          <div className="text-center">
            <h2 className="text-lg font-bold">{pageData.title}</h2>
            <p className="text-sm text-gray-300">{pageData.description}</p>
          </div>
          <div className="flex flex-wrap justify-center max-h-[60dvh] mt-6 gap-x-6 gap-y-8">
            {pageData.answers.map((topic, index) => (
							<button
							key={topic.name}
							className={`w-18 h-18 md:w-24 md:h-24 lg:w-36 lg:h-36 rounded-full flex flex-col items-center justify-center 
                text-sm font-medium transition-all cursor-pointer 
                active:scale-95
                ${
                  selectedTopics.includes(topic.name)
									? "border-2 border-pink-500 bg-pink-500/20 text-white shadow-lg"
                    : "bg-purple-900/20 text-gray-300 hover:bg-purple-800"
										}
										${index % 3 === 1 ? "translate-y-5" : ""}`}
										onClick={() => handleSelect(topic.name)}
										>
                <span className="text-sm md:text-2xl lg:text-5xl">{topic.emoji}</span>
                <span className="mt-1 px-1 text-center leading-tight text-sm md:text-xl">{topic.name}</span>
              </button>
            ))}
          </div>
					<Button 
						text={buttonText.nextButton}
						disabled={selectedTopics.length === 0}
						handleClick={handleNextButton}
						/>
    		</div>
    	{isLoading && createPortal(<LoadingPage />, document.body)}
		</>
  );
};

export default Favorites;
