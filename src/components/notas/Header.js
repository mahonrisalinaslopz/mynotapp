import React from "react";

const Header = ({ handleToggleDarkMode }) => {
    return (
        <div className='header'>
            <h1>Notas</h1>
            <button 
                onClick={() => 
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )

                }
                className='save'
            >
                Toogle Mode
            </button>
        </div>
    );
}

export default Header;