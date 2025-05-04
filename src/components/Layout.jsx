import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen mx-auto">
      <Navbar />
      <div className='h-[2px] w-full bg-gray-200 my-2' />
      <main className="p-4 px-10 mx-auto">{children}</main>
    </div>
  );
}