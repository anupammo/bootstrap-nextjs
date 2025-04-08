import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '@/components/Login';
import { Modal } from 'bootstrap';

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) 
{
  return (
    <html lang="en">
      <body>
        <Header />
          <main className="main-container">{children}</main>
          <Login />
        <Footer />
      </body>
    </html>
  );
}
