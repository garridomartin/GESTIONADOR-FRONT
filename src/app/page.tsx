/* ===================================================
    Date: 2023-08-02
    Desc: Home Page
    Author: 🟣 Enoc Lima
=====================================================*/


'use client';
import { useRouter } from "next/navigation";
//import { useStyle } from "@/context/react/styleContext"
//import { useAppDispatch, useAppSelector } from "@/context/redux/typedHoocks";
//import { selectUser } from "@/context/redux/features/userSlice";
//import { useGetUserQuery } from "@/context/redux/api_handler/userApi";
import { useGetDefaultsQuery, useLazyGetNavigationQuery } from "@/context/redux/api_handler/navigationApi";
import style from './home.module.css';


export default function Home() {
  const router = useRouter();
  //const { screen } =  useStyle();
  //const { isAuthenticated, user } = useAppSelector(selectUser);
  //const data = useGetUserQuery("character/84");
  //const data = useGetNavigationQuery("logout");
  const [trigger,{data}] = useLazyGetNavigationQuery();
  console.log(data)
  return (
    <div  className={style.home__container}>
      <div>{}</div>
      <button className={style.button}
        onClick={() => trigger('logout')} >
          logout
        </button>
      <button className={style.button}
      onClick={() => router.push('/login')}> Login </button>
    </div>
  )
}