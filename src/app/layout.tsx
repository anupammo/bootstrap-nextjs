import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) 
{
  return (
    <html lang="en">
      <body>
        <Header />
          <main className="main-container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
