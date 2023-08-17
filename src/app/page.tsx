/* ===================================================
    Date: 2023-08-02
    Desc: Home Page
    Author: 🟣 Enoc Lima
=====================================================*/

'use client';
import { useStyle } from '@/context/react/styleContext';
import { useAppDispatch, useAppSelector } from '@/context/redux/typedHoocks';
import { selectUser } from '@/context/redux/features/userSlice';
import { useGetUserQuery } from '@/context/redux/api_handler/userApi';
import { useGetDefaultsQuery } from '@/context/redux/api_handler/navigationApi';

export default function Home() {
  const { screen } = useStyle();
  const { isAuthenticated, user } = useAppSelector(selectUser);
  //const data = useGetUserQuery("character/84");
  const data = useGetDefaultsQuery('/');

  return <div>{}</div>;
}
