import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "../Pages/Feed/feed"
import Login from "../Pages/login/login"
import SignUp from "../Pages/SignUp/signUp"
import SignUpAdress from "../Pages/SignUpAdress/signUpAdress"

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>} />
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path="/signUp/adress" element={<SignUpAdress/>}/>
                <Route path="/feed" element={<Feed/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router