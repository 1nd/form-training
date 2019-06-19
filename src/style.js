import { injectGlobal } from 'emotion';

injectGlobal`
    form {
        label {
            display: flex;
        }
        input[type="text"], textarea, button, select {
            border: 1px solid black;
        }
    }
`