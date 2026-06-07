"use client"
import AdvertisingBanner from "@/components/comman/AdvertisingBanner"
function galleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default galleryLayout;