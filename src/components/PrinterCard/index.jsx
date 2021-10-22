import ender3 from "./crealityEnder3.jpeg"


const statusToColor = (status) => {
    let color = "";

    switch(status)
    {
        case 'CON':
            color = '#EE860C';
            break;
        case 'ERR':
            color = '#FF4444';
            break;
        case 'JOB':
            color = '#5CB85C';
            break;
        default:
            color = '#000000';
            break;
    }

    return color; 
}

const PrinterCard = ({status = 'JOB', text = '0%'}) => {
    return (
        <div className="printer-card flex items-end" style={{ 
            backgroundImage: `url(${ender3})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'  
          }}>
            <div className="printer-img w-auto h-auto">
                
            </div>
            <div className={`flex justify-center printer-info w-full h-1/3 align-bottom rounded-b-lg`} style={{
                backgroundColor: statusToColor(status),
            }}>
                <p className="text-white m-auto align-middle font-bold">{text}</p>
            </div>
        </div>
    );
}



export default PrinterCard;