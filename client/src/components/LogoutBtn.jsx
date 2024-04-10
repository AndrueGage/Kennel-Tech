import auth from '../utils/auth';

export default function LogoutBtn () {
    return (
        <button onClick={() => auth.logout()} className="bg-red-300 hover:bg-red-500 transition-all duration-100 text-xl font-semibold py-2 px-3 rounded-lg">Logout</button>
    )
}