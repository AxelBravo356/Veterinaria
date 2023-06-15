import Link from "next/link";
export default function LayoutTable(props) {
    return (
        <div>
            <header className="shadow">
                <div className="mx-auto py-6 px-4">
                    <h1 className="text-black text-4xl">Carnets</h1>
                    <div className="w-full py-1 bg-sky-500"></div>
                </div>
            </header>

            <main>
                
                <div className="mx-auto py-6 px-4">
                <div className=" grid-cols-3 flex justify-around mb-3">
                    <div></div>
                    <div></div>
                    <Link href={"/recepcion/carnets/registro"}>
                        <p className="bg-sky-600 text-white p-2 rounded-lg">Nuevo Carnet</p>
                    </Link>
                </div>
                {props.children}
                </div>
            </main>
        </div>
    );
}