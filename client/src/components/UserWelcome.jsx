import auth from '../utils/auth'
import { useQuery } from '@apollo/client'
import { QUERY_USER } from '../utils/queries'

export default function UserWelcome() {
    const user = auth.getUser()

    const { data, error } = useQuery(QUERY_USER, {
        variables: {
            id: user.data._id
        }
    })

    return (
        <p className="bg-[#C1D7AE] text-xl font-semibold py-2 px-3 rounded-lg">Welcome {data && data.getUserById.firstName + '!'}</p>
    )

}