
import { db } from '../firebase';
import Formulario from './Formulario';


function Card (props){
    
    

        


        var borrado = () => {
            if(window.confirm("¿Estás seguro que quieres borrar la tarea?")){
                console.log(props.idTarea);
                db.collection('tareas').doc(props.idTarea).delete();
            }
        }
        
        var claseColor;
        props.prioridad == "Alta" ? claseColor = "bg-danger" : props.prioridad == "Media" ? claseColor = "bg-warning" : claseColor = "bg-success";
        
        return(
        <>
        
        
        <div className = "col-xl-3 col-sm-12 mt-4" >
                <div className="card " style={{borderRadius: "30px", backgroundColor: "rgba(255, 255, 255, 0.466)", boxShadow: " 10px 8px 30px -8px rgba(0,0,0,0.7)", minHeight:"25rem"}} >
                    <div className="card-header text-secondary" style={{ borderTopLeftRadius: "30px", borderTopRightRadius: "30px", backgroundColor: "rgba(255, 255, 255, 0.2)"}}>
                        <h3 className="">{props.titulo}</h3>
                        <span className={"badge badge-primary badge-success " + claseColor }>{props.prioridad}</span>
                    </div>
                    <div className="card-body d-flex flex-column" style={{minHeight: "200px"}}>
                            <p className="card-text text-secondary  my-auto">{props.descripcion}</p>
                        <p className="mt-3 "><mark className="  text-secondary" style={{ borderRadius: "20%", backgroundColor: "rgba(255, 255, 255, 0.466)"}}>{props.responsable}</mark></p>
                        
                    </div>
                <div className={"card-footer "} style={{ borderBottomLeftRadius: "30px", borderBottomRightRadius :"30px"}}>
                            <i class="far fa-trash-alt text-danger" style = {{fontSize : "25px"}} onClick={borrado}></i>
                    </div>
                </div>
        </div>
        </>
        );
}
export default Card;