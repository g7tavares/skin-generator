import 'styled-components';

declare module 'styled-components'{
    export interface DefaultTheme{
        title: string;

        colors: {
            background: string;
            shape: string;
            textTitle: string;
            textBody: string;
            green: string;
            red: string;
            inputBackground: string;
            inverted: string;
        },
    }
}