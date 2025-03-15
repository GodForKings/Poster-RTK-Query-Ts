import { TypedUseSelectorHook, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { useSelector } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>() //типизирует dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector //типизирует селектор
