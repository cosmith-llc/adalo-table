import SearchBar from "./components/searchBar";
import React from "react";

const Header = ({
                    tableTitle,
                    setCurrentSearchWords,
                    showButton,
                    buttonLabel,
                    buttonBackgroundColor,
                    buttonTextColor,
                    buttonFontSize,
                    buttonFontWeight,
                    buttonBorderColor,
                    buttonBorderWidth,
                    buttonBorderRadius,
                    onButtonClick
                }) => {
    return (
        <>
            <div className="table-header">
                {/* Title */}
                <h1 style={tableTitle?.styles}>{tableTitle}</h1>

                {/* Search Bar and Button should stay aligned to the right */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexGrow: 1, justifyContent: 'flex-end' }}>
                    {/* Search Bar */}
                    <SearchBar setCurrentSearchWords={setCurrentSearchWords} />

                    {/* Conditional Button */}
                    {showButton && (
                        <button
                            onClick={onButtonClick}
                            style={{
                                backgroundColor: buttonBackgroundColor,
                                color: buttonTextColor,
                                fontSize: `${buttonFontSize}px`,
                                fontWeight: buttonFontWeight,
                                padding: '5px 20px',
                                border: `${buttonBorderWidth}px solid ${buttonBorderColor}`,
                                borderRadius: `${buttonBorderRadius}px`,
                                cursor: 'pointer',
                                height: '100%' // Match search bar height
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