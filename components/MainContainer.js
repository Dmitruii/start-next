import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keyword}) => {
    return <>
        <Head>
            <meta keywords={`next js ${keyword}`} />
            <title>Main page</title>
        </Head>
        <div className='navbar'>
            <A text={'Main'} href={'/'} className='link'/>
            <A text={'Users'} href={'/users'} className='link'/>
        </div>
        <div>
            {children}
        </div>
        <style jsx>
            {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                  }
                `}
        </style>
    </>
}

export default MainContainer