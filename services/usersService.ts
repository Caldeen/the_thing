

const usersService=async ()=>{
    const result = await fetch('http://localhost:3000/api/users')
    return result.json()
}

export default usersService