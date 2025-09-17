export default function Footer() {
  return (
    <footer className=" bg-black/80 border-t py-6 mt-10 text-sm text-gray-500">
      <div className="flex justify-between items-center px-6 md:px-20">
        <p className="font-semibold text-white text-3xl flex flex-row gap-4 items-center"><img src="/images/krea.jpg" alt="Krea AI Logo" width={50} height={50} className="rounded-lg" />Krea AI</p>
        <p className="text-white font-bold text-2xl flex flex-row gap-4 items-center">
          curated by <span className="font-semibold text-white text-4xl flex flex-row gap-2"><img src="/images/mobbin.jpg" alt="Mobbin Logo" width={50} height={50} className="rounded-sm" />Mobbin</span>
        </p>
      </div>
    </footer>
  );
}
