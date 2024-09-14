import "./globals.css";
import Header from "@/_components/_layout/Header"
import Footer from "@/_components/_layout/Footer"

export const metadata = {
  title: "SellerWebApp",
  description: "SellerWebApp",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <div>
          <Header />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout