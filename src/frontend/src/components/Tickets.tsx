import styles from "../styles/Tickets.module.css"
import image from '../img/viz.png';
import AnswerButton from './AnswerButton';
import AcceptAndDeleteButton from './AcceptAndDeleteButton';
import { Link } from "react-router-dom";

function Tickets(props:any) {
    return (
        <div className={styles.ticket}>
            <div className={styles.sectionOne}>
                <Link to="/visualizarchamado">
                    <img src={image} alt="Visualizar" className={styles.image} />
                    <p className={styles.text}><strong>Visualizar</strong></p>
                </Link>
            </div>
            <div className={styles.sectionTwoC}>
                <div className={styles.rectangle}>
                    <p><strong>ID:</strong> {props.ID}</p>
                </div>
                <div className={styles.rectangle}>
                    <p><strong>Titulo:</strong> {props.Assunto}</p>
                </div>
                <div className={styles.rectangle}>
                    <p><strong>Descrição:</strong> {props.Descricao}</p>
                </div>
            </div>
            <></>
            {/* espaço para os Componentes Botões!!! */}
            {props.tipo === 'Aberto' && <AcceptAndDeleteButton chamadoId={props.ID} />}
            {props.tipo === 'Em andamento' && <AnswerButton onClick={props.onClick} />}
        </div>
    );
}

export default Tickets