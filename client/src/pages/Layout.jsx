import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
function Layout({ children }) {
  return (
    <div className="">
      <Nav />
      <main className="flex min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
