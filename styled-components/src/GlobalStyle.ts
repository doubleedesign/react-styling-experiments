// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
        --rt-opacity: 1.0;
	}
	
	* {
        margin: 0;
        padding: 0;
		box-sizing: border-box;
	}
	
    body {
        font-family: 'Barlow', sans-serif;
	    background: #F2F2F2;
    }
`;

export default GlobalStyle;
