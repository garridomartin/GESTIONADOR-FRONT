/* ===================================================
    Date: 2023-08-08 11:27:27
    Desc: Layout Dashboard
    Author: 🟣 Enok Lima
=====================================================*/


import style from './dashboard.module.css';
import SidebarLeft from '@/components/sidebar/sidebarLeft';
import Header from '@/components/header/header';


function dashboardLayout({
  children
}: {
  children: React.ReactNode
}) {

    return <div className={style.container}>
        <div className={style.sidebar__container}>
            <SidebarLeft />
        </div>
        <div className={style.content__container}>
            <Header />
            {children}
        </div>
    </div>
}

export default dashboardLayout;