import SearchBar from "./components/searchBar";
import React from "react";

const Header = ({
                    tableTitle,
                    setCurrentSearchWords,
                    showButton,              // Пропс для активації/деактивації кнопки
                    buttonLabel,             // Пропс для тексту на кнопці
                    buttonBackgroundColor,   // Пропс для кольору фону кнопки
                    buttonTextColor,         // Пропс для кольору тексту кнопки
                    buttonFontSize,          // Пропс для розміру шрифту на кнопці
                    buttonFontWeight,        // Пропс для зміни ваги шрифту на кнопці
                    buttonBorderColor,       // Пропс для кольору рамки кнопки
                    buttonBorderWidth,       // Пропс для ширини рамки кнопки
                    buttonBorderRadius,      // Пропс для округлення рамки кнопки
                    onButtonClick            // Пропс для передачі екшена
                }) => {
    return (
        <>
            <div className="table-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1 style={tableTitle?.styles}>{tableTitle}</h1>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', flexGrow: 1 }}>
                    {/* Пошуковий бар */}
                    <SearchBar setCurrentSearchWords={setCurrentSearchWords} />

                    {/* Умовне відображення кнопки */}
                    {showButton && (
                        <button
                            onClick={onButtonClick} // Додаємо обробник натискання
                            style={{
                                backgroundColor: buttonBackgroundColor,
                                color: buttonTextColor,
                                fontSize: `${buttonFontSize}px`,
                                fontWeight: buttonFontWeight, // Додаємо зміну ваги шрифту
                                padding: '10px 20px',
                                border: `${buttonBorderWidth}px solid ${buttonBorderColor}`, // Додаємо рамку
                                borderRadius: `${buttonBorderRadius}px`, // Додаємо можливість налаштування радіуса
                                cursor: 'pointer',
                            }}
                        >
                            {buttonLabel}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Header;