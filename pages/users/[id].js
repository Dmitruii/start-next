import styles from './../../styles/User.module.scss'
import MainContainer from "../../components/MainContainer";

const Id = ({user}) => {

    return <MainContainer>
        <div className={styles.user}>
            <h1>
                User with {user.id} id
            </h1>
            <h3>User name is {user.name}</h3>
        </div>
    </MainContainer>
}

export default Id

export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user}
    }
}