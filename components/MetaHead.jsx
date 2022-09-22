import Head from "next/head";

const MetaHead = ({ title = 'PokéApi', description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/icons/Poke_Ball_icon.png" />
        </Head>
    );
}

export default MetaHead;