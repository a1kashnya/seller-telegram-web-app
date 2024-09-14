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
      <body className="flex justify-center bg-slate-900">
        <div className="flex flex-col w-[450px] my-3 mx-3">
          <Header />
          <div className="mt-40">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default RootLayout