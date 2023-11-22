function CardLayout({ children, title }) {
  return (
    <div className="container">
      <h1 className="text-white font-bold text-2xl mb-3">{title}</h1>
      <div className="w-full grid lg:grid-cols-5 place-items-center gap-x-2 md:grid-cols-3 grid-cols-2 leading-normal">
        {children}
      </div>
    </div>
  );
}

export default CardLayout;
