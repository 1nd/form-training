import { injectGlobal } from 'emotion';

injectGlobal`
    label {
        display: flex;
    }
    input[type="text"], textarea, button, select {
        border: 1px solid black;
    }
`