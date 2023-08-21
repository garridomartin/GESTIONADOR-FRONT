/* ===================================================
    Date: 2023-08-02
    Desc: Home Page
    Author: 🟣 Enoc Lima
=====================================================*/


'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/context/redux/typedHoocks";
import { selectUser, setCurrentUser } from "@/context/redux/features/userSlice";
//import { useGetUserQuery } from "@/context/redux/api_handler/userApi";
import { useGetDefaultsQuery, useLazyGetNavigationQuery } from "@/context/redux/api_handler/navigationApi";
import MemberCard from "@/components/member_cards/card";
import style from './home.module.css';


export default function Home() {
  const { isAuthenticated, username } = useAppSelector(selectUser);
  const router = useRouter();
  const dispatch = useAppDispatch();
  //const { screen } =  useStyle();
  //const { isAuthenticated, user } = useAppSelector(selectUser);
  //const data = useGetUserQuery("character/84");
  //const data = useGetNavigationQuery("logout");

  const memberList = [
      {
          title: 'BASICO',
          subtitle: 'PRECIO',
          backgroundSVG: 'grey',
          type: 'free',
          price: '$0.00',
          period: 'mes',
          id: 1,
          features: [
              {text: '1 Usuario', isCheck: true},
              {text: '1 Proyecto', isCheck: true},
              {text: '1 GB de Almacenamiento', isCheck: true},
              {text: 'Acceso a todos los cursos', isCheck: true},
              {text: 'Acceso a la comunidad', isCheck: false},
              {text: 'Acceso a todos los cursos', isCheck: false},
              {text: 'Acceso a la comunidad', isCheck: false}
          ]
      },
      {
        id: 2,
          title: 'PRO',
          subtitle: 'PRECIO',
          backgroundSVG: 'green',
          type: 'pro',
          price: '$15.00',
          period: 'mes',
          features: [
              {text: 'Hasta 10 Usuario', isCheck: true},
              {text: 'Proyecto Ilimitados', isCheck: true},
              {text: '10 GB de Almacenamiento', isCheck: true},
              {text: 'Acceso a todos los cursos', isCheck: true},
              {text: 'Acceso a la comunidad', isCheck: true},
              {text: 'Acceso a todos los cursos', isCheck: false},
              {text: 'Acceso a la comunidad', isCheck: false}
          ]
      },
      {
        id: 3,
          title: 'PREMIUM',
          subtitle: 'PRECIO',
          backgroundSVG: 'orange',
          type: 'premium',
          price: '$500.00',
          period: 'año',
          features: [
              {text: 'Usuario Ilimitados', isCheck: true},
              {text: 'Proyecto Ilimitados', isCheck: true},
              {text: '150 GB de Almacenamiento', isCheck: true},
              {text: 'Acceso a todos los cursos', isCheck: true},
              {text: 'Acceso a la comunidad', isCheck: true},
              {text: 'Acceso a todos los cursos', isCheck: true},
              {text: 'Acceso a la comunidad', isCheck: true},
              {text: 'Acceso a todos los cursos', isCheck: true},
              {text: 'Facilidad de pago', isCheck: true}
          ]
      }
  ]

  const [trigger,{data}] = useLazyGetNavigationQuery();
  
  const handleLogout = () => {
    trigger('logout');
  }

  const handleToDashboard = () => {
    username && router.push(username);
  }

  useEffect(() => {
    data && dispatch(setCurrentUser(data));
  }, [data])

  return (
    <div  className={style.home__container}>
      <div className={style.content}>
        <div className={style.title}>
          <h1 className={style.h1}>¡Bienvenido a <span>Comercio</span>!</h1>
        </div>
        <div className={style.text}>
            ¡Bienvenido al futuro de la gestión de comercio con nuestro innovador 
            software! Con una interfaz elegante y funcionalidades de última generación, 
            llevarás el control de tu negocio a nuevas alturas.
        </div>
        <div className={style.button__container}>
          <button className={`${style.button} ${style.button__primary}`}
            onClick={isAuthenticated? handleLogout: () => router.push('/register')} >
              {isAuthenticated? 'Cerrar sesión': 'Registrarse'}
            </button>
          <button className={`${style.button} ${style.button__secondary}`}
            onClick={isAuthenticated? handleToDashboard: () => router.push('/login')}>
              {isAuthenticated? 'Ir a dashboard': 'Iniciar sesión'}
          </button>
        </div>
        <div className={style.cards__container}>
          {memberList.map((member) => {
            return <MemberCard key={member.id} member={member} />
          })
          }
        </div>
      </div>
    </div>
  )
}