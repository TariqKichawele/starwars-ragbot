import './global.css'

export const metadata = {
    title: 'StarGPT',
    description: 'The place to go for al your Star wars questions'
};

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout