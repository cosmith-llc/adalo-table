import React from "react";
import SearchBar from "./components/searchBar";

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

    const buttonStyle = {
        backgroundColor: buttonBackgroundColor,
        color: buttonTextColor,
        fontSize: `${buttonFontSize}px`,
        fontWeight: buttonFontWeight,
        borderColor: buttonBorderColor,
        borderWidth: `${buttonBorderWidth}px`,
        borderRadius: `${buttonBorderRadius}px`,
    };


    return (
        <div className="table-header">
            <h1 style={tableTitle?.styles}> {tableTitle} </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexGrow: 1, justifyContent: 'flex-end' }}>
                <SearchBar setCurrentSearchWords={setCurrentSearchWords} />
                {showButton && (
                    <button
                        onClick={onButtonClick}
                        className="custom-button"
                        style={buttonStyle}
                    >
                        {buttonLabel}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
