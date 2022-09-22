import Link from "next/link"
import MetaHead from "../components/MetaHead"

export default function Error404 () {
    return (
        <>
        <MetaHead title='Error 404' description='Error 404' />
        <div className='max-w-7xl m-auto min-h-screen'>
            <div className="text-center mt-10">
                <h1 className='text-4xl font-bold'>Error 404</h1>
                <div className='my-6 font-semibold'>
                    <p>La página que buscas no existe.</p>
                </div>
            </div>
            <Link href='/'>
                <a className='text-center block text-2xl font-bold text-blue-500 hover:text-blue-700 transition-all duration-300'>Volver al inicio</a>
            </Link>
        </div>
        </>
    )
}