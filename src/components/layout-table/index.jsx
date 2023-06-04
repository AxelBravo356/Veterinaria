export default function LayoutTable(props) {
  return (
    <div>
      <header className="shadow">
        <div className="mx-auto py-6 px-4">
          <h1 className="text-black text-4xl">Usuarios</h1>
          <div className="w-full py-1 bg-sky-500"></div>
        </div>
      </header>
      <main>
        <div className="mx-auto py-6 px-4">{props.children}</div>
      </main>
    </div>
  );
}
