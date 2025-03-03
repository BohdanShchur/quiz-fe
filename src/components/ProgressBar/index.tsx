import { useProgressBar } from '../../hooks/useProgressBar'

const ProgressBar = () => {
    const { currentPage, totalPages, handleBack, visibleBackButton } = useProgressBar()

    return (
        <div className="w-full">
            <div className={`flex items-center justify-between ${currentPage === 1 ? 'justify-end' : 'justify-between'}`}>
                {visibleBackButton && <button className="cursor-pointer text-3xl" onClick={handleBack}>{"<"}</button>}
                <div className="text-center mb-2 text-white">
                    <span className='text-pink-500'>{currentPage}</span>/<span>{totalPages}</span>
                </div>
                <></>
            </div>
            
            <div className="h-2 w-full bg-gray-700 rounded-md">
                <div 
                    className="h-2 bg-pink-500 rounded-full transition-all"
                    style={{ 
                        width: `${(currentPage / totalPages) * 100}%`
                    }}
                />
            </div>
        </div>
    )
}

export default ProgressBar

