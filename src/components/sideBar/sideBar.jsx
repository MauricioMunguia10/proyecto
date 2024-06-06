import Link from 'next/link'
import styles from './sideBar.module.css'
import Image from 'next/image'
import { IoHome } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { GiCommercialAirplane } from "react-icons/gi";
import CelebrationIcon from '@mui/icons-material/Celebration';
import { FaRegClock } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


export default function SideBar (){
    return(
        <div className={styles.container}>
            <Image src="/Logo-vasa.png" width={80} height={30}/>
            <input type="text" placeholder='Buscar...'/>
            <div className={styles.links1}>
            <Link href="/"> <span><IoHome/></span> Inicio</Link>
            <Link href=""> <span><GrDocumentText/></span>  Expediente Empleados</Link>
            <Link href=""> <span><GiCommercialAirplane/></span> Vacaciones</Link>
            <Link href=""> <span><CelebrationIcon/></span> Cumpleaños</Link>
            <Link href=""> <span><FaRegClock/></span> Horas Trabajadas</Link>
            </div>
           
           <div className={styles.links2}>
           <Link href=""> <span><FaGears/></span> Configuración</Link>
            <Link href=""> <span><AccountCircleOutlinedIcon/></span>  Perfil</Link>

           </div>
        
        </div>
    )
}