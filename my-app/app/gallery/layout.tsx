function galleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Gallery</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}

export default galleryLayout;