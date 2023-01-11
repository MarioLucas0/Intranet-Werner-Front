import { createContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import api, { loginUser } from "../services/api";
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
  /* const navigate = useNavigate() */
  const [user,setUser] = useState(null)
  const [loading,setLoading] = useState(true)
  const [adminPass,setAdminPass] = useState('')
  const [senhaAdmin,setSenhaAdmin] = useState('')
  const [authenticated,setAuthenticated] = useState(false)
  const [idAutorpasswordRecovery,setAutorPasswordRecovery] = useState(0)
  const [emailJwt,setEmailJwt] = useState("")
  const [postagem,setPostagem] = useState("")
  const [nameUser,setNameUser] = useState("")
  const [logado,setLogado] =useState(false)
  const [darkMode,setDarkMode] = useState(false)


  useEffect(() => {
    const recoveredUser = localStorage.getItem('user')
    const token = localStorage.getItem('token')

    if(recoveredUser) {
      setUser(JSON.parse(recoveredUser))
      api.defaults.headers.Authorization = `Bearer ${token}`
    }

    setLoading(false)
  },[])


  const login = async (email,password) => {
  
        const response = await loginUser(email, password)

      const loggedUser = {
        password,
        email,
        nameUser,
      }
      const token = response.data.token   

      localStorage.setItem("user",JSON.stringify(loggedUser))
      localStorage.setItem("token", token)

      api.defaults.headers.Authorization = `Bearer ${token}`

      setAuthenticated(true)
      setLogado(true)
      setUser(loggedUser) 
  }

    const logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("token")
    api.defaults.headers.Autorization = null
    setLogado(false)
    setUser(null)
    /* navigate("/") */
    }

  return (
  <AuthContext.Provider 
  value={{authenticated: !!user,user,loading, login,logout,adminPass,setAdminPass,senhaAdmin,
    setSenhaAdmin,setAuthenticated,idAutorpasswordRecovery,setAutorPasswordRecovery,postagem,setPostagem,
    emailJwt,setEmailJwt,nameUser,setNameUser,logado,setLogado,darkMode,setDarkMode
  }}
  >
    {children}
  </AuthContext.Provider>
  )
}