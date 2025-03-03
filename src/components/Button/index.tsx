import React from 'react'

type ButtonProps = {
    disabled?: boolean,
    text: string
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button:React.FC<ButtonProps> = ({disabled = false, handleClick, text}) => {
  return (
    <button 
        type="button" 
        onClick={handleClick}
        disabled={disabled}
        className={`w-full py-3 h-16 text-white font-semibold rounded-xl 
                    transition-all active:scale-95 cursor-pointer
                ${!disabled ? "bg-pink-500 text-white" : "bg-purple-700 cursor-not-allowed"}`}
    >
        {text}
    </button>
  )
}

export default Button