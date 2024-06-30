import { Route, Routes, useLocation, useNavigate } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../hooks/redux"

function App() {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const location = useLocation()

	return <Routes><Route element={<></>} path="*"/></Routes>
}

export default App
