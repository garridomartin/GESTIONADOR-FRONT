/* ===================================================
    Date: 2023-08-19 13:56:29
    Desc: Member Card Component
    Author: 🟣 Enok Lima
=====================================================*/


import Image from 'next/image';
import style from './cards.module.css';
import green from '@/assets/images/green.svg';
import grey from '@/assets/images/grey.svg';
import orange from '@/assets/images/orange.svg';
import PrimaryButton from '../buttons/primaryButton';
import { BiFolderPlus, BiSolidBadgeCheck, BiSolidBadge } from 'react-icons/bi';


type MemberCardProps = {
    member: {[key: string]: string | any};
}

type FeatureProps = {
    text: string;
    isCheck: boolean;
}

const MemberCard:React.FC<MemberCardProps> = ({member}) => {
    const background = member.backgroundSVG === 'green'? green: member.backgroundSVG === 'grey'? grey: orange;

    return (
        <div className={style.me__card}>
            <div className={style.me__card__feature}>
                <div className={style.me_title + ` ${style[member.backgroundSVG]}`}>
                    <h2>{member.title}</h2>
                    <p>{member.subtitle}</p>
                </div>
                <span className={style.spacer} />
                <div className={style.me__card__feature__list}>
                    <ul className={style.ul__items}>
                        {member.features.map((item: FeatureProps, index: number) => {
                            return (
                                <li key={`${member.id}-${index}`}>
                                    {item.isCheck? <BiSolidBadgeCheck fontSize={18} color={'rgb(29, 155, 240)'} />:
                                    <BiSolidBadge fontSize={18} color={'rgb(209 209 209)'} />} <span>{item.text}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className={style.me__card__feature__button}>
                    <PrimaryButton text='Suscribirme' Icon={BiFolderPlus} extraClassName={member.backgroundSVG} />
                </div>
            </div>
            <div className={style.colored}>
                <div className={style.pricing}>
                    <Image src={background}  alt='card' style={{width: '100%', height: 'auto'}} priority/>
                    <span className={style.price}>
                        <h2>{member.type}</h2>
                        <span className={style.price__period}><h2>{member.price}</h2><p>/{member.period}</p></span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MemberCard;