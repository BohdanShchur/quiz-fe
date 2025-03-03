import { useLocation, useNavigate } from "react-router-dom"

export const useProgressBar = () => {
    const pages = {
        '/quiz/languages': 1,
        '/quiz/gender': 2,
        '/quiz/age': 3,
        '/quiz/hates': 4,
        '/quiz/favorites': 5,
    }

    const location = useLocation()
    const navigate = useNavigate()

    const currentPage = pages[location.pathname as keyof typeof pages] || 0
    const totalPages = Object.keys(pages).length

    const handleBack = () => {
         if (currentPage > 1) {
            const previousPagePath = Object.keys(pages).find(
                (path) => pages[path as keyof typeof pages] === currentPage - 1
            );

            navigate(previousPagePath as string);
        }
    }

    return { 
        currentPage,
        totalPages,
        handleBack,
        visibleBackButton: currentPage !== 1
    }
}
