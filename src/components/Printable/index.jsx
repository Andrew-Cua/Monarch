


const Printable = ({name, materialUsed, T2P}) => {
    return (
        <div className="Printable-card w-10/12 drop-shadow-lg rounded-lg flex flex-row gap-2 h-9 bg-gray-50 m-4">
            <h3 className="font-bold text-secondary m-2 align-middle">{name}</h3>
            <h3 className="font-bold text-primary m-2 align-middle">Material Used: {materialUsed}</h3>
            <h3 className="font-bold text-primary m-2 align-middle">Time: {T2P}</h3>

            <button className="h-full rounded-r-lg rounded-br-lg bg-primary text-white font-bold p-3 pt-2 ml-auto align-middle">Print It!</button>
        </div>
    );
}


export default Printable;