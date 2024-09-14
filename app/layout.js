import "./globals.css";

export const metadata = {
  title: "SellerWebApp",
  description: "SellerWebApp",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout